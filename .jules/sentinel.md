## 2024-05-24 - Add Content Security Policy
**Vulnerability:** Missing Content Security Policy (CSP) headers, allowing potential Cross-Site Scripting (XSS) and unauthorized resource loading.
**Learning:** Static websites are often deployed without default security headers. Adding a restrictive CSP via a meta tag is crucial for defense-in-depth against XSS.
**Prevention:** Always implement a strict CSP meta tag in the head of HTML documents, explicitly allowing only necessary domains for scripts, styles, fonts, and images.