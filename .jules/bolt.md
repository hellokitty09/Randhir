## 2024-05-24 - Scroll Event Throttling and Passive Listeners
**Learning:** Scroll event listeners that trigger layout-heavy calculations (like `getBoundingClientRect` used in `handleAnimation`) can cause layout thrashing and drop frame rates below 60fps if left unthrottled and without passive options.
**Action:** Always throttle layout-dependent scroll handlers using `requestAnimationFrame` with a boolean lock, and attach them using `{ passive: true }` to unblock the main thread's scrolling.
