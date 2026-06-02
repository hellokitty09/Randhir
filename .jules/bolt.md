## 2024-05-24 - Scroll Event Throttling for Layout-Heavy Calculations
**Learning:** Attaching layout-heavy calculations (like `getBoundingClientRect()`) directly to the `scroll` event without throttling causes layout thrashing and severe performance degradation, blocking the main thread and reducing frame rate.
**Action:** Always throttle scroll event listeners that trigger layout calculations using `requestAnimationFrame` with a boolean flag, and register the listener with the `{ passive: true }` option to ensure smooth 60fps scrolling.
