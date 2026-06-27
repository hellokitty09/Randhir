## 2024-06-27 - Throttle Layout Thrashing
**Learning:** Calling `getBoundingClientRect()` within a synchronous scroll event handler triggers layout thrashing, severely degrading 60fps performance as the browser is forced to recalculate layout on every pixel of scroll.
**Action:** Always throttle scroll event listeners using `requestAnimationFrame` with a boolean flag, and mark the event listener with `{ passive: true }` to maintain smooth scrolling and prevent blocking the main thread.
