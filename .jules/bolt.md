## 2024-05-18 - Throttling Scroll Event Listeners
**Learning:** Scroll event listeners that trigger layout-heavy calculations (e.g., `getBoundingClientRect`) can cause severe layout thrashing and drop frame rates if fired on every scroll tick.
**Action:** Always throttle scroll listeners using `requestAnimationFrame` with a boolean flag, and register the event with `{ passive: true }` to maintain 60fps performance without blocking main thread scrolling.
