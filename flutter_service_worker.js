'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a00914941c1b5d3634ee9fe0af13b36f",
".git/config": "f662fedf74e1fd9aa141c754f7162cfd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4afef383c495ce2ba4f87ffa97ba332b",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d1a856dba4f76ceaa66b357dd10302f3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "932d74ef7d84990b65808d681415f3b2",
".git/logs/refs/heads/master": "932d74ef7d84990b65808d681415f3b2",
".git/logs/refs/remotes/origin/HEAD": "031280bb8466e6d8506cd83e0a0789ca",
".git/logs/refs/remotes/origin/master": "9a71907f9791be121d60e1885a934323",
".git/objects/4d/aff25573f16d4b5022152e93a34856435fa457": "90c847f60c34869ff95137b0b209f202",
".git/objects/5d/9e6098bbf47dc4049872ab923be459aeb23370": "c293a8e9c647f3190724ebbde0213c61",
".git/objects/75/6bab34554e0b832c2f40791f2bbb402509bc4c": "d03186455bcac7df63e77c125fe7fdf5",
".git/objects/77/7c3ee1958d3f645b567380daa46095c4ec3fd0": "8ed386cb8564da6b719ff062baff9d91",
".git/objects/7d/2d189db29e5d251c1f4d0417c71e08ac0a707b": "c9e223608a659847199a2b867de1b570",
".git/objects/7f/5d79822e08b8f4e473602e02ceb5daef2ca5fa": "f7180716da9cef3c8b109c027ef7f5ab",
".git/objects/88/e610af77b0f760408df4b07dda29336843ec3e": "a5d4bcdedab5bf289194aa83782d50b8",
".git/objects/94/c71d94ac6d6e65b8dc6c1495d2b2f0b2904da0": "3965abe3a051631027cfc3993c9417b3",
".git/objects/c0/afe6a8be3da3af25f2bc7c2f1cb11e8c6065c3": "9d6a7a20bffa67ffba25d6e89ac09089",
".git/objects/ca/0e52a0a0a2554147d9663e30bccf592464f1a0": "0518ca9c8cfdf1d4a15a6f1f8f661bfc",
".git/objects/f0/093fce6816afd2909f8d288bf43452efdb3737": "cfafcda3eb479cb8fd5c53ef327decab",
".git/objects/pack/pack-4a37791e4f81bac1df0852dc3b58dd873e437a58.idx": "d3bdc8062cc436790e6086bf98235658",
".git/objects/pack/pack-4a37791e4f81bac1df0852dc3b58dd873e437a58.pack": "f00bab3f3290212c1b6ab00bfeaf7800",
".git/packed-refs": "208bbbdbc45dad182effe8cc3c195ab7",
".git/refs/heads/master": "65a2a32a03058668a1e91a6e3f46fe8c",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "65a2a32a03058668a1e91a6e3f46fe8c",
"assets/AssetManifest.json": "58c9c5f9873eee5880e895047fd7c6a7",
"assets/assets/images/banner-horseracing.jpg": "5443439a4dd5733f63a52d8e33ac93c1",
"assets/assets/images/Racing_Background.jpg": "e5eb30a37f0ca3f4f50ace920e72d2da",
"assets/assets/images/templogo.jpg": "d6a5c5359e811f56b57a762a4d17554d",
"assets/assets/images/temp_banner.jpg": "482af76fc493a49299a14dd78e449773",
"assets/data/race_details.json": "fa438cd11a13e3a7f4749a616a8feec2",
"assets/data/race_prediction.json": "be54817dac464ecbb1fd15469e42cf20",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/banner-horseracing.jpg": "5443439a4dd5733f63a52d8e33ac93c1",
"assets/images/Racing_Background.jpg": "e5eb30a37f0ca3f4f50ace920e72d2da",
"assets/images/temp_banner.jpg": "482af76fc493a49299a14dd78e449773",
"assets/images/temp_logo.jpg": "d6a5c5359e811f56b57a762a4d17554d",
"assets/NOTICES": "0dbb3075bca210ecd556b00d1abf4e58",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.ico": "47305c21af63eb47d148c80a6ccffcb5",
"icons/favicon-16x16.png": "ad0b77c7d14d0e16fd5e4cb16d1bb351",
"icons/favicon-32x32.png": "ef391293a07ef5972640d64568a173fd",
"icons/favicon-96x96.png": "ebfb7848fae6559e69d250361bc691b5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/ms-icon-144x144.png": "77770bce16b7cda3be99aa22c591363f",
"index.html": "674f248a6e74928fef83880a916782a5",
"/": "674f248a6e74928fef83880a916782a5",
"main.dart.js": "b3bd18496a65cb2c6656350325b0e891",
"manifest.json": "187fbe2a9ebbba9cdc414f4dc7dac188",
"version.json": "ebfd7652ce89ed8d95f88448879580e2"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
