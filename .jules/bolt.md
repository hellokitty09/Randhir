## 2024-05-24 - Throttling Scroll Event Listeners
**Learning:** Unthrottled scroll event listeners executing layout-heavy calculations (like `getBoundingClientRect` used in the hybrid animation approach) cause severe layout thrashing and drop frame rates.
**Action:** Always throttle scroll events using `requestAnimationFrame` with a boolean flag, and ensure `{ passive: true }` is set to avoid blocking the main thread.
