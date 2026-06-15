## 2024-05-24 - Content Security Policy Implementation
**Vulnerability:** Missing security headers (CSP) allowing potential cross-site scripting (XSS) and injection of unauthorized resources.
**Learning:** The static website lacks a Content Security Policy, which is a critical layer of defense against XSS. Implementing it in a static site requires understanding all external resources loaded (like FontAwesome, Google Fonts, Unsplash images).
**Prevention:** Always implement a strict Content Security Policy (CSP) either via server headers or `<meta>` tags as early as possible in project development, explicitly allowing only required external domains.
