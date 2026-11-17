'use strict';

const cacheName = 'apex-z7-playtest-v6';
const audioCacheName = 'apex-z7-music-v1';
const homePage = self.registration.scope;
const audioDirectory = new URL('music/', homePage).href;
const appFiles = [
  './', 'style.css', 'kart.js', 'track-visual.js', 'scene.js',
  'render.js', 'music.js', 'session.js', 'playtest.js', 'game.js', 'manifest.webmanifest'
].map(file => new URL(file, self.registration.scope).href);
const cachedURLs = new Set(appFiles);

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(cacheName);
    await cache.addAll(appFiles.map(url => new Request(url, {
      cache: 'reload',
      redirect: 'error'
    })));
    await self.skipWaiting();
  })());
});

async function migratePreviousCache(name) {
  const previous = await caches.open(name);
  const saved = (await previous.keys()).filter(request => request.url.startsWith(audioDirectory));
  if (saved.length) {
    const audio = await caches.open(audioCacheName);
    for (const request of saved) {
      if (await audio.match(request)) continue;
      const response = await previous.match(request);
      if (response) await audio.put(request, response);
    }
  }
  await caches.delete(name);
}

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = (await caches.keys())
      .filter(key => key.startsWith('apex-z7-playtest-') && key !== cacheName);
    for (const key of keys) {
      // Keep the old cache available if its audio could not be copied.
      await migratePreviousCache(key).catch(() => {});
    }
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || !request.url.startsWith(self.registration.scope)) return;

  if (request.mode === 'navigate') {
    const root = new URL(self.registration.scope).pathname;
    const path = new URL(request.url).pathname;
    if (path !== root && path !== root + 'index.html') return;
    event.respondWith(caches.match(homePage, { cacheName }).then(response => response || fetch(request)));
    return;
  }

  if (cachedURLs.has(request.url)) {
    event.respondWith(caches.match(request, { cacheName }).then(response => response || fetch(request)));
  }
});
