## 2026-04-13 - Throttling Scroll Event with requestAnimationFrame
**Learning:** Attaching an unthrottled event listener to 'scroll' can cause excessive execution of expensive operations like `getBoundingClientRect`, leading to layout thrashing and dropped frames. Throttling with `requestAnimationFrame` ensures that the callback runs at most once per frame, aligned with the browser's repaint cycle.
**Action:** Use a boolean flag combined with `requestAnimationFrame` to throttle high-frequency events (scroll, resize) that trigger visual updates or layout measurements.
