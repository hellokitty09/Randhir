## 2024-05-24 - Scroll Event Throttling and Layout Thrashing
**Learning:** Unthrottled scroll event listeners that trigger layout-heavy calculations (e.g., `getBoundingClientRect`) can cause severe layout thrashing and drop frame rates.
**Action:** Always throttle scroll handlers using `requestAnimationFrame` with a boolean flag, and register the listener with the `{ passive: true }` option to maintain 60fps performance without blocking scrolling.
