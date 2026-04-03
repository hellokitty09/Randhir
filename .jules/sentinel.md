## 2024-04-03 - [Security Theater in Alert contexts]
**Vulnerability:** Unnecessary sanitization for alert() calls
**Learning:** Adding HTML entity escaping prior to outputting user input in `alert()` calls is security theater. The `alert()` function only displays plain text and does not render HTML or execute scripts.
**Prevention:** Avoid sanitizing data meant exclusively for text-only contexts like `alert()`, as it provides no real security benefit and introduces UI bugs (like displaying HTML entities to users).
