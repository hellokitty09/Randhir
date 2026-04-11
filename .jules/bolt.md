## 2024-04-11 - [Missing unobserve in Entrance Animations]
**Learning:** For entrance animations (where elements animate once when coming into view), forgetting to call `observer.unobserve(entry.target)` results in unnecessary execution of the IntersectionObserver callback on every subsequent scroll that brings the element in and out of view.
**Action:** Always call `unobserve` after the initial intersection logic when setting up a run-once scroll animation.

## 2024-04-11 - [getBoundingClientRect in Scroll Listeners]
**Learning:** Using `getBoundingClientRect()` within a `window.addEventListener('scroll')` callback triggers forced synchronous layout (layout thrashing), severely degrading scroll performance and blocking the main thread.
**Action:** Replace scroll event listeners combined with `getBoundingClientRect()` with `IntersectionObserver` for detecting when elements enter the viewport.
