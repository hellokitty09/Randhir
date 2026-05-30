## 2024-05-18 - Throttle scroll event listener
**Learning:** Scroll events that trigger layout calculations (`getBoundingClientRect`) cause layout thrashing and drop frames below 60fps when unthrottled, particularly in custom staggered animation implementations like the one in `script.js`.
**Action:** Always throttle layout-triggering scroll event listeners using `requestAnimationFrame` with a boolean lock flag, and register them with `{ passive: true }` to avoid blocking main thread scrolling.
