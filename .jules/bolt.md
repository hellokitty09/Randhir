## 2024-06-06 - Throttle scroll event listeners
**Learning:** Unthrottled scroll event listeners that trigger layout-heavy calculations (e.g., `getBoundingClientRect`) can cause significant performance degradation and layout thrashing, as they fire multiple times per frame.
**Action:** Always throttle scroll event listeners using `requestAnimationFrame` with a boolean flag, and register the listener with the `{ passive: true }` option to maintain 60fps performance and avoid blocking the main thread.
