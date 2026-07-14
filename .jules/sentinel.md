## 2026-07-14 - Content Security Policy (CSP) Implementation
**Vulnerability:** Missing Content Security Policy (CSP) allowed potentially untrusted external resources (scripts, styles, images) to be loaded and executed, increasing the risk of Cross-Site Scripting (XSS) and data injection attacks.
**Learning:** CSP must be explicitly defined in HTML meta tags when a static site architecture is used to ensure strict boundaries on what content can load. It helps mitigate unauthorized script executions.
**Prevention:** Always implement a strict `Content-Security-Policy` header or meta tag in web applications, restricting `default-src` to 'self' and explicitly whitelisting trusted domains for scripts, styles, fonts, and images.
