## 2024-05-18 - [Scroll Event Layout Thrashing]
**Learning:** [The application uses a hybrid animation approach where `contact.html` utilizes `script.js` for scroll-triggered staggered animations (`getBoundingClientRect`). Unthrottled scroll listeners cause layout thrashing and severe main-thread blockages, degrading 60fps performance.]
**Action:** [Always throttle scroll event listeners using `requestAnimationFrame` with a boolean flag, and register with the `{ passive: true }` option when performing layout-heavy calculations like `getBoundingClientRect`.]
