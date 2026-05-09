## 2024-05-09 - Unthrottled scroll event listeners triggering layout-heavy calculations
**Learning:** Using `window.addEventListener('scroll', ...)` that directly calls functions containing layout-heavy operations like `getBoundingClientRect()` triggers layout thrashing and drops frames, hurting 60fps performance.
**Action:** Always throttle scroll events using `requestAnimationFrame` with a boolean flag, and register the listener with `{ passive: true }` to avoid blocking the main thread.
