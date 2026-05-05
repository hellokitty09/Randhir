## 2024-05-05 - Throttle layout-heavy calculations on scroll
**Learning:** `script.js` attaches a scroll event listener that calls `getBoundingClientRect` on every scroll event without any throttling or debouncing, which forces synchronous layout calculations and can cause layout thrashing (jank) during scrolling. This is a classic frontend performance bottleneck.
**Action:** Always throttle scroll event handlers that trigger layout calculations using `requestAnimationFrame`, and add `{ passive: true }` to the event listener options to prevent blocking the main thread during scrolling.
