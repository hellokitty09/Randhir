## 2024-07-09 - Scroll Event Layout Thrashing
**Learning:** Scroll event listeners that trigger layout-heavy calculations (e.g., `getBoundingClientRect`) can cause layout thrashing and drop frame rates if not throttled, as scroll events fire at a higher rate than the display refresh rate.
**Action:** Always throttle layout-heavy scroll event handlers using `requestAnimationFrame` with a boolean flag, and register the listener with `{ passive: true }` to avoid blocking scrolling performance.
