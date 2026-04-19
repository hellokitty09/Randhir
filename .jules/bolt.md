## 2024-04-19 - Scroll Event Layout Thrashing
**Learning:** Attaching a direct scroll event listener that calls layout-heavy functions like `getBoundingClientRect()` causes layout thrashing and negatively impacts scrolling performance (jank).
**Action:** Throttle the scroll event listener with `requestAnimationFrame` and a boolean flag, and register the listener with `{ passive: true }` to maintain 60fps performance and avoid blocking the main thread.
