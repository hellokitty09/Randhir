## 2024-10-26 - Throttling Scroll Event Listeners
**Learning:** Scroll event listeners that trigger layout-heavy calculations (e.g., `getBoundingClientRect`) can cause severe layout thrashing and drop frame rates below 60fps if executed on every scroll event tick.
**Action:** Always throttle such scroll listeners using `requestAnimationFrame` with a boolean flag, and register the listener with the `{ passive: true }` option to ensure the main thread isn't blocked.
