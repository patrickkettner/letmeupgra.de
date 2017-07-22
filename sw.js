var CACHE = 'cache-only';

self.addEventListener('install', function(evt) {
   evt.waitUntil(precache());
});

self.addEventListener('fetch', function(evt) {
  console.log('The service worker is serving the asset.');
  evt.respondWith(fromCache(evt.request));
});

function precache() {
  return caches.open(CACHE).then(function (cache) {
    return cache.addAll([
      '/',
      '/you',
      '/you?pwa',
      'gold.jpg',
      'icon.png',
      'script.js',
      'style.css',
      'upgrade.u.mp3',
      'index.html',
      'site.webmanifest'
    ]);
  });
}
 function fromCache(request) {
  return caches.open(CACHE).then(function (cache) {
    console.log(request);
    return cache.match(request).then(function (matching) {
      return matching || Promise.reject('no-match');
    });
  });
}
