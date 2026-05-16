## 2024-05-16 - Scroll Event Throttling
**Learning:** Unthrottled scroll event listeners triggering layout-heavy calculations (like `getBoundingClientRect`) cause layout thrashing and drop frame rates below 60fps.
**Action:** Always throttle scroll event listeners using `requestAnimationFrame` with a boolean flag, and register them with `{ passive: true }`.