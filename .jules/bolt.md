## 2024-05-24 - Unthrottled scroll event listeners
**Learning:** Unthrottled scroll event listeners triggering layout-heavy calculations (e.g., `getBoundingClientRect`) cause severe layout thrashing and drop frames below 60fps, creating janky animations.
**Action:** Throttle layout-triggering scroll events using `requestAnimationFrame` with a boolean lock, and register the listener with `{ passive: true }` to unblock the main thread during scrolling.
