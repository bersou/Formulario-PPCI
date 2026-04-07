const CACHE_NAME = 'ppci-pwa-v1';

// Quando o SW for instalado, ele toma controle da página imediatamente
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// Intercepta as requisições para garantir a auditoria PWA de offline mode
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return new Response('Aplicativo PPCI está offline. Verifique sua conexão.');
    })
  );
});
