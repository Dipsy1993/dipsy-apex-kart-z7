(() => {
  'use strict';
  const { cars, tracks, clamp } = Kart;
  const $ = id => document.getElementById(id);
  const KEY = 'apex-kart-save-v1';
  const storage={getItem:key=>localStorage.getItem(key),setItem:(key,value)=>localStorage.setItem(key,value)};
  const store=KartSession.createSaveStore(storage,KEY,Kart.sanitizeSave,navigator.locks);
  const startup=store.read();
  let save=startup.save??Kart.sanitizeSave(null);
  let saving=false;
  let pendingFinish=null;
  const raceClock=KartSession.createRaceClock();
  const saveMessages={
    damaged:'本地存档无法读取。已保留原文件，可先试驾。恢复有效存档后再购买或保存成绩。',
    unavailable:'无法写入存档。请检查浏览器的存储空间或权限，然后重试。',
    rejected:'车库状态已更新，请检查余额或已拥有的零件后重试。',
    conflict:'另一个标签页刚更新了存档，请重试。',
  };
  function showSaveStatus(message='') {
    $('save-status').textContent=message;
    $('save-status').hidden=!message;
  }
  async function commitSave(change) {
    const result=await store.commit(change);
    if(result.save) save=store.read().save??result.save;
    showSaveStatus(saveMessages[result.status]??'');
    return result;
  }
  const raceScreen=$('race-screen');
  const defaultQuality=matchMedia('(pointer:coarse)').matches?'low':'high';
  try {
    const stored=localStorage.getItem('apex-kart-quality');
    raceScreen.dataset.quality=['high','low'].includes(stored)?stored:defaultQuality;
  }
  catch { raceScreen.dataset.quality=defaultQuality; }
  const tiers = { C1: '#c9f74b', E2: '#ffac72', G3: '#59d8ff', R4: '#cba2ff', PRO: '#ff8796', SR:'#84f0ee', Z7:'#efba83' };
  const timeText = time => {
    const ticks = Math.floor(time * 100);
    return `${String(Math.floor(ticks / 6000)).padStart(2, '0')}:${String(Math.floor(ticks / 100) % 60).padStart(2, '0')}.${String(ticks % 100).padStart(2, '0')}`;
  };
  const carFor = id => cars.find(car => car.id === id);
  let inspected = save.selected;
  let previewParts=Kart.equippedParts(save,inspected);
  let comparison='factory';
  let compareView='rear';
  let compareGrey=false;
  let tailPreview=0;
  let tailTarget=0;
  let comparisonCar=null;
  let comparisonRun=null;
  let sectorPractice=null;
  let cupRun=null;
  let cupPractice=null;
  let previewCar=Kart.configureCar(inspected,previewParts);
  let trackId = tracks[0].id;
  let mode = 'race';
  let page = 'garage-page';
  let yaw = 0.64;
  let spinning = false;
  let drag = null;
  let race = null;
  let lesson=null;
  let trialCar = null;
  let paused = false;
  let message = '';
  let messageTime = 0;
  let nitroReadyTime = 0;
  let dialogKind = '';
  let soundEnabled = false;
  const musicKey='apex-kart-music';
  let musicChoice='off';
  try {
    const stored=localStorage.getItem(musicKey);
    if(KartMusic.options.some(([id])=>id===stored)) musicChoice=stored;
  } catch {}
  let music;
  let localTracks=[];
  let localPlayer;
  let audio = null;
  let engine = null;
  let engineHarmonic = null;
  let engineFilter = null;
  let engineGain = null;
  let tireGain = null;
  let tireFilter = null;
  let prevCount = 4;
  let last = 0;
  let lastMap=-1;
  let lastRaceRender=-Infinity;
  let framePending=false;
  let resumeRequested=false;
  const engineProfiles=[
    {idle:46,rate:1.45,ratio:2,filter:365,load:440},
    {idle:39,rate:1.21,ratio:1.5,filter:205,load:370},
    {idle:51,rate:1.52,ratio:2,filter:350,load:530},
    {idle:54,rate:1.46,ratio:2.5,filter:430,load:610},
    {idle:60,rate:1.81,ratio:3,filter:480,load:715},
  ];
  const touchDevice=matchMedia('(pointer:coarse)');
  const compactRace=matchMedia('(max-height: 500px) and (orientation: landscape)');
  const keys = new Set();
  const touches = new Map();
  const carGrid = $('car-grid');
  const trackGrid = $('track-grid');
  const dialog = $('dialog');
  const mapCanvas = $('race-map');
  const mapTracks = new Map();
  const lessons={
    brake:{name:'刹车入弯',start:695,speed:78,tanks:0,end:860,help:'在 40 米牌前松油，踩刹车把速度降到 195 km/h 以下，再过弯。'},
    drift:{name:'漂移反打与集气',start:326,speed:67,tanks:0,end:565,help:'右转时按住漂移，车尾甩开后短按左转收住方向，积累 15% 氮气。'},
    boost:{name:'出弯喷射',start:470,speed:59,tanks:1,end:690,help:'车身回正后按氮气，沿前方直道加速。'},
    draft:{name:'尾流超车 · 黑曜深谷',help:'借用蓝潮 SR。沿前车尾流跟车，提示就绪后踩油门向旁边变线。'},
  };

  function drawMap() {
    const width = mapCanvas.clientWidth;
    const height = mapCanvas.clientHeight;
    if (!width || !height) return;
    const ratio = Math.min(2,window.devicePixelRatio || 1);
    const w = Math.round(width * ratio), h = Math.round(height * ratio);
    if (mapCanvas.width !== w || mapCanvas.height !== h) {
      mapCanvas.width = w;
      mapCanvas.height = h;
    }
    const ctx = mapCanvas.getContext('2d');
    ctx.setTransform(ratio,0,0,ratio,0,0);
    ctx.clearRect(0,0,width,height);
    const { track } = race;
    if (!mapTracks.has(track.id)) {
      const points = Array.from({ length: 94 },(_,i)=>Kart.courseAt(track,track.length*i/94));
      const xs=points.map(p=>p.x),zs=points.map(p=>p.z);
      const left=Math.min(...xs),right=Math.max(...xs),top=Math.min(...zs),bottom=Math.max(...zs);
      mapTracks.set(track.id,{points,left,top,w:right-left,h:bottom-top});
    }
    const route=mapTracks.get(track.id);
    const scale=Math.min((width-17)/route.w,(height-17)/route.h);
    const x=point=>(point.x-route.left)*scale+(width-route.w*scale)/2;
    const y=point=>(point.z-route.top)*scale+(height-route.h*scale)/2;
    ctx.beginPath();
    for (const [i,point] of route.points.entries()) {
      if (i===0) ctx.moveTo(x(point),y(point));
      else ctx.lineTo(x(point),y(point));
    }
    ctx.closePath();
    ctx.strokeStyle='#e3e8e75e'; ctx.lineWidth=2.1; ctx.stroke();
    for (const entry of [...race.opponents.filter(rival=>!rival.retired),race]) {
      const point=Kart.courseAt(track,entry.distance);
      ctx.beginPath();
      ctx.arc(x(point),y(point),entry===race?3.9:2.2,0,Math.PI*2);
      ctx.fillStyle=entry===race?'#dafa71':'#e2e5ea'; ctx.fill();
    }
  }

  function renderCredits() {
    $('credits').textContent = save.credits;
    $('collection-count').textContent = `${save.owned.length} / ${cars.length} 已拥有`;
  }

  function nextUpgrade(car) {
    return Kart.carFamily(car.family).find(candidate=>candidate.generation>car.generation&&!save.owned.includes(candidate.id));
  }

  function renderCar() {
    const car = previewCar=Kart.configureCar(inspected,previewParts);
    const owned = save.owned.includes(car.id);
    const equipped = save.selected === car.id;
    $('stage').style.setProperty('--car-color', car.color);
    $('hero-code').textContent = car.code;
    $('hero-code').classList.toggle('long', car.code.length >= 8);
    $('stage-style').textContent = car.flagship?car.design.title:car.style;
    $('stage-index').textContent = car.family?`${car.generation+1} 代 / ${Kart.carFamily(car.family).length} 代`:car.tier;
    $('car-tier').textContent = car.tier;
    $('car-tier').parentElement.parentElement.style.setProperty('--tier', tiers[car.tier]);
    $('car-kind').textContent = car.kind;
    $('car-owned').textContent = owned ? '已拥有' : '待解锁';
    $('car-owned').classList.toggle('locked', !owned);
    $('car-name').textContent = car.name;
    $('car-desc').textContent = car.desc;
    $('car-feature').textContent = `${car.tier} · ${car.design.title}`;
    $('car-effect').textContent = car.setup.effect;
    const values = [Math.round(car.max / 0.9), Math.round(car.accel / .48), Math.round(car.grip * 76), Math.round(car.drift * 71)];
    $('stats').innerHTML = ['极速', '加速', '操控', '漂移'].map((label, i) => `<div><dt>${label}</dt><dd class="stat-bar" aria-hidden="true"><i style="width:${Math.min(100,values[i])}%"></i></dd><dd>${values[i]}</dd></div>`).join('');
    const equip = $('equip');
    const required=Kart.requiredCar(save,car);
    equip.disabled = equipped || (!owned && (save.credits < car.price || Boolean(required)));
    equip.textContent = equipped ? '当前使用中' : owned ? '使用这辆车' : `解锁并使用 · ◈ ${car.price}`;
    $('garage-note').textContent = !owned ? (required?`先解锁 ${required.name} ${required.tier}`:save.credits < car.price ? `还差 ${car.price - save.credits} 点` : '解锁后可在所有赛道使用') : '';
    const generationDrive=$('generation-drive');
    $('flagship-drive').hidden=car.generation<4;
    const course=Kart.workshopCourses[car.family];
    generationDrive.hidden=!course;
    generationDrive.textContent=car.family==='wave'?'G3 / R4 / PRO 试驾 · 午夜回环':
      course?`E2 / G3 试驾 · ${car.family==='rally'?'重刹与路肩':'连续弯出弯'}`:'';
    for (const button of carGrid.children) {
      const option = carFor(button.dataset.car);
      const variants=option.family?Kart.carFamily(option.family):[option];
      button.setAttribute('aria-pressed', variants.some(variant=>variant.id===inspected));
      button.querySelector('.card-state').textContent = variants.some(variant=>variant.id===save.selected)?'使用中':
        option.family?`${variants.filter(variant=>save.owned.includes(variant.id)).length} / ${variants.length}`:
        save.owned.includes(option.id)?'已拥有':`◈ ${option.price}`;
    }
    KartRender.garage($('hero-car'), car, yaw);
    renderWorkshop(car,owned);
  }

  function inspectCar(id) {
    if(inspected!==id) yaw=.64;
    tailPreview=tailTarget=0;
    $('tail-preview').setAttribute('aria-pressed','false');
    $('tail-preview').textContent='展开车尾';
    inspected=id;
    previewParts=Kart.equippedParts(save,id);
    comparison='factory';
    $('part-status').textContent='';
    renderCar();
  }

  function renderWorkshop(car,owned) {
    const family=car.family?Kart.carFamily(car.family):[];
    const choices=$('generations');
    choices.hidden=!family.length;
    choices.innerHTML=family.map(model=>`<button data-generation="${model.id}" ${model.flagship?`style="--generation-color:${tiers[model.tier]}"`:''} aria-pressed="${model.id===car.id}"><b>${model.tier}</b><span>${model.design.title}</span><small>${save.owned.includes(model.id)?'已拥有':`◈ ${model.price}`}</small></button>`).join('');
    const select=$('compare-base');
    select.innerHTML='<option value="factory">本车原厂</option>'+family.filter(model=>model.id!==car.id).map(model=>`<option value="${model.id}">${model.name} ${model.tier} 原厂</option>`).join('');
    select.value=comparison;
    const installed=Kart.equippedParts(save,car.id);
    $('part-slots').innerHTML=Object.entries(Kart.parts).map(([slot,part])=>{
      const level=previewParts[slot];
      const unlocked=Kart.ownsPart(save,car.id,slot,level);
      const disabled=!owned||installed[slot]===level||(!unlocked&&save.credits<part.prices[level]);
      const action=!owned?'解锁车型后改装':installed[slot]===level?'已装备':unlocked?'装备':`购买并装备 · ◈ ${part.prices[level]}`;
      const options=['原厂','街道','竞赛'].map((name,index)=>`<button data-slot="${slot}" data-level="${index}" aria-pressed="${index===level}">${name}${owned&&installed[slot]===index?' ✓':''}</button>`);
      return `<fieldset class="part-slot"><legend>${part.name}</legend><div class="part-options">${options.join('')}</div><button class="secondary" data-install="${slot}" ${disabled?'disabled':''}>${action}</button></fieldset>`;
    }).join('');
    const before=Kart.configureCar(comparison==='factory'?car.id:comparison);
    comparisonCar=before;
    $('compare-before-label').textContent=`${before.tier} 原厂 · ${before.design.title} · ${before.pipes.length} 管`;
    $('compare-after-label').textContent=`${car.tier} 预览 · ${car.design.title} · ${car.pipes.length} 管`;
    const signed=value=>`${value>.005?'+':''}${Number(value.toFixed(2))}`;
    const boostDelta=car.setup.boostTime-before.setup.boostTime;
    $('compare-stats').textContent=`排气 ${before.pipes.length} → ${car.pipes.length} 根 · 氮气 ${boostDelta>0?'+':''}${boostDelta.toFixed(2)} 秒 · 氮气极速 ${signed((car.max+car.setup.boostSpeed-before.max-before.setup.boostSpeed)*3)} km/h · 路肩惩罚 ${signed((car.setup.curbLoss/before.setup.curbLoss-1)*100)}% · 集气 ${signed((car.drift*car.setup.chargeRate/(before.drift*before.setup.chargeRate)-1)*100)}%`;
    $('tail-rig-note').textContent=car.tailRig?`${car.tier} · ${car.tailRig.title} · ${car.tailRig.trigger}触发`:'';
    for(const button of $('compare-views').querySelectorAll('[data-view]')) button.setAttribute('aria-pressed',String(button.dataset.view===compareView));
    drawWorkshopCars();
  }

  function drawWorkshopCars() {
    const angle={front:0,side:Math.PI/2,straight:Math.PI,suspension:Math.PI-.86}[compareView]??Math.PI-Math.PI/6;
    for(const [id,model] of [['compare-before',comparisonCar],['compare-after',previewCar]]) {
      KartRender.garage($(id),model,angle,false,compareView==='straight'?'rear':compareView,compareGrey,tailPreview);
    }
  }

  function renderTrack() {
    const track = tracks.find(item => item.id === trackId);
    const car = carFor(save.selected);
    $('equipped').textContent = `当前车辆 · ${car.name} ${car.tier}`;
    $('track-selected').textContent = track.name;
    $('race-difficulty').value=save.difficulty;
    const record = save.records[Kart.recordKey(track.id,mode,save.difficulty)];
    const oldRecord=mode==='race'?save.records[Kart.recordKey(track.id,mode)]:null;
    const replay=mode==='solo'?save.replays[track.id]:null;
    $('track-record').textContent = [record ? `最佳完赛时间 ${timeText(record)}` : '尚无完赛纪录',oldRecord?`旧版纪录 ${timeText(oldRecord)}`:'',replay?`幽灵 ${timeText(replay.time)}`:''].filter(Boolean).join(' · ');
    for (const button of trackGrid.children) button.setAttribute('aria-pressed', button.dataset.track === trackId);
    for (const button of document.querySelectorAll('[data-mode]')) button.setAttribute('aria-pressed', button.dataset.mode === mode);
    $('track-grid').hidden=mode==='cup';
    $('difficulty-picker').hidden=mode==='solo'||(mode==='cup'&&Boolean(save.cup)&&save.cup.stages.length<Kart.cupTracks.length);
    if(mode==='cup') {
      const cup=save.cup;
      $('track-selected').textContent='三站杯赛';
      $('track-record').textContent=cup&&cup.stages.length<Kart.cupTracks.length?
        `已完成 ${cup.stages.length} / 3 站 · ${carFor(cup.carId).name} ${carFor(cup.carId).tier}`:
        '落日峡谷 → 碧海折线 → 午夜回环 · 累计积分';
    }
    $('start-race').textContent=mode==='cup'?'进入杯赛 →':'发车 →';
  }

  function drawCards() {
    if(page==='garage-page') for (const button of carGrid.children) KartRender.garage(button.querySelector('canvas'), Kart.configureCar(button.dataset.car), .63, true);
    else for (const button of trackGrid.children) KartRender.preview(button.querySelector('canvas'), tracks.find(track => track.id === button.dataset.track));
  }

  function switchPage(target, focus = false) {
    page = target;
    for (const id of ['garage-page', 'track-page']) $(id).hidden = page !== id;
    for (const button of document.querySelectorAll('[data-page]')) {
      button.classList.toggle('active', button.dataset.page === page);
      if (button.dataset.page === page) button.setAttribute('aria-current', 'page');
      else button.removeAttribute('aria-current');
    }
    if (page === 'garage-page') renderCar();
    else renderTrack();
    drawCards();
    queueFrame();
    if (focus) (page === 'garage-page' ? $('quick-race') : $('start-race')).focus({ preventScroll: true });
  }

  function audioStart() {
    if (!soundEnabled && musicChoice==='off') return;
    const Audio = window.AudioContext || window.webkitAudioContext;
    if (!Audio) return;
    if (!audio) {
      audio = new Audio();
      engine = audio.createOscillator();
      engine.type = 'triangle';
      engineHarmonic=audio.createOscillator();
      engineHarmonic.type='sine';
      engineFilter=audio.createBiquadFilter();
      engineFilter.type='lowpass';
      engineFilter.frequency.value=290;
      const overtone=audio.createGain();
      overtone.gain.value=.26;
      engineGain = audio.createGain();
      engineGain.gain.value = 0;
      engine.connect(engineFilter).connect(engineGain).connect(audio.destination);
      engineHarmonic.connect(overtone).connect(engineFilter);
      engine.start();
      engineHarmonic.start();
      const noise=audio.createBuffer(1,audio.sampleRate*2,audio.sampleRate);
      const samples=noise.getChannelData(0);
      for(let i=0;i<samples.length;i++) samples[i]=Math.random()*2-1;
      const tires=audio.createBufferSource();
      tires.buffer=noise;
      tires.loop=true;
      tireFilter=audio.createBiquadFilter();
      tireFilter.type='bandpass';
      tireFilter.Q.value=3.1;
      tireGain=audio.createGain();
      tireGain.gain.value=0;
      tires.connect(tireFilter).connect(tireGain).connect(audio.destination);
      tires.start();
      music=KartMusic.make(audio);
    }
    KartSession.resumeAudio(audio);
    updateMusic();
  }

  function updateMusic() {
    const id=musicChoice==='auto'?(race?.track.id??'garage'):musicChoice;
    const quiet=paused||race?.phase==='finished';
    const local=localTracks.find(track=>track.id===id);
    music?.select(local?'off':id,quiet);
    if(local&&!document.hidden) {
      localPlayer??=new Audio();
      localPlayer.loop=true;
      localPlayer.volume=quiet?.22:.48;
      if(localPlayer.src!==local.url) localPlayer.src=local.url;
      if(localPlayer.paused) localPlayer.play().catch(error=>{
        if(localPlayer.src===local.url&&musicChoice===local.id) {
          const status=dialog.querySelector('[data-music-status]');
          if(status&&error.name==='NotSupportedError') status.textContent='浏览器无法播放这份音频，请试试 MP3 或 WAV。';
          if(error.name==='NotAllowedError') {
            const play=dialog.querySelector('[data-action=music-play]');
            if(play) play.hidden=false;
          }
        }
      });
    } else localPlayer?.pause();
  }

  function musicPicker() {
    const options=KartMusic.options.map(([id,name])=>`<option value="${id}" ${id===musicChoice?'selected':''}>${name}</option>`).join('');
    return `<div class="music-controls"><label class="music-picker">背景音乐<select data-music>${options}</select></label><label class="music-import">导入本地音乐<input type="file" accept="audio/*,.mp3,.ogg,.m4a,.wav,.flac" data-music-files multiple></label><div data-music-status role="status"></div><button type="button" class="secondary" data-action="music-play" hidden>播放所选音乐</button></div>`;
  }

  function updateMusicMenu() {
    const menu=dialog.querySelector('[data-music]');
    if(!menu) return;
    for(const option of menu.querySelectorAll('[data-local]')) option.remove();
    for(const track of localTracks) {
      const option=new Option(track.name,track.id);
      option.dataset.local='true';
      menu.add(option);
    }
    menu.value=musicChoice;
  }

  function beep(frequency, duration = .16, delay = 0) {
    if (!soundEnabled || !audio || audio.state !== 'running') return;
    const at = audio.currentTime + delay;
    const note = audio.createOscillator();
    const gain = audio.createGain();
    note.type = 'triangle';
    note.frequency.value = frequency;
    gain.gain.setValueAtTime(.065, at);
    gain.gain.exponentialRampToValueAtTime(.001, at + duration);
    note.connect(gain).connect(audio.destination);
    note.start(at);
    note.stop(at + duration);
  }

  function engineSound() {
    if (!audio || !engine) return;
    const active = soundEnabled && race && race.phase !== 'finished' && !paused;
    const profile=engineProfiles[race?.car.body??0];
    const speed=race?.speed??0;
    const load=active&&race.throttle?1:0;
    const boost=active&&race.boost>0?1:0;
    const pitch=profile.idle+speed*profile.rate+load*14+boost*24;
    const now=audio.currentTime;
    engine.frequency.setTargetAtTime(pitch,now,.055);
    engineHarmonic.frequency.setTargetAtTime(pitch*profile.ratio,now,.055);
    engineFilter.frequency.setTargetAtTime(profile.filter+load*profile.load+boost*230,now,.07);
    engineGain.gain.setTargetAtTime(active ? .013 + speed*.00024 + load*.013 : 0,now,.055);
    const slip=active?clamp((Math.abs(race.slip)-.035)*3.5,0,1):0;
    tireFilter.frequency.setTargetAtTime(930+slip*1480,now,.065);
    tireGain.gain.setTargetAtTime(slip*Math.min(speed/63,1)*.16,now,slip>.08?.07:.035);
  }

  function parkAudio() {
    localPlayer?.pause();
    if(audio?.state==='running') {
      engineGain.gain.setValueAtTime(0,audio.currentTime);
      tireGain.gain.setValueAtTime(0,audio.currentTime);
      audio.suspend().catch(()=>{});
    }
  }

  function boostSound() {
    if(!soundEnabled || !audio || audio.state!=='running') return;
    const at=audio.currentTime;
    const jet=audio.createOscillator();
    const envelope=audio.createGain();
    jet.type='sawtooth';
    jet.frequency.setValueAtTime(95,at);
    jet.frequency.exponentialRampToValueAtTime(720,at+.19);
    jet.frequency.exponentialRampToValueAtTime(310,at+.52);
    envelope.gain.setValueAtTime(.001,at);
    envelope.gain.linearRampToValueAtTime(.045,at+.11);
    envelope.gain.exponentialRampToValueAtTime(.001,at+.53);
    const filter=audio.createBiquadFilter();
    filter.type='lowpass';filter.frequency.value=1550;
    jet.connect(filter).connect(envelope).connect(audio.destination);
    jet.start();jet.stop(at+.54);
  }

  function contactSound(rail) {
    if(!soundEnabled || !audio || audio.state!=='running') return;
    const duration=rail?.24:.085;
    const samples=audio.createBuffer(1,Math.round(audio.sampleRate*duration),audio.sampleRate);
    const wave=samples.getChannelData(0);
    for(let i=0;i<wave.length;i++) wave[i]=(Math.random()*2-1)*(1-i/wave.length);
    const source=audio.createBufferSource();
    source.buffer=samples;
    const filter=audio.createBiquadFilter();
    filter.type=rail?'bandpass':'lowpass';
    filter.frequency.value=rail?1750:240;
    const gain=audio.createGain();
    gain.gain.value=rail?.24:.16;
    source.connect(filter).connect(gain).connect(audio.destination);
    source.start();
  }

  function clearKeys() {
    keys.clear();
    for (const button of document.querySelectorAll('.touch-controls .held')) button.classList.remove('held');
    touches.clear();
  }

  function showDialog(kind, html) {
    dialogKind = kind;
    $('dialog-content').innerHTML = html;
    updateMusicMenu();
    if (!dialog.open) dialog.showModal();
    $('dialog-content').querySelector('.primary')?.focus();
  }

  function startRace() {
    if(saving) return;
    if (dialog.open) dialog.close();
    const model=lesson?'rookie':trialCar?.id??save.selected;
    const run=comparisonRun?.cars[comparisonRun.index];
    race = lesson==='draft'?Kart.createDraftTrial():
      cupPractice?Kart.createCupPractice(cupPractice.cup,cupPractice.parts,cupPractice.line):
      sectorPractice?Kart.createSectorPractice(sectorPractice.completed,sectorPractice.index,sectorPractice.reference,sectorPractice.factory):
      cupRun?Kart.createCupRace(cupRun,Kart.equippedParts(save,cupRun.carId)):
      run ? Kart.createWorkshopTrial(run.id,run.parts,comparisonRun.courseId) :
      Kart.createRace(model, trialCar||lesson ? 'sunset' : trackId, trialCar||lesson ? 'solo' : mode,lesson?{}:trialCar?.parts??Kart.equippedParts(save,model),save.difficulty);
    if(lesson&&lesson!=='draft') {
      const drill=lessons[lesson];
      Object.assign(race,{distance:drill.start,speed:drill.speed,tanks:drill.tanks,laps:1,lessonPassed:false,braked:false,caught:false,
        trial:{start:drill.start,end:drill.end,nitro:null,drift:null,curb:null,curbEntry:null}});
    }
    if (!cupPractice && !sectorPractice && !comparisonRun && !trialCar && !lesson && race.mode==='solo') Kart.startTimeTrial(race,save);
    clearKeys();
    paused = false;
    raceClock.reset();
    lastRaceRender=-Infinity;
    resumeRequested=false;
    lastMap=-1;
    pendingFinish=null;
    prevCount = 4;
    messageTime = 0;
    nitroReadyTime = 0;
    $('garage').hidden = true;
    $('race-screen').hidden = false;
    $('race-track').textContent = race.cup?`第 ${race.cup.station+1} 站 · ${race.track.name}`:race.track.name;
    $('place-label').textContent = lesson||race.mode==='solo'?'模式':'名次';
    $('pause').focus({ preventScroll: true });
    audioStart();
    renderHud();
    KartRender.raceFrame($('race-canvas'), race);
    queueFrame();
  }

  function leaveRace(target) {
    const returnToWorkshop=comparisonRun?.returnTo;
    clearKeys();
    race = null;
    trialCar = null;
    lesson=null;
    comparisonRun=null;
    sectorPractice=null;
    cupRun=null;
    cupPractice=null;
    paused = false;
    updateMusic();
    if (dialog.open) dialog.close();
    $('race-screen').hidden = true;
    $('garage').hidden = false;
    renderCredits();
    switchPage(returnToWorkshop?'garage-page':target, !returnToWorkshop);
    if(returnToWorkshop) {
      const trigger=$(returnToWorkshop);
      trigger.focus({preventScroll:true});
      (returnToWorkshop==='compare-drive'?$('workshop-title'):trigger).scrollIntoView({block:'center'});
    } else window.scrollTo(0, 0);
  }

  function pauseRace(reason='') {
    if (!race || race.phase === 'finished' || paused) return;
    clearKeys();
    paused = true;
    raceClock.reset();
    updateMusic();
    engineSound();
    const quality=raceScreen.dataset.quality==='low'?'低':'高';
    showDialog('pause', `<h2 id="dialog-title">比赛暂停</h2>${typeof reason==='string'&&reason?`<p>${reason}</p>`:''}${musicPicker()}<div class="dialog-actions"><button class="secondary" data-action="quality">画质 · ${quality}</button><button class="secondary" data-action="tracks">退出比赛</button><button class="secondary" data-action="retry">重新开始</button><button class="primary" data-action="resume">继续比赛</button></div>`);
  }

  function finishRace() {
    updateMusic();
    engineSound();
    if(race.cup) {clearKeys();void saveCupStation();return;}
    if(cupPractice) {clearKeys();showCupPractice();return;}
    if(sectorPractice) {clearKeys();showSectorPractice();return;}
    if(lesson) {
      clearKeys();
      void finishLesson();
      return;
    }
    if(comparisonRun) {
      clearKeys();
      comparisonRun.results[comparisonRun.index]={...race.trial,time:race.elapsed};
      showComparisonResults();
      return;
    }
    if (trialCar) {
      clearKeys();
      showDialog('finish',`<h2 id="dialog-title">试驾完成</h2><p>${race.car.name} ${race.car.tier} · ${timeText(race.elapsed)}</p><div class="dialog-actions"><button class="secondary" data-action="garage">返回车库</button><button class="primary" data-action="retry">再试一次</button></div>`);
      return;
    }
    pendingFinish=race;
    saveFinish();
  }

  async function finishLesson() {
    const id=lesson;
    const completed=race;
    let text='再试一次，按提示完成动作。';
    if(completed.lessonPassed) {
      saving=true;
      const result=await commitSave(draft=>{
        if(draft.training.includes(id)) return 0;
        draft.training.push(id);
        draft.credits+=30;
        return 30;
      });
      saving=false;
      renderCredits();
      text=result.status==='saved'?(result.result?'动作达标，首次奖励 +30 点。':'动作达标，首次奖励已领取。'):saveMessages[result.status];
    }
    if(race!==completed) return;
    const wake=completed.wake;
    const stats=id==='draft'?`<dl><div><dt>蓄势就绪</dt><dd>${wake.readies} 次</dd></div><div><dt>切线加速</dt><dd>${wake.launches} 次</dd></div><div><dt>干净超车</dt><dd>${wake.passes} 次</dd></div><div><dt>最短跟车距离</dt><dd>${Number.isFinite(wake.closest)?`${wake.closest.toFixed(1)} m`:'未测到'}</dd></div></dl>`:'';
    showDialog('finish',`<h2 id="dialog-title">${completed.lessonPassed?'训练达标':'继续练习'}</h2><p>${text}</p>${stats}<div class="dialog-actions"><button class="secondary" data-action="retry">重练这段</button><button class="primary" data-action="training-menu">选择训练</button></div>`);
  }

  function showTraining() {
    const drills=Object.entries(lessons).map(([id,drill])=>`<button class="secondary" data-lesson="${id}"><b>${drill.name}</b><span>${save.training.includes(id)?'已达标':'+30 点'}</span></button>`).join('');
    showDialog('training',`<h2 id="dialog-title">新手训练</h2><p>任选一段练习。首次达标奖励点数，首次完成大奖赛额外获得 45 点。</p><div class="lesson-list">${drills}</div><div class="dialog-actions"><button class="secondary" data-action="close">跳过</button><button class="primary" data-action="training-race">去跑大奖赛</button></div>`);
  }

  function nextStep(completed) {
    const upgrade=nextUpgrade(completed.car);
    if(upgrade&&save.credits>=upgrade.price) return `现在可解锁 ${upgrade.name} ${upgrade.tier}，先试驾比较转向和出弯。`;
    const worst=completed.timing?.splits.reduce((pick,split,i,array)=>{
      const loss=(split.delta??0)-(array[i-1]?.delta??0);
      return loss>pick.loss?{loss,index:i}:pick;
    },{loss:.05,index:0});
    if(worst?.loss>.05) return `下次先练第 ${Math.floor(worst.index/4)+1} 圈 S${worst.index%4+1}，这一段比幽灵慢 ${worst.loss.toFixed(2)} 秒。`;
    if(completed.railContacts>2) return '下次在急弯前提前松油，减少擦护栏的掉速。';
    if(completed.boostCount<2) return '下次把氮气留到车身回正后的长直道。';
    return upgrade?`距离 ${upgrade.name} ${upgrade.tier} 还差 ${upgrade.price-save.credits} 点。`:'试试另一条走线，比较分段用时。';
  }

  async function saveFinish() {
    if(saving||!pendingFinish) return;
    saving=true;
    const completed=pendingFinish;
    const result=await commitSave(draft=>{
      const scored={...completed,awarded:false};
      const reward=Kart.award(draft,scored);
      return {reward,recorded:Kart.saveReplay(draft,scored),personalBest:scored.personalBest};
    });
    saving=false;
    renderCredits();
    clearKeys();
    if(race!==completed) return;
    const saved=result.status==='saved';
    const {reward,recorded,personalBest}=result.result??{};
    if(saved) {
      pendingFinish=null;
      [392,523.25,659.25].forEach((note,i)=>beep(note,.26,i*.11));
    }
    const fastest=Math.min(...completed.lapTimes);
    const ghostStatus=saved&&completed.timing?(recorded?' · 幽灵已保存':personalBest?' · 幽灵未保存':' · 保留已有幽灵'):'';
    const upgrade=nextUpgrade(completed.car);
    const upgradeAction=saved&&upgrade?`<button class="secondary" data-action="view-upgrade" data-upgrade="${upgrade.id}">查看 ${upgrade.name} ${upgrade.tier}</button>`:'';
    const practice=saved&&Kart.weakestSector(completed)!==null?'<button class="primary" data-action="practice-sector">重练最慢分段 ↗</button>':'';
    showDialog('finish', `<h2 id="dialog-title">${completed.mode==='race'?`第 ${completed.place} 名完赛`:'计时挑战完成'}</h2><p>${completed.track.name} · ${personalBest?'刷新个人纪录！':completed.car.name}${ghostStatus}</p>${saved?'':`<p role="status">成绩和点数尚未保存。${saveMessages[result.status]??''}</p>`}<dl><div><dt>完赛时间</dt><dd>${timeText(completed.elapsed)}</dd></div><div><dt>最快单圈</dt><dd>${Number.isFinite(fastest)?timeText(fastest):'—'}</dd></div><div><dt>氮气释放</dt><dd>${completed.boostCount} 次</dd></div><div><dt>获得点数</dt><dd>${saved?`+${reward}`:'待保存'}</dd></div></dl>${sectorResults(completed.timing)}<p>${nextStep(completed)}</p><div class="dialog-actions"><button class="secondary" data-action="garage">返回车库</button><button class="secondary" data-action="tracks">选择赛道</button>${upgradeAction}${practice}${saved?'<button class="secondary" data-action="retry">再跑一场</button>':'<button class="primary" data-action="save-finish">重试保存</button>'}</div>`);
  }

  function sectorName(index) {
    return `第 ${Math.floor(index/4)+1} 圈 · S${index%4+1}`;
  }

  function showSectorPractice() {
    const {trial}=race;
    const {results}=sectorPractice;
    results[Number(trial.factory)]=[trial.sectorTime,...trial.speeds.map(speed=>speed*3)];
    const reference=[trial.referenceTime,...(trial.referenceSpeeds?.map(speed=>speed*3)??[])];
    const rows=['分段用时','入弯速度','弯中最低速度','出弯速度'].map((label,index)=>{
      const unit=index?'km/h':'秒';
      const format=value=>value==null?'—':`${value.toFixed(index?1:2)} ${unit}`;
      const player=results[Number(trial.factory)][index];
      const other=reference[index];
      const delta=other==null?'—':`${player-other>0?'+':''}${(player-other).toFixed(index?1:2)} ${unit}`;
      const tone=deltaTone(other==null?null:(player-other)*(index?-1:1));
      return `<tr><td>${label}</td><td>${format(results[0]?.[index])}</td><td>${format(results[1]?.[index])}</td><td>${format(other)}</td><td data-pace="${tone}">${delta}</td></tr>`;
    }).join('');
    showDialog('finish',`<h2 id="dialog-title">分段重练 · ${sectorName(trial.sector)}</h2><p>${race.track.name} · 当前为${trial.factory?'原厂':'完赛车辆配置'}。计时从分段起点开始，速度取样围绕本段最急的弯。</p><table class="sector-results"><thead><tr><th>项目</th><th>完赛配置</th><th>原厂</th><th>幽灵</th><th>本次 − 幽灵</th></tr></thead><tbody>${rows}</tbody></table><div class="dialog-actions"><button class="secondary" data-action="tracks">结束练习</button><button class="secondary" data-action="practice-config">${trial.factory?'改用完赛配置':'改用原厂'}</button><button class="primary" data-action="retry">重练这一段 ↗</button></div>`);
  }

  function showCup(status='',selection=null,payout=0) {
    const cup=save.cup;
    const count=cup?.stages.length??0;
    const complete=count===Kart.cupTracks.length;
    const car=carFor(cup?.carId??save.selected);
    const labels=Kart.cupTracks.map(id=>tracks.find(track=>track.id===id).name);
    const stages=labels.map((name,index)=>`<li>${name} ${cup?.stages[index]?`· 第 ${cup.stages[index].order.indexOf(0)+1} 名 · ${timeText(cup.stages[index].time)}`:index===count?'· 下一站':''}</li>`).join('');
    const standing=count?`<table class="sector-results"><thead><tr><th>名次</th><th>车手</th><th>积分</th></tr></thead><tbody>${Kart.cupStandings(cup).map((entry,i)=>`<tr><td>${i+1}</td><td>${entry.name}</td><td>${entry.points}</td></tr>`).join('')}</tbody></table>`:'';
    const selected=carFor(save.selected);
    const nextCarId=cup&&!complete?cup.carId:selected.id;
    const installed=selection??Kart.equippedParts(save,nextCarId);
    const options=['原厂','街道','竞赛'];
    const parts=Object.entries(Kart.parts).map(([slot,part])=>`<label class="difficulty-picker">${part.name}<select data-cup-part="${slot}">${options.map((name,level)=>Kart.ownsPart(save,nextCarId,slot,level)?`<option value="${level}" ${level===installed[slot]?'selected':''}>${name}</option>`:'').join('')}</select></label>`).join('');
    const scoreText=count?'同分按最后一站名次排序':'各站前六名依次获 10、7、5、3、2、1 分';
    const nextCar=complete&&selected.id!==car.id?`<p>新杯赛车辆 · ${selected.name} ${selected.tier}</p>`:'';
    const standings=cup?Kart.cupStandings(cup):[];
    const rank=standings.findIndex(entry=>entry.id===0);
    const gap=rank>0?standings[rank-1].points-standings[rank].points:0;
    const pursuit=count?`<p>${rank===0?'当前领跑':gap?`距前一名 ${gap} 分`:'与前一名同分'}</p>`:'';
    const record=save.cupRecords[cup?.difficulty??save.difficulty];
    const trophy=record?`<p class="cup-record">${record.place<=3?'<span aria-hidden="true">🏆</span> ':''}历史最佳 · ${record.place===1?'冠军奖杯':record.place===2?'亚军奖杯':record.place===3?'季军奖杯':`第 ${record.place} 名`} · ${record.points} 分 · ${timeText(record.time)}</p>`:
      '<p>首夺领奖台 +400 金币 · 首夺冠军另 +600 金币（每档难度）</p>';
    const nextTrack=Kart.cupTracks[complete?0:count];
    const course=Kart.cupCourses[nextTrack];
    const advice={coast:'悬挂减轻压路肩掉速，差速器适合在连续弯中蓄气。',
      sunset:'悬挂有助于稳住内线，留意反向弯前的重刹点。',
      city:'两次急弯之间先回正。若攒满氮气，把它留给出弯后的直道。'}[nextTrack];
    const preparation=`<p>${complete||!count?'首站':'下一站'}练习 · ${course.name}。${advice}</p>`;
    const practiceButton=`<button class="secondary" data-action="cup-practice">${complete||!count?'练习首站':'练习下一站'}</button>`;
    showDialog('cup',`<h2 id="dialog-title">${complete?'三站杯赛 · 总成绩':'三站杯赛'}</h2><p>${car.name} ${car.tier} · 每站一圈 · ${scoreText}</p><ol class="cup-stages">${stages}</ol>${standing}${pursuit}${trophy}${payout?`<p role="status">杯赛奖励 +${payout} 金币</p>`:''}${nextCar}${parts}${preparation}${status?`<p role="status">${status}</p>`:''}<div class="dialog-actions"><button class="secondary" data-action="${race?'tracks':'close'}">返回赛事</button>${practiceButton}<button class="primary" data-action="cup-start">${complete?'开启新杯赛':cup?`发车 · 第 ${count+1} 站`:'开始杯赛'}</button></div>`);
  }

  function cupParts() {
    return Object.fromEntries([...dialog.querySelectorAll('[data-cup-part]')].map(input=>[input.dataset.cupPart,Number(input.value)]));
  }

  function showCupPractice() {
    const {results,line}=cupPractice;
    results[line]=race.cornerSample;
    const speed=value=>`${(value*3).toFixed(1)} km/h`;
    const compare=results.inside&&results.outside;
    const rows=[
      ['入段速度','entrySpeed',speed],['出段速度','exitSpeed',speed],
      ['用时','time',value=>`${value.toFixed(2)} 秒`],['实际走线距离','meters',value=>`${value.toFixed(1)} m`],
      ['碰撞次数','collisions',String],
    ].map(([label,key,format])=>{
      const entries=['inside','outside'].map(side=>`<td>${results[side]?format(results[side][key]):'待练习'}</td>`).join('');
      const change=compare?results.outside[key]-results.inside[key]:0;
      const magnitude=format(Math.abs(change));
      const difference=compare?`<td>${Number.parseFloat(magnitude)===0?'':change>0?'+':'−'}${magnitude}</td>`:'';
      return `<tr><td>${label}</td>${entries}${difference}</tr>`;
    }).join('');
    const other=line==='inside'?'外线':'内线';
    showDialog('finish',`<h2 id="dialog-title">${race.cornerCourse.name} · 练习结果</h2><p>本次练习${line==='inside'?'内线':'外线'}。两次从同一位置和速度起跑。</p><table class="sector-results"><thead><tr><th>项目</th><th>内线</th><th>外线</th>${compare?'<th>外线 − 内线</th>':''}</tr></thead><tbody>${rows}</tbody></table><div class="dialog-actions"><button class="secondary" data-action="cup-return">返回杯赛准备</button><button class="secondary" data-action="retry">重练本线</button><button class="primary" data-action="cup-other-line">练习${other}</button></div>`);
  }

  async function startCup() {
    if(saving) return;
    const config=cupParts();
    const expected=save.cup;
    saving=true;
    const result=await commitSave(draft=>{
      if(draft.cup?.id!==expected?.id||draft.cup?.stages.length!==expected?.stages.length) return false;
      if(!draft.cup||draft.cup.stages.length===Kart.cupTracks.length) draft.cup=Kart.createCup(draft.selected,draft.difficulty);
      for(const [slot,level] of Object.entries(config)) if(!Kart.equipPart(draft,draft.cup.carId,slot,level)) return false;
      return true;
    });
    saving=false;
    if(result.status!=='saved') {showCup(saveMessages[result.status]);return;}
    cupRun=save.cup;
    startRace();
  }

  async function saveCupStation() {
    if(saving||!race?.cup) return;
    saving=true;
    const result=await commitSave(draft=>{
      if(!Kart.scoreCup(draft.cup,race)) return false;
      return Kart.recordCupResult(draft);
    });
    saving=false;
    if(result.status==='saved'||(save.cup?.id===race.cup.id&&save.cup.stages.length>race.cup.station)) {
      cupRun=null;
      renderCredits();
      showCup('',null,result.result?.reward);
      return;
    }
    showDialog('finish',`<h2 id="dialog-title">本站成绩待保存</h2><p>${saveMessages[result.status]??'请重试保存。'}</p><div class="dialog-actions"><button class="secondary" data-action="tracks">返回赛事</button><button class="primary" data-action="cup-save">重试保存</button></div>`);
  }

  function showComparisonResults() {
    const {cars:models,results}=comparisonRun;
    if(comparisonRun.courseId) {
      showGenerationResults();
      return;
    }
    const label=model=>`${model.name} ${model.tier} · ${model.side} · ${model.pipes.length} 管`;
    const value=(result,field)=>{
      if(!result) return '待试驾';
      if(field==='time') return `${result.time.toFixed(2)} 秒`;
      if(result[field]===null) return '未触发';
      if(field==='nitro') return `${result.nitro.toFixed(2)} 秒`;
      if(field==='curb') return `${result.curb.map(speed=>Math.round(speed*3)).join(' → ')} km/h`;
      return `${(result.drift*100).toFixed(1)}% 槽`;
    };
    const rows=[['用时','time'],['氮气实际喷射','nitro'],['压路肩前后速度','curb'],['有效漂移集气','drift']]
      .map(([name,field])=>`<tr><td>${name}</td><td>${value(results[0],field)}</td><td>${value(results[1],field)}</td></tr>`).join('');
    const retry=results[1]?'<button class="secondary" data-action="compare-a">重跑 A</button><button class="primary" data-action="compare-b">重跑 B</button>'
      :'<button class="secondary" data-action="compare-a">重跑 A</button><button class="primary" data-action="compare-b">试驾 B ↗</button>';
    showDialog('finish',`<h2 id="dialog-title">短段试驾对照</h2><table class="sector-results"><thead><tr><th>落日峡谷</th><th>A · ${label(models[0])}</th><th>B · ${label(models[1])}</th></tr></thead><tbody>${rows}</tbody></table><div class="dialog-actions trial-actions"><button class="secondary" data-action="garage">返回改装车间</button>${retry}</div>`);
  }

  function showGenerationResults() {
    const {courseId,results}=comparisonRun;
    const course=Kart.workshopCourses[courseId];
    if(courseId==='wave') {
      const models=comparisonRun.cars.map(({id})=>carFor(id));
      const tiers=models.map(model=>model.tier);
      const title=comparisonRun.returnTo==='flagship-drive'?`${models[0].name} PRO / SR / Z7 · 午夜回环`:course.title;
      const format=(value,precision,unit)=>value==null?'未触发':`${value.toFixed(precision)} ${unit}`;
      const fields=[
        ['赛段用时',result=>result.time,2,'秒'],
        ['手动氮气',result=>result.manualNitro?.seconds,2,'秒'],
        ['喷射最高速度',result=>result.manualNitro?.peak*3||null,1,'km/h'],
        ['出弯 0.60 秒提速',result=>{const sample=result.measurements[0];return sample?(sample.endSpeed-sample.startSpeed)*3:null;},1,'km/h'],
        ['出弯增扭',result=>result.exitSeconds||null,2,'秒'],
      ];
      const rows=fields.map(([label,get,precision,unit])=>`<tr><th scope="row">${label}</th>${tiers.map((_,i)=>
        `<td>${results[i]?format(get(results[i]),precision,unit):'待试驾'}</td>`).join('')}</tr>`).join('');
      const buttons=tiers.map((tier,i)=>`<button class="${i===(comparisonRun.index+1)%tiers.length?'primary':'secondary'}" data-action="compare-wave" data-index="${i}">${results[i]?'重跑':'试驾'} ${tier}</button>`).join('');
      showDialog('finish',`<h2 id="dialog-title">${title}</h2><p>三车均为原厂，从同一位置以 ${course.speed*3} km/h 起跑，各有一罐氮气。灯廊后喷射，高架左弯漂移回正后给油。</p><table class="sector-results generation-results"><thead><tr><th>项目</th>${tiers.map(tier=>`<th>${tier}</th>`).join('')}</tr></thead><tbody>${rows}</tbody></table><div class="dialog-actions trial-actions"><button class="secondary" data-action="garage">返回车库</button>${buttons}</div>`);
      return;
    }
    const [a,b]=results;
    const row=(label,first,second,unit,digits,lowerIsBetter,signed=false)=>{
      const format=(value,withSign=false)=>{
        const rounded=Number(value.toFixed(digits));
        return `${withSign&&rounded>0?'+':''}${rounded.toFixed(digits)} ${unit}`;
      };
      const value=(result,number)=>result?(number==null?'未测到':format(number,signed)):'待试驾';
      const delta=first==null||second==null?null:second-first;
      const tone=deltaTone(delta===null?null:lowerIsBetter?delta:-delta);
      return `<tr><td>${label}</td><td>${value(a,first)}</td><td>${value(b,second)}</td><td data-pace="${tone}">${delta===null?'—':format(delta,true)}</td></tr>`;
    };
    const rows=[row('赛段用时',a?.time,b?.time,'秒',2,true)];
    course.gates.forEach((gate,index)=>{
      const first=a?.measurements[index];
      const second=b?.measurements[index];
      if(gate.kind==='brake') {
        rows.push(row(gate.label,first?.distance,second?.distance,'m',2,true));
      } else {
        const curb=gate.kind==='curb';
        const gain=sample=>sample?(sample.endSpeed-sample.startSpeed)*3*(curb?-1:1):null;
        rows.push(row(gate.label,gain(first),gain(second),'km/h',2,curb,!curb));
      }
    });
    const start=`两车均为原厂。起跑 ${course.start} m · ${course.speed*3} km/h · 初始氮气 0`;
    const help=courseId==='rally'?'重刹记录 210 → 165 km/h 的距离。路肩记录松油滑行 0.30 秒的掉速。':
      '两个弯分别记录回正给油 0.60 秒的速度增量。';
    showDialog('finish',`<h2 id="dialog-title">${course.title}</h2><p>${start}</p><p>${help}</p><table class="sector-results generation-results"><thead><tr><th>项目</th><th>E2</th><th>G3</th><th>G3 − E2</th></tr></thead><tbody>${rows.join('')}</tbody></table><div class="dialog-actions trial-actions"><button class="secondary" data-action="garage">返回车库</button><button class="secondary" data-action="compare-a">重跑 E2</button><button class="primary" data-action="compare-b">${b?'重跑 G3':'试驾 G3 ↗'}</button></div>`);
  }

  function workshopHint(trial,distance) {
    const course=trial.course;
    if(course.track==='city') {
      if(distance<1912) return '驶向暖色灯廊';
      if(distance<2037) return '通过灯廊 · 预备氮气';
      if(distance<2260) return trial.manualNitro?'长直道 · 保持油门':'灯廊出口 · 现在开氮气';
      if(distance<2437) return '高架左弯 · 减速入弯，漂移回正';
      if(distance<2512) return '回正给油 · 保持 0.60 秒';
      return '驶向开阔匝道';
    }
    const gate=course.gates[trial.gateIndex];
    if(!gate) return '驶向短段终点';
    if(trial.sample) {
      if(gate.kind==='brake') return '保持刹车 · 减至 165 km/h';
      return gate.kind==='curb'?'正在测掉速 · 继续松油压路肩':'正在测出弯 · 保持油门';
    }
    if(distance<gate.from) {
      if(gate.kind==='brake') return `重刹区还有 ${Math.ceil(gate.from-distance)} m · 保持 210 km/h 以上`;
      if(gate.kind==='exit') return distance<gate.approach?`驶向${gate.hint} · 接近弯心前减速`:
        `${gate.hint} · 先降至 195 km/h 以下，回正后给油`;
      return `${gate.hint} · ${Math.ceil(gate.from-distance)} m`;
    }
    if(gate.kind==='brake') return '现在重刹 · 保持踩住至 165 km/h';
    if(gate.kind==='curb') return '现在压右侧红白路沿 · 松油滑行';
    return '现在回正给油 · 持续 0.60 秒';
  }

  const deltaText = delta => delta===null ? '—' : `${delta>=.005?'+':delta<=-.005?'−':''}${Math.abs(delta).toFixed(2)} s`;
  const deltaTone = delta => delta===null || Math.abs(delta)<.005 ? '' : delta<0?'fast':'slow';

  function sectorResults(timing) {
    if(!timing?.splits.length) return '';
    const rows=timing.splits.map((split,index)=>{
      const previous=timing.splits[index-1];
      const local=split.delta===null?null:split.delta-(previous?.delta??0);
      return `<tr><td>${Math.floor(index/4)+1} 圈 · S${index%4+1}</td><td>${timeText(split.elapsed-(previous?.elapsed??0))}</td><td data-pace="${deltaTone(local)}">${deltaText(local)}</td><td data-pace="${deltaTone(split.delta)}">${deltaText(split.delta)}</td></tr>`;
    });
    return `<table class="sector-results"><caption>分段计时</caption><thead><tr><th>分段</th><th>用时</th><th>单段差</th><th>累计差</th></tr></thead><tbody>${rows.join('')}</tbody></table>`;
  }

  function toggleGhost() {
    if(!race?.timing?.reference) return;
    race.timing.visible=!race.timing.visible;
    const visible=race.timing.visible;
    if(!sectorPractice) void commitSave(draft=>{draft.ghostVisible=visible;});
    renderHud();
    KartRender.raceFrame($('race-canvas'),race);
  }

  function renderHud() {
    const lap = Math.min(race.laps, Math.floor(race.distance / race.track.length) + 1);
    $('lap').textContent = `${lap} / ${race.laps}`;
    $('timer').textContent = timeText(race.elapsed);
    $('place').textContent = cupPractice?'练习':sectorPractice?'重练':lesson?'训练':comparisonRun ? (comparisonRun.courseId?race.car.tier:(comparisonRun.index?'试驾 B':'试驾 A')) : trialCar ? '试驾' : race.mode === 'solo' ? '计时' : race.place;
    $('place-total').textContent = lesson||race.mode==='solo'?'':`/ ${race.opponents.length+1}`;
    $('speed').textContent = String(Math.round(race.speed * 3)).padStart(3, '0');
    $('tanks').textContent = `${race.tanks >= 1 ? '◆' : '◇'} ${race.tanks >= 2 ? '◆' : '◇'}`;
    $('nitro-bar').style.width = `${(race.boost > 0 ? race.boost / race.boostDuration : race.tanks === 2 ? 1 : race.charge) * 100}%`;
    $('nitro-hint').textContent = race.boost > 0 ? '氮气加速中' : race.boostQueue > 0 ? '松漂移 · 回正后点火' : race.tanks ? '空格 / 氮气键加速' : '按住漂移键 + 转向蓄气';
    const wake=race.wake;
    const showWake=Boolean(wake&&(wake.charge>0||wake.burst>0||lesson==='draft'&&!race.lessonPassed));
    const hud=$('wake-hud');
    hud.hidden=!showWake;
    if(showWake) {
      const active=wake.burst>0;
      const fill=active?wake.burst/wake.duration:wake.charge;
      const label=active?'尾流加速':wake.charge===1?'尾流就绪 · 变线':wake.charge>0?'跟车蓄势':'进入前车尾流';
      const meter=$('wake-meter');
      if($('wake-label').textContent!==label) $('wake-label').textContent=label;
      hud.dataset.state=active?'burst':wake.charge===1?'ready':'charge';
      hud.style.setProperty('--wake-tint',wake.color);
      const percent=String(Math.round(fill*100));
      if(meter.getAttribute('aria-valuenow')!==percent) {
        meter.setAttribute('aria-valuenow',percent);
        meter.style.setProperty('--wake-fill',`${percent}%`);
      }
    }
    $('tanks').classList.toggle('tank-ready',nitroReadyTime>0);
    raceScreen.dataset.boost=race.boost>0?'active':'idle';
    const start=race.trial?.start??0;
    const end=race.trial?.end??race.track.length*race.laps;
    $('race-progress').style.width = `${(race.distance-start)/(end-start)*100}%`;
    const hint=$('trial-hint');
    hint.hidden=!race.trial;
    if(race.trial) {
      const stage=cupPractice?(cupPractice.line==='inside'?'内线 · 靠近路肩，提前减速':'外线 · 从弯外切入，留空间回正给油'):
        sectorPractice?`${sectorName(race.trial.sector)} · ${race.distance<race.trial.line?'接近计时起点':
        race.distance<race.trial.speedGates[0]?'接近取样弯':race.distance<race.trial.speedGates[1]?'正在测过弯速度':'驶向分段终点'}`:
        race.trial.course?workshopHint(race.trial,race.distance):race.distance<160?'起步直道 · 释放氮气':race.distance<325?'右弯 · 漂移集气':race.distance<500?'右侧路肩 · 轻压红白路沿':'驶向短段终点';
      hint.textContent=lesson?(race.lessonPassed?'动作达标，驶过终点':lessons[lesson].help):`${stage} · 剩 ${Math.round(end-race.distance)} 米`;
    }
    $('countdown').textContent = race.phase === 'countdown' ? Math.ceil(race.countdown) : race.elapsed < .65 && race.phase !== 'finished' ? 'GO!' : '';
    const driftStatus = !race.driftDirection ? '车身回正' : race.steer * race.driftDirection < -.08 ? '反打收尾' : '漂移蓄气';
    const contact=race.railHit>.15?'rail':race.hit>.11?'kart':race.surface==='curb'?'curb':'';
    $('race-message').dataset.contact=contact;
    const feedback=contact==='rail'?'蹭护栏 · 掉速':contact==='kart'?'车辆碰撞':messageTime > 0 ? message :
      contact==='curb'?'压路肩':race.drifting?driftStatus:race.roadGrip<.90?'冰面 · 转向和制动减弱':'';
    if($('race-message').textContent!==feedback) $('race-message').textContent=feedback;
    const timing=race.timing;
    const ghostToggle=$('ghost-toggle');
    ghostToggle.hidden=!timing?.reference;
    ghostToggle.setAttribute('aria-pressed',String(timing?.visible===true));
    const split=timing?.splits?.at(-1);
    $('sector-hud').hidden=!split;
    if(split) {
      const index=timing.splits.length-1;
      $('sector-label').textContent=`${Math.floor(index/4)+1} 圈 · S${index%4+1}`;
      $('sector-delta').textContent=split.delta===null?timeText(split.elapsed-(timing.splits[index-1]?.elapsed??0)):deltaText(split.delta);
      $('sector-delta').dataset.pace=deltaTone(split.delta);
    }
    if(lastMap<0||race.elapsed-lastMap>=.075) {drawMap();lastMap=race.elapsed;}
  }

  function flash(text, duration) {
    message = text;
    messageTime = duration;
  }

  function drive(dt) {
    const before = race.tanks;
    const boostCount = race.boostCount;
    const padCount = race.padCount;
    const lapCount = race.lapTimes.length;
    const railContacts=race.railContacts;
    const carContacts=race.carContacts;
    const surface=race.surface;
    const exitDrive=race.exitDrive;
    const wakeReady=race.wake?.readies??0;
    const wakeLaunch=race.wake?.launches??0;
    const wakePass=race.wake?.passes??0;
    const down = (...names) => names.some(name => keys.has(name) || [...touches.values()].includes(name));
    const input={
      throttle: down('ArrowUp', 'KeyW'), brake: down('ArrowDown', 'KeyS'),
      steer: Number(down('ArrowRight', 'KeyD')) - Number(down('ArrowLeft', 'KeyA')),
      drift: down('ShiftLeft', 'ShiftRight'), boost: down('Space'),
    };
    const previousDrift=race.driftDirection;
    Kart.update(race,input,dt);
    if(lesson==='brake'&&input.brake&&race.speed<=65&&race.distance<770) race.braked=true;
    if(lesson==='drift'&&previousDrift*input.steer<0&&input.drift&&Math.abs(race.slip)>.08) race.caught=true;
    if(lesson) {
      race.lessonPassed ||= lesson==='draft'?race.wake.passes>0:
        lesson==='brake'?race.braked&&race.distance>=790:
        lesson==='drift'?race.caught&&race.trial.drift>=.15:race.boostCount>0&&Math.abs(race.slip)<.08;
    }
    messageTime -= dt;
    nitroReadyTime=Math.max(0,nitroReadyTime-dt);
    if(race.railContacts>railContacts) contactSound(true);
    else if(race.carContacts>carContacts) contactSound(false);
    else if(race.surface==='curb' && surface!=='curb' && race.speed>16) contactSound(false);
    if(race.exitDrive>exitDrive) flash('出弯增扭',.62);
    if(race.wake?.passes>wakePass) {flash('干净超车',.78);beep(940,.16);}
    else if(race.wake?.launches>wakeLaunch) {flash('尾流切线',.64);beep(485,.18);}
    else if(race.wake?.readies>wakeReady) {flash('尾流就绪 · 变线',.65);beep(680,.10);}
    const count = race.phase === 'countdown' ? Math.ceil(race.countdown) : 0;
    if (count < prevCount) {
      beep(count ? 350 : 660);
      prevCount = count;
    }
    if (race.tanks > before) {
      nitroReadyTime=.38;
      flash('氮气已就绪', 1.1);
      beep(740);
    }
    if (race.boostCount > boostCount) {
      flash(race.boostChain?'回正接氮气！':'氮气加速！', .9);
      boostSound();
    }
    if (race.padCount > padCount) {
      flash('触发加速带！', .9);
      boostSound();
    }
    if (race.lapTimes.length > lapCount && race.phase !== 'finished') {
      flash(race.lapTimes.length === race.laps - 1 ? '最后一圈！' : '进入下一圈', 1.2);
      beep(660, .2);
    }
    if (race.phase === 'finished') finishRace();
  }

  function queueFrame() {
    if(framePending||document.hidden) return;
    if(race ? paused||race.phase==='finished' : page!=='garage-page'||(!spinning||drag)&&tailPreview===tailTarget) return;
    framePending=true;
    requestAnimationFrame(animate);
  }

  function animate(now) {
    framePending=false;
    const dt = Math.min(0.05, (now - last) / 1000 || 0);
    last = now;
    if (race) {
      if (!paused && !document.hidden && race.phase !== 'finished') {
        const onTime=raceClock.advance(now,step=>{
          drive(step);
          return race.phase!=='finished';
        });
        if(!onTime) pauseRace('画面中断，比赛已暂停。继续后从原位置恢复。');
        const capped=touchDevice.matches&&raceScreen.dataset.quality==='low';
        if(!capped||now-lastRaceRender>=1000/30-.5||race.phase==='finished') {
          lastRaceRender=now;
          renderHud();
          KartRender.raceFrame($('race-canvas'), race);
        }
        engineSound();
      }
    } else if (page === 'garage-page') {
      if(spinning&&!drag) {
        yaw = Kart.wrap(yaw + dt * .83, 2 * Math.PI);
        KartRender.garage($('hero-car'), previewCar, yaw);
      }
      if(tailPreview!==tailTarget) {
        tailPreview+=clamp(tailTarget-tailPreview,-dt/.38,dt/.38);
        drawWorkshopCars();
      }
    }
    queueFrame();
  }

  for (const car of Kart.originalCars) {
    const button = document.createElement('button');
    button.className = 'car-card';
    button.dataset.car = car.id;
    button.style.setProperty('--tier', tiers[car.tier]);
    button.innerHTML = `<span class="rank">${car.tier}</span><span class="card-state"></span><canvas aria-hidden="true"></canvas><strong>${car.name}</strong><small>${car.code} · ${car.style}</small>`;
    button.onclick = () => {
      const preferred=car.family?Kart.carFamily(car.family).filter(model=>save.owned.includes(model.id)).at(-1):null;
      inspectCar(preferred?.id??(car.family?Kart.carFamily(car.family)[0].id:car.id));
    };
    carGrid.append(button);
  }
  for (const track of tracks) {
    const button = document.createElement('button');
    button.className = 'track-card';
    button.dataset.track = track.id;
    button.style.setProperty('--track', track.color);
    button.innerHTML = `<canvas aria-hidden="true"></canvas><div><span><strong>${track.name}</strong><small>${track.tip}</small></span><span class="difficulty">${track.level}</span></div>`;
    button.onclick = () => { trackId = track.id; renderTrack(); };
    trackGrid.append(button);
  }

  document.querySelectorAll('[data-page]').forEach(button => { button.onclick = () => switchPage(button.dataset.page); });
  document.querySelectorAll('[data-mode]').forEach(button => { button.onclick = () => { mode = button.dataset.mode; renderTrack(); }; });
  document.querySelector('.brand').onclick = event => { event.preventDefault(); switchPage('garage-page'); };
  $('quick-race').onclick = () => switchPage('track-page', true);
  $('start-race').onclick = ()=>mode==='cup'?showCup():startRace();
  $('test-drive').onclick = () => { trialCar={id:inspected,parts:{...previewParts}}; startRace(); };
  $('compare-drive').onclick=()=>{
    const before=Kart.configureCar(comparison==='factory'?inspected:comparison);
    comparisonRun={index:0,results:[],returnTo:'compare-drive',cars:[
      {...before,parts:before.installed,side:'原厂'},
      {...previewCar,parts:previewCar.installed,side:'预览'},
    ]};
    trialCar={id:inspected,parts:{...previewParts}};
    startRace();
  };
  $('generation-drive').onclick=()=>{
    if(saving) return;
    const courseId=previewCar.family;
    if(!Kart.workshopCourses[courseId]) return;
    const cars=(courseId==='wave'?Kart.carFamily(courseId).slice(2,5):Kart.carFamily(courseId).slice(1,3)).map(({id})=>({id,parts:{}}));
    comparisonRun={courseId,cars,index:0,results:[],returnTo:'generation-drive'};
    startRace();
  };
  $('flagship-drive').onclick=()=>{
    if(saving) return;
    const cars=Kart.carFamily(previewCar.family).slice(4).map(({id})=>({id,parts:{}}));
    comparisonRun={courseId:'wave',cars,index:0,results:[],returnTo:'flagship-drive'};
    startRace();
  };
  $('compare-views').onclick=event=>{
    const view=event.target.closest('[data-view]')?.dataset.view;
    if(view) {compareView=view;renderWorkshop(previewCar,save.owned.includes(inspected));}
  };
  $('compare-grey').onclick=()=>{
    compareGrey=!compareGrey;
    $('compare-grey').setAttribute('aria-pressed',String(compareGrey));
    renderWorkshop(previewCar,save.owned.includes(inspected));
  };
  $('tail-preview').onclick=()=>{
    tailTarget=1-tailTarget;
    $('tail-preview').setAttribute('aria-pressed',String(Boolean(tailTarget)));
    $('tail-preview').textContent=tailTarget?'收回车尾':'展开车尾';
    if(matchMedia('(prefers-reduced-motion: reduce)').matches) {
      tailPreview=tailTarget;
      drawWorkshopCars();
    } else queueFrame();
  };
  $('generations').onclick=event=>{
    const id=event.target.closest('[data-generation]')?.dataset.generation;
    if(id) inspectCar(id);
  };
  $('compare-base').onchange=event=>{ comparison=event.target.value; renderCar(); };
  $('part-slots').onclick=async event=>{
    const button=event.target.closest('button');
    if(!button) return;
    const {slot,level,install}=button.dataset;
    if(slot) {
      previewParts[slot]=Number(level);
      compareView=slot==='exhaust'?'rear':slot;
      $('part-status').textContent='';
    }
    if(install) {
      if(saving) return;
      saving=true;
      const choice=previewParts[install];
      const id=inspected;
      const result=await commitSave(draft=>
        (Kart.ownsPart(draft,id,install,choice)||Kart.buyPart(draft,id,install,choice))&&Kart.equipPart(draft,id,install,choice));
      saving=false;
      renderCredits();
      $('part-status').textContent=result.status==='saved'?`${Kart.parts[install].name}已装备`:saveMessages[result.status];
    }
    renderCar();
    $('part-slots').querySelector(slot?`[data-slot="${slot}"][data-level="${level}"]`:`[data-slot="${install}"][aria-pressed="true"]`)?.focus({preventScroll:true});
  };
  $('pause').onclick = pauseRace;
  $('training').onclick=showTraining;
  $('race-difficulty').onchange=async event=>{
    const difficulty=event.target.value;
    await commitSave(draft=>{draft.difficulty=difficulty;});
    renderTrack();
  };
  $('equip').onclick = async () => {
    if(saving) return;
    saving=true;
    const id=inspected;
    const result=await commitSave(draft=>{
      if(!draft.owned.includes(id)) return Kart.purchase(draft,id);
      draft.selected=id;
      return true;
    });
    saving=false;
    renderCredits();
    renderCar();
    if(result.status!=='saved') $('garage-note').textContent=saveMessages[result.status];
  };
  $('rotate').onclick = () => {
    spinning = !spinning;
    $('rotate').setAttribute('aria-pressed', spinning);
    queueFrame();
  };
  const hero = $('hero-car');
  hero.onpointerdown = event => {
    drag = { x: event.clientX, id: event.pointerId };
    hero.setPointerCapture(event.pointerId);
  };
  hero.onpointermove = event => {
    if (!drag || event.pointerId !== drag.id) return;
    yaw = Kart.wrap(yaw + (event.clientX - drag.x) * .014, 2 * Math.PI);
    drag.x = event.clientX;
    KartRender.garage(hero, previewCar, yaw);
  };
  hero.onlostpointercapture = () => { drag = null;queueFrame(); };
  $('sound').onclick = () => {
    soundEnabled = !soundEnabled;
    $('sound').setAttribute('aria-pressed', soundEnabled);
    $('sound').setAttribute('aria-label', soundEnabled ? '关闭声音' : '开启声音');
    audioStart();
    beep(523.25, .13);
  };
  $('music').onclick=()=>showDialog('music',`<h2 id="dialog-title">背景音乐</h2>${musicPicker()}<div class="dialog-actions"><button class="primary" data-action="close">完成</button></div>`);
  dialog.addEventListener('change',event=>{
    if(event.target.matches('[data-music-files],[data-music]')) dialog.querySelector('[data-music-status]').textContent='';
    if(event.target.matches('[data-music-files]')) {
      for(const file of event.target.files) {
        if(localTracks.some(track=>track.key===`${file.name}:${file.size}:${file.lastModified}`)) continue;
        localTracks.push({id:`local-${localTracks.length}`,key:`${file.name}:${file.size}:${file.lastModified}`,name:file.name,url:URL.createObjectURL(file)});
      }
      if(localTracks.length) {
        musicChoice=localTracks.at(-1).id;
        updateMusicMenu();
        updateMusic();
      }
      event.target.value='';
      return;
    }
    if(!event.target.matches('[data-music]')) return;
    musicChoice=event.target.value;
    if(!musicChoice.startsWith('local-')) {
      try {localStorage.setItem(musicKey,musicChoice);} catch {}
    }
    if(musicChoice.startsWith('local-')) { updateMusic(); return; }
    audioStart();
    if(musicChoice==='off') updateMusic();
  });
  $('help').onclick = () => showDialog('help', '<h2 id="dialog-title">怎么开</h2><p>在车库选车，再选赛道。完赛可赚点数，解锁不同级别的车辆。</p><dl><div><dt>加速 / 刹车</dt><dd>↑ / ↓ 或 W / S</dd></div><div><dt>转向</dt><dd>← / → 或 A / D</dd></div><div><dt>漂移蓄气</dt><dd>按住 Shift + 转向</dd></div><div><dt>释放氮气</dt><dd>Space</dd></div><div><dt>暂停</dt><dd>Esc</dd></div></dl><p>带速度入弯并按住漂移键。车尾甩开后，短按反方向收住车尾，出弯时松开漂移键让车身回正。触屏可以同时按油门、方向和漂移。</p><div class="dialog-actions"><button class="primary" data-action="close">知道了</button></div>');
  dialog.addEventListener('click', event => {
    const action = event.target.closest('[data-action]')?.dataset.action;
    const drill=event.target.closest('[data-lesson]')?.dataset.lesson;
    if(drill&&Object.hasOwn(lessons,drill)) {lesson=drill;startRace();return;}
    if(action==='training-menu') {leaveRace('garage-page');showTraining();return;}
    if(action==='training-race') {dialog.close();mode='race';switchPage('track-page',true);return;}
    if(action==='cup-start') {void startCup();return;}
    if(action==='cup-save') {void saveCupStation();return;}
    if(action==='cup-practice') {
      const cup=save.cup&&save.cup.stages.length<Kart.cupTracks.length?save.cup:
        {carId:save.selected,difficulty:save.difficulty,stages:[]};
      cupPractice={cup,parts:cupParts(),line:'inside',results:{}};
      startRace();
      return;
    }
    if(action==='cup-other-line'&&cupPractice) {
      cupPractice.line=cupPractice.line==='inside'?'outside':'inside';
      startRace();
      return;
    }
    if((action==='cup-return'||action==='tracks')&&cupPractice) {
      const parts=cupPractice.parts;
      leaveRace('track-page');
      showCup('',parts);
      return;
    }
    if(action==='practice-sector'&&race?.timing?.splits) {
      const index=Kart.weakestSector(race);
      if(index!==null) {
        sectorPractice={completed:race,index,reference:race.timing.reference??save.replays[race.track.id],factory:false,results:[]};
        startRace();
      }
      return;
    }
    if(action==='practice-config'&&sectorPractice) {
      sectorPractice.factory=!sectorPractice.factory;
      startRace();
      return;
    }
    if(action==='view-upgrade') {
      const id=event.target.closest('[data-upgrade]').dataset.upgrade;
      leaveRace('garage-page');
      inspectCar(id);
      $('equip').focus();
      return;
    }
    if(action==='music-play') {
      event.target.closest('button').hidden=true;
      updateMusic();
      return;
    }
    if(action==='quality') {
      const next=raceScreen.dataset.quality==='low'?'high':'low';
      raceScreen.dataset.quality=next;
      event.target.closest('button').textContent=`画质 · ${next==='low'?'低':'高'}`;
      try { localStorage.setItem('apex-kart-quality',next); } catch {}
      return;
    }
    if (action === 'retry') startRace();
    if(action==='save-finish') void saveFinish();
    if(saving) return;
    if (comparisonRun && (action==='compare-a'||action==='compare-b')) {
      comparisonRun.index=action==='compare-a'?0:1;
      startRace();
    }
    if(comparisonRun?.courseId==='wave'&&action==='compare-wave') {
      comparisonRun.index=Number(event.target.closest('[data-index]').dataset.index);
      startRace();
    }
    if (action === 'tracks') leaveRace('track-page');
    if (action === 'garage') leaveRace('garage-page');
    if(action==='resume') {
      resumeRequested=true;
      audioStart();
      dialog.close();
    }
    if(action==='close') dialog.close();
  });
  dialog.addEventListener('cancel', event => { if (dialogKind === 'finish'||dialogKind==='cup'&&race) event.preventDefault(); });
  dialog.addEventListener('close', () => {
    if (dialogKind === 'pause' && paused && !dialog.open) {
      paused=false;
      raceClock.reset();
      lastRaceRender=-Infinity;
      if(!resumeRequested&&!document.hidden) KartSession.resumeAudio(audio);
      resumeRequested=false;
      queueFrame();
    }
    if(!document.hidden) updateMusic();
    dialogKind = '';
  });

  const drivingKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'KeyW', 'KeyA', 'KeyS', 'KeyD', 'ShiftLeft', 'ShiftRight', 'Space'];
  $('ghost-toggle').onclick=toggleGhost;
  window.addEventListener('keydown', event => {
    if (!race || dialog.open) return;
    if (event.code === 'Escape') { event.preventDefault(); pauseRace(); return; }
    if (event.code === 'KeyG' && !event.repeat) { toggleGhost(); return; }
    if (!drivingKeys.includes(event.code)) return;
    event.preventDefault();
    keys.add(event.code);
  });
  window.addEventListener('keyup', event => { keys.delete(event.code); });
  window.addEventListener('blur', () => { clearKeys(); if (race) pauseRace(); });
  document.addEventListener('visibilitychange',()=>{
    if(document.hidden) {
      clearKeys();
      if(race) pauseRace('页面已切到后台。');
      parkAudio();
    } else {
      queueFrame();
    }
  });
  window.addEventListener('pagehide',parkAudio);
  document.addEventListener('pointerdown',()=>{
    if(!race&&!document.hidden&&audio&&['suspended','interrupted'].includes(audio.state)) audioStart();
  },{passive:true});
  window.addEventListener('storage',event=>{
    if(event.key!==KEY&&event.key!==null) return;
    const latest=store.read();
    if(latest.save) save=latest.save;
    showSaveStatus(saveMessages[latest.status]??'');
    renderCredits();
    if(!race) (page==='garage-page'?renderCar:renderTrack)();
  });
  document.querySelectorAll('[data-key]').forEach(button => {
    button.onpointerdown = event => {
      event.preventDefault();
      button.setPointerCapture(event.pointerId);
      touches.set(event.pointerId, button.dataset.key);
      button.classList.add('held');
    };
    const release = event => {
      touches.delete(event.pointerId);
      button.classList.toggle('held', [...touches.values()].includes(button.dataset.key));
    };
    button.onlostpointercapture=release;
    button.onpointercancel=release;
    button.onpointerup=release;
  });
  const resize = new ResizeObserver(() => {
    if (race) {
      lastMap=-1;
      renderHud();
      KartRender.raceFrame($('race-canvas'), race);
    }
    else {
      drawCards();
      if (page === 'garage-page') renderCar();
    }
  });
  resize.observe(document.body);
  resize.observe($('race-screen'));
  compactRace.addEventListener('change',()=>{
    clearKeys();
    lastRaceRender=-Infinity;
  });
  renderCredits();
  showSaveStatus(saveMessages[startup.status]??'');
  switchPage(page);
  queueFrame();
})();
