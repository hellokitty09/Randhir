## 2024-05-04 - Optimize Scroll Event Listener with requestAnimationFrame
**Learning:** Attaching heavy DOM-measuring operations (like `getBoundingClientRect()`) directly to unthrottled `scroll` events can cause layout thrashing and drop frame rates below 60fps.
**Action:** Always throttle scroll/resize event listeners using a boolean flag and `requestAnimationFrame`. Use the `{ passive: true }` option so the browser knows the listener won't prevent default scrolling behavior, improving scroll performance.
