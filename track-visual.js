(() => {
  'use strict';
  const { clamp, lerp, wrap, roadAt, brakingZones, HALF_ROAD, sceneryShade, trackLandmarks, trackVisualCue, cupCourses, cornerWeight, coastWaterHeight } = Kart;
  const palettes = {
    sunset: { horizon: .57, asphalt: '#464348', lane: '#e1cdb2', gravel: '#89624c', soil: '#81573f', curb: ['#985445', '#cebdab'], rail: ['#695c55', '#b49c89'] },
    coast: { horizon: .641, asphalt: '#435058', lane: '#e2e6d9', gravel: '#69756b', soil: '#72735f', curb: ['#537e8a', '#dedfd3'], rail: ['#4f6671', '#b7ced0'] },
    city: { horizon: .672, asphalt: '#272d3a', lane: '#bccad6', gravel: '#414555', soil: '#56566a', curb: ['#4d5364', '#848995'], rail: ['#313b50', '#75879a'] },
    switchback:{asphalt:'#49434b',lane:'#f3dab9',gravel:'#926251',soil:'#805246',curb:['#a84c46','#e9c5a0'],rail:['#744e4c','#d7a982'],hills:['#9290a9','#aa736c','#87554e']},
    caldera:{asphalt:'#3c3845',lane:'#efe1c7',gravel:'#62505d',soil:'#4c404d',curb:['#9d5049','#dfb58c'],rail:['#564653','#d59c7c'],hills:['#6d5b72','#524459','#443a4c']},
    ice:{asphalt:'#3d5267',lane:'#e7f4ff',gravel:'#91b1c7',soil:'#acc8d8',curb:['#638da5','#e7f3f5'],rail:['#698394','#d4f1fa'],hills:['#a1b9d1','#7497b6','#d5e8ef']},
  };

  const random = (n) => {
    const wave = Math.sin(n * 39.346 + 17.417) * 43758.5453;
    return wave - Math.floor(wave);
  };
  const grain = document.createElement('canvas');
  grain.width = grain.height = 128;
  const grainContext = grain.getContext('2d');
  const data = grainContext.createImageData(grain.width, grain.height);
  for (let i = 0; i < data.data.length; i += 4) {
    const value = random(i);
    const tint = value > .49 ? 224 : 11;
    data.data[i] = data.data[i + 1] = data.data[i + 2] = tint;
    data.data[i + 3] = Math.floor(Math.abs(value - .5) * 99);
  }
  grainContext.putImageData(data, 0, 0);
  const patterns = new WeakMap();

  function path(ctx, vertices, fill) {
    ctx.beginPath();
    ctx.moveTo(vertices[0][0], vertices[0][1]);
    for (let i = 1; i < vertices.length; i++) ctx.lineTo(vertices[i][0], vertices[i][1]);
    ctx.closePath();
    ctx.fillStyle = fill;
    ctx.fill();
  }

  function backdrop(ctx, w, h, horizon, track, distance) {
    const palette = palettes[track.id];
    const fallback = ctx.createLinearGradient(0, 0, 0, h);
    fallback.addColorStop(0, track.sky[0]);
    fallback.addColorStop(clamp(horizon / h,.1,.8), track.sky[1]);
    fallback.addColorStop(1, palette.gravel);
    ctx.fillStyle = fallback;
    ctx.fillRect(0, 0, w, h);
    const heading=roadAt(track,distance);
    if(track.id==='coast') {
      const sea=ctx.createLinearGradient(0,horizon-6,0,h);
      sea.addColorStop(0,'#769faf');sea.addColorStop(.30,'#34768e');sea.addColorStop(1,'#194c65');
      ctx.fillStyle=sea;ctx.fillRect(0,horizon-6,w,h-horizon+6);
      const shift=distance*.0023+Math.atan2(heading.fx,heading.fz);
      for(let i=0;i<4;i++) {
        const x=w*wrap(.12+i*.29-shift*.061,1.26)-w*.13;
        const span=w*(.10+random(i+3)*.08);
        const peak=h*(.029+random(i*11)*.026);
        path(ctx,[[x-span,horizon+2],[x-span*.55,horizon-peak*.34],[x,horizon-peak],[x+span*.41,horizon-peak*.68],
          [x+span,horizon+3]],i%2?'#6594a1':'#80a4a9');
      }
      for(let i=0;i<21;i++) {
        const y=horizon+14+(h-horizon-14)*random(i*6.2);
        const x=w*wrap(random(i*3.4)-shift*.15,1);
        const length=(3+random(i*2.8)*18)*(y/h);
        path(ctx,[[x,y],[x+length,y-1],[x+length*.75,y+.8]],i%3===0?'#a4d3d2a0':'#5ba3ae80');
      }
      return;
    }
    if(track.id==='city') {
      const shift=distance*.12+Math.atan2(heading.fx,heading.fz)*w*.11;
      const open=trackVisualCue(track,distance)?.zone==='ramp';
      for(let i=0;i<26;i++) {
        const x=wrap(i*w/26-shift,w+w/16)-w/28;
        const central=1-Math.abs(x/w-.5)*2;
        const roof=horizon-h*(.04+random(i*2.71)*.18)*(open?1-central*.62:1);
        const width=w*(.023+random(i*6.2)*.029);
        ctx.fillStyle=i%2?'#2f3c58':'#394766';
        ctx.fillRect(x,roof+h*.018,width,horizon-roof+9);
        ctx.fillRect(x+width*.12,roof,width*.67,h*.025);
        for(let y=roof+9;y<horizon;y+=11) if(random(i+y*.24)>.66) {
          ctx.fillStyle=i%3?'#617ca6':'#a17f72';ctx.fillRect(x+width*.14,y,width*.57,1.4);
        }
      }
      return;
    }
    const sun=w*(.52+(heading.fx*-.35-heading.fz*-.91)*.62);
    const glow=ctx.createRadialGradient(sun,horizon*.59,3,sun,horizon*.59,h*.33);
    glow.addColorStop(0,'#fff0ba');glow.addColorStop(.12,'#ffd797ae');glow.addColorStop(1,'#ffbb7500');
    ctx.fillStyle=glow;ctx.fillRect(0,0,w,horizon);
    for(const [layer,tint] of (palette.hills??['#8787a6','#777185','#805f62']).entries()) {
      const vertices=[[0,horizon+h*.12]];
      for(let i=0;i<=28;i++) {
        const t=i/28*7+(Math.atan2(heading.fx,heading.fz)+distance*.00036)*(1+layer*.42);
        const peak=track.id==='ice'?Math.abs(Math.sin(t*2.3+layer))*1.4:Math.sin(t*2.3+layer);
        vertices.push([i/28*w,horizon-h*(.037+layer*.022)-h*(.045+layer*.017)*(peak+.42*Math.cos(t*7.1))]);
      }
      vertices.push([w,horizon+h*.12]);
      path(ctx,vertices,tint);
    }
  }

  function cross(point, side, lift = 0) {
    return [point.x + point.half * side, point.y + point.roll * side - point.unit * lift];
  }

  function band(ctx, near, far, from, to, fill, lift = 0, farFrom = from, farTo = to) {
    const a = cross(near, from, lift);
    const b = cross(near, to, lift);
    a[1] += .85;
    b[1] += .85;
    path(ctx, [a, b, cross(far, farTo, lift), cross(far, farFrom, lift)], fill);
  }

  function slope(ctx, a, b, side, color) {
    const outside = point => {
      const distance = point.rail/point.width + .69 + .29 * Math.sin(point.index * .13) + .13 * Math.cos(point.index * .37);
      return cross(point, side * distance, -1.1 - .64 * Math.sin(point.index * .16 + side));
    };
    const vertices = [cross(a, side*a.rail/a.width), outside(a), outside(b), cross(b, side*b.rail/b.width)];
    const gradient = ctx.createLinearGradient(vertices[0][0], vertices[0][1], vertices[1][0], vertices[1][1]);
    gradient.addColorStop(0, color);
    gradient.addColorStop(.56, `${color}a0`);
    gradient.addColorStop(1, `${color}00`);
    path(ctx, vertices, gradient);
  }

  function mark(ctx, point, side, track, seed) {
    const [x, y] = cross(point, side*(point.rail+.13)/point.width);
    const scale = point.unit;
    if (Math.abs(point.curve) > .42) {
      const direction = Math.sign(point.curve);
      const board = scale * .97;
      const top = y - scale * 1.7;
      ctx.fillStyle = '#292d31';
      ctx.fillRect(x - scale * .035, top, scale * .07, y - top);
      ctx.fillStyle = '#292524';
      ctx.fillRect(x - board * .53, top, board * 1.06, board * .69);
      ctx.fillStyle = track.id === 'city' ? '#f2cf9a' : '#f2bb63';
      ctx.fillRect(x - board * .50, top + board * .034, board, board * .62);
      path(ctx, [[x - direction * board * .22, top + board * .12], [x + direction * board * .07, top + board * .12], [x + direction * board * .30, top + board * .34], [x + direction * board * .07, top + board * .55], [x - direction * board * .22, top + board * .55], [x + direction * board * .01, top + board * .34]], '#2c302f');
    } else {
      const tint = random(seed) > .4 ? '#eee4d0' : '#b4a99b';
      ctx.fillStyle = '#252a2a58';
      ctx.fillRect(x, y - scale * .85, scale * .14, scale * .85);
      ctx.fillStyle = tint;
      ctx.fillRect(x - scale * .04, y - scale * .85, scale * .12, scale * .85);
      ctx.fillStyle = '#cf775a';
      ctx.fillRect(x - scale * .05, y - scale * .78, scale * .13, scale * .11);
    }
  }

  function roadside(ctx, point, track, index) {
    if (point.z > 280 || point.y < -20) return;
    const city = track.id === 'city';
    const bridge = point.bridge > .20;
    const side = index % 2 ? 1 : -1;
    const size = point.unit;
    if (index % 5 === 0 && !bridge) mark(ctx, point, Math.abs(point.curve) > .42 ? -Math.sign(point.curve) : side, track, index);
    if (city || (bridge && index % 8 === 0)) {
      if (index % (city ? 6 : 8) !== 0) return;
      const postSide = Math.floor(index / (city ? 6 : 8)) % 2 ? 1 : -1;
      const [x, y] = cross(point, postSide*(point.rail+.035)/point.width);
      const height = size * (city ? 4.0 : 3.35);
      const arm = -postSide * size * .70;
      ctx.strokeStyle = city ? '#465164' : '#819199';
      ctx.lineWidth = Math.max(1, size * .095);
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x, y - height);
      ctx.quadraticCurveTo(x, y - height - size * .18, x + arm, y - height - size * .18);
      ctx.stroke();
      ctx.fillStyle = city ? '#ffddad' : '#cfd8d4';
      ctx.fillRect(x + arm - size * .13, y - height - size * .2, size * .31, size * .10);
      return;
    }
    if (bridge || index % 3 !== 0) return;
    const [x, y] = cross(point, side*(point.rail+.19+random(index*3)*.43)/point.width, -.40);
    const rock = size * (.26 + random(index * 5) * .82);
    if (track.id === 'coast' || index % 4 === 0) {
      for (let i = 0; i < 7; i++) {
        const width = random(index + i * 13) - .5;
        const tip = rock * (.39 + random(index - i * 11) * .77);
        path(ctx, [[x - rock * .18, y], [x + width * rock * 2.0, y - tip], [x + rock * .15, y]], i % 2 ? '#69714a' : '#51583d');
      }
    } else {
      path(ctx, [[x - rock, y], [x - rock * .74, y - rock * .48], [x - rock * .21, y - rock * .66], [x + rock * .68, y - rock * .28], [x + rock * .91, y], [x + rock * .25, y + rock * .12]], '#98705a');
      path(ctx, [[x - rock, y], [x - rock * .21, y - rock * .66], [x + rock * .14, y - rock * .28], [x + rock * .25, y + rock * .12]], '#6b5247');
    }
  }

  function create(ctx, w, h, track, distance, driverX, preview = false, low = false) {
    const palette = palettes[track.id];
    const sample = roadAt(track, distance);
    const interval = 6;
    const anchor = 19;
    const offset = wrap(distance, interval);
    const origin = distance - offset - anchor;
    const fx = Math.min(w * 1.08, h * (preview?.96:1.38));
    const fy = h * .84;
    const portrait=!preview&&w<h;
    const horizon=h*(preview?.50:portrait?.40:.442)+sample.grade*h*.53;
    const cameraY = sample.elevation + (preview ? 6.3 : 8.2);
    backdrop(ctx, w, h, horizon, track,distance);
    let pattern = patterns.get(ctx);
    if (!pattern) {
      pattern = ctx.createPattern(grain, 'repeat');
      patterns.set(ctx, pattern);
    }
    const city = track.id === 'city';
    const points = [];
    let heading = 0;
    let worldX = 0;
    let depth = -offset;
    for (let i = 1; i <= 86; i++) {
      const travel = i * interval - offset;
      const section = roadAt(track, origin + i * interval);
      if (travel > anchor) heading = clamp(heading + section.curve * .00335 * Math.min(interval, travel - anchor), -1.23, 1.23);
      worldX += Math.sin(heading) * interval;
      depth += Math.cos(heading) * interval;
      const z = Math.max(1.6, depth);
      const unit = fy / z;
      const nominal = HALF_ROAD * fx / z;
      points.push({
        ...section,
        x: w / 2 + worldX * fx / z - driverX * nominal * (portrait?.90:.75),
        y: horizon + (cameraY - section.elevation) * unit,
        half: nominal * section.width, nominal, unit, roll: -section.bank * unit * HALF_ROAD * section.width,
        z, travel, index: Math.floor(origin / interval) + i,
      });
    }
    // Only a nearer section spanning the whole deck can hide it.
    // This keeps the outside of a bend visible when it clears a crest.
    function crestClip(index,left,right) {
      let clip=Infinity;
      for(let i=index-2;i>=2;i--) {
        const near=points[i];
        const deck=near.nominal*near.rail;
        if(left<near.x-deck||right>near.x+deck) continue;
        const bank=Math.max((left-near.x)*near.roll,(right-near.x)*near.roll)/near.half;
        clip=Math.min(clip,near.y+bank+.65);
      }
      return clip;
    }
    const objects = [];
    const atLandmark=phase=>{
      const travel=wrap(phase*track.length-distance+track.length*.5,track.length)-track.length*.5+anchor;
      const point=points[Math.round((travel+offset)/interval)-1];
      return [travel,point];
    };
    for(const [phase,kind] of track.challenge?.landmarks??[]) {
      const [travel,point]=atLandmark(phase);
      if(!point||travel<31||travel>285) continue;
      objects.push({z:travel,draw(){
        for(const side of [-1,1]) {
          const mine=kind==='mine';
          const offset=side*(point.rail+(mine?1.38:2.37))/point.width;
          const [x,y]=cross(point,offset);
          const size=point.unit;
          if(mine) {
            ctx.fillStyle='#55414c';ctx.fillRect(x-size*.29,y-size*9.5,size*.58,size*9.5);
            ctx.fillStyle='#ffb784';ctx.fillRect(x-size*1.37,y-size*9.5,size*2.74,size*.48);
            path(ctx,[[x,y],[x+side*size*3.3,y+size*.36],[x+side*size*5.2,y-size*.14],[x+side*size*1.85,y-size*.38]],'#e5664d');
          } else {
            for(let i=0;i<3;i++) {
              const edge=x+side*i*size*3.9;
              const height=(8+i*6)*size;
              const width=size*(6.4-i*.6);
              path(ctx,[[edge-width*.5,y],[edge-width*.35,y-height*.66],[edge+side*width*.20,y-height],
                [edge+width*.53,y-height*.34],[edge+width*.64,y]],palette.hills[i]);
            }
          }
        }
      }});
    }
    if(track.id==='sunset') {
      const [travel,point]=atLandmark(trackLandmarks.sunset.arch);
      if(point&&travel<260) objects.push({z:travel,draw(){
        for(const side of [-1,1]) {
          const edge=(18.5/HALF_ROAD)/point.width;
          const contour=[[edge+.18,-.4],[edge-.22,2],[edge-.35,5],[edge-.6,8],[edge-1.25,11],[0,12.5]]
            .map(([x,y])=>cross(point,x*side,y));
          const silhouette=[[0,14],[edge-.76,14.8],[edge-.17,12.8],[edge+.15,9.7],[edge+.22,5],[edge+.30,0]]
            .map(([x,y])=>cross(point,x*side,y));
          path(ctx,[...contour,...silhouette],side<0?'#a86c51':'#724e50');
        }
      }});
      for(const [phase,side,peak,span] of [[.062,-1,21,2.1],[trackLandmarks.sunset.strata,-1,29,2.4],[.096,-1,24,2.6],[.098,1,22,2.4]]) {
        const [depth,rock]=atLandmark(phase);
        if(!rock||depth<34||depth>280) continue;
        objects.push({z:depth,draw(){
          const base=(rock.rail+.85)/rock.width;
          for(const [lift,rise,width,tint] of [[-.8,.23,1,'#785756'],[.18,.27,.93,'#a1725a'],[.42,.23,.86,'#8c605a'],[.64,.35,.71,'#bb8869']]) {
            const near=base+span*(1-width)*.66;
            const far=near+span*width;
            path(ctx,[[near,lift*peak],[near+.13,(lift+rise*.89)*peak],[far-.43,(lift+rise)*peak],
              [far,(lift+rise*.58)*peak],[far+.15,lift*peak]].map(([x,y])=>cross(rock,x*side,y)),tint);
          }
        }});
      }
    }
    if(track.id==='coast') {
      const [travel,point]=atLandmark(trackLandmarks.coast.headland);
      if(point&&travel>32&&travel<320) objects.push({z:travel,draw(){
        const [x,y]=cross(point,25/(HALF_ROAD*point.width),-2);
        for(const [lift,height,width,tint] of [[0,1.6,5,'#788287'],[1.5,7.1,2.5,'#e7ded0'],[7.4,1.4,2.6,'#b45d54'],
          [8.9,.84,3.05,'#e9e1cc'],[9.7,1.2,2.1,'#f5dbab'],[10.8,.64,2.75,'#ad544f']]) {
          ctx.fillStyle=tint;ctx.fillRect(x-point.unit*width*.5,y-point.unit*(lift+height),point.unit*width,point.unit*height);
        }
      }});
    }
    const cityMarks=trackLandmarks.city;
    if(city) for(const [phase,side,height] of [[cityMarks.offices-.013,1,31],[cityMarks.offices,-1,43],[cityMarks.offices+.014,1,37]]) {
      const [travel,point]=atLandmark(phase);
      if(!point||travel>330||travel<44) continue;
      objects.push({z:travel,draw(){
        const edge=side*4.9/point.width;
        const [x,y]=cross(point,edge,-5);
        const width=point.unit*12;
        for(const [lift,span,rise,tint] of [[0,1,.32,'#3b435e'],[.32,.78,.48,'#4a546e'],[.80,.58,.20,'#54617d']]) {
          ctx.fillStyle=tint;ctx.fillRect(x-width*span*.5,y-(lift+rise)*height*point.unit,width*span,rise*height*point.unit+1);
          ctx.fillStyle=side===1?'#84b9dd':'#d99b78';ctx.fillRect(x-width*span*.49,y-(lift+rise*.78)*height*point.unit,width*span*.98,Math.max(1,point.unit*.15));
        }
      }});
    }
    const portals=track.id==='coast'?[trackLandmarks.coast.bridgeFirst,trackLandmarks.coast.bridgeLast]:
      city?[cityMarks.service,cityMarks.service+.004,cityMarks.service+.008,cityMarks.service+.013,cityMarks.service+.018,cityMarks.service+.022,cityMarks.interchange]:[];
    for(const phase of portals) {
      const [travel,point]=atLandmark(phase);
      if(!point||travel<12||travel>285) continue;
      objects.push({z:travel,draw(){
        const sea=track.id==='coast';
        const ramp=city&&phase===cityMarks.interchange;
        const edge=(sea?10.3:ramp?23:11.1)/HALF_ROAD/point.width;
        const height=sea?23.2:ramp?12:10.2;
        ctx.strokeStyle=sea?'#bac5c5':'#344259';
        ctx.lineWidth=Math.max(1,point.unit*(sea?1.38:.44));
        ctx.beginPath();
        ctx.moveTo(...cross(point,-edge,0));ctx.lineTo(...cross(point,-edge*.89,height));
        ctx.lineTo(...cross(point,edge*.89,height));ctx.lineTo(...cross(point,edge,0));ctx.stroke();
        ctx.strokeStyle=sea?'#d4f8ff':ramp?'#a5b0c5':phase<cityMarks.service+.016?'#ffd09d':'#95d7fc';
        ctx.lineWidth=Math.max(.8,point.unit*(ramp?.13:.20));
        ctx.beginPath();ctx.moveTo(...cross(point,-edge*.86,height-.35));ctx.lineTo(...cross(point,edge*.86,height-.35));ctx.stroke();
      }});
    }
    if(city) for(const meters of [2628,2686,2734]) {
      const [travel,point]=atLandmark(meters/track.length);
      if(!point||travel<18||travel>240) continue;
      objects.push({z:travel,draw(){
        for(const side of [-1,1]) {
          const edge=side*(point.rail+.175)/point.width;
          const [x,y]=cross(point,edge,4.55);
          const size=Math.max(1.3,point.unit*.29);
          ctx.fillStyle='#59667b';ctx.fillRect(x-size*.38,y,size*.76,point.unit*4.55);
          ctx.fillStyle='#ffd199';ctx.fillRect(x-size,y-size*.55,size*2,size*1.1);
        }
      }});
    }
    for(const zone of brakingZones(track)) {
      const side=-Math.sign(roadAt(track,zone.distance).curve);
      for(const meters of zone.boards??[120,80,40]) {
        const travel=wrap(zone.distance-meters-distance,track.length)+anchor;
        if(travel>220) continue;
        const point=points[Math.round((travel+offset)/interval)-1];
        if(!point || point.y>h*1.14) continue;
        objects.push({z:travel,draw(){
          const [x,y]=cross(point,side*(point.rail+.12)/point.width);
          const size=point.unit;
          ctx.fillStyle='#918879';ctx.fillRect(x-size*.045,y-size*2,size*.09,size*2);
          ctx.fillStyle='#f9ecd2';ctx.fillRect(x-size*.72,y-size*2.4,size*1.44,size*.81);
          ctx.fillStyle='#292c32';ctx.font=`bold ${Math.max(4,size*.57)}px Arial`;
          ctx.save();ctx.textAlign='center';ctx.fillText(String(meters),x,y-size*1.78);ctx.restore();
        }});
      }
    }

    function paint() {
      const ordered = [...objects].sort((a, b) => b.z - a.z);
      let objectIndex = 0;
      for (let i = points.length - 2; i >= 0; i--) {
        const a = points[i];
        const b = points[i + 1];
        while (objectIndex < ordered.length && ordered[objectIndex].z >= b.travel) ordered[objectIndex++].draw();
        if (Math.min(a.y, b.y) > h * 1.3 || Math.max(a.y, b.y) < -h * .5) continue;
        const distance = clamp((a.z - 143) / 195, 0, 1);
        const visibility = 1 - distance * distance * (3 - 2 * distance);
        if (visibility <= 0) continue;
        const bridge = a.bridge > .18;
        const shoulder = a.rail/a.width;
        const meters=wrap(origin+(i+1)*interval,track.length);
        const cue=trackVisualCue(track,meters);
        const markedCorner=cornerWeight(cupCourses[track.id],meters)>.22;
        const bridgeEntry=track.id==='coast'&&a.bridge>.015&&a.bridge<.99&&b.bridge>=a.bridge;
        const farShoulder=b.rail/b.width;
        const left=Math.min(a.x-a.half*shoulder,b.x-b.half*farShoulder);
        const right=Math.max(a.x+a.half*shoulder,b.x+b.half*farShoulder);
        const clip=crestClip(i,left,right);
        const top=Math.min(a.y-Math.abs(a.roll)*shoulder-a.unit*.98,b.y-Math.abs(b.roll)*farShoulder-b.unit*.98);
        if(clip<=top) continue;
        const clipped=clip<Math.max(a.y+Math.abs(a.roll)*shoulder,b.y+Math.abs(b.roll)*farShoulder)+1;
        if(clipped) {
          ctx.save();
          ctx.beginPath();
          ctx.rect(0,0,w,Math.max(0,clip));
          ctx.clip();
        }
        ctx.globalAlpha = visibility;
        if (bridge) {
          if (wrap(a.index,14)===0&&a.bridge>.37) {
            for(const side of [-1,1]) {
              const span=side*.58;
              const [x,top]=cross(a,span,-.76);
              const [,bottom]=cross(a,span,coastWaterHeight-a.elevation-a.bank*span*a.width*HALF_ROAD);
              path(ctx,[[x-a.unit*.68,top],[x+a.unit*.68,top],[x+a.unit*.61,bottom],[x-a.unit*.63,bottom]],'#5d747a');
              path(ctx,[[x+a.unit*.26,top],[x+a.unit*.68,top],[x+a.unit*.61,bottom],[x+a.unit*.24,bottom]],'#374f5b');
            }
            band(ctx,a,b,-shoulder*.77,shoulder*.77,'#526770',-.78,-farShoulder*.77,farShoulder*.77);
          }
          for(const side of [-1,1]) {
            path(ctx,[cross(a,side*shoulder),cross(b,side*farShoulder),
              cross(b,side*farShoulder,-.88),cross(a,side*shoulder,-.88)],'#778d95');
          }
        } else if (!city) {
          for (const side of [-1, 1]) slope(ctx, a, b, side, palette.soil);
          if(track.id==='sunset'&&wrap(origin+i*interval,track.length)<track.length*.065) {
            band(ctx,a,b,shoulder+.83,shoulder+2.12,'#a28774',-1.6);
            if(wrap(a.index,3)===0) band(ctx,a,b,shoulder+1.11,shoulder+1.78,'#c2a18a',-1.58);
          }
        }
        band(ctx, a, b, -shoulder, shoulder, palette.gravel,0,-farShoulder,farShoulder);
        band(ctx, a, b, -1.028, 1.028, '#262934');
        band(ctx, a, b, -1, 1, palette.asphalt);
        const shade=sceneryShade(track,distance+a.travel-anchor);
        if(shade>0) {
          ctx.globalAlpha=visibility*shade*.49;
          band(ctx,a,b,-shoulder,shoulder,'#272c4c',0,-farShoulder,farShoulder);
          ctx.globalAlpha=visibility;
        }
        if (a.z < (low?48:111) && pattern) {
          ctx.globalAlpha = visibility * Math.min(.40, 35 / a.z);
          band(ctx, a, b, -shoulder, shoulder, pattern,0,-farShoulder,farShoulder);
          ctx.globalAlpha = visibility;
        }
        if (city && cue?.light && a.z<(low?130:205)) {
          const glow = cue.light;
          const side = wrap(Math.floor(a.index / 6), 2) ? 1 : -1;
          const section=wrap(origin+i*interval,track.length)/track.length;
          const inService=section>=cityMarks.service&&section<cityMarks.service+.022;
          const center=inService?0:side*.59;
          const width=inService?.53:.23;
          ctx.globalAlpha = visibility * glow * (inService?.29:.20);
          band(ctx, a, b, center - width * glow, center + width * glow, cue.warm?'#ffbb89':'#80d8f9');
          ctx.globalAlpha = visibility;
        }
        if(a.z<(low?100:166)) {
          const darkTire = city ? '#171d2b40' : track.id==='sunset'?'#211a2172':'#29283037';
          const line = track.id==='sunset'?a.curbSide*(.50+.15*Math.sin(a.index*.11)):clamp(a.curve * .16, -.24, .24);
          band(ctx, a, b, line - .162, line - .113, darkTire);
          band(ctx, a, b, line + .113, line + .162, darkTire);
        }
        if(a.grip<.94&&b.grip<.94) {
          band(ctx,a,b,-.985,.985,'#82c0d966');
          for(const side of [-1,1]) band(ctx,a,b,side*.91-.024,side*.91+.024,'#caf1ffac',.017);
        }
        for (const side of [-1, 1]) {
          band(ctx, a, b, side * .94 - .010, side * .94 + .010, palette.lane);
          if (wrap(a.index, 3) === 0) band(ctx, a, b, side * .316 - .008, side * .316 + .008, city ? '#aebdca9c' : '#e0dbcf9c');
          if (side === a.curbSide) {
            band(ctx, a, b, side * 1.012 - .065, side * 1.012 + .065, palette.curb[wrap(a.index, 2)]);
            if(markedCorner&&wrap(a.index,5)!==0) band(ctx,a,b,side*.97-.02,side*.97+.02,'#34323866',.035);
          }
          const rail=side*shoulder, farRail=side*farShoulder;
          if (wrap(a.index, 2) === 0) {
            const [x, y] = cross(a, rail+side*.020);
            ctx.fillStyle = palette.rail[0];
            ctx.fillRect(x - a.unit * .046, y - a.unit * .88, a.unit * .12, a.unit * .88);
          }
          band(ctx,a,b,rail,rail+side*.032,palette.rail[0],.68,farRail,farRail+side*.032);
          if(bridge||city) band(ctx,a,b,rail,rail+side*.033,palette.rail[1],.89,farRail,farRail+side*.033);
          if(bridgeEntry||markedCorner&&wrap(a.index,3)!==1) {
            const tint=bridgeEntry?'#ffe2ad':city?'#a8e3ff':'#f2c38b';
            band(ctx,a,b,rail+side*.011,rail+side*.027,tint,bridge||city?.92:.72,farRail+side*.011,farRail+side*.027);
          }
          if(cue&&(city?(cue.turn===side||cue.warm||cue.zone==='ramp'):
            (cue.turn===side||cue.light>.55)&&wrap(a.index,2)===0)) {
            const warm=cue.warm||cue.zone==='ramp'||track.id==='sunset';
            band(ctx,a,b,rail+side*.009,rail+side*.028,warm?'#ffd2a3':'#8eedff',city||bridge?.73:.58,farRail+side*.009,farRail+side*.028);
          }
          if((city||bridge)&&wrap(a.index,2)===0) {
            const [x,y]=cross(a,rail+side*.022,.91);
            ctx.fillStyle=city?'#83d6eb':'#ffdfad';ctx.fillRect(x-a.unit*.12,y,a.unit*.24,Math.max(1,a.unit*.10));
          }
          if(track.challenge&&Math.abs(a.curve)>.48&&wrap(a.index,2)===0) {
            band(ctx,a,b,rail+side*.009,rail+side*.027,track.color,.62,farRail+side*.009,farRail+side*.027);
          }
          if(track.id==='coast'&&Math.abs(wrap(origin+i*interval,track.length)-track.length*trackLandmarks.coast.bridgeMouth)<52&&wrap(a.index,2)===0) {
            const [x,y]=cross(a,rail+side*.055,2.12);
            ctx.fillStyle='#ffdb9c';ctx.fillRect(x-a.unit*.12,y,a.unit*.24,Math.max(1,a.unit*.24));
            ctx.fillStyle='#5a6471';ctx.fillRect(x-a.unit*.055,y+a.unit*.24,a.unit*.11,a.unit*1.9);
          }
        }
        if (a.pad) {
          const left = a.pad > 0 ? .22 : -.79;
          const right = a.pad > 0 ? .79 : -.22;
          if(a.z<(low?95:140)) {
            band(ctx,a,b,left-.09,left,'#bd8aff32');
            band(ctx,a,b,right,right+.09,'#bd8aff32');
          }
          band(ctx, a, b, left, right, '#533a77');
          band(ctx, a, b, left, left + .017, '#e9b1ff');
          band(ctx, a, b, right - .017, right, '#e9b1ff');
          if (wrap(a.index, 2) === 0) {
            const center = (left + right) / 2;
            path(ctx, [cross(a, left), cross(b, center), cross(a, right), cross(a, center)], '#e4b2f1');
          }
        }
        if (wrap(origin + (i + 2) * interval, track.length) < interval * 2) {
          for (let j = 0; j < 16; j++) band(ctx, a, b, -.94 + j * .1175, -.94 + (j + 1) * .1175, (j + wrap(a.index, 2)) % 2 ? '#dddcd3' : '#252931');
        }
        ctx.globalAlpha = 1;
        if(clipped) ctx.restore();
        if(a.y-a.unit*4.2<clip) {
          ctx.globalAlpha=visibility;
          roadside(ctx,a,track,a.index);
          ctx.globalAlpha=1;
        }
        while (objectIndex < ordered.length && ordered[objectIndex].z >= a.travel) ordered[objectIndex++].draw();
      }
      while (objectIndex < ordered.length) ordered[objectIndex++].draw();
    }

    return { objects, paint, pointAt(travel) {
      const index = (travel + offset) / interval - 1;
      const a = points[Math.floor(index)];
      const b = points[Math.ceil(index)];
      if (!a || !b) return null;
      const mix = index % 1;
      const z = lerp(a.z, b.z, mix);
      const project = (start, end) => lerp(start * a.z, end * b.z, mix) / z;
      const x=project(a.x,b.x),half=project(a.nominal,b.nominal);
      return {x,y:project(a.y,b.y),half,roll:project(a.roll/a.width,b.roll/b.width),
        clipFor:(center,radius)=>crestClip(Math.floor(index),center-radius,center+radius)};
    } };
  }

  window.KartTrackVisual = { create };
})();
