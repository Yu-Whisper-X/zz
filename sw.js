self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('octopus-cache-v1').then((cache) => {
      return cache.addAll([
        './index.html',
        './manifest.json',
        './icon-512x512.png' // 仅缓存512px图标
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});