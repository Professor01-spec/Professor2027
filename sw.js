// Minimal service worker — exists only to satisfy PWA installability.
// Deliberately does NOT cache anything, so the ledger always loads the
// latest version and never shows stale data after an update.
self.addEventListener('install', (e) => {
  self.skipWaiting();
});
self.addEventListener('activate', (e) => {
  self.clients.claim();
});
self.addEventListener('fetch', (e) => {
  // Always go to network — no cache interception.
  e.respondWith(fetch(e.request));
});
