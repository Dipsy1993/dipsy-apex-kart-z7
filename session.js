((root)=>{
  'use strict';
  const step=1/60;
  function createRaceClock() {
    let last=null, pending=0;
    return {
      reset() { last=null;pending=0; },
      advance(now,update) {
        if(last===null) {last=now;return true;}
        const delta=(now-last)/1000;
        last=now;
        if(delta>.35||delta<0) {pending=0;return false;}
        pending+=delta;
        while(pending+1e-9>=step) {
          pending-=step;
          if(update(step)===false) {pending=0;break;}
        }
        return true;
      },
    };
  }

  function createSaveStore(storage,key,sanitize,locks) {
    function read() {
      let raw;
      try {raw=storage.getItem(key);} catch {return {status:'unavailable'};}
      if(raw===null) return {status:'ready',raw,save:sanitize(null)};
      try {
        const data=JSON.parse(raw);
        if(!data||typeof data!=='object'||Array.isArray(data)) return {status:'damaged',raw};
        return {status:'ready',raw,save:sanitize(data)};
      } catch {return {status:'damaged',raw};}
    }
    async function commit(change) {
      const write=()=>{
        const current=read();
        if(current.status!=='ready') return current;
        const next=structuredClone(current.save);
        const result=change(next);
        if(result===false) return {status:'rejected',save:current.save};
        try {
          if(storage.getItem(key)!==current.raw) return {status:'conflict'};
          storage.setItem(key,JSON.stringify(next));
        } catch {return {status:'unavailable'};}
        return {status:'saved',save:next,result};
      };
      try {return locks?await locks.request(key,write):write();}
      catch {return {status:'unavailable'};}
    }
    return {read,commit};
  }

  function resumeAudio(context) {
    if(!context||!['suspended','interrupted'].includes(context.state)) return Promise.resolve();
    // Call resume synchronously while Safari still has the input gesture.
    try {return Promise.resolve(context.resume()).catch(()=>{});}
    catch {return Promise.resolve();}
  }

  function resolveDriveInput(keys,touches,autoThrottle) {
    const held=new Set([...keys,...touches.values()]);
    const down=(...codes)=>codes.some(code=>held.has(code));
    const brake=down('ArrowDown','KeyS');
    return {
      throttle:down('ArrowUp','KeyW')||(autoThrottle&&!brake),
      brake,
      steer:Number(down('ArrowRight','KeyD'))-Number(down('ArrowLeft','KeyA')),
      drift:down('ShiftLeft','ShiftRight'),
      boost:down('Space'),
    };
  }

  const api={createRaceClock,createSaveStore,resumeAudio,resolveDriveInput};
  if(typeof module==='object') module.exports=api;
  else root.KartSession=api;
})(globalThis);
