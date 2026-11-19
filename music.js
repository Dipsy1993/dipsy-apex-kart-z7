(() => {
  'use strict';
  const tracks={
    garage:'发车前 · 复古放克',
    sunset:'红岩冲刺 · 街机摇滚',
    coast:'海风折线 · 清爽电子',
    city:'午夜追车 · 合成器浪潮',
    switchback:'赤脊九折 · 加速摇滚',
    caldera:'黑曜深谷 · 低音电子',
    ice:'冰牙绝壁 · 冷调合成器',
    zootopia:'动物城追捕 · 都市放克',
  };
  const options=[['auto','随赛道'],...Object.entries(tracks),['off','关闭']];
  const audioCacheName='apex-z7-music-v1';

  function make(audio,onError=()=>{}) {
    const mix=audio.createGain();
    mix.gain.value=0;
    mix.connect(audio.destination);
    const files=new Map();
    let playing=null;
    let choice=null;
    let request=0;

    async function loadTrack(url) {
      let cache;
      let saved;
      try {
        cache=await caches.open(audioCacheName);
        saved=await cache.match(url)??await caches.match(url);
      } catch {}
      if(saved) {
        try {
          return await audio.decodeAudioData(await saved.arrayBuffer());
        } catch {
          try { await cache?.delete(url); } catch {}
        }
      }
      const response=await fetch(url);
      if(!response.ok) throw Error('Music request failed');
      const copy=cache&&response.status===200?response.clone():null;
      const buffer=await audio.decodeAudioData(await response.arrayBuffer());
      if(copy) {
        try { await cache.put(url,copy); } catch {}
      }
      return buffer;
    }

    function load(id) {
      const previous=files.get(id);
      if(previous) {
        files.delete(id);
        files.set(id,previous);
        return previous;
      }
      const url=new URL(`music/${id}.mp3`,document.baseURI);
      const pending=loadTrack(url).catch(error=>{
        if(files.get(id)===pending) files.delete(id);
        throw error;
      });
      files.set(id,pending);
      if(files.size>2) files.delete(files.keys().next().value);
      return pending;
    }

    function fadeOut(track,now) {
      track.gain.gain.setTargetAtTime(0,now,.035);
      track.source.stop(now+.18);
    }

    return {
      select(id,quiet,volume) {
        const now=audio.currentTime;
        mix.gain.setTargetAtTime(volume*(quiet?.42:1),now,.10);
        const next=Object.hasOwn(tracks,id)?id:null;
        if(next===choice) return;
        choice=next;
        const ticket=++request;
        if(playing) {
          fadeOut(playing,now);
          playing=null;
        }
        if(!next) return;

        load(next).then(buffer=>{
          if(ticket!==request) return;
          const source=audio.createBufferSource();
          const gain=audio.createGain();
          gain.gain.value=0;
          source.buffer=buffer;
          source.loop=true;
          source.connect(gain).connect(mix);
          source.onended=()=>{source.disconnect();gain.disconnect();};
          gain.gain.setTargetAtTime(1,audio.currentTime,.045);
          source.start();
          playing={source,gain};
        }).catch(error=>{
          if(ticket!==request) return;
          choice=null;
          onError(error);
        });
      },
    };
  }
  window.KartMusic={options,make};
})();
