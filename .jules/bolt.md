## 2026-06-28 - Layout-Heavy Scroll Listeners Causing Thrashing
**Learning:** Calling `getBoundingClientRect()` within an unthrottled `scroll` event listener causes layout thrashing and negatively impacts scrolling performance (stuttering, dropped frames), as the browser is forced to synchronously recalculate layout on every scroll event.
**Action:** Throttle layout-heavy scroll calculations using `requestAnimationFrame` and a boolean flag. Also, register the scroll listener with the `{ passive: true }` option to ensure main thread scrolling is not blocked.
