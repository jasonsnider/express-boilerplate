// https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/

//Minimal cache, homepage only
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('ebp').then(cache => {
      return cache.addAll([
        `/`
      ])
        .then(() => self.skipWaiting());
    })
  )
});

//Delete old cache on activate
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      console.log(cacheNames);
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return false;
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

//Check offline, then fallback to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
