## 2026-05-25 - Scroll Event Throttling for Layout-Heavy Calculations
**Learning:** Scroll event listeners that trigger layout-heavy calculations (e.g., `getBoundingClientRect`) can cause layout thrashing and lower FPS if not throttled.
**Action:** Use `requestAnimationFrame` with a boolean flag, and register the listener with `{ passive: true }` to maintain 60fps performance and prevent layout thrashing.
