## 2024-05-24 - Unnecessary Scroll Event Listeners
**Learning:** Attaching global event listeners like `window.addEventListener('scroll', handleAnimation)` for `.gallery-item` elements that do not exist on the current page causes unnecessary empty function executions every time the scroll event fires.
**Action:** Always check if the target elements exist in the DOM using `galleryItems.length > 0` before attaching global event listeners related to those elements.
