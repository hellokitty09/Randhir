## 2024-05-18 - Prevent Unnecessary Empty Function Executions

**Learning:** The external `script.js` contains scroll and hover event handlers targeting `.gallery-item` elements, but these elements do not exist on the page (`contact.html`) where the script is included. This causes the scroll event listener to repeatedly trigger empty function executions.
**Action:** Always verify the existence of DOM elements (`NodeList.length > 0`) before attaching global event listeners (like `scroll` or `resize`) to prevent unnecessary function calls when the target elements are absent.
