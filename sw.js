//--------------Chrome Dev-----------------------
/*
self.addEventListener('install', (event) => {
    
    const cacheKey = 'Cache-CSS-JS';
    //const cacheName = 'Fonts-google';
    
    event.waitUntil(caches.open(cacheKey).then((cache) => {
        // Add all the assets in the array to the 'MyFancyCacheName_v1'
        // `Cache` instance for later use.
        return cache.addAll([
            //------------------------


            //------------------------
            'sources/css/style.css',
            'sources/js/main.js'
       // '/css/global.bc7b80b7.css',
       // '/css/home.fe5d0b23.css',
       //'/js/home.d3cc4ba4.js',
        //'/js/jquery.43ca4933.js'
        
    ]);
}));
});
*/
// Establish a cache name
//const cacheName = 'Fonts-google';
/*
self.addEventListener('fetch', (event) => {
    console.log('Fetch intercept for : ', event.request.url==='https://fonts.googleapis.com');
  if (event.request.url === 'https://fonts.googleapis.com') {
    event.respondWith(caches.open(cacheName).then((cache) => { //cacheName
      return cache.match(event.request).then((cachedResponse) => {
        const fetchedResponse = fetch(event.request).then((networkResponse) => {
          cache.put(event.request, networkResponse.clone());

          return networkResponse;
        });

        return cachedResponse || fetchedResponse;
      });
    }));
  } else {
    return;
  }
});
*/


//-----------Chrome Dev-----------------------------

//-----------Nadfri-----------------------------------


importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

if (workbox) {
    console.log('Yeah ! Workbox is loaded');
} else {
    console.log ('Pas de chance');
}
const {ExpirationPlugin} = workbox.expiration;
const {registerRoute} = workbox.routing;
const {StaleWhileRevalidate} = workbox.strategies;
const {CacheableResponsePlugin} = workbox.cacheableResponse;
const {CacheFirst} = workbox.strategies;
//const {ExpirationPlugin} = workbox.expiration;

registerRoute(
    ({url}) => url.origin === 'https://fonts.googleapis.com' ||
    url.origin === 'https://fonts.gstatic.com',
    new StaleWhileRevalidate({
        cacheName: 'google-fonts',
        plugins: [
        new ExpirationPlugin({maxEntries:10}),
        ],
    }),
);



registerRoute(
    ({request}) =>  request.destination === 'document' ||
                    request.destination === 'script'   ||
                    request.destination === 'style',
    new StaleWhileRevalidate({cacheName: 'cache-files'})
);



registerRoute(
    ({request}) =>  request.destination === 'image',
new CacheFirst({
    cacheName: 'images',
    plugins: [
        new ExpirationPlugin({
            maxEntries: 10,
        }),
    ],
}),
);

    //----------Nadfri-------------------------------
    