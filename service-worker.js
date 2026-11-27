/**
 * SERVICE WORKER FOR NICK TRAN'S PORTFOLIO
 * 
 * This service worker enables Progressive Web App (PWA) functionality by:
 * 1. Caching essential resources for offline use
 * 2. Implementing specific caching strategies for different file types
 * 3. Managing cache versioning and cleanup
 * 
 * SPECIFIC USE IN THIS PROJECT:
 * - Enables offline viewing of the portfolio
 * - Speeds up page loads by serving cached assets
 * - Uses special handling for PDF files (like resume) to ensure they're always fresh
 * - Manages cache versions to ensure updates are properly applied
 */

// Cache version name - increment this when making significant changes to invalidate old caches
const CACHE_NAME = 'niitora-cache-v5';

// List of URLs to cache during installation - these are core resources needed for offline functionality
// Note: PDF files are intentionally excluded to ensure they're always served fresh
const urlsToCache = [
  './',
  './index.html',
  './assets/images/mainpic.jpg',
  './assets/icons/logo_transparency.png',
  './assets/icons/caltech_logo.jpg',
  './assets/icons/chess_logo.jpg',
  './assets/icons/csuf_logo.png',
  './assets/icons/forage_logo.png',
  './assets/icons/i4s_logo.jpg',
  './assets/icons/usc_logo.jpg',
  './assets/icons/ucsd_bic.jpg'
];

/**
 * INSTALL EVENT
 * Triggered when the service worker is installed.
 * This is where we cache initial resources needed for offline functionality.
 */
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

/**
 * FETCH EVENT
 * Intercepts all network requests made by the application.
 * Implements different caching strategies based on file type:
 * 1. PDF files: Network-first with cache fallback (ensures resume is always fresh)
 * 2. Other files: Cache-first with network fallback (improves performance)
 */
self.addEventListener('fetch', event => {
  // Special handling for PDF files to ensure resume is always up-to-date
  // This ensures when users click to view the resume, they always get the latest version
  const requestUrl = new URL(event.request.url);
  if (requestUrl.pathname.endsWith('.pdf')) {
    event.respondWith(
      fetch(event.request, { cache: 'no-store' }) // Force fresh fetch from network
        .catch(error => {
          console.error('Failed to fetch PDF:', error);
          // If network fetch fails, try cache as fallback for offline access
          return caches.match(event.request);
        })
    );
    return;
  }
  
  // HTML, scripts, and styles use network-first so a new deploy is not stuck
  // behind an older cached copy of the site.
  const isAppShell = event.request.mode === 'navigate'
    || requestUrl.pathname.endsWith('.js')
    || requestUrl.pathname.endsWith('.css')
    || requestUrl.pathname.endsWith('.html');

  if (isAppShell) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response && response.status === 200) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseToCache));
          }
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Standard cache-first strategy for images and other static files
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached response if found
        if (response) {
          return response;
        }
        
        // Not in cache, fetch from network
        return fetch(event.request)
          .then(response => {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Clone the response as it can only be consumed once
            const responseToCache = response.clone();
            
            // Cache the fetched resource for future use
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
              
            return response;
          });
      })
  );
});

/**
 * ACTIVATE EVENT
 * Triggered when a new service worker takes control.
 * Used for cleanup: removes old caches to prevent storage bloat.
 * This ensures users get fresh content after updates.
 */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          // Delete any cache that isn't the current version
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
}); 