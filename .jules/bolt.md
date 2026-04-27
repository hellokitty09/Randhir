## 2024-05-24 - Initial Bolt Journal Entry
**Learning:** Started performance optimization.
**Action:** Will look for UI jank or inefficient loops.

## 2026-04-27 - Layout Thrashing on Scroll
**Learning:** Calling `getBoundingClientRect()` synchronously inside a high-frequency `scroll` event listener causes layout thrashing and drops frames.
**Action:** Throttle layout-reading functions inside scroll events using `requestAnimationFrame` with a ticking flag, and register the listener with `{ passive: true }`.
