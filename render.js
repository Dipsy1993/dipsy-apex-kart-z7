(() => {
  'use strict';
  const { clamp, wrap } = Kart;
  const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)');

  function surface(canvas, low = false) {
    const { width, height } = canvas.getBoundingClientRect();
    if (!width || !height) return null;
    const ratio = Math.min(low?.78:1.8, window.devicePixelRatio || 1);
    const pixels = [Math.round(width * ratio), Math.round(height * ratio)];
    if (canvas.width !== pixels[0] || canvas.height !== pixels[1]) {
      [canvas.width, canvas.height] = pixels;
    }
    const ctx = canvas.getContext('2d');
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    return { ctx, width, height };
  }

  function polygon(ctx, points, color, edge) {
    ctx.beginPath();
    ctx.moveTo(points[0][0], points[0][1]);
    for (const point of points.slice(1)) ctx.lineTo(point[0], point[1]);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
    if (edge) {
      ctx.strokeStyle = edge;
      ctx.lineWidth = 0.65;
      ctx.stroke();
    }
  }

  function shade(hex, amount) {
    const color = parseInt(hex.slice(1), 16);
    return `rgb(${[(color >> 16) & 255, (color >> 8) & 255, color & 255].map(c => Math.round(clamp(c * amount, 0, 255))).join(',')})`;
  }

  function ellipse(ctx, x, y, rx, ry, color) {
    ctx.beginPath();
    ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  }

  function makeCar(car) {
    const faces = [];
    const { trim, body } = car;
    const color=car.flagship?.paint??(car.family==='wave'&&!car.legacy?'#1489b9':car.color);
    const panels=Kart.bodyPanels(car);
    const revised=panels.length>0;
    const finishes={paint:color,glass:'#263d56',matte:'#292d36',ivory:'#fff1cd',trim,tail:'#ff574c',titanium:'#a8b7c5',accent:car.flagship?.accent??trim};
    const shape=Kart.bodySectionShape;
    for(const [finish,x,sections] of panels) {
      // The Canvas model faces backward relative to the world model.
      const rings=sections.map(([z,width,y,depth])=>shape.map(([sx,sy])=>[-x-sx*width,y+sy*depth,-z]));
      for(let i=0;i<rings.length-1;i++) {
        for(let edge=0;edge<shape.length;edge++) {
          const next=(edge+1)%shape.length;
          const light=[.66,.84,1.04,1.19,1.06,.91,.76,.51,.44,.51][edge];
          faces.push({points:[rings[i][edge],rings[i][next],rings[i+1][next],rings[i+1][edge]],
            color:shade(finishes[finish],light),clay:shade('#a6afb6',light)});
        }
      }
      faces.push({points:rings[0].slice().reverse(),color:shade(finishes[finish],.78),clay:'#858e95'});
      faces.push({points:rings.at(-1),color:shade(finishes[finish],.65),clay:'#737b81'});
    }
    function prism(cx, y, cz, width, depth, height, paint, topWidth = width, topDepth = depth, topZ = 0) {
      const vertices = [
        [cx - width / 2, y, cz - depth / 2], [cx + width / 2, y, cz - depth / 2],
        [cx + width / 2, y, cz + depth / 2], [cx - width / 2, y, cz + depth / 2],
        [cx - topWidth / 2, y + height, cz - topDepth / 2 + topZ], [cx + topWidth / 2, y + height, cz - topDepth / 2 + topZ],
        [cx + topWidth / 2, y + height, cz + topDepth / 2 + topZ], [cx - topWidth / 2, y + height, cz + topDepth / 2 + topZ],
      ];
      for (const [i, face] of [[0, 4, 5, 1], [1, 5, 6, 2], [2, 6, 7, 3], [3, 7, 4, 0], [4, 7, 6, 5], [0, 1, 2, 3]].entries()) {
        faces.push({ points: face.map(index => vertices[index]), color: shade(paint, [0.89, 0.66, 0.72, 0.78, 1.12, 0.40][i]), edge: '#0c11162b' });
      }
    }

    function wheel(side, z, radius, width) {
      const x = side * 1.03;
      const rings = [x - width / 2, x + width / 2].map(axis => Array.from({ length: 18 }, (_, i) => {
        const theta = i * Math.PI / 9;
        return [axis, radius + Math.sin(theta) * radius, z + Math.cos(theta) * radius];
      }));
      for (let i = 0; i < 18; i++) {
        const next = (i + 1) % 18;
        faces.push({ points: [rings[0][i], rings[1][i], rings[1][next], rings[0][next]], color: shade('#2f333b', 0.83 + Math.sin(i * Math.PI / 9) * 0.37) });
      }
      const outer = side > 0 ? [...rings[1]].reverse() : rings[0];
      faces.push({ points: side > 0 ? rings[0] : [...rings[1]].reverse(), color: '#191d23' });
      faces.push({ points: outer, color: '#181c22', edge: '#55575a' });
      for (const [scale, paint] of [[0.62, '#7f8589'], [0.43, '#2b343c'], [0.23, trim]]) {
        faces.push({ points: outer.map(([axis, y, pz]) => [axis + side * (1.1 - scale) * 0.012, radius + (y - radius) * scale, z + (pz - z) * scale]), color: paint });
      }
    }

    const big = body === 1;
    const generation=car.legacy?undefined:car.generation;
    const design=car.oldGeometry?null:car.design;
    const formula = body === 4;
    const detailedG3=revised&&generation===2;
    for (const side of [-1, 1]) {
      wheel(side, -0.88, big ? 0.39 : 0.32, big ? 0.47 : 0.39);
      wheel(side, 0.91, big ? 0.41 : 0.35, (big ? 0.49 : 0.43)+(generation>0?.05:0));
      if(!revised) prism(side * 0.76, 0.29, formula ? 0.20 : 0.05, formula ? .42 : .48, formula ? .88 : 1.36, 0.27, color, 0.41, formula ? .72 : 1.08);
      if (!formula) prism(side * 0.81, 0.36, -1.28, 0.35, 0.15, 0.14, trim, 0.34, 0.11);
      if(!(big&&detailedG3)&&!car.aero) prism(side * 0.74, 0.43, generation===0?1.12:1.22, 0.31, 0.16, 0.11, '#ff6959');
      if (body === 2 || body === 3) prism(side * 0.55, 0.52, 1.02, 0.13, 0.2, body === 3 ? 0.43 : 0.26, '#282d38');
      if (big) prism(side * 0.82, 0.50, 0.52, 0.39, 1.47, 0.16, color, 0.26, 1.30);
      if (body === 2) {
        prism(side * .99, .49, -.90, .43, .80, .24, color, .32, .50);
        if(!revised) prism(side * 1.0, .56, .88, generation>=2?.53:.45, .80, .24, color, .33, .55);
      }
      if (formula) {
        prism(side * .68, .30, -.83, .74, .06, .045, '#6e7480');
        prism(side * .67, .38, -.98, .76, .055, .038, '#5b6273');
        prism(side * .90, .29, -1.52, .095, .37, .19, trim, .084, .31);
        if(!design) {
          prism(side * .52, .55, 1.05, .17, .28, .59, '#242735', .12, .20);
          prism(side * .98, 1.07, 1.1, .085, .50, .18, trim);
        }
      }
    }
    prism(0, 0.16, generation===0?-.09:0, formula ? 1.55 : 1.94, generation===0?2.40:2.57, 0.20, '#30353a', formula ? 1.43 : 1.84, generation===0?2.28:2.44);
    prism(0, 0.22, formula ? -1.51 : -1.35, 2.1, 0.32, 0.15, formula ? color : '#383d44', 1.82, 0.22);
    const nose = [
      [1.17, 1.34, .29, .81, .85, .15],
      [1.37, 1.34, .39, 1.21, .85, .15],
      [1.52, 1.27, .23, 1.43, 1.11, .04],
      [1.69, 1.58, .20, .71, .90, .20],
      [.54, 1.73, .32, .41, 1.27, .22],
    ][body];
    const [noseWidth, noseDepth, noseHeight, topWidth, topDepth, topZ] = nose;
    if(!revised) prism(0, .38, -.82, noseWidth, noseDepth, noseHeight, color, topWidth, topDepth, topZ);
    if (body === 2&&!revised) {
      const stripe=generation===undefined?trim:'#fff1cd';
      for (const side of [-1, 1]) {
        prism(side*.24,.614,-.74,.14,.93,.017,stripe);
        if(generation!==undefined) prism(side*.24,.674,.94,.12,.32,.017,stripe);
      }
    } else if(!revised) prism(0, .385 + noseHeight, -.70, body === 3 ? .09 : .23, .71, .015, trim);
    if (big) {
      prism(0, .49, -1.47, .92, .14, .20, '#38343a');
      for (const lamp of [-.31, 0, .31]) prism(lamp, .55, -1.56, .20, .07, .14, trim, .17, .06);
    }
    if (body === 3&&!revised) {
      for (const side of [-1, 1]) prism(side * .74, .33, -1.17, .46, .81, .13, '#393048', .22, .59, .11);
      prism(0, .66, .18, .86, 1.05, .25, '#51456b', .56, .57, .15);
      prism(0, .905, .20, .55, .57, .21, '#3f546e', .38, .36);
      prism(0, .75, 1.07, 1.57, .22, .06, trim);
    }
    prism(0, 0.32, 0.30, 1.03, 1.04, 0.22, '#242936', 0.96, 0.88);
    if(!revised) prism(0, 0.44, 0.77, 1.42, 0.91, big ? 0.32 : 0.23, color, 1.19, 0.70);
    if(!revised) prism(0, 0.53, 0.24, 0.63, 0.70, 0.31, '#37404a', 0.55, 0.48, 0.06);
    if (body !== 3&&(!revised||body!==2)) {
      prism(0, .75, .22, .67, .64, formula ? .29 : .34, formula ? color : trim, .57, .52);
      prism(0, formula ? 1.04 : 1.09, .22, .57, .52, .09, trim, .36, .34);
      prism(0, .84, -.105, .61, .10, .15, '#172435', .56, .08, .03);
      prism(0, .93, -.151, .51, .013, .027, '#78b9cd');
    }
    prism(0, 0.26, generation===0?1.23:1.33, 1.82, 0.28, 0.13, '#333942', 1.78, 0.25);
    if (!car.flagship&&(body === 2&&!car.aero || body === 3&&!design)) {
      const height=body===3?.96:generation===4?1.22:generation===3?1.02:generation===0?.64:.79;
      prism(0,height,1.07,generation===0?1.47:2.09,body===3?.43:.32,.11,color,generation===0?1.44:2.04,.36);
      if(generation>=3) prism(0,height-.22,1.13,1.84,.24,.067,trim);
    }
    if (big) prism(0, 0.77, 0.76, 1.42, 0.27, 0.12, '#272b33');
    if (formula&&!design) prism(0, 1.10, 1.09, 2.05, .49, .085, color, 2.00, .44);
    if(design&&!car.flagship) {
      const width=design.rearWidth;
      const height=[.68,.79,.90,1.12,1.31][generation];
      for(const side of [-1,1]) {
        if(body===0&&generation>=1) prism(side*(.69+generation*.05),.36,.44,.35,1.46,.25,color,.30,1.24);
        if(body===0&&generation===1) prism(side*.75,.52,1.17,.29,.47,.17,trim,.22,.38);
        if(body===0&&generation>=2) prism(side*.72,.64,.95,.23,.46,.12,trim,.19,.34);
        if(big&&generation>=1&&!detailedG3) prism(side*.95,.65,.89,.45,.81,.22,generation===1?trim:color,.34,.59);
        if(big&&generation===1) prism(side*.94,.65,1.26,.24,.46,.18,'#544448',.20,.35);
        if(big&&generation>=3) prism(side*.83,.58,.79,.095,.19,.60,'#363746');
        if(body===2&&generation>=1) prism(side*width,.60,.87,.35,.75,.15,color,.27,.52);
        if(body===2&&generation===1) {
          prism(side*.94,.58,1.02,.42,.67,.17,trim,.32,.55);
          prism(side*.91,.27,.31,.28,1.33,.12,'#303544',.24,1.16);
        }
        if(body===3&&generation>=1) prism(side*(width-.10),.43,.70,.48,1.44,.25,color,.39,1.22);
        if(body===3&&generation>=2) prism(side*.99,.54,.95,.47,.83,.23,color,.39,.67);
        if(body===3&&generation>=1) prism(side*(width+.07),.61,1.19,.18,.62,.16,generation===1?trim:color,.14,.53);
        if(formula&&generation>=1) prism(side*(.86+generation*.052),.31,-1.53,.09,.35,.24,trim,.07,.31);
        if(formula&&generation===1) prism(side*(width+.11),.57,1.38,.09,.53,.20,trim,.075,.44);
        if(formula&&generation>=2) prism(side*.69,.43,.45,.48,1.31,.25,color,.40,1.12);
        if(generation>=3&&!big&&body!==2) prism(side*(width-.19),.48,1.34,.12,.18,height-.48,'#7c8396');
      }
      if(body===3||formula&&!detailedG3||body===0&&generation>=2) {
        prism(0,height-.05,-design.rearZ-.22,width*2,.39,.10,generation>2?trim:color,width*1.92,.31);
        if(generation>=3) prism(0,height-.24,-design.rearZ-.19,width*1.78,.34,.075,'#2c2e3c');
      }
      if(body===0&&generation===4) prism(0,.54,1.66,1.36,.08,.045,'#ff645f');
      if(big&&generation===4) prism(0,.77,1.40,.56,.38,.46,'#282a34',.48,.30);
      if(body===3&&generation===4) prism(0,.99,1.08,.095,.68,.36,trim,.065,.42);
    }
    if(generation>=2 || car.installed.exhaust===2) {
      for(const x of [-.48,-.16,.16,.48]) prism(x,.19,-car.pipes[0].z-.17,.054,.41,.13,'#282d36');
    }
    if(generation!==undefined) for(const side of [-1,1]) {
      const bank=car.pipes.filter(pipe=>Math.sign(pipe.x)===side);
      if(!bank.length) continue;
      const inner=bank[0],outer=bank.at(-1);
      prism(-(inner.x+outer.x)/2,(inner.y+outer.y)/2-.14,-Math.min(inner.z,outer.z)-.13,
        Math.abs(outer.x-inner.x)+.29,.13,.29,car.installed.exhaust===2?'#8c9bb1':'#323a49');
      if(big) prism(-outer.x,outer.y+.13,-outer.z-.02,.32,.055,.05,'#aab4bd');
    }
    if(big && generation>=2) prism(0,.51,1.57,1.98,.13,.13,'#8f98a0');
    if(car.installed.suspension||generation!==undefined) for(const side of [-1,1]) {
      for(let i=0;i<5;i++) prism(side*.83,.43+i*.051,.96,.18,.14,.032,car.installed.suspension?trim:'#414653');
      if(car.installed.suspension===2) prism(side*.66,.49,.98,.10,.12,.23,'#a9b1ba');
    }
    if(car.installed.differential||generation!==undefined) prism(0,.34,1.45,.38,.30,.15,car.installed.differential?'#a6b4bd':'#3f4653');
    const vertices=[];
    const indices=new Map();
    for(const face of faces) {
      face.points=face.points.map(point=>{
        if(!indices.has(point)) {
          indices.set(point,vertices.length);
          vertices.push(point);
        }
        return indices.get(point);
      });
    }
    return {faces,vertices};
  }

  const models = new Map();
  const raceSprites = new Map();
  const tailSprites = new Map();
  const spriteSize = { width:288, height:216, x:144, y:153, scale:54 };

  function drawCar(ctx, car, x, y, scale, yaw, flame, shade=0,grey=false,racing=false,deploy=0) {
    const turn = 2 * Math.PI;
    // Cache small angular steps for racing. The showroom still uses the exact angle.
    const angle = racing ? Math.round(wrap(yaw,turn) * 160 / turn) % 160 : 0;
    if(racing) yaw=angle*turn/160;
    const cos = Math.cos(yaw);
    const sin = Math.sin(yaw);
    function projection(originX,originY,size) {
      return ([px,py,pz])=>{
        const rx=px*cos+pz*sin;
        const rz=pz*cos-px*sin;
        const perspective=size/(1+rz*.038);
        return [originX+rx*perspective,originY-(rz*.43+py*.91)*perspective,rz-py*.47];
      };
    }
    const project=projection(x,y,scale);
    if(racing) {
      const articulated=flame||deploy>0;
      const key=car.modelKey+':'+angle+(articulated?':driver':':other');
      const size=spriteSize;
      let sprite=raceSprites.get(key);
      if(!sprite) {
        sprite=document.createElement('canvas');
        sprite.width=size.width;
        sprite.height=size.height;
        const spriteContext=sprite.getContext('2d');
        const spriteProjection=projection(size.x,size.y,size.scale);
        drawBody(spriteContext,car,size.x,size.y,size.scale,spriteProjection,false);
        if(!articulated) drawTail(spriteContext,car,spriteProjection,0,false);
        if(raceSprites.size>=64) raceSprites.delete(raceSprites.keys().next().value);
      } else raceSprites.delete(key);
      raceSprites.set(key,sprite);
      if(shade) {ctx.save();ctx.filter=`brightness(${1-shade*.33})`;}
      const ratio=scale/size.scale;
      ctx.drawImage(sprite,x-ratio*size.x,y-ratio*size.y,ratio*size.width,ratio*size.height);
      if(shade) ctx.restore();
    } else drawBody(ctx,car,x,y,scale,project,grey);
    if(!racing) drawTail(ctx,car,project,deploy,grey);
    else if(car.tailRig&&(flame||deploy>0)) {
      const step=Math.round(deploy*24);
      deploy=step/24;
      const key=`${car.modelKey}:${angle}:${step}`;
      const size=spriteSize;
      let sprite=tailSprites.get(key);
      if(!sprite) {
        sprite=document.createElement('canvas');
        sprite.width=size.width;
        sprite.height=size.height;
        drawTail(sprite.getContext('2d'),car,projection(size.x,size.y,size.scale),deploy,false);
        if(tailSprites.size>=64) tailSprites.delete(tailSprites.keys().next().value);
      } else tailSprites.delete(key);
      tailSprites.set(key,sprite);
      const ratio=scale/size.scale;
      ctx.drawImage(sprite,x-ratio*size.x,y-ratio*size.y,ratio*size.width,ratio*size.height);
    }
    if(!grey&&cos<-.035) drawExhaust(ctx,car,project,scale,cos,flame,deploy);
  }

  function drawTail(ctx,car,project,deploy,grey) {
    if(!car.tailRig) return;
    const faces=[];
    const shape=Kart.bodySectionShape;
    for(const part of car.tailRig.parts) {
      const {position,angle}=Kart.tailPartPose(part,deploy);
      for(const [finish,offset,sections] of part.panels) {
        const rings=sections.map(([z,w,y,height])=>shape.map(([sx,sy])=>{
          const point=Kart.rotateTailPoint(part.axis,angle,[offset+sx*w,y+sy*height,z]);
          return project([-point[0]-position[0],point[1]+position[1],-point[2]-position[2]]);
        }));
        const color=grey?'#a1a9af':finish==='accent'?car.tailRig.color:'#415064';
        const collect=(points,tint)=>faces.push({points,tint,depth:points.reduce((sum,p)=>sum+p[2],0)/points.length});
        for(let i=0;i<rings.length-1;i++) for(let edge=0;edge<shape.length;edge++) {
          const next=(edge+1)%shape.length;
          collect([rings[i][edge],rings[i][next],rings[i+1][next],rings[i+1][edge]],shade(color,[.60,.75,.97,1.17,1.03,.89,.76,.56,.46,.53][edge]));
        }
        collect(rings[0],shade(color,.85));collect(rings.at(-1),shade(color,.64));
      }
    }
    faces.sort((a,b)=>b.depth-a.depth);
    for(const face of faces) polygon(ctx,face.points,face.tint);
  }

  function drawBody(ctx,car,x,y,scale,project,grey) {
    if(!models.has(car.modelKey)) models.set(car.modelKey,makeCar(car));
    const model=models.get(car.modelKey);
    const projected=model.vertices.map(project);
    const faces=[];
    for(const face of model.faces) {
      const points=face.points.map(index=>projected[index]);
      let area=0,depth=0;
      let previous=points.at(-1);
      for(const point of points) {
        area+=previous[0]*point[1]-previous[1]*point[0];
        previous=point;
        depth+=point[2];
      }
      if(area>0) faces.push({points,color:grey&&face.clay?face.clay:face.color,edge:face.edge,depth:depth/points.length});
    }
    faces.sort((a,b)=>b.depth-a.depth);
    ellipse(ctx, x, y + scale * 0.08, scale * 1.46, scale * 0.31, '#07090c5c');
    for(const axle of [-.88,.91]) for(const side of [-1,1]) {
      const [px,py]=project([side*1.03,0,axle]);
      ellipse(ctx,px,py,scale*.27,scale*.095,'#06080d7d');
    }
    ctx.save();
    if(grey) ctx.filter='grayscale(1)';
    for (const face of faces) polygon(ctx, face.points, face.color, face.edge);
    ctx.restore();
  }

  function drawExhaust(ctx,car,project,scale,cos,flame,deploy) {
    const rig=car.tailRig;
    for(const [index,port] of car.pipes.entries()) {
      const pipe=Kart.tailPipe(car,port,deploy);
      const [px,py]=project([-pipe.x,pipe.y,-pipe.z]);
      const radius=pipe.radius*scale;
      ellipse(ctx,px,py,Math.max(1,-cos*radius),radius,car.installed.exhaust===2?'#c2eaf7':pipe.primary&&pipe.accent?pipe.accent:'#a4aab3');
      ellipse(ctx,px,py,Math.max(.65,-cos*radius*.72),radius*.74,'#171921');
      if(flame?.arming&&pipe.primary) {
        ctx.save();
        ctx.globalAlpha=flame.arming*.54;
        ellipse(ctx,px,py,Math.max(.5,-cos*radius*.49),radius*.51,rig?.color??'#84dcff');
        ctx.restore();
      }
      if(flame?.strength>0) {
        const phase=index*(rig?.style==='snap'?2.63:rig?.style==='armor'?.76:1.63);
        const pulse=reducedMotion.matches?.48:.5+.5*Math.sin(flame.elapsed*37+phase);
        const length=(pipe.primary?1.36:.65)*(rig?.length??1)*(.86+pulse*.22)*flame.strength;
        const [dx,dy,dz]=pipe.direction;
        const tip=project([-pipe.x-dx*length,pipe.y+dy*length,-pipe.z-dz*length]);
        const width=radius*.60;
        ctx.save();
        ctx.globalAlpha=((pipe.primary?.82:.61)+pulse*.18)*Math.min(1,flame.strength);
        polygon(ctx,[[px-width,py],[px+width,py],tip],rig?.color??pipe.accent??(pipe.primary?'#55c8ff':'#648dff'));
        polygon(ctx,[[px-width*.43,py],[px+width*.43,py],[(px+tip[0])*.5,(py+tip[1])*.5]],rig?.core??'#ddf9ff');
        ctx.restore();
      }
    }
  }

  function garage(canvas, car, yaw, thumbnail = false,view='whole',grey=false,deploy=0) {
    canvas.dataset.pipes=String(car.pipes.length);
    if (window.Kart3D?.garage(canvas, car, yaw, thumbnail,view,grey,deploy)) return;
    canvas.dataset.renderer = 'canvas';
    canvas.dataset.tailDeploy=deploy.toFixed(2);
    const s = surface(canvas);
    if (!s) return;
    const { ctx, width: w, height: h } = s;
    ctx.clearRect(0, 0, w, h);
    const close=view!=='whole';
    const scale = Math.min(w * (close?.35:thumbnail ? 0.21 : 0.222), h * (close?.66:thumbnail ? 0.38 : car.body === 4 ? 0.36 : 0.40));
    if (!thumbnail) {
      const y = h * 0.70;
      const glow = ctx.createRadialGradient(w / 2, y, 8, w / 2, y, Math.min(w * .37, 280));
      glow.addColorStop(0, `${car.color}33`);
      glow.addColorStop(1, `${car.color}00`);
      ctx.save();
      ctx.translate(0, y * 0.70);
      ctx.scale(1, 0.30);
      ellipse(ctx, w / 2, y, w * .46, w * .46, glow);
      ctx.restore();
      ctx.strokeStyle = `${car.color}35`;
      ctx.lineWidth = 1;
      for (const size of [1.0, 1.09]) {
        ctx.beginPath();
        ctx.ellipse(w / 2, y + 4, Math.min(w * .44, scale * 1.78) * size, scale * .29 * size, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
    }
    const shift=view==='suspension'?.45*scale:0;
    drawCar(ctx, car, w * 0.5+shift, h * (close?.48:thumbnail ? 0.74 : 0.68), scale, yaw,undefined,0,grey,false,deploy);
  }

  function raceFrame(canvas, race) {
    canvas.dataset.pipes=canvas.dataset.emitters=String(race.car.pipes.length);
    canvas.dataset.activeEmitters=race.boost>0?canvas.dataset.emitters:'0';
    if (window.Kart3D?.raceFrame(canvas, race)) return;
    canvas.dataset.renderer = 'canvas';
    const flame={...Kart.flameCue(race),elapsed:race.elapsed};
    const shade=Kart.sceneryShade(race.track,race.distance);
    canvas.dataset.flamePhase=flame.phase;
    canvas.dataset.tailDeploy=(race.tailDeploy??0).toFixed(2);
    canvas.dataset.trackCue=Kart.trackVisualCue(race.track,race.distance)?.zone??'';
    canvas.dataset.shade=shade.toFixed(2);
    const low=canvas.parentElement.dataset.quality==='low';
    const s = surface(canvas,low);
    if (!s) return;
    const { ctx, width: w, height: h } = s;
    const track = race.track;
    const road = KartTrackVisual.create(ctx, w, h, track, race.distance, race.x, false, low);
    const playerZ = 19;
    const player = road.pointAt(playerZ);
    const sx = player.x + race.x * player.half;
    const sy = player.y + race.x * player.roll;
    // Match the horizontal road projection so adjacent lanes don't visually overlap.
    const scale = Math.min(w*.074,h*.082,player.half/Kart.HALF_ROAD);
    const guide=Kart.wakeGuide(race);
    const wake=race.wake;
    const wakePulse=wake?.burst>0?clamp((wake.burst/wake.duration-.32)/.68,0,1):0;
    canvas.dataset.wakeGuide=String(guide?.segments.length??0);
    canvas.dataset.wakeBurst=(wake?.burst??0).toFixed(2);
    for(const strip of guide?.segments??[]) {
      const near=road.pointAt(playerZ+strip.near);
      const far=road.pointAt(playerZ+strip.far);
      if(!near||!far) continue;
      const at=(point,x)=>[point.x+point.half*x,point.y+point.roll*x-1];
      const path=[at(near,strip.from-strip.width),at(near,strip.from+strip.width),at(far,strip.to+strip.width),at(far,strip.to-strip.width)];
      road.objects.push({z:playerZ+strip.near-3,draw:()=>{
        ctx.save();ctx.globalAlpha=.21+guide.charge*.57;polygon(ctx,path,guide.color);ctx.restore();
      }});
    }
    const ghost=Kart.ghostAt(race);
    for (const rival of ghost?[...race.opponents,ghost]:race.opponents) {
      if(rival.retired) continue;
      const z = rival.distance - race.distance + playerZ;
      if (z < 8 || z > 460) continue;
      const point = road.pointAt(z);
      if (!point || point.y > h * 1.18) continue;
      const x=point.x+point.half*rival.x;
      const y=point.y+point.roll*rival.x;
      const size=scale*point.half/player.half;
      const clip=point.clipFor(x,size*1.5);
      if(clip<=y-size*2) continue;
      road.objects.push({ z: z - Math.max(5, z * .085), draw: () => {
        ctx.save();
        if(clip<y+size) {
          ctx.beginPath();
          ctx.rect(0,0,w,Math.max(0,clip));
          ctx.clip();
        }
        if(rival===ghost) ctx.globalAlpha=.44;
        drawCar(ctx,rival.car,x,y,size,Math.PI+(rival.heading||0),undefined,0,false,true,rival.tailDeploy??0);
        ctx.restore();
      } });
    }
    road.objects.push({ z: playerZ - 6, draw: () => {
      if (race.drifting || race.offroad) {
        const tick=race.elapsed*13;
        const intensity=race.offroad?1:clamp(Math.abs(race.slip)*3.65,0,1)*(!race.driftDirection||race.driftDirection*race.steer<-.08?.42:1);
        for (let i = 1; i <= 10; i++) {
          const phase = wrap(tick + i * 1.71, 8) / 8;
          const x = sx + ((i%2?-.94:.94)+Math.sin(i*13)*phase*.26)*scale-race.lateral*phase*scale*.32;
          const y = sy + phase * scale * 0.63;
          ellipse(ctx, x, y, scale * (.07 + phase * .20), scale * (.045 + phase * .11), `rgba(${race.offroad ? '242,180,141' : '230,238,247'},${0.27 * (1 - phase)*intensity})`);
        }
      }
      const nitroLight=Math.max(flame.ignition,(flame.arming??0)*.42);
      const washPower=Math.max(nitroLight,wakePulse*.73);
      if(washPower>.045) {
        const ground=sy+scale*.24;
        ctx.save();ctx.translate(sx,ground);ctx.scale(1,.42);
        const wash=ctx.createRadialGradient(0,0,0,0,0,scale*1.5);
        const color=wakePulse*.73>nitroLight?wake.color:race.car.tailRig?.color??race.car.flagship?.accent??'#84dcff';
        const opacity=Math.round(255*washPower*(reducedMotion.matches?.29:.58)).toString(16).padStart(2,'0');
        wash.addColorStop(0,color+opacity);
        wash.addColorStop(1,color+'00');ctx.fillStyle=wash;
        ctx.fillRect(-scale*1.5,-scale*1.5,scale*3,scale*3);ctx.restore();
      }
      const rumble=race.surface==='curb' ? Math.sin(race.distance*2.6)*scale*.054 : 0;
      drawCar(ctx, race.car, sx, sy+rumble, scale, Math.PI + race.heading,flame,shade,false,true,race.tailDeploy??0);
      if(race.surface==='curb'&&race.railHit<.15) for(let i=0;i<4;i++) {
        const phase=wrap(race.distance*.1+i*.32,1);
        ellipse(ctx,sx+Math.sign(race.x)*scale*(1.05+phase*.18),sy+scale*(.05+phase*.38),scale*.022,scale*.013,'#be9870');
      }
      if(race.railHit>.20) {
        for(let i=0;i<8;i++) {
          const phase=wrap(race.distance*.13+i*.31,1);
          ellipse(ctx,sx+race.railSide*scale*(1.04+phase*.46),sy+scale*(.09+phase*.45),scale*.042,scale*.018,'#ffca73');
        }
      }
      if(race.hit>.16) for(let i=0;i<5;i++) {
        const phase=wrap(i*.23+race.hit*3,1);
        ellipse(ctx,sx+scale*(race.contactSide*(1+phase*.34)+(i-2)*.1),sy+scale*(.12+phase*.38),scale*.028,scale*.015,'#ffe1a4');
      }
    } });
    road.paint();
  }

  function preview(canvas, track) {
    if (!track.challenge && window.Kart3D?.preview(canvas, track)) return;
    canvas.dataset.renderer = 'canvas';
    const s = surface(canvas);
    if (!s) return;
    const { ctx, width: w, height: h } = s;
    const distance = track.length * (track.challenge?.preview??{ sunset: .18, coast: .37, city: .69 }[track.id]);
    KartTrackVisual.create(ctx, w, h, track, distance, 0, true).paint();
  }

  window.KartRender = { garage, raceFrame, preview };
})();
