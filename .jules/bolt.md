## 2024-05-24 - Layout Thrashing in Scroll Listeners
**Learning:** Attaching layout-heavy operations like `getBoundingClientRect` directly to the `scroll` event causes layout thrashing and drops frames, especially when not marked as passive.
**Action:** Always throttle scroll listeners using a boolean flag with `requestAnimationFrame` and register them with `{ passive: true }` to maintain 60fps performance.
