// opens a new cache and populate it with data
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('restaurant-v1').then(function (cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/restaurant.html',
                '/js/main.js',
                '/js/restaurant_info.js',
                '/js/restaurant_info.js',
                '/css/styles.css',
                '/data/restaurants.json',
                //   '/img/'
            ]);
        })
    );
});

// request the data
self.addEventListener('fetch', function (event) {
    console.log(event.request.url);
// compares the data of the request with the cached data, if it is unavailable it will fetch it from the network
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});