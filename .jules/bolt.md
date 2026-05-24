## 2024-05-24 - Scroll Event Listener Throttling
**Learning:** Scroll event listeners that trigger layout-heavy calculations (e.g., `getBoundingClientRect`) can cause layout thrashing and drop frames if not throttled.
**Action:** Always throttle scroll event listeners using `requestAnimationFrame` and a boolean flag, and register with the `{ passive: true }` option, to maintain 60fps performance.