const CACHE_NAME  = 'mapkin-cache-v1',
      urlsToCache = [
          '/'
      ];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Cache Opened!');
      return cache.addAll(urlsToCache);
    })
  )
});

self.addEventListener('activate', () => {

});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((res) => {
      if(res) {
        return res;
      }
      return fetch(event.request);
    })
  )
});
