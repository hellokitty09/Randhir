## 2024-05-24 - Scroll Listener Layout Thrashing
**Learning:** Raw scroll event listeners that call `getBoundingClientRect` cause layout thrashing by forcing synchronous style recalculations on every scroll event, severely impacting 60fps rendering performance.
**Action:** Always throttle scroll listeners triggering layout-heavy computations using `requestAnimationFrame` with a boolean flag, and include the `{ passive: true }` option to ensure the browser doesn't wait for the listener to finish before painting.
