## 2026-04-12 - [Missing Validation]
**Vulnerability:** Contact form lacked input validation, missing both size constraints and XSS sanitization on client side.
**Learning:** Found that basic HTML forms without frameworks often neglect input boundaries and output escaping when building alerts.
**Prevention:** Always implement defense in depth by applying constraints both at the HTML tag level (maxlength) and in JS handling (escaping/sanitizing).
