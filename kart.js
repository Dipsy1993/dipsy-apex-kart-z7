((root) => {
  'use strict';
  const cars = [
    { id: 'rookie', name: '小闪电', code: 'SPARK', tier: 'C1', kind: '均衡型', style: '经典街机', color: '#c9f74b', trim: '#efffa2', price: 0, max: 76, accel: 35, grip: 1.06, drift: 1.04, body: 0, desc: '短轴距和轻车身，转向直接。适合第一次把漂移连成氮气。' },
    { id: 'rally', name: '沙漠獾', code: 'BADGER', tier: 'E2', kind: '操控型', style: '越野拉力', color: '#ff9255', trim: '#ffe4ad', price: 220, max: 79, accel: 36, grip: 1.30, drift: 1.04, body: 1, desc: '三盏拉力灯、护杠和宽胎。压到路肩后也容易把车拉回来。' },
    { id: 'wave', name: '蓝潮', code: 'RIPTIDE', tier: 'G3', kind: '漂移型', style: '复古改装', color: '#48d6ff', trim: '#b4f4ff', price: 420, max: 82, accel: 37, grip: 1.13, drift: 1.40, body: 2, desc: '宽体轮拱和双条拉花。入弯灵活，五辆车里漂移集气最快。' },
    { id: 'nova', name: '超新星', code: 'SUPERNOVA', tier: 'R4', kind: '极速型', style: '未来原型', color: '#be8fff', trim: '#f0d5ff', price: 680, max: 90, accel: 41, grip: 0.92, drift: 1.21, body: 3, desc: '楔形车头、封闭座舱和双层尾翼。擅长高速路段，入弯要提前准备。' },
    { id: 'falcon', name: '赤隼', code: 'FALCON', tier: 'PRO', kind: '加速型', style: '方程式赛车', color: '#ff576c', trim: '#ffead2', price: 950, max: 87, accel: 48, grip: 1.19, drift: 1.16, body: 4, desc: '长鼻锥、外露悬挂和高位后翼。出弯提速最快，适合连续攻弯。' },
  ];

  const tracks = [
    { id: 'sunset', name: '落日峡谷', code: 'SUNSET CANYON', level: '入门', tip: '宽路肩 · 长弯练漂移', length: 2240, color: '#ff955b', sky: ['#5b526e', '#faac80', '#ffdcb1'], road: ['#30313a', '#373742'], ground: ['#825356', '#8c5956'], bends: [0, 0.1, 1.15, 0.85, 0, -1.28, -0.8, 0.12, 1.30, 0.4, -0.38, 0] },
    { id: 'coast', name: '碧海折线', code: 'TIDELINE', level: '进阶', tip: '跨海窄桥 · 连续反向弯', length: 2530, color: '#52e0ed', sky: ['#245679', '#6ebcc9', '#d5e8ba'], road: ['#293746', '#33414f'], ground: ['#216d7d', '#267987'], bends: [0, -0.4, -1.55, -0.65, 0.7, 1.65, 0.45, -1.55, -1.25, 1.1, 0.55, 0] },
    { id: 'city', name: '午夜回环', code: 'MIDNIGHT LOOP', level: '挑战', tip: '急弯 · 霓虹加速带', length: 2780, color: '#bf91ff', sky: ['#11152b', '#343057', '#925e89'], road: ['#252738', '#2d2d41'], ground: ['#342749', '#3a2d54'], bends: [0, 1.4, 1.75, -0.25, -1.85, -1.1, 1.9, 0.76, -1.7, -1.30, 0.35, 0] },
    {id:'switchback',name:'赤脊九折',code:'RED RIDGE',level:'专家',tip:'连续发卡与反向弯 · 坡上换重心',length:3040,color:'#ffa16e',
      sky:['#415785','#df9b7e'],challenge:{preview:.235,width:.97,margin:.25,corner:.94,sectors:[.24,.50,.75,1],
        sections:[[.18,.39,.09,0],[.48,.67,.11,0]],landmarks:[[.18,'ridge'],[.43,'ridge'],[.68,'ridge']]}},
    {id:'caldera',name:'黑曜深谷',code:'OBSIDIAN CALDERA',level:'专家',tip:'下坡冲刺 · 高速尽头双重刹',length:3310,color:'#ff9753',
      sky:['#201e36','#ab5b54'],challenge:{preview:.435,width:1.03,margin:.26,corner:.90,sectors:[.20,.46,.69,1],
        sections:[[.44,.61,.11,0],[.74,.84,.09,0]],landmarks:[[.22,'mine'],[.43,'mine'],[.60,'mine'],[.77,'mine']]}},
    {id:'ice',name:'冰牙绝壁',code:'FROSTLINE',level:'大师',tip:'窄道冰面 · 刹车距离更长',length:2890,color:'#95e9fb',
      sky:['#4277a4','#d0e9ef'],challenge:{preview:.365,width:1.01,margin:.22,corner:.93,sectors:[.26,.48,.76,1],
        sections:[[.32,.43,.32,.23],[.64,.76,.28,.19]],landmarks:[[.24,'ice'],[.36,'ice'],[.67,'ice'],[.75,'ice']]}},
    {id:'zootopia',name:'动物城·热力追踪',code:'ZOOTOPIA HOT PURSUIT',level:'专家',
      tip:'冰川镇 · 撒哈拉广场 · 雨林区 · 全城追捕',length:3480,color:'#ffb45e',
      sky:['#111b3a','#7f4f78','#ffb27c'],road:['#2b3042','#343a50'],ground:['#35454f','#40525a'],
      bends:[0,.9,1.45,.55,-.55,-1.45,-.9,.65,1.6,-.45,-1.5,-.85,.6,1.35,.35,-.75,0]},
  ];
  const trackLandmarks={
    city:{offices:.623,service:.693,interchange:.867},
    sunset:{strata:.079,arch:.113},
    coast:{headland:.265,bridgeMouth:.355,bridgeFirst:.407,bridgeLast:.526},
    zootopia:{offices:.72,service:.93,interchange:.955},
  };
  const courseLighting={
    city:{
      start:1680,end:2760,zones:[[2595,'ramp'],[2078,'bends'],[1912,'service']],
      lamps:[{from:1912,to:1992,spacing:10.4,warm:true},{from:1992,to:2078,spacing:21,warm:false},
        {from:2630,to:2730,spacing:24,warm:true}],
      signs:[[2100,2176,1],[2290,2392,-1],[2460,2544,1]],
    },
    sunset:{
      start:170,end:1430,zones:[[1050,'bends'],[275,'open'],[222,'arch']],
      lamps:[{from:274,to:332,spacing:31,warm:true}],
      signs:[[1048,1152,-1],[1256,1336,1]],
    },
    coast:{
      start:630,end:1336,zones:[[980,'bridge'],[804,'bridge-mouth']],
      lamps:[{from:804,to:970,spacing:20,warm:true},{from:988,to:1108,spacing:25,warm:false}],
      signs:[[675,728,1],[861,944,1]],
    },
    zootopia:{
      start:120,end:3380,zones:[[120,'savanna'],[540,'tundra'],[1160,'sahara'],[1900,'rainforest'],[2560,'rodentia'],[2900,'skyline']],
      lamps:[{from:150,to:560,spacing:34,warm:true},{from:650,to:1180,spacing:42,warm:true},
        {from:1220,to:1560,spacing:30,warm:false},{from:1700,to:2200,spacing:26,warm:false},
        {from:2280,to:2620,spacing:22,warm:true},{from:2700,to:3260,spacing:36,warm:false}],
      signs:[[340,430,1],[820,930,-1],[1380,1480,1],[1960,2070,-1],[2520,2630,1],[3020,3140,-1]],
    },
  };
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const lerp = (a, b, t) => a + (b - a) * t;
  const wrap = (value, modulus) => ((value % modulus) + modulus) % modulus;
  const HALF_ROAD = 7.25;
  const KART_CLEARANCE = .18;
  const bridgeQueueLane=.49;
  const coastWaterHeight=-12.8;

  function trackVisualCue(track,distance) {
    const route=courseLighting[track.id];
    if(!route) return null;
    const meters=wrap(distance,track.length);
    if(meters<route.start||meters>=route.end) return null;
    const lamps=route.lamps.find(lamp=>meters>=lamp.from&&meters<lamp.to);
    const light=lamps ? .24+.76*(.5+.5*Math.cos((meters-lamps.from)/lamps.spacing*Math.PI*2))**2 : 0;
    const sign=route.signs.find(([from,apex])=>meters>=from&&meters<=apex+12);
    const zone=route.zones.find(([from])=>meters>=from)?.[1]??'approach';
    return {zone,light,warm:Boolean(lamps?.warm),turn:sign?.[2]??0};
  }
  const setups = [
    { feature:'轻量底盘', effect:'转向直接，适合练标准走线', curbLoss:7, brake:54, boostTime:2.5, boostSpeed:26, exit:0 },
    { feature:'长行程悬挂', effect:'压路肩掉速更少，重刹更稳', curbLoss:2.5, brake:65, boostTime:2.5, boostSpeed:27, exit:0 },
    { feature:'漂移差速器', effect:'长弯更容易维持滑移并集气', curbLoss:5, brake:59, boostTime:2.6, boostSpeed:27, exit:0 },
    { feature:'长效氮气', effect:'喷射更久，适合把氮气留到长直道', curbLoss:9, brake:56, boostTime:3.3, boostSpeed:34, exit:0 },
    { feature:'出弯增扭', effect:'收尾时踩油门，短时增强牵引和加速', curbLoss:6, brake:64, boostTime:2.8, boostSpeed:28, exit:13 },
  ];
  for (const car of cars) car.setup = setups[car.body];
  const originalCars=cars.slice();
  const legacyCars=new Map(originalCars.map(car=>[car.id,{...car}]));
  const tiers=['C1','E2','G3','R4','PRO','SR','Z7'];
  const tierColors={C1:'#c9f74b',E2:'#ffac72',G3:'#59d8ff',R4:'#cba2ff',PRO:'#ff8796',SR:'#84f0ee',Z7:'#efba83'};
  const classInfo={
    C1:{name:'新秀',en:'CLUB',desc:'轻量入门 · 第一次漂移'},
    E2:{name:'进阶',en:'EVO',desc:'第一套空力 · 更宽的轮距'},
    G3:{name:'竞速',en:'GT',desc:'完整包围 · 街道竞速'},
    R4:{name:'高性能',en:'RACE',desc:'长尾与尾翼 · 高速稳定'},
    PRO:{name:'专业',en:'PRO',desc:'厂队规格 · 出弯牵引'},
    SR:{name:'超跑',en:'SUPER',desc:'原型动力 · 氮气延伸'},
    Z7:{name:'旗舰',en:'ZENITH',desc:'终极形态 · 主动空力'},
  };
  const familyInfo={
    rookie:{name:'闪电',en:'BOLT',tag:'均衡 · 街道'},
    rally:{name:'荒漠',en:'DUNE',tag:'拉力 · 抓地'},
    wave:{name:'蓝潮',en:'TIDE',tag:'漂移 · 集气'},
    nova:{name:'星核',en:'NOVA',tag:'极速 · 直道'},
    falcon:{name:'赤隼',en:'FALCON',tag:'加速 · 出弯'},
  };
  const familyNames={
    rookie:['小闪电','电光','雷纹','疾电','雷霆','闪电环','天穹'],
    rally:['沙漠獾','沙暴','岩牙','荒原','獾王','巨岩','荒神'],
    wave:['蓝潮','潮汐','浪刃','深流','涡流','深海','环翼'],
    nova:['超新星','星尘','脉冲','星环','新星','星核','星冕'],
    falcon:['赤隼','隼影','赤翼','猎风','隼王','天隼','赤霄'],
  };
  // [body paint, family accent]. The class color is applied to trim/rims
  // separately so every model reads as "family × class".
  const familyPalettes={
    rookie:[['#d9ff5a','#f2ffd0'],['#c2f23a','#efffc0'],['#9ee32a','#e6ffd9'],['#c9f74b','#f7ffcf'],['#e6ff8a','#fffbe0'],['#d6ffd0','#b9ffe8'],['#f4ffbf','#bff7ff']],
    rally:[['#ff9255','#ffe4ad'],['#ff7f3d','#ffe0c0'],['#e96a2f','#ffd4b0'],['#ffb066','#ffe8cc'],['#ff8a5c','#ffd9c2'],['#ffc38a','#fff0d9'],['#ffd7a8','#fff6e8']],
    wave:[['#48d6ff','#b4f4ff'],['#32c2f0','#a8f0ff'],['#1fa8df','#8ceaff'],['#5fe0ff','#c8f8ff'],['#7de8ff','#d6fbff'],['#a8f4ff','#e6ffff'],['#1b4f8f','#73f6ff']],
    nova:[['#be8fff','#f0d5ff'],['#a86ff0','#e6c8ff'],['#9a5ae0','#d9b0ff'],['#c99cff','#efd9ff'],['#d8b4ff','#f6e6ff'],['#e6cfff','#fff2ff'],['#4a2a78','#f2afff']],
    falcon:[['#ff576c','#ffead2'],['#e8445a','#ffd9c0'],['#d9344f','#ffc8b8'],['#ff7080','#ffe0d0'],['#ff8a96','#ffe8da'],['#ffb0b8','#fff0e6'],['#7a1f34','#ffd08a']],
  };

  const counts=[1,2,3,4,6,7,8];
  const bodyStyles={
    rookie:['裸露管架','包边车壳','双进气后肩','桥式尾翼','高翼与贯穿尾灯'],
    rally:['窄护杠','高轮拱与宽胎','后桥护板','笼式双护杠','备胎背架与高护杠'],
    wave:['短尾与鸭尾','宽轮距与侧裙','宽体与扩散器','长尾与分层翼','紧凑尾部与双层高翼'],
    nova:['窄楔形车身','外扩导流槽','封闭轮罩','长尾原型车','脊鳍与悬浮式双层翼'],
    falcon:['裸露悬挂','前翼端板','深侧箱与导流片','宽体双层前翼','高位尾翼与开槽端板'],
  };
  const rearWidths=[
    [.62,.73,.83,.91,1.00],[.70,.81,.89,.96,1.03],[.70,.79,.86,.93,1.02],
    [.64,.76,.85,.94,1.04],[.54,.66,.77,.85,.92],
  ];
  // Length, half width and height are in model units. The rear wheels stay on
  // the same axle while the bodywork grows around them.
  const waveBodywork=[
    {tail:[1.34,.58,.55],nose:[1.43,.47,.42],shoulder:[.93,0,0],sidepod:[.67,.12,.105,.78],cockpit:[.39,.95,.83]},
    {tail:[1.55,.86,.61],nose:[1.53,.61,.44],shoulder:[1.00,.31,.74],sidepod:[.83,.21,.23,1.51],cockpit:[.46,.91,1.02]},
    {tail:[1.64,1.02,.68],nose:[1.58,.72,.43],shoulder:[.96,.36,.87],sidepod:[.88,.24,.25,1.68],cockpit:[.48,.86,1.19]},
    {tail:[1.91,1.00,.49],nose:[1.67,.66,.35],shoulder:[.96,.35,.72],sidepod:[.84,.22,.15,1.89],cockpit:[.43,.76,1.29]},
    {tail:[1.55,.84,.62],nose:[1.74,.63,.37],shoulder:[.99,.33,.79],sidepod:[.84,.19,.25,1.40],cockpit:[.38,.87,.98]},
  ];
  const bodyworkByFamily={
    wave:waveBodywork,
    rookie:[
      {tail:[1.35,.45,.54],nose:[1.39,.42,.43],shoulder:[.97,0,0],sidepod:[.65,.09,.04,.87],cockpit:[.32,.66,.68]},
      {tail:[1.50,.56,.57],nose:[1.51,.48,.39],shoulder:[.91,.17,.63],sidepod:[.72,.17,.14,1.26],cockpit:[.36,.69,.79]},
      {tail:[1.58,.81,.63],nose:[1.60,.55,.40],shoulder:[.97,.28,.77],sidepod:[.78,.21,.21,1.46],cockpit:[.39,.74,.93]},
      {tail:[1.79,.89,.52],nose:[1.68,.62,.36],shoulder:[.99,.30,.66],sidepod:[.80,.19,.14,1.75],cockpit:[.38,.68,.99]},
      {tail:[1.67,.69,.65],nose:[1.68,.55,.44],shoulder:[1.01,.29,.83],sidepod:[.68,.16,.11,1.24],cockpit:[.32,.79,.87]},
    ],
    rally:[
      {tail:[1.42,.58,.63],nose:[1.55,.54,.56],shoulder:[.98,.16,.76],sidepod:[.76,.15,.13,1.16],cockpit:[.41,.79,.86]},
      {tail:[1.59,.77,.69],nose:[1.66,.67,.58],shoulder:[1.03,.29,.96],sidepod:[.84,.21,.21,1.45],cockpit:[.47,.86,1.04]},
      {tail:[1.61,.58,.66],nose:[1.70,.70,.65],shoulder:[1.03,.34,1.08],sidepod:[.86,.24,.23,1.67],cockpit:[.45,1.02,1.22]},
      {tail:[1.79,.95,.70],nose:[1.77,.76,.59],shoulder:[1.02,.29,1.03],sidepod:[.89,.24,.31,1.92],cockpit:[.46,1.00,1.06]},
      {tail:[1.80,.76,.84],nose:[1.69,.64,.71],shoulder:[1.02,.31,1.10],sidepod:[.83,.28,.35,1.59],cockpit:[.52,1.14,1.27]},
    ],
    nova:[
      {tail:[1.49,.59,.48],nose:[1.74,.24,.33],shoulder:[.95,.18,.64],sidepod:[.72,.12,.12,.92],cockpit:[.37,.99,.91]},
      {tail:[1.59,.73,.52],nose:[1.77,.31,.35],shoulder:[.97,.22,.65],sidepod:[.90,.24,.23,1.54],cockpit:[.43,1.05,1.08]},
      {tail:[1.66,.96,.60],nose:[1.71,.35,.38],shoulder:[.98,.35,.81],sidepod:[.92,.25,.28,1.70],cockpit:[.48,.94,1.25]},
      {tail:[1.95,1.00,.48],nose:[1.79,.40,.31],shoulder:[.96,.35,.71],sidepod:[.89,.27,.18,1.96],cockpit:[.44,.82,1.34]},
      {tail:[1.75,.86,.64],nose:[1.81,.33,.39],shoulder:[1.00,.33,.86],sidepod:[.92,.28,.27,1.57],cockpit:[.39,.94,1.18]},
    ],
    falcon:[
      {tail:[1.44,.36,.56],nose:[1.73,.22,.43],shoulder:[.99,0,0],sidepod:[.57,.12,.05,.67],cockpit:[.32,.73,.70]},
      {tail:[1.56,.48,.59],nose:[1.77,.34,.36],shoulder:[1.00,0,0],sidepod:[.62,.15,.16,1.18],cockpit:[.36,.78,.82]},
      {tail:[1.67,.48,.65],nose:[1.73,.32,.42],shoulder:[1.00,0,0],sidepod:[.76,.31,.35,1.89],cockpit:[.39,.89,1.05]},
      {tail:[1.79,.45,.53],nose:[1.81,.27,.33],shoulder:[1.00,0,0],sidepod:[.79,.24,.25,1.87],cockpit:[.38,.72,1.14]},
      {tail:[1.74,.59,.68],nose:[1.84,.30,.39],shoulder:[1.00,0,0],sidepod:[.75,.30,.36,1.61],cockpit:[.41,.83,.98]},
    ],
  };
  const parts={
    exhaust:{name:'排气',prices:[0,150,310]},
    suspension:{name:'悬挂',prices:[0,120,260]},
    differential:{name:'差速器',prices:[0,140,290]},
  };
  const waveGenerations=[
    [240,76,35,1.16,1.13,'短尾底盘','紧凑短尾和薄鸭尾，适合练习基本走线。'],
    [340,79,36,1.20,1.23,'加宽后轮','宽后轮和侧裙让滑移更稳定。'],
    [420,82,37,1.13,1.40,'漂移差速器','宽体后翼子板和扩散器，擅长长弯集气。'],
    [640,87,40,1.10,1.43,'长效氮气','低车身和分层尾翼，出弯后适合在长直道开氮气。'],
    [900,89,44,1.17,1.48,'出弯增扭','双层翼和深扩散器，漂移回正后给油触发增扭。'],
  ];

  function addFamily(family,originalLevel,generations,inheritedSetups,tuningByLevel=[]) {
    const base=originalCars.find(car=>car.id===family);
    generations.forEach(([price,max,accel,grip,drift,feature,desc],generation)=>{
      const existing=generation===originalLevel;
      const car=existing?base:{...base,id:family+'-'+tiers[generation].toLowerCase()};
      const inherited=inheritedSetups[generation];
      const design={title:bodyStyles[family][generation],rearWidth:rearWidths[base.body][generation],
        bodywork:bodyworkByFamily[family]?.[generation],
        rearZ:[-1.48,-1.59,-1.68,-1.73,-1.79][generation]};
      const palette=familyPalettes[family]?.[generation]??[car.color,car.trim];
      const paint=palette[0],accent=palette[1];
      Object.assign(car,{family,generation,tier:tiers[generation],price,max,accel,grip,drift,desc,
        name:familyNames[family]?.[generation]??car.name,paint,accent,color:paint,
        trim:tierColors[tiers[generation]]??car.trim,style:familyInfo[family]?.tag??car.style,
        design,setup:{...setups[inherited],...tuningByLevel[generation],feature,effect:desc}});
      if(!existing) cars.push(car);
    });
  }
  addFamily('wave',2,waveGenerations,[0,0,2,3,4]);
  addFamily('rally',1,[
    [150,75,34,1.17,1.00,'拉力底盘','裸露底盘和窄护杠，转向直接。'],
    [220,79,36,1.30,1.04,'长行程悬挂','长行程减震和宽胎，压路肩掉速更少。'],
    [450,82,38,1.32,1.07,'后桥护板','后桥护板和宽轮距，重刹时减速更快。'],
    [670,85,41,1.33,1.10,'加强护杠','加强前后护杠，擦碰护栏后的减速时间更短。'],
    [930,86,44,1.36,1.12,'出弯牵引','外露独立减震和高护杠，重刹或漂移收尾后给油可触发增扭。'],
  ],[0,1,1,1,4],[
    {curbLoss:4.8,brake:57},{curbLoss:2.5,brake:65},{curbLoss:2.25,brake:69},
    {curbLoss:2.0,brake:70,railRecovery:.76},{curbLoss:1.85,brake:72,exit:15,railRecovery:.68},
  ]);
  addFamily('rookie',0,[
    [0,76,35,1.06,1.04,'轻量底盘','短轴距，适合练习标准走线。'],
    [190,78,37,1.12,1.09,'抓地轮胎','转向更稳，适合连续小弯。'],
    [385,81,39,1.16,1.17,'弯中平衡','漂移更易维持，集气更快。'],
    [625,86,41,1.14,1.20,'直道储备','延长氮气，适合长直道。'],
    [890,89,45,1.18,1.24,'轻量高翼','漂移回正后加速更快。'],
  ],[0,0,2,3,4],[{}, {curbLoss:6,brake:57},{curbLoss:5.4,brake:59},{curbLoss:5.3,boostTime:2.94,boostSpeed:30},{exit:10,curbLoss:5.1}]);
  addFamily('nova',3,[
    [175,77,34,1.01,1.06,'楔形底盘','低坐姿和窄车体，适合练习高速入弯。'],
    [280,80,36,.99,1.10,'侧箱导流','两侧扩大的进气槽，氮气推力提高。'],
    [440,84,39,.96,1.16,'低阻轮罩','封闭式后轮罩，擅长持续加速。'],
    [680,90,41,.92,1.21,'长效氮气','长尾、封闭座舱和分层尾翼，擅长高速路段。'],
    [975,94,43,.94,1.24,'长直道极速','大尾翼和中央脊鳍，氮气极速与喷射时长提高。'],
  ],[0,0,2,3,3],[{boostSpeed:28},{boostSpeed:29},{boostSpeed:31},{},{boostTime:3.45,boostSpeed:36}]);
  addFamily('falcon',4,[
    [180,74,39,1.11,1.02,'方程式底盘','外露轮胎和悬挂，油门响应直接。'],
    [295,77,41,1.13,1.06,'前翼端板','前翼加宽，适合在入弯前调整车头。'],
    [470,80,43,1.16,1.10,'宽体侧箱','低侧箱与导流片，连续弯更稳定。'],
    [705,84,46,1.17,1.13,'短时增扭','漂移收尾后给油能更快拉回速度。'],
    [950,87,48,1.19,1.16,'出弯增扭','高位开槽尾翼，出弯提速最快。'],
  ],[0,0,2,4,4],[{brake:56},{brake:59},{brake:62},{exit:8,boostTime:2.64},{}]);

  const flagshipFamilies={
    rookie:[
      ['双翼突击',1280,92,49,1.23,1.30,'#58692a','#d9f870',{boostTime:3.05,boostSpeed:29,brake:67,exit:14}],
      ['闪电环翼',1880,94,53,1.28,1.34,'#334031','#e6ff95',{boostTime:3.28,boostSpeed:32,brake:70,exit:18}],
    ],
    rally:[
      ['双舱护架',1330,88,48,1.40,1.14,'#ae542e','#ffb56d',{boostTime:3.00,boostSpeed:28,brake:76,exit:18,curbLoss:1.4,railRecovery:.63}],
      ['重装环笼',1940,90,51,1.44,1.16,'#713929','#ffca81',{boostTime:3.16,boostSpeed:30,brake:80,exit:22,curbLoss:1.05,railRecovery:.55}],
    ],
    wave:[
      ['深潮双翼',1300,93,47,1.20,1.55,'#176e93','#70fbff',{boostTime:3.38,boostSpeed:33,exit:16,brake:66}],
      ['深海环翼',1920,95,50,1.22,1.62,'#163e72','#ac91ff',{boostTime:3.55,boostSpeed:35,exit:21,brake:70}],
    ],
    nova:[
      ['双脊光刃',1390,97,46,.98,1.26,'#493380','#c996ff',{boostTime:3.60,boostSpeed:38,brake:60}],
      ['星环原型',2030,100,50,1.01,1.30,'#372452','#f2afff',{boostTime:3.78,boostSpeed:40,brake:64}],
    ],
    falcon:[
      ['分体飞翼',1360,91,53,1.23,1.19,'#a92838','#ff8266',{boostTime:2.98,boostSpeed:30,exit:19,brake:68}],
      ['闭环方程式',2000,94,58,1.27,1.24,'#651d34','#ffb294',{boostTime:3.14,boostSpeed:32,exit:25,brake:72}],
    ],
  };
  const flagshipDescriptions={
    rookie:['分体尾翼和轻量罩壳，回正后给油更快。','带导流环的轻量尾部，兼顾出弯提速和直道续航。'],
    rally:['双护架、外露减震和分体排气舱，压肩掉速更小。','后备胎藏入环笼，重刹后给油能更快找回牵引。'],
    wave:['分体喷射舱和长翼，漂移集气后可用更长的氮气。','低座舱、双芯喷射和悬空环翼，擅长漂移回正后的增扭。'],
    nova:['双脊和加长尾壳，氮气持续更久。','楔形车头与贯通环翼，五车系中直道极速最高。'],
    falcon:['外露悬挂配分体飞翼，出弯补油响应更快。','环翼、深侧箱与分段尾灯，五车系中出弯增扭最强。'],
  };
  for(const [family,stages] of Object.entries(flagshipFamilies)) {
    const pro=carFamily(family)[4];
    for(const [index,[title,price,max,accel,grip,drift,paint,accent,tune]] of stages.entries()) {
      const generation=5+index;
      const tier=tiers[generation];
      const desc=flagshipDescriptions[family][index];
      const previous=pro.design.bodywork;
      const shellWidth=pro.design.rearWidth+(index?.024:.012);
      const bodywork={...previous,tail:[index?1.59:1.86,previous.tail[1]+(index?.03:.07),index?.61:.56],
        cockpit:[previous.cockpit[0]*.94,previous.cockpit[1]-.062,previous.cockpit[2]*(index?.94:1.12)]};
      cars.push({...pro,id:`${family}-x${index+1}`,tier,generation,price,max,accel,grip,drift,desc,
        name:familyNames[family]?.[generation]??pro.name,paint,accent,color:paint,
        trim:tierColors[tier]??pro.trim,style:familyInfo[family]?.tag??pro.style,
        design:{title,rearWidth:shellWidth,bodywork,rearZ:index?-1.78:-1.83},
        setup:{...pro.setup,...tune,feature:title,effect:desc},flagship:{stage:index+1,paint,accent}});
    }
  }

  function carFamily(id) {
    return cars.filter(car=>car.family===id).sort((a,b)=>a.generation-b.generation);
  }

  const bodySectionShape=[[-1,-.48],[-1,.17],[-.89,.36],[-.67,.50],[.67,.50],[.89,.36],[1,.17],[1,-.48],[.76,-.55],[-.76,-.55]];
  const waveAero=[
    {wing:[-1.62,.99,.93,.32],tail:[-1.68,.79,.64],tip:.12,arch:0},
    {wing:[-1.98,1.11,.82,.48],tail:[-1.94,.90,.49],tip:.23,arch:.035},
    {wing:[-1.69,1.13,1.38,.32],tail:[-1.59,.68,.64],tip:.24,arch:.095,lower:.98},
  ];
  // Each set adds surfaces around the original wheel, wing and intake mounts.
  const familyEvolution={
    rookie:[
      [['matte',.92,[[-1.57,.14,.67,.12],[-1.39,.16,.72,.16],[-1.24,.12,.72,.14]]]],
      [['paint',.79,[[-1.78,.16,.49,.18],[-1.39,.23,.58,.21],[-.90,.16,.54,.14]]],
        ['trim',.86,[[-1.76,.11,.66,.076],[-1.46,.13,.70,.098],[-1.34,.12,.67,.082]]]],
      [['paint',.96,[[-1.45,.20,.59,.21],[-1.21,.25,.78,.21],[-.74,.13,.80,.10]]],
        ['tail',0,[[-1.72,.65,.62,.026],[-1.69,.66,.63,.031]]]],
    ],
    rally:[
      [['titanium',.71,[[-1.77,.20,.36,.18],[-1.56,.23,.42,.20],[-1.31,.15,.49,.13]]]],
      [['trim',.93,[[-1.79,.10,.72,.36],[-1.64,.13,.83,.36],[-1.36,.12,.94,.21]]],
        ['matte',.77,[[-1.86,.15,.49,.11],[-1.64,.18,.56,.17],[-1.49,.17,.63,.14]]]],
      [['titanium',.68,[[-1.87,.19,.53,.27],[-1.71,.24,.66,.37],[-1.37,.18,.76,.27]]],
        ['trim',.93,[[-1.78,.11,.79,.20],[-1.62,.15,.95,.25],[-1.33,.14,1.02,.13]]]],
    ],
    nova:[
      [['paint',.93,[[-1.57,.24,.66,.21],[-1.10,.29,.80,.22],[-.61,.17,.83,.13]]]],
      [['matte',.74,[[-1.97,.15,.45,.16],[-1.83,.20,.55,.12],[-1.45,.24,.56,.19]]],
        ['paint',.90,[[-1.89,.12,.66,.13],[-1.65,.16,.65,.15],[-1.31,.18,.72,.15]]]],
      [['trim',0,[[-1.78,.83,.96,.053],[-1.55,.85,.99,.066],[-1.31,.77,.99,.050]]],
        ['paint',.98,[[-1.79,.036,1.19,.32],[-1.59,.051,1.23,.34],[-1.29,.032,1.18,.17]]]],
    ],
    falcon:[
      [['matte',.77,[[-1.43,.20,.46,.21],[-1.17,.25,.55,.29],[-.77,.18,.52,.18]]]],
      [['titanium',.69,[[-1.82,.061,.31,.21],[-1.48,.092,.36,.24],[-1.14,.057,.40,.17]]],
        ['paint',.80,[[1.33,.15,.43,.11],[1.54,.17,.42,.13],[1.76,.13,.38,.10]]]],
      [['paint',.91,[[-1.88,.038,1.25,.20],[-1.65,.045,1.28,.21],[-1.40,.036,1.24,.17]]],
        ['paint',.91,[[-1.84,.039,.86,.23],[-1.60,.046,.88,.21],[-1.39,.033,1.04,.12]]],
        ['titanium',.50,[[-1.88,.063,.21,.16],[-1.61,.078,.27,.20],[-1.38,.053,.30,.16]]]],
    ],
  };

  function bodyPanels(car) {
    const design=car.oldArt||car.oldGeometry?null:car.design?.bodywork;
    if(!design) return [];
    const {tail:[tail,deck,deckY],nose:[nose,chin,noseY],shoulder:[axle,fender,crown],
      sidepod:[side,span,depth,length],cockpit:[cab,roof,cabLength]}=design;
    const panels=[
      ['paint',0,[[-tail,deck*.89,deckY-.05,.21],[-tail+.22,deck,deckY,.29],[-.67,deck*.87,deckY+.035,.33],
        [.13,chin*.95,noseY+.12,.32],[nose-.40,chin,noseY+.045,.25],[nose,chin*.76,noseY-.026,.15]]],
      [['wave','nova'].includes(car.family)?'glass':'matte',0,[[-.42-cabLength*.57,cab*.93,roof-.25,.12],[-.36-cabLength*.35,cab,roof-.12,.30],
        [-.34+cabLength*.12,cab*.89,roof-.12,.31],[-.34+cabLength*.53,cab*.68,roof-.27,.19]]],
    ];
    if(car.family!=='wave') {
      panels.push(['trim',0,[[.08,deckY+.085,0,.012],[.42,noseY+.13,0,.012],[nose-.36,noseY+.065,0,.011],[nose-.02,noseY-.01,0,.007]]]);
    }
    for(const sign of [-1,1]) {
      if(depth>.04) {
        panels.push(['matte',sign*side,[[-length*.56,span*.79,.37,depth*.85],[-length*.37,span,.35,depth],
          [length*.42,span*.94,.34,depth],[length*.53,span*.72,.36,depth*.56]]]);
        panels.push(['paint',sign*side,[[-length*.54,span*.71,.43,depth*.63],[-length*.34,span,.43+depth*.29,depth],
          [length*.23,span*.91,.43+depth*.22,depth],[length*.53,span*.63,.41,depth*.51]]]);
      }
      if(fender>.04) {
        panels.push(['matte',sign*axle,[[-1.48,fender*.64,crown-.25,.14],[-1.15,fender*.94,crown-.17,.19],[-.75,fender*.88,crown-.19,.17],[-.49,fender*.53,crown-.25,.13]]]);
        panels.push(['paint',sign*axle,[[-Math.min(tail,1.59),fender*.57,crown-.15,.17],[-1.29,fender*.89,crown-.05,.21],
          [-1.00,fender,crown,.23],[-.69,fender*.91,crown-.05,.20],[-.38,fender*.45,crown-.20,.105]]]);
      }
      if(car.family==='wave') {
        const stripe=sign*.24;
        const stripeWidth=.057;
        panels.push(['trim',stripe,[[-tail+.035,stripeWidth,deckY+.073,.008],[-tail+.22,stripeWidth,deckY+.147,.009],
          [-.76,stripeWidth,deckY+.184,.009]]]);
        panels.push(['trim',stripe,[[.18,stripeWidth,noseY+.282,.009],[nose-.40,stripeWidth,noseY+.174,.009],
          [nose-.025,stripeWidth,noseY+.056,.009]]]);
      }
      if(car.family==='nova'&&car.generation>0) {
        const duct=sign*(side+span*.52);
        panels.push(['matte',duct,[[-length*.48,.052,.48+depth*.55,.075],[-length*.15,.07,.47+depth*.54,.081],
          [length*.36,.033,.46+depth*.4,.052]]]);
      }
      if(car.family==='rookie'&&car.generation===2) {
        panels.push(['matte',sign*(axle+.01),[[-1.49,.105,crown-.045,.115],[-1.35,.12,crown-.01,.12],[-1.23,.075,crown+.024,.079]]]);
      }
    }
    if(car.generation===2&&car.family==='rally') {
      panels.push(['titanium',0,[[-1.83,.26,.33,.19],[-1.68,.35,.36,.26],[-1.39,.38,.39,.25]]]);
      for(const side of [-1,1]) {
        panels.push(['trim',side*.89,[[-1.60,.12,.82,.14],[-1.37,.19,1.00,.15],[-1.03,.18,1.115,.083],[-.68,.10,.98,.062]]]);
        panels.push(['matte',side*.72,[[-1.66,.12,.62,.16],[-1.50,.13,.64,.17],[-1.39,.11,.74,.10]]]);
        panels.push(['tail',side*.76,[[-1.685,.092,.655,.09],[-1.66,.094,.66,.09]]]);
      }
    }
    if(car.generation===2&&car.family==='falcon') {
      panels.push(['paint',0,[[-1.80,.93,1.16,.10],[-1.57,.91,1.19,.10],[-1.40,.83,1.13,.07]]]);
      panels.push(['trim',0,[[-1.811,.89,1.164,.044],[-1.80,.90,1.19,.038]]]);
      for(const side of [-1,1]) {
        panels.push(['matte',side*.54,[[-1.69,.038,.91,.47],[-1.52,.05,.90,.48],[-1.42,.035,.85,.42]]]);
        panels.push(['paint',side*.92,[[-1.82,.038,1.10,.24],[-1.55,.041,1.13,.24],[-1.40,.032,1.13,.15]]]);
        panels.push(['titanium',side*.37,[[-1.78,.036,.225,.22],[-1.53,.047,.25,.22],[-1.24,.031,.29,.13]]]);
      }
    }
    if(car.aero) {
      const {wing:[rear,width,height,chord],tail:[cap,capWidth,capY],tip,arch,lower}=car.aero;
      panels.push(['matte',0,[[rear,width,height,.08],[rear+chord*.55,width-.026,height-.026,.112],
        [rear+chord,width-.105,height-.062,.062]]]);
      panels.push(['trim',0,[[rear-.009,width-.035,height+.032,.023],[rear+.044,width-.038,height+.038,.019]]]);
      if(lower) {
        panels.push(['paint',0,[[rear-.025,width*.89,lower,.082],[rear+chord*.53,width*.86,lower-.032,.094],
          [rear+chord+.07,width*.80,lower-.082,.053]]]);
        panels.push(['paint',0,[[cap+.02,.047,.76,.20],[cap+.28,.073,.88,.34],[-.70,.069,.92,.35],[-.39,.035,.82,.11]]]);
      }
      for(const side of [-1,1]) {
        panels.push(['paint',side*(width-.026),[[rear-.026,.038,height-.041,tip],[rear+chord*.62,.044,height-.05,tip*.90],
          [rear+chord+.05,.033,height-.084,tip*.54]]]);
        const support=side*(lower?.66:.65);
        panels.push(['titanium',support,[[rear+.090,.043,(capY+height)*.49,height-capY+.075],
          [rear+chord*.70,.056,(capY+height)*.49,height-capY+.045],[rear+chord+.12,.041,capY+.053,.13]]]);
        panels.push(['matte',side*capWidth*.70,[[cap-.029,capWidth*.33,capY-.041,.19],
          [cap+.034,capWidth*.36,capY-.018,.20],[cap+.22,capWidth*.31,capY+.006,.15]]]);
        panels.push(['tail',side*capWidth*.76,[[cap-.041,capWidth*.22,capY+.014,.034],
          [cap-.016,capWidth*.23,capY+.024,.038]]]);
        if(arch) panels.push(['paint',side*.98,[[cap+.24,.245,.58+arch,.15],[-1.32,.31,.75+arch,.20],
          [-.95,.29,.77+arch,.17],[-.62,.17,.59+arch,.13]]]);
      }
      if(lower) panels.push(['tail',0,[[cap-.038,.43,capY+.042,.029],[cap-.010,.44,capY+.047,.031]]]);
    }
    for(const [finish,offset,sections] of car.evolution??[]) {
      panels.push([finish,offset,sections]);
      if(offset) panels.push([finish,-offset,sections]);
    }
    if(car.flagship) addFlagshipPanels(panels,car);
    return panels;
  }

  function addFlagshipPanels(panels,car) {
    const ring=car.flagship.stage===2;
    const wide=car.family==='rally';
    const move=wide?.075:0;
    const frames={rookie:1.05,rally:1.53,wave:1.37,nova:1.24,falcon:1.10};
    const top=ring?(car.tailRig?frames[car.family]:wide?1.55:1.47):(wide?1.20:1.13);
    for(const side of [-1,1]) {
      const pod=side*(wide?.77:.74);
      const outer=side*(wide?.96:.93);
      panels.push(['paint',pod,[[ring?-1.64:-1.87,.20,.52+move,.27],[-1.50,.27,.65+move,.34],[-1.12,.28,.75+move,.31],[-.69,.17,.63,.20]]]);
      panels.push(['matte',pod,[[-1.85,.19,.36+move,.27],[-1.63,.24,.45+move,.31],[-1.20,.20,.54+move,.28]]]);
      panels.push(['titanium',outer,[[-1.65,.085,top-.35,.59],[-1.40,.13,top-.38,.65],[-1.00,.075,.82+move,.32]]]);
      panels.push(['paint',outer,[[-1.70,.092,top-.07,.31],[-1.44,.12,top-.04,.37],[-1.02,.08,top-.26,.23]]]);
      if(!ring&&!car.tailRig) panels.push(['paint',side*.67,[[-1.85,.46,top,.095],[-1.54,.47,top-.025,.117],[-1.19,.31,top-.10,.067]]]);
      panels.push(['accent',pod,[[-1.877,.15,.57+move,.055],[-1.85,.16,.59+move,.059],[-1.70,.16,.66+move,.036]]]);
      panels.push(['tail',side*.57,[[-1.866,.25,.48+move,.025],[-1.833,.25,.49+move,.033]]]);
    }
    if(ring) {
      if(!car.tailRig||car.family==='rally') {
        panels.push(['paint',0,[[-1.69,1.04,top,.15],[-1.45,1.066,top+.066,.16],[-1.13,.86,top-.08,.087]]]);
        panels.push(['accent',0,[[-1.705,1.03,top+.006,.041],[-1.664,1.04,top+.032,.037]]]);
      }
      if(!car.tailRig||car.family==='wave'||car.family==='rally') {
        panels.push(['matte',0,[[-1.74,.75,.88,.11],[-1.40,.85,.90,.12],[-1.13,.76,.83,.079]]]);
      }
      panels.push(['tail',0,[[-1.800,.39,.54+move,.028],[-1.779,.39,.55+move,.024]]]);
    }
    if(car.family==='rally') {
      panels.push(['titanium',0,[[-1.88,.93,.31,.146],[-1.71,.95,.35,.17],[-1.52,.88,.40,.13]]]);
      if(ring) panels.push(['matte',0,[[-1.53,.25,.80,.37],[-1.34,.30,.82,.43],[-1.13,.27,.86,.40]]]);
    } else if(car.family==='falcon') {
      panels.push(['paint',0,[[1.54,1.08,.37,.12],[1.73,1.13,.32,.13],[1.90,1.00,.30,.075]]]);
      if(ring) panels.push(['accent',0,[[1.72,.86,.45,.035],[1.84,.92,.42,.042],[1.93,.79,.36,.039]]]);
    } else if(car.family==='nova') {
      const spines=ring?[0]:[-.26,.26];
      for(const x of spines) panels.push(['paint',x,[[-1.28,.052,.79,.35],[-.91,.070,1.02,.42],[-.41,.060,1.10,.29],[.11,.039,.91,.17]]]);
    } else if(car.family==='wave'&&ring) {
      panels.push(['paint',0,[[-1.52,.055,.75,.22],[-1.18,.063,.89,.42],[-.79,.062,.95,.36],[-.42,.037,.80,.15]]]);
    } else if(car.family==='rookie') {
      for(const side of [-1,1]) panels.push(['titanium',side*.82,[[-.58,.050,.33,.090],[.28,.047,.39,.12],[.92,.065,.40,.10]]]);
    }
  }

  const tailFamilies={
    rookie:{titles:['掀尾唇','弹出双短片','快拆襟翼','下挂双翼','弹跳翼梁','掠翼分叉','轻翼连跳'],color:'#aafa67',core:'#f5ffcd',seconds:[.15,.24],style:'snap',trigger:'氮气'},
    rally:{titles:['翻护片','滑开挡泥片','翻起后护板','收紧笼架','抬升防烫罩','装甲滑门','环笼装甲列'],color:'#ffab5b',core:'#ffe1ae',seconds:[.30,.39],style:'armor',trigger:'氮气 / 重刹'},
    wave:{titles:['鸭尾抬升','后肩双鳍','外翻导流鳍','长翼张开','双层翼启缝','分体翼外展','环翼升起与双喷口外移'],color:'#61defc',core:'#edfaff',seconds:[.26,.37],style:'spread',trigger:'氮气 / 漂移回正增扭'},
    nova:{titles:['尾盖抽出','导流槽伸长','后轮罩滑移','长尾翼伸出','双层伸缩翼','双脊交错伸缩','阶梯式三段伸缩'],color:'#d491ff',core:'#f2e2ff',seconds:[.39,.45],style:'extend',trigger:'氮气 / 高速'},
    falcon:{titles:['尾板俯仰','导流翼压低','侧襟剪合','双片空气刹车','尾翼减阻','双翼扫掠','剪式尾翼交叉'],color:'#ff775a',core:'#fff0ca',seconds:[.22,.28],style:'scissor',trigger:'氮气 / 重刹与出弯增扭'},
  };
  const finalExhaust={
    rookie:{lead:[3],splay:.14,rows:[[.28,.25,-1.89,.067],[.47,.29,-1.90,.064],[.66,.26,-1.90,.068],[.85,.36,-1.91,.101],[1.02,.24,-1.88,.061]]},
    rally:{lead:[0,2],splay:.073,rows:[[.33,.23,-1.92,.094],[.52,.22,-1.92,.070],[.73,.23,-1.92,.094],[.93,.24,-1.90,.069],[1.05,.43,-1.89,.061]]},
    wave:{lead:[0],splay:.065,rows:[[.31,.405,-1.91,.103],[.55,.235,-1.894,.071],[.75,.39,-1.911,.073],[.91,.23,-1.88,.068],[1.04,.39,-1.89,.063]]},
    nova:{lead:[0,1],splay:.015,rows:[[.25,.34,-1.928,.101],[.48,.33,-1.916,.090],[.73,.24,-1.893,.063],[.91,.27,-1.889,.065],[1.05,.43,-1.90,.060]]},
    falcon:{lead:[2],splay:.16,rows:[[.31,.24,-1.919,.072],[.52,.32,-1.917,.074],[.73,.44,-1.91,.103],[.96,.29,-1.874,.068],[1.04,.43,-1.89,.061]]},
  };

  function makeTailRig(car) {
    const family=tailFamilies[car.family];
    const level=car.generation;
    const high=level>=5;
    const final=level===6;
    const span=[.26,.34,.43,.55,.66,.84,1][level];
    const baseHeight=high?(final?1.16:.99):[.65,.74,.80,.89,.99][level];
    const anchor=car.design.rearZ+.31;
    const parts=[];
    function piece(id,pivot,shift,axis,angle,width,depth,delay=0) {
      parts.push({id,pivot,shift:shift.map(value=>value*span),axis,angle:angle*span,delay,
        panels:[['matte',0,[[-depth*.54,width,.0,.096],[-depth*.08,width*1.04,.026,.126],[depth*.47,width*.8,.012,.067]]],
          ['accent',0,[[-depth*.57,width*.89,.021,.036],[-depth*.48,width*.92,.031,.041]]]]});
    }
    switch(family.style) {
      case 'snap':
        piece('lip',[0,baseHeight,anchor],[0,.24,.05],'x',.54,high?.57:.47,.25);
        if(level>=1) for(const side of [-1,1]) piece(`tab${side}`,[side*.67,baseHeight+.07,anchor+.075],
          [side*.145,.22,.03],'z',side*.42,high?.31:.234,.34,final?(side>0?.24:.10):high?.16:.09);
        if(final) piece('brace',[0,.51,anchor-.03],[0,.03,-.12],'x',-.24,.58,.18,.40);
        break;
      case 'armor':
        piece('plate',[0,baseHeight-.24,anchor-.09],[0,.22,.23],'x',-.66,high?.82:.63,.39);
        if(level>=2) for(const side of [-1,1]) piece(`shield${side}`,[side*.76,baseHeight-.18,anchor+.04],
          [side*.16,.11,.04],'z',side*.53,.23,.38,.13);
        if(high) piece('canopy',[0,baseHeight+.13,anchor+.10],[0,final?.35:.25,.07],'x',.22,final?.70:.60,.31,.35);
        if(final) piece('guard',[0,.61,anchor-.11],[0,.04,.18],'x',-.62,.79,.22,.44);
        break;
      case 'spread':
        for(const side of [-1,1]) piece(`fin${side}`,[side*.62,baseHeight,anchor+.02],
          [side*.17,.22,.07],'z',side*(final?.50:.73),high?.32:.25,.42);
        if(level>=3) piece('crossbar',[0,final?1.33:baseHeight+.14,anchor+.22],
          [0,final?.33:.14,.13],'x',final?-.15:.30,final?1.02:.61,.34,.20);
        if(final) for(const side of [-1,1]) piece(`nozzle${side}`,[side*.31,.405,-1.85],
          [side*.124,.115,.012],'y',side*-.23,.139,.17,.42);
        break;
      case 'extend':
        piece('spine',[0,baseHeight+.02,anchor+.19],[0,.095,-.23],'x',-.18,high?.37:.25,.43);
        if(level>=2) for(const side of [-1,1]) piece(`rail${side}`,[side*.62,baseHeight+.09,anchor+.17],
          [side*.079,.11,final?-.28:-.19],'y',side*.21,.23,.41,side>0?.34:.19);
        if(final) piece('arch',[0,1.43,anchor+.155],[0,.26,.03],'x',.22,.92,.27,.46);
        break;
      case 'scissor':
        for(const side of [-1,1]) piece(`blade${side}`,[side*.54,baseHeight,anchor+.10],
          [side*.23,.19,.086],final?'z':level>=2?'x':'y',final?side*.60:level>=2?-.63:-side*.58,
          high?.39:.30,.49,side>0&&high?.14:0);
        if(high) piece('splitter',[0,baseHeight+.18,anchor+.21],[0,.12,.14],'x',final?.62:.37,final?.65:.54,.29,.34);
        break;
    }
    const exhaustLength={rookie:.89,rally:.76,wave:1,nova:1.15,falcon:1.03};
    return {title:family.titles[level],style:family.style,color:car.flagship?.accent??family.color,core:family.core,
      seconds:family.seconds,trigger:family.trigger,length:[.85,.91,.96,1.02,1.10,1.18,1.29][level]*exhaustLength[car.family],parts};
  }

  function tailPartPose(part,deploy) {
    const t=clamp((deploy-part.delay)/(1-part.delay),0,1);
    const rise=t*t*(3-2*t);
    return {position:part.pivot.map((value,i)=>value+part.shift[i]*rise),angle:part.angle*rise};
  }

  function tailPipe(car,pipe,deploy) {
    if(!pipe.mount) return pipe;
    const part=car.tailRig.parts.find(part=>part.id===pipe.mount);
    const {position,angle}=tailPartPose(part,deploy);
    const origin=rotateTailPoint(part.axis,angle,[pipe.x,pipe.y,pipe.z].map((value,i)=>value-part.pivot[i]));
    return {...pipe,x:position[0]+origin[0],y:position[1]+origin[1],z:position[2]+origin[2],
      direction:rotateTailPoint(part.axis,angle,pipe.direction)};
  }

  function rotateTailPoint(axis,angle,[x,y,z]) {
    const c=Math.cos(angle),s=Math.sin(angle);
    if(axis==='x') return [x,y*c-z*s,y*s+z*c];
    if(axis==='z') return [x*c-y*s,x*s+y*c,z];
    return [x*c+z*s,y,-x*s+z*c];
  }

  function updateTail(race,dt) {
    const rig=race.car.tailRig;
    if(!rig) return;
    let target=race.boost>0?1:race.boostQueue>0?.62:0;
    if(race.boost<=0) {
      if(race.wake?.burst>0) target=.72;
      if(rig.style==='armor'&&race.braking&&race.speed>36) target=Math.max(target,.65);
      if(rig.style==='extend'&&race.speed>race.car.max*.89) target=Math.max(target,.38);
      if(rig.style==='scissor'&&race.braking&&race.speed>39) target=Math.max(target,.54);
      if((rig.style==='scissor'||rig.style==='spread')&&race.exitDrive>.12) target=Math.max(target,.74);
    }
    const deploy=race.tailDeploy??0;
    const time=rig.seconds[target>deploy?0:1];
    race.tailDeploy=deploy+clamp(target-deploy,-dt/time,dt/time);
  }

  function normalizeParts(value) {
    return Object.fromEntries(Object.keys(parts).map(slot=>[slot,[1,2].includes(value?.[slot])?value[slot]:0]));
  }

  function configureCar(id, selection, legacy=false) {
    const originalModel=legacy===true||(legacy==='v11'&&!['wave','rally'].includes(id));
    const base=(originalModel?legacyCars.get(id):null)??cars.find(car=>car.id===id)??cars[0];
    const installed=normalizeParts(legacy===true?null:selection);
    const {exhaust,suspension,differential}=installed;
    const count=legacy===true||!base.family ? 2 : counts[base.generation]+(exhaust===2?2:0);
    const oldArt=legacy==='v13';
    const modelKey=[base.id,legacy||'current',exhaust,suspension,differential].join(':');
    const pipes=exhaustLayout(base,count,exhaust,legacy);
    const currentBody=!legacy||legacy==='v15';
    const aero=currentBody&&base.family==='wave'?waveAero[base.generation-2]:undefined;
    const evolution=currentBody?familyEvolution[base.family]?.[base.generation-2]:undefined;
    const tailRig=!legacy&&base.family?makeTailRig(base):undefined;
    if(tailRig&&base.family==='wave'&&base.generation===6) for(const pipe of pipes) {
      if(pipe.primary&&pipe.x) pipe.mount=`nozzle${Math.sign(pipe.x)}`;
    }
    return {...base,modelKey,legacy:legacy===true||!base.family,oldArt,oldGeometry:Boolean(legacy)&&!oldArt&&legacy!=='v14'&&!currentBody,installed,pipes,aero,evolution,tailRig,
      drift:base.drift,
      setup:{...base.setup,boostTime:Math.round((base.setup.boostTime+exhaust*.15)*100)/100,
        boostSpeed:base.setup.boostSpeed+(exhaust===2?2:0),curbLoss:base.setup.curbLoss*(1-suspension*.10),chargeRate:1+differential*.05}};
  }

  function exhaustLayout(car,count,level,legacy) {
    const bore=level===1?1.17:1;
    if(legacy===true || !car.family) return [-.37,.37].map(x=>({x,y:.368,z:-1.61,radius:.108*bore,direction:[0,0,-1]}));
    const rally=car.family==='rally';
    if(car.flagship) {
      const ring=car.flagship.stage===2;
      const rig=ring&&!legacy?finalExhaust[car.family]:null;
      const {accent}=car.flagship;
      const pipes=[];
      if(!ring) pipes.push({x:0,y:.59,z:-1.946,radius:.129*bore,direction:[0,0,-1],primary:true,accent});
      const bank=ring?(rig?.rows??finalExhaust.wave.rows):
        [[.39,.28,-1.889,.073],[.62,.39,-1.913,.078],[.84,.26,-1.894,.069],[1.02,.40,-1.91,.063]];
      for(const side of [-1,1]) for(const [index,[x,y,z,radius]] of bank.slice(0,Math.floor(count/2)).entries()) {
        pipes.push({x:side*x,y:y+(rally?.075:0),z,radius:radius*bore,direction:[side*((rig?.splay??.065)+index*.023),-.045,-1],
          primary:ring&&(rig?.lead.includes(index)??index===0),accent});
      }
      return pipes;
    }
    const rear=rally?[-1.51,-1.65,-1.69,-1.78,-1.82][car.generation]:car.design.rearZ;
    const pipes=[];
    if(count%2) pipes.push({x:0,y:rally?.58:.55,z:rear-.115,radius:.15*bore,direction:[0,0,-1],primary:true});
    const offsets=[
      [[.47,.29,0,.10]],
      [[.43,.27,.025,.088],[.71,.43,-.015,.084]],
      [[.39,.25,.03,.075],[.62,.39,-.02,.077],[.84,.25,.03,.071]],
      [[.38,.24,.03,.071],[.58,.39,-.02,.072],[.79,.24,.025,.068],[.94,.41,.01,.064]],
    ][Math.floor(count/2)-1]??[];
    for(const side of [-1,1]) for(const [index,[x,y,depth,radius]] of offsets.entries()) {
      pipes.push({x:side*x,y:y+(rally?.075:0),z:rear-depth-.04,radius:radius*bore,
        direction:[side*(index===0?.07:.16),-.045,-1]});
    }
    return pipes;
  }

  function equippedParts(save,id) {
    return normalizeParts(save.upgrades?.[id]?.equipped);
  }

  function ownsPart(save,id,slot,level) {
    return level===0 || Boolean(save.upgrades?.[id]?.owned[slot]?.includes(level));
  }

  function buyPart(save,id,slot,level) {
    const price=parts[slot]?.prices[level];
    if(!Number.isInteger(level)||!price||!save.owned.includes(id)||ownsPart(save,id,slot,level)||save.credits<price) return false;
    const entry=save.upgrades[id]??={owned:{},equipped:normalizeParts()};
    (entry.owned[slot]??=[]).push(level);
    save.credits-=price;
    return true;
  }

  function equipPart(save,id,slot,level) {
    if(!parts[slot]||![0,1,2].includes(level)||!save.owned.includes(id)||!ownsPart(save,id,slot,level)) return false;
    const entry=save.upgrades[id]??={owned:{},equipped:normalizeParts()};
    entry.equipped[slot]=level;
    return true;
  }
  const relief = {
    sunset: [[1, 8, .55], [3, 5.4, -1.15], [6, 2.2, .20]],
    coast: [[1, 7, -.8], [2, 3.0, .5], [5, 1.6, -1.1]],
    city: [[2, 3.4, .3], [4, 2.15, -.66], [7, 1.38, .35]],
    switchback:[[1,25,-.7],[3,8,-1.23],[7,2.5,.75]],
    caldera:[[1,25,.2],[2,7,-1.30],[5,3.2,.14]],
    ice:[[1,14,-1.25],[2,8,.36],[5,3.9,-.14]],
    zootopia:[[1,6.5,.35],[3,3.0,-.72],[6,1.6,.42]],
  };

  const routePoints = {
    sunset: [[0, 250], [-200, 247], [-351, 125], [-354, -46], [-243, -208], [-44, -211], [91, -110], [260, -176], [425, -87], [439, 111], [277, 250], [141, 249]],
    coast: [[30, 285], [-149, 276], [-288, 153], [-222, 40], [-342, -107], [-278, -286], [-61, -300], [152, -224], [345, -116], [282, 36], [433, 174], [285, 290]],
    city: [[25, 306], [-177, 306], [-323, 230], [-324, 57], [-231, -26], [-327, -166], [-233, -306], [-37, -306], [116, -201], [278, -253], [413, -131], [385, 35], [215, 120], [225, 256]],
    switchback:[[230,300],[-70,308],[-277,246],[-320,143],[-262,94],[-132,99],[-110,18],[-268,-17],[-340,-88],[-266,-151],[-124,-119],[-114,-197],[-274,-235],[-223,-322],[13,-340],[201,-286],[280,-145],[255,-20],[342,87],[350,241],[305,298]],
    caldera:[[0,365],[-215,363],[-358,279],[-407,130],[-400,-98],[-390,-283],[-311,-340],[-108,-336],[140,-337],[383,-335],[455,-250],[444,-138],[365,-112],[282,-169],[206,-128],[201,-46],[278,17],[409,28],[450,138],[368,255],[210,243],[151,160],[54,166],[8,243],[91,292],[214,329],[155,367]],
    ice:[[100,298],[-118,315],[-271,266],[-311,159],[-258,53],[-145,30],[-128,-62],[-233,-125],[-261,-229],[-131,-304],[33,-260],[96,-112],[192,-133],[198,-259],[298,-315],[389,-244],[356,-83],[288,38],[374,162],[321,265],[207,229],[164,291]],
    zootopia:[[0,380],[-230,370],[-390,270],[-430,120],[-360,-20],[-230,-80],[-150,-180],[-230,-290],[-100,-360],[80,-370],[250,-320],[390,-210],[430,-70],[380,80],[270,190],[170,300]],
  };

  function makeRoute(points) {
    const vertices = [];
    let length = 0;
    for (let i = 0; i < points.length; i++) {
      const [a, b, c, d] = [-1, 0, 1, 2].map(offset => points[wrap(i + offset, points.length)]);
      for (let j = 0; j < 40; j++) {
        const t = j / 40;
        const axes = b.map((value, k) => .5 * ((2 * value) + (-a[k] + c[k]) * t + (2 * a[k] - 5 * value + 4 * c[k] - d[k]) * t * t + (-a[k] + 3 * value - 3 * c[k] + d[k]) * t * t * t));
        const last = vertices.at(-1);
        if (last) length += Math.hypot(axes[0] - last.x, axes[1] - last.z);
        vertices.push({ x: axes[0], z: axes[1], distance: length });
      }
    }
    length += Math.hypot(vertices[0].x - vertices.at(-1).x, vertices[0].z - vertices.at(-1).z);
    vertices.push({ ...vertices[0], distance: length });
    return { vertices, length };
  }

  const routes = Object.fromEntries(Object.entries(routePoints).map(([id, points]) => [id, makeRoute(points)]));

  function centerAt(track, distance) {
    const { vertices, length } = routes[track.id];
    const scale = track.length / length;
    const at = wrap(distance, track.length) / scale;
    let lo = 0;
    let hi = vertices.length - 1;
    while (hi - lo > 1) {
      const mid = (lo + hi) >> 1;
      if (vertices[mid].distance <= at) lo = mid;
      else hi = mid;
    }
    const a = vertices[lo];
    const b = vertices[hi];
    const t = (at - a.distance) / (b.distance - a.distance);
    return { x: lerp(a.x, b.x, t) * scale, z: lerp(a.z, b.z, t) * scale };
  }

  function courseAt(track, distance) {
    const center = centerAt(track, distance);
    const before = centerAt(track, distance - 6);
    const after = centerAt(track, distance + 6);
    const length = Math.hypot(after.x - before.x, after.z - before.z);
    const fx = (after.x - before.x) / length;
    const fz = (after.z - before.z) / length;
    const a = Math.atan2(center.x - before.x, center.z - before.z);
    const b = Math.atan2(after.x - center.x, after.z - center.z);
    // Positive lateral offset and curvature both point right from the driver's seat.
    return { ...center, fx, fz, rx: -fz, rz: fx, curve: clamp(wrap(a - b + Math.PI, Math.PI * 2) - Math.PI, -.16, .16) * 13.1 };
  }

  function roadAt(track, distance) {
    const phase = wrap(distance, track.length) / track.length;
    const challenge=track.challenge;
    let width=challenge?.width??1;
    let grip=1;
    for(const [from,to,squeeze,loss] of challenge?.sections??[]) {
      const t=clamp(Math.min(phase-from,to-phase)/.019,0,1);
      const strength=t*t*(3-2*t);
      width-=squeeze*strength;
      grip-=loss*strength;
    }
    const bridge = track.id === 'coast' ? clamp(Math.min((phase - .34) / .043, (.60 - phase) / .05), 0, 1) : 0;
    if(track.id==='sunset') width=1.10;
    if(track.id==='zootopia') {
      // One lap visits the districts from the public ride description:
      // Tundratown ice, Sahara Square heat, Rainforest mist and Little Rodentia.
      if(phase>=.16&&phase<.34){width=.97;grip=.84;}
      else if(phase>=.34&&phase<.48){width=1.12;}
      else if(phase>=.55&&phase<.72){width=.92;grip=.96;}
      else if(phase>=.72&&phase<.82){width=.88;}
      else if(phase>=.90){width=1.06;}
    }
    width-=bridge*.19;
    const pad = track.id === 'city' && phase >= .235 && phase < .264 ? -1
      : track.id === 'city' && phase >= .705 && phase < .735 ? 1
      : track.id === 'zootopia' && phase >= .485 && phase < .512 ? 1
      : track.id === 'zootopia' && phase >= .845 && phase < .872 ? -1 : 0;
    const course = courseAt(track, distance);
    const { curve } = course;
    const angle = phase * Math.PI * 2;
    let elevation = 0;
    let grade = 0;
    for (const [frequency, amplitude, shift] of relief[track.id]) {
      elevation += amplitude * Math.sin(angle * frequency + shift);
      grade += amplitude * frequency * Math.cos(angle * frequency + shift) * Math.PI * 2 / track.length;
    }
    const curbSide = Math.abs(curve) > .36 ? Math.sign(curve) : 0;
    return {
      ...course, elevation, grade, bank: -curve * .063,
      width, grip, curbSide, rail: width + (challenge?.margin??(track.id === 'coast' ? lerp(.35,.19,bridge) : (track.id === 'city'||track.id === 'zootopia') ? .25 : .36)),
      bridge, bridgeQueue:track.id==='coast'&&phase>=.308&&phase<.60, pad,
    };
  }

  const zonesByTrack = new Map();
  const bendSpeed = curve => 87 / Math.sqrt(1 + Math.abs(curve) * 1.35);
  const difficulties={
    rookie:{name:'入门',pace:0,corner:1,passing:5,look:30},
    club:{name:'进阶',pace:8,corner:1.11,passing:3,look:36},
    pro:{name:'专家',pace:25,corner:1.37,passing:2,look:42},
  };

  function brakingZones(track) {
    if (!zonesByTrack.has(track.id)) {
      const peaks=[];
      for (let distance=0;distance<track.length;distance+=8) {
        const turn=Math.abs(courseAt(track,distance).curve);
        if (turn>.72 && turn>=Math.abs(courseAt(track,distance-8).curve) && turn>Math.abs(courseAt(track,distance+8).curve)) {
          const pace=track.challenge?track.challenge.corner*Math.sqrt(roadAt(track,distance).grip):1;
          peaks.push({distance,speed:bendSpeed(turn)*pace});
        }
      }
      const selected=[];
      for(const peak of peaks.sort((a,b)=>a.speed-b.speed)) {
        if(selected.every(other=>Math.abs(wrap(peak.distance-other.distance+track.length/2,track.length)-track.length/2)>(track.challenge?85:129))) selected.push(peak);
      }
      selected.sort((a,b)=>a.distance-b.distance);
      if(track.challenge) selected.forEach((zone,index)=>{
        const spacing=wrap(zone.distance-selected.at(index-1).distance,track.length);
        zone.boards=[120,80,40].filter(meters=>meters<=Math.max(40,spacing*.74));
      });
      zonesByTrack.set(track.id,selected);
    }
    return zonesByTrack.get(track.id);
  }

  function rivalTargetSpeed(track,distance,pace,corner=1) {
    const road=track.challenge?roadAt(track,distance):courseAt(track,distance);
    const grip=road.grip??1;
    const demand=track.challenge?.corner??1;
    let speed=Math.min(pace,bendSpeed(road.curve)*corner*demand*Math.sqrt(grip));
    for (const zone of brakingZones(track)) {
      const gap=wrap(zone.distance-distance,track.length);
      if (gap<145) speed=Math.min(speed,Math.sqrt((zone.speed*corner)**2+2*30*grip*Math.max(0,gap-15)));
    }
    return speed;
  }

  function sanitizeSave(data) {
    const source = data && typeof data === 'object' ? data : {};
    const owned = cars.filter(car => car.price === 0 || (Array.isArray(source.owned) && source.owned.includes(car.id))).map(car => car.id);
    const records = {};
    for (const track of tracks) {
      for (const mode of ['race', 'solo']) {
        for (const key of [`${track.id}:${mode}`, recordKey(track.id,mode)]) {
          const time = source.records?.[key];
          if (Number.isFinite(time) && time > 0) records[key] = time;
        }
      }
      for(const level of ['rookie','club','pro']) {
        const key=recordKey(track.id,'race',level);
        const time=source.records?.[key];
        if(Number.isFinite(time)&&time>0) records[key]=time;
      }
    }
    const replays = {};
    const upgrades={};
    for(const id of owned) {
      const raw=source.upgrades?.[id];
      if(!raw) continue;
      const entry={owned:{},equipped:normalizeParts(raw.equipped)};
      for(const slot of Object.keys(parts)) {
        const levels=raw.owned?.[slot];
        entry.owned[slot]=[1,2].filter(level=>Array.isArray(levels)&&levels.includes(level));
        if(!entry.owned[slot].includes(entry.equipped[slot])) entry.equipped[slot]=0;
      }
      upgrades[id]=entry;
    }
    for (const track of tracks) {
      const replay = source.replays?.[track.id];
      if (validReplay(replay,track)) replays[track.id]=replay;
    }
    return {
      owned, records, replays, upgrades, ghostVisible: source.ghostVisible !== false,
      credits: Number.isSafeInteger(source.credits) ? Math.max(0, source.credits) : 120,
      selected: owned.includes(source.selected) ? source.selected : 'rookie',
      difficulty:Object.hasOwn(difficulties,source.difficulty)?source.difficulty:'rookie',
      training: ['brake','drift','boost','draft'].filter(id=>Array.isArray(source.training)&&source.training.includes(id)),
      firstRace:source.firstRace===true,
      cup:sanitizeCup(source.cup,owned),
      cupRecords:sanitizeCupRecords(source.cupRecords),
    };
  }

  const sectorFractions = {
    sunset: [.16,.44,.71,1],
    coast: [.22,.61,.82,1],
    city: [.24,.57,.87,1],
    zootopia: [.17,.40,.66,1],
  };
  const replayStep = .12;
  const maxReplayFrames = 2200;

  function validReplay(replay,track) {
    const vehicle=replay&&cars.find(car=>car.id===replay.carId);
    if (!vehicle || !Array.isArray(replay.frames) || !Array.isArray(replay.splits)) return false;
    const speedLimit=vehicle.flagship?vehicle.max+vehicle.setup.boostSpeed+2:130;
    const animated=replay.modelVersion===16;
    const { frames,splits,time }=replay;
    if (!Number.isFinite(time) || time<=0 || frames.length<2 || frames.length>maxReplayFrames+1 || splits.length!==8 || splits.at(-1)!==time) return false;
    if (frames[0]?.[0]!==0 || frames[0]?.[1]!==0 || frames.at(-1)?.[0]!==time || frames.at(-1)?.[1]!==track.length*2) return false;
    return splits.every((split,i)=>Number.isFinite(split) && split>(splits[i-1]??0)) &&
      frames.every((frame,i)=>Array.isArray(frame) && frame.length===(animated?6:5) && frame.every(Number.isFinite) &&
        Math.abs(frame[2])<=1.6 && Math.abs(frame[3])<=2 && frame[4]>=0 && frame[4]<=speedLimit &&
        (!animated||frame[5]>=0&&frame[5]<=1) &&
        (i===0 || (frame[0]>frames[i-1][0] && frame[1]>=frames[i-1][1])));
  }

  function replayFrame(race) {
    return [race.elapsed,race.distance,race.x,race.heading,race.speed,Math.round((race.tailDeploy??0)*100)/100];
  }

  function startTimeTrial(race,save) {
    if(race.mode!=='solo') return;
    const sectors=sectorDistances(race.track);
    race.timing={
      reference:save.replays[race.track.id], visible:save.ghostVisible,
      checkpoints:Array.from({length:race.laps},(_,lap)=>sectors.map(distance=>lap*race.track.length+distance)).flat(),
      splits:[], frames:[replayFrame(race)], cursor:0, nextSample:replayStep,interval:replayStep,
    };
  }

  function sectorDistances(track) {
    return (track.challenge?.sectors??sectorFractions[track.id]).map(fraction=>fraction*track.length);
  }

  function tickTimeTrial(race,previous) {
    const {timing}=race;
    const current=replayFrame(race);
    while(timing.splits.length<timing.checkpoints.length) {
      const index=timing.splits.length;
      const checkpoint=timing.checkpoints[index];
      if(current[1]<checkpoint || current[1]===previous[1]) break;
      const portion=clamp((checkpoint-previous[1])/(current[1]-previous[1]),0,1);
      const elapsed=lerp(previous[0],current[0],portion);
      const reference=timing.reference?.splits[index];
      timing.splits.push({elapsed,delta:reference===undefined?null:elapsed-reference});
    }
    if(timing.frames.length>=maxReplayFrames-2) {
      timing.frames=timing.frames.filter((_,i)=>i%2===0);
      timing.interval*=2;
      timing.nextSample=timing.frames.at(-1)[0]+timing.interval;
    }
    while(timing.nextSample<current[0]) {
      const time=timing.nextSample;
      const portion=clamp((time-previous[0])/(current[0]-previous[0] || 1),0,1);
      timing.frames.push([time,...current.slice(1).map((value,i)=>lerp(previous[i+1],value,portion))]);
      timing.nextSample+=timing.interval;
    }
    if(current[1]>=timing.checkpoints.at(-1) && timing.frames.length<maxReplayFrames && current[0]>timing.frames.at(-1)[0]) timing.frames.push(current);
  }

  function saveReplay(save,race) {
    if (race.trial || race.phase!=='finished' || !race.timing || save.replays[race.track.id]?.time<=race.elapsed) return false;
    const {frames,splits}=race.timing;
    const replay={carId:race.car.id,parts:race.car.installed,modelVersion:16,time:race.elapsed,frames,splits:splits.map(split=>split.elapsed)};
    if(!validReplay(replay,race.track)) return false;
    save.replays[race.track.id]=replay;
    return true;
  }

  function ghostAt(race,time=race.elapsed) {
    const timing=race.timing;
    const replay=timing?.reference;
    time+=timing?.offset??0;
    if(!timing?.visible || !replay || time>replay.time || race.phase==='countdown') return null;
    const {frames}=replay;
    while(timing.cursor+1<frames.length-1 && frames[timing.cursor+1][0]<time) timing.cursor++;
    while(timing.cursor>0 && frames[timing.cursor][0]>time) timing.cursor--;
    const a=frames[timing.cursor],b=frames[timing.cursor+1];
    const portion=clamp((time-a[0])/(b[0]-a[0]),0,1);
    timing.ghostCar??=replayCar(replay);
    return {car:timing.ghostCar,distance:lerp(a[1],b[1],portion),x:lerp(a[2],b[2],portion),heading:lerp(a[3],b[3],portion),
      speed:lerp(a[4],b[4],portion),tailDeploy:lerp(a[5]??0,b[5]??0,portion)};
  }

  function replayCar(replay) {
    return configureCar(replay.carId,replay.parts,!replay.parts?true:
      replay.modelVersion===16?false:replay.modelVersion===15?'v15':replay.modelVersion===14?'v14':replay.modelVersion===12?'v13':'v11');
  }

  function weakestSector(race) {
    const splits=race.timing?.splits;
    if(!splits?.length) return null;
    let slowest=0;
    let loss=-Infinity;
    for(const [index,split] of splits.entries()) {
      const previous=splits[index-1];
      const duration=split.elapsed-(previous?.elapsed??0);
      const meters=race.timing.checkpoints[index]-(race.timing.checkpoints[index-1]??0);
      const score=split.delta===null?duration/meters:split.delta-(previous?.delta??0);
      if(score>loss) {loss=score;slowest=index;}
    }
    return slowest;
  }

  function replayAtDistance(replay,distance) {
    const frames=replay.frames;
    const index=frames.findIndex(frame=>frame[1]>=distance);
    if(index<=0) return frames[index===0?0:frames.length-1];
    const a=frames[index-1],b=frames[index];
    const fraction=(distance-a[1])/(b[1]-a[1]);
    return a.map((value,i)=>lerp(value,b[i],fraction));
  }

  function createSectorPractice(completed,index,reference,factory=false) {
    const checkpoints=completed.timing?.checkpoints;
    const end=checkpoints?.[index];
    if(!Number.isInteger(index)||index<0||!end) return null;
    const track=completed.track;
    const line=checkpoints[index-1]??0;
    const start=Math.max(0,line-65);
    const source=validReplay(reference,track)?reference:null;
    const initial=source?replayAtDistance(source,start):[0,start,0,0,start?54:0];
    let apex=(line+end)/2;
    for(let distance=line+30;distance<=end-30;distance+=5) {
      if(Math.abs(roadAt(track,distance).curve)>Math.abs(roadAt(track,apex).curve)) apex=distance;
    }
    const speedGates=[Math.max(line,apex-35),Math.min(end,apex+40)];
    const ghostEntry=source?replayAtDistance(source,speedGates[0])[4]:null;
    const ghostExit=source?replayAtDistance(source,speedGates[1])[4]:null;
    const race=createRace(completed.car.id,track.id,'solo',factory?{}:completed.car.installed);
    race.trial={start,line,end,sector:index,sectorStart:line===start?0:null,sectorTime:null,
      apex,speedGates,speeds:[null,null,null],referenceTime:source?source.splits[index]-(source.splits[index-1]??0):null,
      referenceSpeeds:source?[
        ghostEntry,
        Math.min(ghostEntry,ghostExit,...source.frames.filter(frame=>frame[1]>speedGates[0]&&frame[1]<speedGates[1]).map(frame=>frame[4])),
        ghostExit,
      ]:null, factory};
    race.timing={reference:source,visible:true,cursor:0,offset:initial[0]};
    Object.assign(race,{distance:start,x:initial[2],heading:initial[3],speed:initial[4]});
    return race;
  }

  function measureSector(race,previous,previousSpeed,dt) {
    const trial=race.trial;
    if(race.distance<trial.line) return;
    const span=race.distance-previous;
    if(trial.sectorStart===null) {
      const fraction=span>0?clamp((trial.line-previous)/span,0,1):0;
      trial.sectorStart=race.elapsed-dt*(1-fraction);
    }
    const [entry,exit]=trial.speedGates;
    const speedAt=position=>lerp(previousSpeed,race.speed,span>0?clamp((position-previous)/span,0,1):0);
    if(trial.speeds[0]===null&&race.distance>=entry) trial.speeds[0]=speedAt(entry);
    if(race.distance>=entry&&previous<=exit) {
      trial.speeds[1]=Math.min(trial.speeds[1]??trial.speeds[0],speedAt(Math.min(exit,race.distance)));
      if(trial.speeds[2]===null&&race.distance>=exit) trial.speeds[2]=speedAt(exit);
    }
    if(race.distance>=trial.end) trial.sectorTime=race.elapsed-trial.sectorStart;
  }

  function recordKey(trackId,mode,level) {
    return `${trackId}:${mode}:world${mode==='race'&&Object.hasOwn(difficulties,level)?`:${level}`:''}`;
  }

  function requiredCar(save,car) {
    if(!car?.family || !car.generation) return null;
    const family=carFamily(car.family);
    if(family.some(other=>other.generation>=car.generation && save.owned.includes(other.id))) return null;
    const previous=family[car.generation-1];
    return save.owned.includes(previous.id)?null:previous;
  }

  function purchase(save, carId) {
    const car = cars.find(option => option.id === carId);
    if (!car || save.owned.includes(carId) || save.credits < car.price || requiredCar(save,car)) return false;
    save.credits -= car.price;
    save.owned.push(carId);
    save.selected = carId;
    return true;
  }

  const rivalStyles=[
    {name:'守内线',entry:.48,apex:.66,exit:.44,brake:1.06,launch:.96},
    {name:'晚刹进攻',entry:-.49,apex:.59,exit:-.34,brake:.91,launch:1.02},
    {name:'出弯追击',entry:-.55,apex:.43,exit:-.61,brake:1.06,launch:1.20},
    {name:'稳健跑线',entry:-.32,apex:.48,exit:-.36,brake:1.08,launch:1.03},
    {name:'外线超车',entry:-.61,apex:.35,exit:-.60,brake:1.03,launch:1.11},
  ];

  const wakeSetups={rookie:[.88,23],rally:[.92,21],wave:[1,24],nova:[1.10,22],falcon:[.88,27]};
  const wakeColors={rookie:'#b7f28e',rally:'#ffc78a',wave:'#78e9ff',nova:'#d9b6ff',falcon:'#ffad8c'};

  function wakeSpec(car) {
    const [duration,force]=wakeSetups[car.family]??wakeSetups.rookie;
    return {duration:duration+(car.flagship?.stage??0)*.035,force,color:wakeColors[car.family]??wakeColors.wave};
  }

  function createWake(car) {
    return {...wakeSpec(car),charge:0,burst:0,grace:0,cooldown:0,leader:null,gap:0,closest:Infinity,readies:0,launches:0,passes:0,attempt:null};
  }

  function createRace(carId, trackId, mode, selection, difficulty) {
    const car = configureCar(carId,selection);
    const track = tracks.find(option => option.id === trackId) ?? tracks[0];
    const baseTuning=difficulties[difficulty]??difficulties.rookie;
    const extra=baseTuning===difficulties.rookie?0:track.id==='city'?.08:track.id==='coast'?.04:0;
    const tuning={...baseTuning,corner:baseTuning.corner+extra,pace:baseTuning.pace+extra*45};
    // Match the field to the player's class. Before this, a Z7 always raced
    // against C1-PRO showroom cars, so the endgame car made every race trivial.
    const playerTier=Math.max(0,tiers.indexOf(car.tier));
    const lineup=[...new Set(cars.map(option=>option.family).filter(Boolean))].map(family=>{
      const models=carFamily(family).filter(option=>option.id!==car.id);
      return models.reduce((best,option)=>Math.abs(tiers.indexOf(option.tier)-playerTier)<
        Math.abs(tiers.indexOf(best.tier)-playerTier)?option:best,models[0]);
    }).filter(Boolean).sort((a,b)=>Math.abs(tiers.indexOf(a.tier)-playerTier)-Math.abs(tiers.indexOf(b.tier)-playerTier));
    while(lineup.length<5) lineup.push(cars[(lineup.length*7+3)%cars.length]);
    const rivals=lineup.slice(0,5);
    const opponents = mode === 'solo' ? [] : rivals.map((rival,i) => ({
      name: ['柚子', '旋风', '阿拓', '薄荷', '影子'][i],
      car: configureCar(rival.id),
      distance: 18 + 11 * i, x: i % 2 ? -0.45 : 0.43, speed: 0,
      pace: Math.min(rival.max+6,Math.round(car.max*.94+[0,5,2,7,3][i]+tuning.pace)), tuning,
      lane: i % 2 ? -0.44 : 0.42, finish: Infinity,
      passing: null, passes: 0, steer: 0, heading: 0, braking: false, style:rivalStyles[i],
    }));
    return {
      car, track, mode, difficulty, opponents, wake:opponents.length?createWake(car):null, laps: mode === 'solo' ? 2 : 3, phase: 'countdown', countdown: 3,
      elapsed: 0, distance: 0, speed: 0, x: 0, lateral: 0, steer: 0, drifting: false, offroad: false,
      heading: 0, slip: 0, driftDirection: 0, surface:'road', railContacts:0, railSide:0, railHit:0, boostDuration:0, exitDrive:0, braking:false, brakeLoad:0,
      charge: 0, tanks: 0, boost: 0, boostHeld: false, boostQueue:0, boostChain:false,
      totalDrift: 0, boostCount: 0, place: opponents.length + 1,
      awarded: false, lapTimes: [], lapStart: 0, hit: 0, carContacts:0, contactSide:0, padCount: 0, lastPad: null,
    };
  }

  function createDraftTrial() {
    const race=createRace('wave-x1','caldera','race',{},'rookie');
    const start=1020,end=1680;
    race.opponents.length=1;
    Object.assign(race.opponents[0],{name:'领跑车',distance:start+24,speed:63,pace:63,x:0,lane:0,trainingLead:true});
    return Object.assign(race,{distance:start,speed:54,laps:1,place:2,
      trial:{start,end,nitro:null,drift:null,curb:null,curbEntry:null},lessonPassed:false});
  }

  function draftGap(track,from,to) {
    return wrap(to-from+track.length*.5,track.length)-track.length*.5;
  }

  function updateWake(driver,track,traffic,road,dt,steer,throttle=true) {
    const wake=driver.wake;
    if(!wake) return;
    wake.burst=Math.max(0,wake.burst-dt);
    wake.cooldown=Math.max(0,wake.cooldown-dt);
    if(driver.braking||driver.offroad||driver.railHit>.15||driver.hit>.14) wake.burst=0;
    if(wake.cooldown>0) return;
    const room=road.width>=.86&&road.grip>.86&&Math.abs(road.curve)<.98;
    if(!room||driver.speed<42||driver.braking||driver.offroad||driver.boost>0||driver.hit>.14||Math.abs(driver.slip||0)>.14) {
      wake.charge=0;wake.leader=null;wake.grace=0;
      return;
    }
    let leader=null,gap=34;
    for(const other of traffic) {
      if(other===driver||other.retired||other.speed<38) continue;
      const ahead=draftGap(track,driver.distance,other.distance);
      if(ahead>0&&ahead<gap&&Math.abs(other.x-driver.x)<.41) {leader=other;gap=ahead;}
    }
    if(leader&&gap>=7) {
      if(wake.leader!==leader) wake.charge=0;
      const previous=wake.charge;
      wake.leader=leader;wake.gap=gap;
      wake.closest=Math.min(wake.closest,gap);
      wake.charge=Math.min(1,wake.charge+dt/1.03);
      if(wake.charge===1) {
        wake.grace=.68;
        if(previous<1) wake.readies++;
      }
      return;
    }
    wake.grace=Math.max(0,wake.grace-dt);
    if(wake.charge===1&&wake.grace>0&&wake.leader&&!wake.leader.retired&&throttle) {
      const ahead=draftGap(track,driver.distance,wake.leader.distance);
      const lane=driver.x-wake.leader.x;
      if(ahead>=5&&ahead<=36&&Math.abs(lane)>=.41&&lane*steer>.036&&
        Math.abs(driver.x)<road.width-.055&&roadAt(track,driver.distance+30).width>=.86) {
        wake.attempt={target:wake.leader,remaining:3.2,contacts:(driver.carContacts??0)+(driver.railContacts??0)};
        wake.burst=wake.duration;wake.cooldown=1.8;wake.launches++;
        wake.charge=0;wake.grace=0;wake.leader=null;
        return;
      }
    }
    if(!wake.grace) {
      wake.charge=Math.max(0,wake.charge-dt*2.5);
      if(!wake.charge) wake.leader=null;
    }
  }

  function finishWakePass(driver,track,dt) {
    const wake=driver.wake;
    const attempt=wake?.attempt;
    if(!attempt) return;
    attempt.remaining-=dt;
    const contacts=(driver.carContacts??0)+(driver.railContacts??0);
    if(attempt.remaining<=0||attempt.target.retired||driver.offroad||contacts!==attempt.contacts) wake.attempt=null;
    else if(draftGap(track,attempt.target.distance,driver.distance)>=4) {
      wake.passes++;
      wake.attempt=null;
    }
  }

  function wakeGuide(race) {
    const wake=race.wake;
    const leader=wake?.leader;
    if(!leader||leader.retired||wake.charge<=0) return null;
    const gap=draftGap(race.track,race.distance,leader.distance);
    if(gap<8||gap>36) return null;
    const segments=[];
    const length=gap-7;
    for(let i=0;i<6;i++) {
      const t=i/6;
      const near=3.2+length*t;
      const far=near+length/6*.67;
      for(const side of [-1,1]) {
        segments.push({near,far,from:leader.x+side*lerp(.34,.17,t),to:leader.x+side*lerp(.34,.17,t+.11),width:lerp(.050,.027,t)});
      }
    }
    return {segments,charge:wake.charge,color:wake.color};
  }

  const cupTracks=['sunset','coast','city'];
  const cupPoints=[10,7,5,3,2,1];
  const cupCourses={
    coast:{name:'桥口连续右弯',start:665,entry:705,end:1000,speed:64,bends:[[730,42],[947,74]]},
    sunset:{name:'峡谷反向弯',start:1070,entry:1110,end:1425,speed:65,bends:[[1152,60],[1336,58]]},
    city:{name:'高架连续急弯',start:2315,entry:2355,end:2630,speed:64,bends:[[2392,57],[2544,63]]},
  };

  function sanitizeCupRecords(records) {
    return Object.fromEntries(Object.keys(difficulties).flatMap(difficulty=>{
      const record=records?.[difficulty];
      return Number.isInteger(record?.place)&&record.place>=1&&record.place<=6&&
        Number.isInteger(record.points)&&record.points>=3&&record.points<=30&&
        Number.isFinite(record.time)&&record.time>0?[[difficulty,{place:record.place,points:record.points,time:record.time}]]:[];
    }));
  }

  function sanitizeCup(cup,owned) {
    if(!cup||typeof cup.id!=='string'||!owned.includes(cup.carId)||!Object.hasOwn(difficulties,cup.difficulty)||!Array.isArray(cup.stages)) return null;
    const stages=[];
    for(const stage of cup.stages.slice(0,cupTracks.length)) {
      if(stage?.track!==cupTracks[stages.length]||!Number.isFinite(stage.time)||stage.time<=0||
        !Array.isArray(stage.order)||stage.order.length!==6||new Set(stage.order).size!==6||
        !stage.order.every(id=>Number.isInteger(id)&&id>=0&&id<6)) break;
      stages.push({track:stage.track,time:stage.time,order:[...stage.order]});
    }
    return {id:cup.id,carId:cup.carId,difficulty:cup.difficulty,stages};
  }

  function createCup(carId,difficulty) {
    return {id:`${Date.now()}-${Math.random().toString(36).slice(2)}`,carId,difficulty,stages:[]};
  }

  function createCupRace(cup,parts) {
    const station=cup.stages.length;
    if(station>=cupTracks.length) return null;
    const race=createRace(cup.carId,cupTracks[station],'race',parts,cup.difficulty);
    race.laps=1;
    race.cup={id:cup.id,station};
    race.cornerCourse=cupCourses[race.track.id];
    race.positionChanges=[];
    return race;
  }

  function createCupPractice(cup,parts,lineChoice) {
    const trackId=cupTracks[cup.stages.length];
    if(!trackId) return null;
    const race=createRace(cup.carId,trackId,'solo',parts,cup.difficulty);
    const course=cupCourses[trackId];
    race.cornerCourse=course;
    race.trial={start:course.start,end:course.end,course,lineChoice:lineChoice==='outside'?'outside':'inside'};
    race.distance=course.start;
    race.speed=course.speed;
    race.laps=1;
    return race;
  }

  function scoreCup(cup,race) {
    if(!cup||race.phase!=='finished'||race.cup?.id!==cup.id||race.cup.station!==cup.stages.length||
      race.track.id!==cupTracks[cup.stages.length]) return false;
    const order=race.opponents.map((rival,i)=>({id:i+1,distance:rival.distance,finish:rival.finish}))
      .sort((a,b)=>a.finish-b.finish||b.distance-a.distance||a.id-b.id).map(rival=>rival.id);
    order.splice(clamp(race.place-1,0,5),0,0);
    cup.stages.push({track:race.track.id,time:race.elapsed,order});
    return true;
  }

  function cupStandings(cup) {
    const names=['你','柚子','旋风','阿拓','薄荷','影子'];
    return names.map((name,id)=>({
      id,name,points:cup.stages.reduce((total,stage)=>total+cupPoints[stage.order.indexOf(id)],0),
    })).sort((a,b)=>b.points-a.points||
      (cup.stages.at(-1)?.order.indexOf(a.id)??a.id)-(cup.stages.at(-1)?.order.indexOf(b.id)??b.id));
  }

  function recordCupResult(save) {
    const {cup}=save;
    if(!cup||cup.stages.length!==cupTracks.length) return {reward:0};
    const standings=cupStandings(cup);
    const place=standings.findIndex(entry=>entry.id===0)+1;
    const points=standings[place-1].points;
    const time=cup.stages.reduce((sum,stage)=>sum+stage.time,0);
    const prior=save.cupRecords[cup.difficulty];
    const reward=(place<=3&&(!prior||prior.place>3)?400:0)+(place===1&&(!prior||prior.place>1)?600:0);
    const best=!prior||place<prior.place||place===prior.place&&(points>prior.points||points===prior.points&&time<prior.time);
    if(best) save.cupRecords[cup.difficulty]={place,points,time};
    save.credits+=reward;
    return {place,points,time,reward,best};
  }

  function cornerWeight(course,distance) {
    if(!course||distance<course.entry||distance>course.end) return 0;
    let weight=0;
    for(const [apex,span] of course.bends) {
      const proximity=clamp(1-Math.abs(distance-apex)/span,0,1);
      weight=Math.max(weight,proximity*proximity*(3-2*proximity));
    }
    return weight;
  }

  const workshopCourses={
    wave:{
      track:'city',title:'蓝潮 G3 / R4 / PRO · 午夜回环',start:1460,end:2738,speed:50,tanks:1,
      gates:[{kind:'exit',from:2437,to:2512,approach:2350,label:'出弯 0.60 秒提速',hint:'高架左弯'}],
    },
    rally:{
      track:'sunset', title:'沙漠獾 · 重刹与路肩', start:938, end:1450, speed:72,
      gates:[
        {kind:'brake',from:1020,to:1115,label:'重刹距离'},
        {kind:'curb',from:1286,to:1365,label:'压路肩掉速',hint:'压右侧红白路沿，松油滑行 0.30 秒'},
      ],
    },
    falcon:{
      track:'coast', title:'赤隼 · 连续弯出弯', start:268, end:665, speed:58,
      gates:[
        {kind:'exit',from:430,to:483,approach:382,label:'右弯出弯提速',hint:'右弯'},
        {kind:'exit',from:550,to:620,approach:502,label:'左弯出弯提速',hint:'左弯'},
      ],
    },
  };

  function createWorkshopTrial(carId,selection,courseId) {
    const course=Object.hasOwn(workshopCourses,courseId)?workshopCourses[courseId]:null;
    const {track,start,end,speed}=course??{track:'sunset',start:70,end:1890,speed:58};
    const race=createRace(carId,track,'solo',selection);
    const trial={start,end,nitro:null,drift:null,curb:null,curbEntry:null};
    if(course) Object.assign(trial,{course,measurements:course.gates.map(()=>null),sample:null,gateIndex:0});
    if(course?.tanks) Object.assign(trial,{manualNitro:null,exitSeconds:0});
    return Object.assign(race,{distance:start,speed,tanks:course?.tanks??(course?0:1),laps:1,trial,rollingStart:true});
  }

  function createQuickDrive(carId, selection) {
    const race=createWorkshopTrial(carId,selection);
    race.trial.start=80;
    race.trial.end=2220;
    race.distance=race.trial.start;
    // Quick drive used to start at 174 km/h during a frozen 3-2-1 countdown.
    // Start from rest so the HUD, countdown and car state agree.
    race.speed=0;
    race.rollingStart=false;
    return race;
  }

  function measureWorkshop(race,input,previous,previousSpeed,dt) {
    const trial=race.trial;
    const index=trial.gateIndex;
    const gate=trial.course.gates[index];
    if(!gate||race.distance<gate.from) return;
    const start=Math.max(previous,gate.from);
    const end=Math.min(race.distance,gate.to);
    const travel=race.distance-previous;
    const speedAt=distance=>travel>0?lerp(previousSpeed,race.speed,(distance-previous)/travel):race.speed;
    const startSpeed=speedAt(start);
    const endSpeed=speedAt(end);
    const sampleDt=travel>0?dt*(end-start)/travel:dt;
    const {kind}=gate;
    const clear=race.railHit===0&&race.boost===0;
    const eligible=clear&&(kind==='brake'?input.brake&&race.surface==='road':
      kind==='curb'?race.surface==='curb'&&!input.brake&&!input.throttle:
      race.surface==='road'&&input.throttle&&!input.brake&&!input.drift&&Math.abs(race.slip)<.12);
    if(eligible) {
      if(kind==='brake') {
        const high=70, low=55;
        if(!trial.sample&&startSpeed>=high&&endSpeed<high) {
          trial.sample={distance:lerp(start,end,(startSpeed-high)/(startSpeed-endSpeed))};
        }
        if(trial.sample&&endSpeed<=low) {
          const distance=lerp(start,end,(startSpeed-low)/(startSpeed-endSpeed));
          trial.measurements[index]={distance:distance-trial.sample.distance};
        }
      } else if(sampleDt>0&&(kind==='curb'||trial.sample||startSpeed>=12&&startSpeed<=65)) {
        const duration=kind==='curb'?.30:.60;
        const sample=trial.sample??={elapsed:0,startSpeed};
        sample.elapsed+=sampleDt;
        if(sample.elapsed+1e-9>=duration) {
          const fraction=clamp(1-(sample.elapsed-duration)/sampleDt,0,1);
          trial.measurements[index]={startSpeed:sample.startSpeed,endSpeed:lerp(startSpeed,endSpeed,fraction)};
        }
      }
    } else trial.sample=null;
    if(trial.measurements[index]||race.distance>=gate.to) {
      trial.sample=null;
      trial.gateIndex++;
    }
  }

  function steerKart(race, input, road, dt) {
    const { car, steer, speed } = race;
    const { curve,grip:surfaceGrip }=road;
    const ratio = speed / car.max;
    const grip = car.grip*surfaceGrip;
    const steerSign = Math.abs(steer) > .08 ? Math.sign(steer) : 0;
    const canDrift = input.drift && !input.brake && speed > 27 && !race.offroad;
    if (!canDrift) race.driftDirection = 0;
    else if (race.driftDirection === 0 && steerSign && speed > 34) race.driftDirection = steerSign;

    const direction = race.driftDirection;
    const alignment = direction * steer;
    const counter = Math.max(0, -alignment);
    const speedFactor = clamp((speed - 24) / 41, 0, 1.18);
    const slipTarget = direction * speedFactor * (.30 + (car.drift - 1) * .32) / grip
      * (alignment < 0 ? .57 - counter * .34 : .76 + alignment * .24);
    const settling = direction ? 3.5 + counter * 3.7 : 6.3 + grip * 2.4 + car.setup.exit * .16;
    race.slip = lerp(race.slip, slipTarget, 1 - Math.exp(-dt * settling));

    // A steering reversal first catches the sliding rear. Lateral velocity keeps its inertia.
    const guidedSteer = direction ? direction * (.67 + alignment * .23) : steer;
    const corner=cornerWeight(race.cornerCourse,race.distance);
    const inside=clamp(race.x*Math.sign(curve),-.7,.8);
    const safeSpeed=bendSpeed(curve)*(1-corner*(inside*.25-.04))*Math.pow(grip,.19);
    const challenge=race.track.challenge;
    const targetSpeed=challenge?challengeCornerSpeed(race.track,road):corner?safeSpeed:bendSpeed(curve);
    const fastEntry=clamp((speed-targetSpeed)/(challenge?28:24),0,1);
    const washout=challenge ? .30+(1-challenge.corner)*1.13 : 0;
    const brakingSupport=input.brake&&corner?clamp(.84+grip*.11+car.setup.brake*.0015,.95,1.10):1;
    const targetLateral = (guidedSteer * grip * 1.54 * brakingSupport * (1-fastEntry*(.16+corner*.12+washout*.30))
      - curve * (.67 + fastEntry*(.36+corner*.15+washout)) * ratio)
      * Math.min(1.23, ratio * 1.4) - race.slip * .62;
    const lateralResponse = direction ? 3.65 + counter * 2.6 : 6 + grip * 2.8;
    race.lateral = lerp(race.lateral, targetLateral, 1 - Math.exp(-dt * lateralResponse));
    const travelHeading = Math.atan2(race.lateral * HALF_ROAD, Math.max(13, speed));
    race.heading = travelHeading + race.slip;
    race.x = clamp(race.x + race.lateral * dt, -1.48, 1.48);
    race.drifting = Math.abs(race.slip) > .062;
    return ratio;
  }

  function challengeCornerSpeed(track,road) {
    return bendSpeed(road.curve)*track.challenge.corner*Math.sqrt(road.grip);
  }

  function vehicleEnvelope(car) {
    return {width:car.body===1?1.43:1.33,length:car.generation===0?1.94:2.02};
  }

  function railLimit(driver,road) {
    const heading=Math.min(Math.abs(driver.heading||0),Math.PI/2);
    const {width,length}=vehicleEnvelope(driver.car);
    const span=width*Math.cos(heading)+length*Math.sin(heading);
    return road.rail-Math.max(KART_CLEARANCE,(span+.047)/HALF_ROAD);
  }

  function roadContact(race,road) {
    const limit=railLimit(race,road);
    if (Math.abs(race.x)>limit) {
      const side=Math.sign(race.x);
      const outward=Math.max(0,race.lateral*side);
      race.x=side*limit;
      race.lateral=-side*Math.min(.60,outward*.49);
      if (race.railHit<.12 && (outward>.15 || race.railSide!==side)) {
        race.speed*=clamp(.70-outward*.065,.55,.70);
        race.railHit=.55*(race.car.setup.railRecovery??1);
        race.railSide=side;
        race.railContacts++;
        race.driftDirection=0;
        race.slip*=.44;
        race.exitDrive=0;
      }
    }
    const edge=Math.abs(race.x);
    race.surface=road.curbSide===Math.sign(race.x) && edge>road.width*.91 && edge<road.width+.095 ? 'curb'
      : edge>road.width+.025 ? 'shoulder' : 'road';
    race.offroad=race.surface==='shoulder';
  }

  function trafficBox(track,driver) {
    const road=roadAt(track,driver.distance);
    const heading=driver.heading||0;
    const sin=Math.sin(heading),cos=Math.cos(heading);
    const forward=[road.fx*cos+road.rx*sin,road.fz*cos+road.rz*sin];
    return {road,forward,right:[-forward[1],forward[0]],
      ...vehicleEnvelope(driver.car),
      x:road.x+road.rx*driver.x*HALF_ROAD,z:road.z+road.rz*driver.x*HALF_ROAD};
  }

  function trafficOverlap(track,a,b) {
    const along=wrap(a.distance-b.distance+track.length/2,track.length)-track.length/2;
    if(Math.abs(along)>9||Math.abs(a.x-b.x)>.79) return null;
    const first=trafficBox(track,a),second=trafficBox(track,b);
    const dx=second.x-first.x,dz=second.z-first.z;
    let hit=null;
    for(const [x,z] of [first.right,first.forward,second.right,second.forward]) {
      const radius=box=>Math.abs(x*box.right[0]+z*box.right[1])*box.width+
        Math.abs(x*box.forward[0]+z*box.forward[1])*box.length;
      const projection=dx*x+dz*z;
      const depth=radius(first)+radius(second)-Math.abs(projection);
      if(depth<=0) return null;
      if(!hit||depth<hit.depth) hit={x:x*(projection<0?-1:1),z:z*(projection<0?-1:1),depth,first,second};
    }
    return hit;
  }

  function separateTraffic(race,drivers) {
    const {track}=race;
    const contacted=new Set();
    const move=(driver,road,x,z)=>{
      driver.distance=Math.max(0,driver.distance+x*road.fx+z*road.fz);
      const limit=railLimit(driver,roadAt(track,driver.distance));
      driver.x=clamp(driver.x+(x*road.rx+z*road.rz)/HALF_ROAD,-limit,limit);
    };
    for(let pass=0;pass<12;pass++) {
      let collisions=0;
      for(let i=0;i<drivers.length;i++) for(let j=i+1;j<drivers.length;j++) {
        const a=drivers[i],b=drivers[j];
        const hit=trafficOverlap(track,a,b);
        if(!hit) continue;
        collisions++;
        const {x,z,depth,first,second}=hit;
        const amount=(depth+.034)*.51;
        move(a,first.road,-x*amount,-z*amount);
        move(b,second.road,x*amount,z*amount);
        const id=i*drivers.length+j;
        if(contacted.has(id)) continue;
        contacted.add(id);
        if(a!==race) a.carContacts=(a.carContacts??0)+1;
        if(b!==race) b.carContacts=(b.carContacts??0)+1;
        const alignment=x*first.forward[0]+z*first.forward[1];
        if(Math.abs(alignment)>.52) {
          const [behind,ahead]=alignment>0?[a,b]:[b,a];
          if(behind.speed>ahead.speed) behind.speed=lerp(behind.speed,ahead.speed,.54);
        }
        if(a===race&&race.hit===0) {
          race.hit=.28;
          race.carContacts++;
          race.contactSide=Math.abs(alignment)>.67?0:Math.sign(x*first.road.rx+z*first.road.rz);
          race.contactFront=alignment>=0;
          race.lateral*=.45;
          race.slip*=.82;
        }
      }
      if(!collisions) break;
    }
  }

  function trackRivalOrder(rival,field,track,dt) {
    if(rival.trainingLead||rival.finish<Infinity) return;
    const order=rival.trafficOrder??=new Map();
    const reply=rival.reply;
    if(reply) {
      reply.remaining-=dt;
      if(reply.remaining<=0||reply.target.retired||reply.target.finish<Infinity) rival.reply=null;
    }
    for(const other of field) {
      if(other===rival||other.finish<Infinity) continue;
      const gap=draftGap(track,rival.distance,other.distance);
      if(Math.abs(gap)>42) {order.delete(other);continue;}
      if(Math.abs(gap)<3.5) continue;
      const side=Math.sign(gap);
      const previous=order.get(other);
      order.set(other,side);
      if(previous===-1&&side===1) rival.reply={target:other,remaining:7,attempted:false};
      else if(previous===1&&side===-1&&rival.reply?.target===other) {
        if(rival.reply.attempted) rival.repasses=(rival.repasses??0)+1;
        rival.reply=null;
      }
    }
  }

  function driveRival(rival, field, track, dt,course) {
    if(!rival.trainingLead) rival.wake??=createWake(rival.car);
    const section=roadAt(track,rival.distance);
    const tuning=rival.tuning;
    const style=rival.style;
    const approach=courseAt(track,rival.distance+tuning.look);
    const exit=courseAt(track,rival.distance-18);
    const exiting=Math.abs(exit.curve)>.48&&Math.abs(section.curve)<Math.abs(exit.curve)*.76;
    const entering=Math.abs(approach.curve)>.48&&Math.abs(section.curve)<Math.abs(approach.curve)*.76;
    const corner=cornerWeight(course,rival.distance);
    const inside=rival.x*Math.sign(section.curve);
    let pace=rivalTargetSpeed(track,rival.distance+(style.brake-1)*65,rival.pace,tuning.corner)
      *(1-corner*Math.max(0,inside)*.16);
    const player=field?.[0];
    if(player&&player!==rival&&!rival.trainingLead) {
      const gap=player.distance-rival.distance;
      if(gap>80) pace+=Math.min(15,gap*.03);
      else if(gap<-120) pace-=Math.min(4,(-gap-120)*.01);
    }
    const {bridgeQueue}=section;
    if(bridgeQueue) {
      const meters=wrap(rival.distance,track.length);
      const gate=track.length*trackLandmarks.coast.bridgeMouth;
      const bridgePace=meters<gate?Math.sqrt(64**2+24*(gate-meters)):64+Math.max(0,meters-track.length*.382)*.30;
      pace=Math.min(pace,bridgePace);
    }
    const maxLane=Math.min(.67,section.rail-KART_CLEARANCE-.10);
    const gapTo=other=>draftGap(track,rival.distance,other.distance);
    const narrow=bridgeQueue||section.width<.86||roadAt(track,rival.distance+Math.max(45,rival.speed*.85)).width<.86;
    const nearby=field.filter(other=>other!==rival&&!other.retired&&Math.abs(gapTo(other))<(bridgeQueue?110:54));
    const inQueuePath=other=>Math.abs(other.x-clamp(other.x,Math.min(rival.x,bridgeQueueLane),Math.max(rival.x,bridgeQueueLane)))<.43;
    const ahead=nearby.filter(other=>gapTo(other)>0&&(bridgeQueue?inQueuePath(other):narrow||Math.abs(other.x-rival.x)<.44))
      .sort((a,b)=>gapTo(a)-gapTo(b))[0];
    if (rival.passing && (gapTo(rival.passing.target)<-10 || !nearby.includes(rival.passing.target))) {
      if(gapTo(rival.passing.target)<0) rival.passes++;
      rival.passing=null;
    }
    const laneClear=lane=>nearby.every(other=>{
      const gap=gapTo(other);
      const future=gap+(other.speed-rival.speed)*.55;
      return Math.max(gap,future)<-8||Math.min(gap,future)>29||
        Math.abs(other.x-lane)>.43&&Math.abs(other.x+(other.lateral??(other.steer||0)*.55)*.55-lane)>.43;
    });
    if(rival.passing&&(!laneClear(rival.passing.lane)||narrow)) rival.passing=null;
    const counterTarget=rival.reply?.target;
    const counter=nearby.includes(counterTarget)&&gapTo(counterTarget)>3&&gapTo(counterTarget)<30&&
      (!ahead||ahead===counterTarget);
    const targetCar=counter?counterTarget:ahead;
    const reserveWake=!rival.trainingLead&&ahead&&!narrow&&section.grip>.86&&Math.abs(section.curve)<.98&&
      rival.speed>=42&&gapTo(ahead)>10&&gapTo(ahead)<32&&
      pace-ahead.speed<15&&rival.wake?.charge<1&&!rival.wake.cooldown;
    const passingMargin=counter?Math.min(tuning.passing,1.2):tuning.passing;
    if (!narrow&&!rival.passing&&targetCar&&!reserveWake&&gapTo(targetCar)<40&&
      pace>targetCar.speed+passingMargin&&Math.abs(approach.curve)<(targetCar.speed<12?1.55:.76)) {
      const side=Math.sign(approach.curve||rival.lane)*(style.entry>0?1:-1);
      for(const lane of [side*maxLane,-side*maxLane]) {
        if(laneClear(lane)&&Math.abs(targetCar.x-lane)>.48) {
          rival.passing={target:targetCar,lane};
          if(counter) rival.reply.attempted=true;
          break;
        }
      }
    }
    const curve=entering?approach.curve:exiting?exit.curve:section.curve;
    const bias=entering?style.entry:exiting?style.exit:style.apex;
    const line=lerp(rival.lane*.4,Math.sign(curve)*bias,clamp(Math.abs(curve)*1.35,0,1));
    const approaching=nearby.find(other=>{
      const gap=gapTo(other);
      return gap<=0&&gap> -19&&other.speed>rival.speed+.8&&Math.abs(other.x-rival.x)<.47;
    });
    const yieldLane=approaching&&Math.abs(section.curve)<.8?
      Math.sign(rival.x-approaching.x||rival.lane)*maxLane:undefined;
    const requested=bridgeQueue?bridgeQueueLane:narrow?clamp(line,-.13,.13):rival.passing?.lane??yieldLane??line;
    const canMerge=nearby.every(other=>{
      const gap=gapTo(other);
      if(!bridgeQueue) return Math.abs(gap)>8||Math.abs(other.x-requested)>.39;
      if(!inQueuePath(other)||(other.x-rival.x)*(requested-rival.x)<=0) return true;
      const future=gap+(other.speed-rival.speed)*.45;
      return Math.min(gap,future)>10||Math.max(gap,future)<-10;
    });
    const lane=clamp((narrow?canMerge:laneClear(requested))?requested:rival.x,-maxLane,maxLane);
    const delta=lane-rival.x;
    rival.steer=clamp(delta*2,-1,1);
    rival.heading=clamp(delta*.28,-.17,.17);
    rival.x+=clamp(delta,-dt*1.5,dt*1.5);
    const gap=ahead?gapTo(ahead):Infinity;
    const followDistance=narrow?41:30;
    const following=gap<followDistance&&(narrow||Math.abs(ahead.x-rival.x)<.43);
    let safeSpeed=following?Math.max(0,ahead.speed+(gap-(narrow?15:10))*(narrow?1.6:1.35)):Infinity;
    if(bridgeQueue&&ahead) {
      const headway=8.5+Math.min(rival.speed,ahead.speed)*.30;
      const closing=Math.max(0,rival.speed-ahead.speed);
      const tracking=Math.max(0,ahead.speed+(gap-headway)*.96-closing*.24);
      const stopping=Math.sqrt(Math.max(0,ahead.speed**2+40*(gap-7)));
      safeSpeed=Math.min(tracking,stopping);
    }
    rival.braking=rival.speed>Math.min(pace,safeSpeed)+2;
    updateWake(rival,track,nearby,section,dt,rival.steer);
    if(narrow&&rival.wake) rival.wake.burst=0;
    const wakePower=rival.wake?.burst>0?rival.wake.force:0;
    const target=Math.min(pace+(wakePower?13:0),safeSpeed);
    rival.speed+=clamp(target-rival.speed,-dt*rival.car.setup.brake*style.brake,
      dt*(rival.car.accel*(.70+(tuning.corner-1)*.68)*(exiting?style.launch:1)+wakePower));
    rival.distance+=rival.speed*dt/clamp(1-rival.x*section.curve*.093,.86,1.14);
    rival.x=clamp(rival.x,-maxLane,maxLane);
    updateTail(rival,dt);
  }

  const boostBufferSeconds=.32;
  const boostRecoverySlip=.12;

  function updateNitro(race,input,dt,wasDrifting) {
    const pressed=input.boost&&!race.boostHeld&&race.tanks>0&&race.boost===0;
    race.boostHeld=Boolean(input.boost);
    race.boostQueue=Math.max(0,race.boostQueue-dt);
    const recovering=race.driftDirection||(wasDrifting||race.boostQueue>0)&&Math.abs(race.slip)>boostRecoverySlip;
    const blocked=race.braking||race.offroad||race.railHit>.15||race.hit>.14;
    if(blocked||race.boost>0||!race.tanks) race.boostQueue=0;
    if(pressed&&recovering&&!blocked) race.boostQueue=boostBufferSeconds;
    const chained=race.boostQueue>0||pressed&&wasDrifting;
    if((pressed&&!recovering||race.boostQueue>0&&!race.driftDirection&&!recovering)&&!blocked) {
      race.tanks--;
      race.boost=race.boostDuration=race.car.setup.boostTime;
      race.boostCount++;
      race.boostChain=Boolean(chained);
      race.boostQueue=0;
    }
  }

  function update(race, input, dt) {
    if(race.opponents.length&&dt>.025) {
      const count=Math.ceil(dt/.025);
      for(let i=0;i<count;i++) updateStep(race,input,dt/count);
      return;
    }
    updateStep(race,input,dt);
  }

  function updateStep(race,input,dt) {
    if (race.phase === 'finished') return;
    if (race.phase === 'countdown') {
      race.countdown -= dt;
      if (race.countdown <= 0) race.phase = 'racing';
      return;
    }
    const { car, track } = race;
    const trial=race.trial;
    const previousBoost=race.boost;
    const previousSpeed=race.speed;
    const beforeTiming=race.timing?.checkpoints ? replayFrame(race) : null;
    race.throttle=Boolean(input.throttle)&&!input.brake;
    race.elapsed += dt;
    race.boost = Math.max(0, race.boost - dt);
    if(previousBoost>0&&race.boost===0) race.boostEndedAt=race.elapsed;
    race.hit = Math.max(0, race.hit - dt);
    race.railHit = Math.max(0,race.railHit-dt);
    race.exitDrive = Math.max(0,race.exitDrive-dt);
    race.braking = Boolean(input.brake);
    race.steer = clamp(input.steer || 0, -1, 1);
    const road=roadAt(track,race.distance);
    const {curve,pad,grade}=road;
    const wasDrifting=Boolean(race.driftDirection||Math.abs(race.slip)>boostRecoverySlip);
    const exiting = race.driftDirection && !input.drift && input.throttle && Math.abs(race.slip)>.12 && race.surface!=='shoulder';
    const speedRatio = steerKart(race, input, road, dt);
    if(car.id==='rally-pro'||car.family==='rally'&&car.flagship) {
      if(input.brake && race.speed>35) race.brakeLoad=Math.min(.5,race.brakeLoad+dt);
      else if(input.throttle && race.brakeLoad>.17) {
        race.exitDrive=.72;
        race.brakeLoad=0;
      } else race.brakeLoad=Math.max(0,race.brakeLoad-dt);
    }
    if(exiting && car.setup.exit) race.exitDrive=.72;
    roadContact(race,road);
    updateNitro(race,input,dt,wasDrifting);
    race.roadGrip=road.grip;
    updateWake(race,track,race.opponents,road,dt,race.steer,race.throttle);
    const slip = Math.abs(race.slip);
    const charging = race.driftDirection && race.drifting && !race.offroad;
    if (charging) {
      race.totalDrift += dt;
      if (race.tanks < 2) {
        const effectiveSlip = clamp((slip - .06) / .24, 0, 1);
        const gain=dt * car.drift * car.setup.chargeRate * effectiveSlip * (1.02 + Math.abs(curve) * .17);
        race.charge += gain;
        if(trial && gain>0) trial.drift=(trial.drift??0)+gain;
        if (race.charge >= 1) {
          race.tanks++;
          race.charge = race.tanks === 2 ? 0 : race.charge - 1;
        }
      }
    }

    const padId = `${race.lapTimes.length}:${pad}`;
    if (pad && race.lastPad !== padId && race.x * pad >= .22 && race.x * pad <= .79) {
      race.lastPad = padId;
      race.padCount++;
      if(race.boost<1.45) {
        race.boost=race.boostDuration=1.45;
        race.boostChain=false;
        race.boostQueue=0;
      }
    }
    const surface = race.offroad ? (track.id === 'sunset' ? .67 : .58) + (car.grip - 1) * .25 : 1;
    const wakePower=race.wake?.burst>0&&!race.boost?race.wake.force:0;
    const limit = car.max + (race.boost > 0 ? car.setup.boostSpeed : wakePower?12:0) - slip * 14;
    const top = (limit + (race.exitDrive ? 4 : 0) - (race.surface==='curb' ? car.setup.curbLoss : 0)) * surface;
    if (input.brake) race.speed -= car.setup.brake * road.grip * dt;
    else if (input.throttle || race.boost > 0) {
      const thrust=race.boostChain?lerp(.74,1,clamp((race.boostDuration-race.boost)/.13,0,1)):1;
      const acceleration = car.accel * (1 - Math.min(0.76, speedRatio * 0.68)) + (race.boost > 0 ? car.setup.boostSpeed*.88*thrust : 0) + (race.exitDrive ? car.setup.exit : 0) + wakePower - grade * 21;
      race.speed += (race.speed > top ? -30 : acceleration) * dt;
    } else race.speed -= (race.offroad ? 20 : 7) * dt;
    race.speed -= (slip * 8 + (race.surface==='curb' ? car.setup.curbLoss*.66 : 0) + (race.railHit>.18 ? 20 : 0)) * dt;
    if(track.challenge) {
      const excess=clamp((race.speed-challengeCornerSpeed(track,road))/28,0,1);
      const turn=clamp(Math.abs(curve)/1.55,0,1);
      race.speed-=excess*turn*turn*34*dt;
    }
    race.speed = clamp(race.speed, 0, car.max + car.setup.boostSpeed);
    updateTail(race,dt);

    const previous = race.distance;
    const total = trial?.end ?? track.length * race.laps;
    const lineLength=clamp(1-race.x*curve*.093,.86,1.14);
    const travel=race.speed * dt / lineLength;
    race.distance = Math.min(total, previous + travel);
    const usedDt=race.distance===total && travel>0 ? dt*Math.min(1,(total-previous)/travel) : dt;
    if(trial || race.timing || race.cup) race.elapsed-=dt-usedDt;
    roadContact(race,roadAt(track,race.distance));
    if(trial) {
      if(trial.course?.tanks) {
        if(race.boostCount===1&&!trial.manualNitro) trial.manualNitro={seconds:0,peak:race.speed,remaining:race.boostDuration};
        const manual=trial.manualNitro;
        if(manual?.remaining>0) {
          const active=Math.min(usedDt,manual.remaining);
          manual.seconds+=active;
          manual.remaining-=active;
          manual.peak=Math.max(manual.peak,race.speed);
        }
        const exit=trial.course.gates[0];
        if(race.exitDrive>0&&race.distance>=exit.approach&&previous<exit.to) trial.exitSeconds+=usedDt;
      }
      if(previousBoost>0) trial.nitro=(trial.nitro??0)+Math.min(previousBoost,usedDt);
      if(race.boostCount && trial.nitro===null) trial.nitro=0;
      if(race.surface==='curb' && trial.curbEntry===null) trial.curbEntry=previousSpeed;
      if(trial.curbEntry!==null && (race.surface!=='curb' || race.distance===total)) {
        if(!trial.curb) trial.curb=[trial.curbEntry,race.speed];
        trial.curbEntry=null;
      }
      if(trial.course?.gates) measureWorkshop(race,input,previous,previousSpeed,usedDt);
      if(trial.sector!==undefined) measureSector(race,previous,previousSpeed,usedDt);
    }
    const field=race.opponents.length ? [race,...race.opponents.filter(rival=>!rival.retired)] : [];
    for (const rival of race.opponents) {
      if(rival.retired) continue;
      if(rival.finish!==Infinity) {
        rival.distance+=rival.speed*dt;
        rival.retired=rival.distance>=total+45;
        continue;
      }
      const rivalStart=rival.distance;
      driveRival(rival,field,track,dt,race.cornerCourse);
      if(race.cup&&rival.distance>=total) {
        rival.finish=race.elapsed-usedDt+dt*clamp((total-rivalStart)/(rival.distance-rivalStart),0,1);
      }
    }
    if(field.length>1) {
      separateTraffic(race,field);
      race.distance=Math.min(total,race.distance);
      roadContact(race,roadAt(track,race.distance));
      for(const rival of race.opponents) if(rival.finish===Infinity&&rival.distance>=total) rival.finish=race.elapsed;
    }
    finishWakePass(race,track,usedDt);
    for(const rival of race.opponents) {
      trackRivalOrder(rival,field,track,dt);
      finishWakePass(rival,track,dt);
    }
    if(race.cornerCourse) {
      const {entry,end}=race.cornerCourse;
      const span=race.distance-previous;
      const fraction=at=>span>0?clamp((at-previous)/span,0,1):0;
      if(!race.cornerSample&&previous<=entry&&race.distance>=entry) race.cornerSample={
        entrySpeed:lerp(previousSpeed,race.speed,fraction(entry)),
        entryTime:race.elapsed-(1-fraction(entry))*usedDt,contacts:race.carContacts+race.railContacts,meters:0,
      };
      if(race.cornerSample&&race.cornerSample.time===undefined) {
        race.cornerSample.meters+=Math.max(0,Math.min(race.distance,end)-Math.max(previous,entry))*lineLength;
        if(race.distance>=end) Object.assign(race.cornerSample,{
          exitSpeed:lerp(previousSpeed,race.speed,fraction(end)),
          time:race.elapsed-(1-fraction(end))*usedDt-race.cornerSample.entryTime,
          collisions:race.carContacts+race.railContacts-race.cornerSample.contacts,
        });
      }
    }
    if(beforeTiming) tickTimeTrial(race,beforeTiming);
    const previousPlace=race.place;
    race.place = 1 + race.opponents.filter(rival => race.cup&&race.distance>=total?
      rival.finish<=race.elapsed:rival.distance>race.distance).length;
    if(race.positionChanges&&race.place!==previousPlace&&race.positionChanges.length<80) {
      race.positionChanges.push({distance:race.distance,from:previousPlace,to:race.place});
    }
    if (race.lapTimes.length < Math.floor(race.distance / track.length)) {
      race.lapTimes.push(race.elapsed - race.lapStart);
      race.lapStart = race.elapsed;
    }
    if (race.distance >= total) race.phase = 'finished';
  }

  function award(save, race) {
    if (race.trial || race.cup || race.phase !== 'finished' || race.awarded) return 0;
    race.awarded = true;
    const key = recordKey(race.track.id,race.mode,race.difficulty);
    const previous=save.records[key];
    race.firstFinish=!previous;
    race.personalBest = !previous || race.elapsed < previous;
    race.recordDelta = previous ? race.elapsed-previous : null;
    if (race.personalBest) save.records[key] = race.elapsed;
    const podium = race.mode === 'race' ? ([160, 115, 80, 35, 15, 0][race.place - 1] ?? 0) : 0;
    const debut=race.mode==='race'&&!save.firstRace?45:0;
    if(race.mode==='race') save.firstRace=true;
    const reward = (race.mode === 'race' ? 130 : 85) + podium + debut + (race.personalBest ? 35 : 0) + Math.min(60, race.boostCount * 12);
    const difficultyBonus=race.mode==='race'?({rookie:1,club:1.2,pro:1.5}[race.difficulty]??1):1;
    save.credits += Math.round(reward*difficultyBonus);
    return Math.round(reward*difficultyBonus);
  }

  function sceneryShade(track,distance) {
    if(track.id!=='sunset') return 0;
    const offset=wrap(distance-track.length*.113+track.length*.5,track.length)-track.length*.5;
    const edge=offset<0?24:17;
    const t=clamp((edge-Math.abs(offset))/(edge-4),0,1);
    return t*t*(3-2*t);
  }

  function flameCue(race) {
    const age=race.elapsed-(race.boostEndedAt??-1);
    if(race.boostQueue>0) return {phase:'arming',strength:0,ignition:0,arming:.28+.30*clamp((race.tailDeploy??0)/.62,0,1)};
    if(race.boost<=0) return age<.14?{phase:'cooldown',strength:Math.max(0,1-age/.14)*.38,ignition:0}:{phase:'off',strength:0,ignition:0};
    const ignition=clamp(1-(race.boostDuration-race.boost)/.19,0,1);
    return {phase:ignition?'ignition':'steady',strength:1+ignition*.31,ignition};
  }

  const Kart = { cars, tracks, trackLandmarks, trackVisualCue, difficulties, clamp, lerp, wrap, courseAt, roadAt, brakingZones, rivalTargetSpeed, HALF_ROAD, KART_CLEARANCE, coastWaterHeight, recordKey, sanitizeSave, purchase, createRace, createDraftTrial, wakeGuide, createWorkshopTrial, workshopCourses, createSectorPractice, weakestSector, createCup, createCupRace, createCupPractice, recordCupResult, scoreCup, cupTracks, cupCourses, cupStandings, cornerWeight, update, award, startTimeTrial, saveReplay, ghostAt, replayCar, trafficOverlap, sectorDistances, originalCars, carFamily, configureCar, bodyPanels, bodySectionShape, tailPartPose, tailPipe, rotateTailPoint, parts, equippedParts, ownsPart, buyPart, equipPart, requiredCar, sceneryShade, flameCue, tierColors, classInfo, familyInfo, familyNames, familyPalettes };
  Kart.createQuickDrive = createQuickDrive;
  if (typeof module !== 'undefined') module.exports = Kart;
  else root.Kart = Kart;
})(globalThis);
