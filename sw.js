VERSION = 1.8;
VERSION_KEY_SUFFIX = 'v_';
EVENT_TIME_CACHE_NAME = 'eventTime';

VERSIONED_ASSET_NAMES = [
  '/',
  'js/slideshow.js',
  'js/timer_v5.js',
  'js/init.js',
  'libs/odometer-04ac802516/odometer.min.js',
  'libs/jquery-2.1.3/jquery-2.1.3.min.js',
  'libs/jquery-1.4.5-mobile-touch-only/jquery.mobile.custom.min.js',
  'css/main.css',
  'libs/odometer-04ac802516/themes/odometer-theme-minimal.css',
  'images/next.svg',
  'images/previous.svg',
  'images/1.jpg',
  'images/2.jpg',
  'images/3.jpg',
  'images/4.jpg',
  'images/5.jpg',
  'images/6.jpg',
  'images/7.jpg',
  'images/8.jpg',
  'images/9.jpg',
  'images/10.jpg',
  'images/11.jpg',
  'images/12.jpg',
  'images/13.jpg',
  'images/14.jpg',
  'images/15.jpg',
  'images/16.jpg',
  'images/17.jpg',
  'images/18.jpg',
  'images/19.jpg',
  'images/20.jpg',
  'sounds/ring.mp3',
  'sounds/ring.ogg',
  'sounds/ring.wav',
  'sounds/tick2.mp3',
  'sounds/tick2.ogg',
  'sounds/tick2.wav'
];

const versionKey = () => `${VERSION_KEY_SUFFIX}${VERSION}`

const fetchOrFake = (event, fakeProvider) =>
  event.respondWith(fetch(event.request).catch(fakeProvider));

const fetchAndCache = (event, cacheName) => fetch(event.request)
  .then(function (response) {
    const responseClone = response.clone();
    caches.open(cacheName).then(function (cache) {
      cache.put(event.request, responseClone);
    });
    return response;
  });

const getCacheFirst = (event, cacheName) => {
  event.respondWith(caches.match(event.request).then(function(response) {
    if (response !== undefined) return response;
    else return fetchAndCache(event, cacheName);
  }));
};

const getNetworkFirst = (event, cacheName) => {
  event.respondWith(fetchAndCache(event, cacheName).catch(function(response) {
    return caches.match(event.request);
  }));
};

const requestedResourceNameEquals = (name, request) =>
  request.url.replace(request.referrer, '') === name;

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(versionKey()).then(function(cache) {
      return cache.addAll(VERSIONED_ASSET_NAMES);
    })
  );
});

self.addEventListener('fetch', function(event) {
  if (requestedResourceNameEquals('time.php', event.request)) {
    fetchOrFake(event, () => {
      const nowEpochMilliseconds = Math.round(new Date() / 1000);
      return new Response(nowEpochMilliseconds);
    })
  } else if (requestedResourceNameEquals('event_time.php', event.request)) {
    getNetworkFirst(event, EVENT_TIME_CACHE_NAME)
  } else {
    getCacheFirst(event, versionKey())
  }
});

/*
  1) Versioned/Asset: Caches are deleted if they match the versioning
  pattern (v_{n.n}), but not the specific, current version number.
  2) Non-versioned: Only event_time so far; It is allowed to stay regardless,
  but clobbered every time we can load a new event time.
*/
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(cacheNames
        .filter(it => {
          const isVersion = it.startsWith(VERSION_KEY_SUFFIX);
          const notCurrentVersion = !it === versionKey();
          const isStaleVersion = isVersion && notCurrentVersion;

          return isStaleVersion || it === EVENT_TIME_CACHE_NAME;
        })
        .map(it => caches.delete(it))
      );
    })
  );
});
