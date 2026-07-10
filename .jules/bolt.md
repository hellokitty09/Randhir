## 2024-03-24 - Layout-heavy Scroll Listeners
**Learning:** Legacy pages often use `getBoundingClientRect()` inside un-throttled scroll event listeners. This forces synchronous layout calculations on every scroll event (up to 120 times per second), leading to severe layout thrashing and jank, especially on mobile devices.
**Action:** Always throttle scroll listeners using `requestAnimationFrame` with a boolean ticking flag to decouple layout reads from the high-frequency event stream, and use the `{ passive: true }` option to ensure scroll performance isn't blocked.
