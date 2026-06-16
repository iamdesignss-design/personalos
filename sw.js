/* ─── Service Worker — stub for Phase 7 ──────────────────────────────────── */
/*
 * This file exists so the PWA manifest resolves cleanly.
 * Full caching strategy (offline-first) will be added in Phase 7.
 */

const CACHE = 'personal-os-v1';

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());

self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});
