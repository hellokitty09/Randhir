## 2024-07-19 - Throttling scroll events with requestAnimationFrame
**Learning:** Frequent events like 'scroll' that trigger layout-heavy calculations (e.g., `getBoundingClientRect`) can cause layout thrashing and drop frames below 60fps.
**Action:** Use `requestAnimationFrame` with a boolean flag, and register the listener with `{ passive: true }` to maintain performance.
