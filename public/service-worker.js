const CACHE_VERSION = 2;
const CACHE_NAME = `labclin-v${CACHE_VERSION}`;
const STATIC_CACHE = `labclin-static-v${CACHE_VERSION}`;
const IMAGE_CACHE = `labclin-images-v${CACHE_VERSION}`;

// Assets críticos para cache inicial (NÃO incluir JS chunks)
const PRECACHE_ASSETS = [
  '/',
  '/offline.html',
  '/labclin-logo-optimized.webp',
  '/labclin-logo.png',
  '/pncq-logo-optimized.webp',
  '/favicon.png'
];

// Rotas para cache
const APP_ROUTES = [
  '/',
  '/exames',
  '/blog',
  '/contato',
  '/agendar',
  '/resultados',
  '/coleta-domiciliar',
  '/unidades'
];

// Install: Pre-cache assets críticos
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('[SW] Pre-caching assets');
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate: Limpar TODOS os caches antigos (incluindo JS chunks)
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((name) => {
              // Remove qualquer cache que não seja da versão atual
              return name.startsWith('labclin-') && 
                     !name.includes(`-v${CACHE_VERSION}`);
            })
            .map((name) => {
              console.log('[SW] Deletando cache antigo:', name);
              return caches.delete(name);
            })
        );
      })
      .then(() => {
        console.log('[SW] Service Worker ativado, versão:', CACHE_VERSION);
        return self.clients.claim();
      })
  );
});

// Fetch: Estratégias de cache
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Ignorar requests não-GET
  if (request.method !== 'GET') return;

  // Ignorar requests externos (exceto fontes Google)
  if (!url.origin.includes(self.location.origin) && 
      !url.origin.includes('fonts.googleapis.com') &&
      !url.origin.includes('fonts.gstatic.com')) {
    return;
  }

  // Estratégia para imagens: Cache First
  if (isImageRequest(request)) {
    event.respondWith(cacheFirst(request, IMAGE_CACHE));
    return;
  }

  // Estratégia para fontes: Cache First
  if (isFontRequest(request)) {
    event.respondWith(cacheFirst(request, STATIC_CACHE));
    return;
  }

  // Estratégia para assets estáticos (JS, CSS): Stale While Revalidate
  if (isStaticAsset(request)) {
    event.respondWith(staleWhileRevalidate(request, STATIC_CACHE));
    return;
  }

  // Estratégia para páginas HTML: Network First com fallback
  if (isNavigationRequest(request)) {
    event.respondWith(networkFirstWithOffline(request));
    return;
  }

  // Default: Network First
  event.respondWith(networkFirst(request, CACHE_NAME));
});

// Helpers para identificar tipos de request
function isImageRequest(request) {
  const url = new URL(request.url);
  return request.destination === 'image' || 
         /\.(png|jpg|jpeg|gif|webp|svg|ico)$/i.test(url.pathname);
}

function isFontRequest(request) {
  const url = new URL(request.url);
  return request.destination === 'font' ||
         url.origin.includes('fonts.gstatic.com') ||
         /\.(woff|woff2|ttf|otf|eot)$/i.test(url.pathname);
}

function isStaticAsset(request) {
  const url = new URL(request.url);
  // Não cachear chunks JS para evitar problemas de versão
  if (/\.js$/i.test(url.pathname) && url.pathname.includes('assets/')) {
    return false; // Network first para JS chunks
  }
  return /\.css$/i.test(url.pathname);
}

function isNavigationRequest(request) {
  return request.mode === 'navigate';
}

// Estratégia: Cache First
async function cacheFirst(request, cacheName) {
  const cached = await caches.match(request);
  if (cached) return cached;

  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    console.log('[SW] Cache First failed:', error);
    return new Response('', { status: 408, statusText: 'Request Timeout' });
  }
}

// Estratégia: Network First
async function networkFirst(request, cacheName) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    const cached = await caches.match(request);
    if (cached) return cached;
    throw error;
  }
}

// Estratégia: Network First com fallback para offline.html
async function networkFirstWithOffline(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    const cached = await caches.match(request);
    if (cached) return cached;
    
    // Fallback para página offline
    const offlinePage = await caches.match('/offline.html');
    if (offlinePage) return offlinePage;
    
    return new Response('Você está offline', {
      status: 503,
      statusText: 'Service Unavailable',
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}

// Estratégia: Stale While Revalidate
async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);

  const fetchPromise = fetch(request)
    .then((response) => {
      if (response.ok) {
        cache.put(request, response.clone());
      }
      return response;
    })
    .catch(() => cached);

  return cached || fetchPromise;
}

// Background Sync para agendamentos offline (futuro)
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-appointments') {
    event.waitUntil(syncAppointments());
  }
});

async function syncAppointments() {
  // Implementação futura para sincronizar agendamentos offline
  console.log('[SW] Syncing appointments...');
}
