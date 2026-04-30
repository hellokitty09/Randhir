## 2024-04-30 - Scroll Event Listener Throttling
**Learning:** Unthrottled scroll event listeners triggering layout-heavy calculations like `getBoundingClientRect` can cause layout thrashing and drop frame rates below 60fps.
**Action:** Always throttle scroll listeners using `requestAnimationFrame` with a boolean flag, and register the listener with `{ passive: true }` to maintain smooth scrolling performance.
