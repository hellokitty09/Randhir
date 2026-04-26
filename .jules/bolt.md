## 2024-05-23 - Throttling Scroll Event Listeners
**Learning:** Scroll event listeners triggering layout-heavy calculations like `getBoundingClientRect` can cause significant layout thrashing and frame drops if fired continuously without throttling.
**Action:** Always throttle scroll events using `requestAnimationFrame` with a boolean flag, and register the listener with `{ passive: true }` to maintain 60fps and prevent blocking main thread scrolling.
