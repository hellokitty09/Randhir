## 2024-05-14 - Scroll Event Layout Thrashing
**Learning:** Directly attaching `getBoundingClientRect` (which forces synchronous layout calculations) to the `scroll` event can cause severe performance issues (layout thrashing) and jank, because scroll events fire more frequently than frames are rendered.
**Action:** Always throttle scroll event listeners that trigger layout calculations using `requestAnimationFrame` with a boolean flag, and register the listener with `{ passive: true }` to avoid blocking main thread scrolling.
