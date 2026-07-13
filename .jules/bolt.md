## 2026-07-13 - Throttle Scroll Events
**Learning:** Frequent scroll events triggering layout calculations like `getBoundingClientRect()` without throttling lead to significant layout thrashing and drop in frame rates.
**Action:** Always throttle layout-heavy operations bound to scroll events using `requestAnimationFrame` to ensure 60fps performance and use `{ passive: true }` so scrolling is not blocked.
