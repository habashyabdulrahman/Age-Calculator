self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("age-calculator-cache").then((cache) => {
      return cache.addAll([
        "./",
        "./index.html",
        "./assets/icon192.png",
        "./assets/icon512.png",
        "./style.css", // أضف الملفات الأخرى هنا
        "./script.js",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
