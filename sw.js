const CACHE="uncle-sam-says-v16";
const ASSETS=[
  "./",
  "./index.html",
  "./standalone.html",
  "./manifest.webmanifest",
  "./assets/logo-source.png",
  "./assets/animations/eagle_1.png",
  "./assets/animations/eagle_2.png",
  "./assets/animations/eagle_3.png",
  "./assets/animations/eagle_4.png",
  "./assets/animations/eagle_5.png",
  "./assets/animations/eagle_6.png",
  "./assets/animations/eagle_7.png",
  "./assets/animations/eagle_8.png",
  "./assets/animations/eagle_9.png",
  "./assets/animations/eagle_10.png",
  "./assets/animations/eagle_11.png",
  "./assets/animations/eagle_12.png",
  "./assets/animations/eagle-sprite-sheet-source.png",
  "./icons/icon-48.png",
  "./icons/icon-180.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-192.png",
  "./icons/icon-maskable-512.png"
];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(r=>{if(r.ok){const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));}return r;}).catch(()=>caches.match("./index.html"))));});
