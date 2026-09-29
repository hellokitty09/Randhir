## 2026-09-29 - Unnecessary Scroll Event Listener
**Learning:** Adding a scroll event listener that executes a function looping over an empty NodeList on every scroll event causes unnecessary function executions, even if it doesn't cause layout thrashing.
**Action:** Always verify if elements exist before attaching scroll event listeners that interact with them, or check the length of the NodeList before executing the logic inside the event handler.
