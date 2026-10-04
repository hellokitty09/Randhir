## 2024-10-04 - Unnecessary Scroll Event Listeners
**Learning:** Attaching a scroll event listener that iterates over a queried node list without checking if the list has elements leads to unnecessary empty function executions on every scroll event, especially in a multi-page setup where the target elements might not exist on all pages.
**Action:** Always check if target elements exist (`nodeList.length > 0`) before attaching resource-intensive event listeners like `scroll` or `resize`.
