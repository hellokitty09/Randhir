# Bolt's Journal

## 2024-05-23 - Throttling Scroll Event Listeners
**Learning:** Scroll event listeners that trigger layout-heavy calculations (e.g., `getBoundingClientRect`) can cause severe performance issues and layout thrashing if fired continuously.
**Action:** Throttle these listeners using `requestAnimationFrame` with a boolean flag, and register with `{ passive: true }` option, to maintain 60fps performance and prevent layout thrashing.
