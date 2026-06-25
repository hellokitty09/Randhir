## 2024-03-21 - Throttling Scroll Events with requestAnimationFrame
**Learning:** Directly attaching layout-heavy DOM manipulations (like `getBoundingClientRect()`) to the native `scroll` event can cause layout thrashing, dropping the frame rate below 60fps.
**Action:** Always throttle scroll event listeners by wrapping the execution in a `requestAnimationFrame()` check coupled with a boolean tracking flag (e.g., `isScrolling`), and declare the event listener with `{ passive: true }` to avoid blocking the main thread.
