const CACHE = 'proglab-v2';

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(c =>
      c.addAll(['/', '/index.html', '/manifest.json'])
       .then(() => c.add('https://fonts.googleapis.com/css2?family=Special+Elite&family=IBM+Plex+Mono:wght@400;600&display=swap').catch(() => {}))
    )
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request)
        .then(r => { caches.open(CACHE).then(c => c.put(e.request, r.clone())); return r; })
        .catch(() => caches.match('/index.html'))
    );
    return;
  }
  e.respondWith(
    caches.match(e.request).then(cached => {
      const net = fetch(e.request).then(r => {
        caches.open(CACHE).then(c => c.put(e.request, r.clone()));
        return r;
      }).catch(() => new Response('', { status: 408 }));
      return cached || net;
    })
  );
});
