## 2024-10-26 - Prevent Unnecessary Scroll Listeners
**Learning:** The global `script.js` attached a `scroll` event listener that fired on every scroll, even on pages (like `contact.html`) where the target `.gallery-item` elements didn't exist. This caused unnecessary empty function executions on every scroll event.
**Action:** Always verify the existence of target DOM elements (e.g., `if (elements.length > 0)`) before setting up event listeners or Observers. Furthermore, replace scroll-based viewport calculations with `IntersectionObserver` to provide a more efficient implementation.
