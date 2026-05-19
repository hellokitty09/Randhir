## 2024-05-24 - Layout Thrashing in Scroll Listeners
**Learning:** Found a performance bottleneck where `window.addEventListener('scroll', handleAnimation)` was calling `getBoundingClientRect` on multiple gallery items synchronously on every scroll event, causing severe layout thrashing in a hybrid architecture.
**Action:** Throttle scroll event listeners that trigger layout-heavy calculations using `requestAnimationFrame` with a boolean flag, and register with the `{ passive: true }` option, to maintain 60fps performance and prevent layout thrashing.
