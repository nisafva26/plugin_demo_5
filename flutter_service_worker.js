'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "88aedc9c0451392487e127e57ca07595",
"assets/AssetManifest.json": "3df660b4fb1881df211b86e4a91bc872",
"assets/assets/fonts/avenir/AvenirBlack.ttf": "968e784956ff9b6a05c29cc3be18cad0",
"assets/assets/fonts/avenir/AvenirRegular.ttf": "77ce85fec67e99ffc50ed8edac7a4890",
"assets/assets/fonts/MyFlutterApp.ttf": "bf5272f635ea39c14dd7e148575092cf",
"assets/assets/images/appstore.png": "8403f55871da4b0e03c2d5fb289cedf3",
"assets/assets/images/payments/apple_logo.png": "f7666b31896ab7fcc1a69157a147f354",
"assets/assets/images/payments/bank.svg": "fb633ed9bbc685494fc774f20cebe095",
"assets/assets/images/payments/bhim.svg": "04f5bb05261798b0cb5ba6919d567e0c",
"assets/assets/images/payments/credit.svg": "1d695cff3a89a9efce00f61b76412633",
"assets/assets/images/payments/cross.svg": "e71000fb8177dea23a90d052a9c519d1",
"assets/assets/images/payments/gpay.svg": "f74dc773f5ab1032f75fdf55c72a0957",
"assets/assets/images/payments/gpay_logo.png": "f9d4b571d8ee9b86cd229cf524e49740",
"assets/assets/images/payments/img_error.svg": "5ee1db9df9339778a74443475dd997bb",
"assets/assets/images/payments/Img_success.svg": "9e6eb8a533037a5ecf13257de80adcae",
"assets/assets/images/payments/paytm.svg": "e088afea32b093556a59dfd18257234b",
"assets/assets/images/payments/phone_pay.svg": "5c850815aaaa71e931a07198f463b9af",
"assets/assets/images/payments/quiz_fail.png": "40213c84c4b3eba2c54f00bb159e2dc2",
"assets/assets/images/payments/quiz_success.png": "a81c4ea011302d9404f701118f002539",
"assets/assets/images/payments/success_anim.json": "32c949b61701a664ac33c628563c9967",
"assets/assets/images/payments/upi.svg": "44467d96f2c43c53e6d87be3f04f6337",
"assets/assets/navlogo.png": "63976abf6328d2e20e3e62f11f6b94e1",
"assets/FontManifest.json": "38aac3d6255409a6773f1e7f1e007ff2",
"assets/fonts/MaterialIcons-Regular.otf": "9ee94ae18b0ca65dc4146d2b49e2d3d9",
"assets/NOTICES": "f766f237b5aea82a1f157a30383113ca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "1909685b4237ac84748613b47040c010",
"assets/packages/easy_stepper/assets/loading_black.json": "d412b17ec906f03090996d68abab4eca",
"assets/packages/easy_stepper/assets/loading_white.json": "92623d18291ed579cf8bfe3f5fc74213",
"assets/packages/get_upi/lib/src/assets/icons/amazon.png": "74ef95e2e5cd0b3362e72eec41bb4f95",
"assets/packages/get_upi/lib/src/assets/icons/BHIM.png": "fd1e16c3f2ac987ee2b6c7ab746e56ce",
"assets/packages/get_upi/lib/src/assets/icons/cred.png": "29bf1f3e68e97ad273a90cdc64001a8c",
"assets/packages/get_upi/lib/src/assets/icons/gpay.png": "cafceadcc0e95483547fc4550924874a",
"assets/packages/get_upi/lib/src/assets/icons/paytm.png": "a61a70839a622b2b0b33470a8a46634e",
"assets/packages/get_upi/lib/src/assets/icons/payzap.png": "036a9dddbc2db03cd6af72dda16b3649",
"assets/packages/get_upi/lib/src/assets/icons/phonepay.png": "b6f36f72f423a5f33ba66f4c3e8019e7",
"assets/packages/im_stepper/assets/me.jpg": "487511e754834bdf2e6771376d59707e",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5274034dbd8098c65b92ae3283d2a26e",
"/": "5274034dbd8098c65b92ae3283d2a26e",
"main.dart.js": "c828ed18eaa9b5569df0eb53c99df7a5",
"manifest.json": "fce06ebc1c3df1dffa7ae29d898b99a8",
"version.json": "e7215a8b4b1734e7a0e4750ddc108881"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
