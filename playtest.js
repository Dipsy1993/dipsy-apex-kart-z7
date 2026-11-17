(() => {
  'use strict';
  const saveKey = 'apex-kart-save-v1';
  try {
    if (localStorage.getItem(saveKey) === null) {
      const initial = Kart.sanitizeSave({
        credits: 99999,
        selected: 'wave-x2',
        owned: Kart.carFamily('wave').map(car => car.id)
      });
      localStorage.setItem(saveKey, JSON.stringify(initial));
    }
  } catch {
    // The game reports storage failures through its existing save status.
  }

  const status = document.querySelector('#offline-status');
  if (!('serviceWorker' in navigator)) {
    status.textContent = '此浏览器暂时无法缓存游戏';
    return;
  }

  async function checkOfflineStatus() {
    const home = new URL('./', location.href);
    const cacheName = 'apex-z7-playtest-v3';
    if (navigator.serviceWorker.controller && await caches.match(home, { cacheName })) {
      status.textContent = '可离线游玩';
    }
  }

  async function prepareOffline() {
    await navigator.serviceWorker.register('./offline-worker.js');
    await navigator.serviceWorker.ready;
    await checkOfflineStatus();
  }

  navigator.serviceWorker.addEventListener('controllerchange', () => {
    checkOfflineStatus().catch(() => {});
  });

  prepareOffline().catch(() => {
    status.textContent = '离线准备失败，请联网后刷新';
  });
})();
