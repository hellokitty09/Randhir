## 2026-04-23 - Throttle Scroll Events
**Learning:** Scroll event listeners triggering layout-heavy calculations (like `getBoundingClientRect`) can cause layout thrashing.
**Action:** Throttle such scroll events using `requestAnimationFrame` with a boolean flag, and register them with `{ passive: true }` to maintain 60fps.
