'use strict';

const cacheName = 'apex-z7-playtest-v4';
const homePage = self.registration.scope;
const appFiles = [
  './', 'style.css', 'kart.js', 'track-visual.js', 'scene.js',
  'render.js', 'music.js', 'session.js', 'playtest.js', 'game.js', 'manifest.webmanifest',
  'music/garage.mp3', 'music/sunset.mp3', 'music/coast.mp3', 'music/city.mp3',
  'music/switchback.mp3', 'music/caldera.mp3', 'music/ice.mp3'
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

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys
      .filter(key => key.startsWith('apex-z7-playtest-') && key !== cacheName)
      .map(key => caches.delete(key)));
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
