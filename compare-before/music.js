(() => {
  'use strict';
  const tracks={
    garage:{name:'发车前 · 复古放克',bpm:110,key:45,chords:[0,5,7,5],wave:'triangle',lead:[12,16,19,21,19,16,14,7],swing:.043},
    sunset:{name:'红岩冲刺 · 街机摇滚',bpm:154,key:40,chords:[0,3,8,10],wave:'sawtooth',lead:[12,19,17,15,12,15,22,19],swing:0},
    coast:{name:'海风折线 · 清爽电子',bpm:128,key:48,chords:[0,7,9,5],wave:'triangle',lead:[12,16,19,23,21,19,16,14],swing:.021},
    city:{name:'午夜追车 · 合成器浪潮',bpm:143,key:42,chords:[0,8,3,10],wave:'square',lead:[12,15,19,22,19,24,22,17],swing:0},
  };
  const options=[['auto','随赛道'],...Object.entries(tracks).map(([id,track])=>[id,track.name]),['off','关闭']];
  function make(audio) {
    const mix=audio.createGain();
    mix.gain.value=.53;
    mix.connect(audio.destination);
    const noise=audio.createBuffer(1,Math.round(audio.sampleRate*.19),audio.sampleRate);
    const data=noise.getChannelData(0);
    for(let i=0;i<data.length;i++) data[i]=Math.random()*2-1;
    let playing=null;
    let start=0;
    let position=0;
    let bus=null;
    const hz=note=>440*2**((note-69)/12);
    function tone(type,frequency,end,at,length,volume,cutoff=2600) {
      const source=audio.createOscillator();
      const filter=audio.createBiquadFilter();
      const gain=audio.createGain();
      filter.frequency.value=cutoff;
      source.type=type;
      source.frequency.setValueAtTime(frequency,at);
      source.frequency.exponentialRampToValueAtTime(end,at+length*.72);
      gain.gain.setValueAtTime(.0001,at);
      gain.gain.linearRampToValueAtTime(volume,at+.008);
      gain.gain.exponentialRampToValueAtTime(.0001,at+length);
      source.connect(filter).connect(gain).connect(bus);
      source.start(at);
      source.stop(at+length+.015);
    }
    function percussion(at,kind) {
      const source=audio.createBufferSource();
      const filter=audio.createBiquadFilter();
      const gain=audio.createGain();
      const hat=kind==='hat';
      source.buffer=noise;
      filter.type=hat?'highpass':'bandpass';
      filter.frequency.value=hat?6100:1560;
      gain.gain.setValueAtTime(hat?.023:.064,at);
      gain.gain.exponentialRampToValueAtTime(.0001,at+(hat?.043:.13));
      source.connect(filter).connect(gain).connect(bus);
      source.start(at);
      source.stop(at+(hat?.054:.145));
    }
    function tick() {
      if(!playing||audio.state!=='running') return;
      const track=tracks[playing];
      const subdivision=60/track.bpm/4;
      if(start<audio.currentTime-.05) start=audio.currentTime+.03;
      while(start<audio.currentTime+.12) {
        const step=position%16;
        const bar=Math.floor(position/16)%16;
        const chord=track.chords[bar%4];
        const note=track.key+chord;
        const at=start+(step%2?track.swing:0);
        const racing=playing!=='garage';
        if(step===0||step===8||(racing&&step===10)) tone('sine',116,42,at,.12,.19);
        if(step===4||step===12) percussion(at,'snare');
        if(step%2===0||(bar%4===3&&step>=13)) percussion(at,'hat');
        if([0,3,6,8,11,14].includes(step)) {
          const bass=hz(note-(step===11?5:12)+(step===14?12:0));
          tone('triangle',bass,bass,at,subdivision*1.78,.102,940);
        }
        if(step===0||step===8) for(const interval of [0,7,12]) {
          const frequency=hz(note+12+interval);
          tone('triangle',frequency,frequency,at,subdivision*6,.031,1500);
        }
        if(step%2===0&&(step!==6||bar%2)) {
          const lead=hz(track.key+track.lead[(step/2+Math.floor(bar/4)*2)%8]+(bar%4===3?5:0));
          tone(track.wave,lead,lead,at,subdivision*(step===14?2.2:1.75),playing==='coast'?.078:.059,playing==='city'?1400:2180);
        }
        position++;
        start+=subdivision;
      }
    }
    let scheduler=null;
    function syncScheduler() {
      const shouldRun=playing&&audio.state==='running';
      if(shouldRun&&scheduler===null) {
        tick();
        scheduler=setInterval(tick,42);
      } else if(!shouldRun&&scheduler!==null) {
        clearInterval(scheduler);
        scheduler=null;
      }
    }
    audio.addEventListener('statechange',syncScheduler);
    return {select(id,quiet) {
      const now=audio.currentTime;
      mix.gain.setTargetAtTime(quiet?.24:.53,now,.12);
      if(id===playing) {syncScheduler();return;}
      if(bus) {
        const previous=bus;
        previous.gain.setTargetAtTime(0,now,.028);
        setTimeout(()=>previous.disconnect(),1200);
      }
      playing=tracks[id]?id:null;
      bus=null;
      if(playing) {
        bus=audio.createGain();
        bus.gain.setValueAtTime(.001,now);
        bus.gain.linearRampToValueAtTime(1,now+.22);
        bus.connect(mix);
        start=now+.04;
        position=0;
      }
      syncScheduler();
    }};
  }
  window.KartMusic={options,make};
})();
