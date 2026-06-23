## 2024-06-25 - Scroll Event Throttling and Passive Listeners
**Learning:** Scroll event listeners that trigger layout-heavy calculations (e.g., `getBoundingClientRect`) can cause significant main thread blocking and layout thrashing, hurting scrolling performance.
**Action:** Throttle such scroll events using `requestAnimationFrame` with a boolean flag, and register the listener with the `{ passive: true }` option to ensure 60fps performance and avoid blocking the scroll layer.
