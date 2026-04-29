## 2026-04-29 - Throttling Scroll Animations
**Learning:** Using `window.addEventListener('scroll')` to trigger layout-heavy calculations (like `getBoundingClientRect` for slide-in animations) without throttling causes layout thrashing and drops frames, especially on mobile devices.
**Action:** Always throttle scroll-bound layout reads/writes using `requestAnimationFrame` with a boolean flag, and register the listener with `{ passive: true }` to maintain 60fps performance without blocking the main thread.
