## 2024-05-24 - IntersectionObserver instead of Scroll Events
**Learning:** Using a `scroll` event listener combined with synchronous layout operations like `getBoundingClientRect()` causes significant main-thread blocking and layout thrashing, hurting performance.
**Action:** Replace `scroll` event listener + `getBoundingClientRect` logic with an `IntersectionObserver`. Make sure to `observer.unobserve(entry.target)` when the item has already been animated to prevent the observer from continually running.
