## 2024-05-24 - Missing Content Security Policy in Static Website
**Vulnerability:** Found a complete lack of Content Security Policy (CSP) in all HTML pages of the static website.
**Learning:** Even simple static websites with inline scripts and styles can be vulnerable to XSS if a CSP is not enforced, especially when incorporating external resources like fonts and icons. The assumption that static sites without backend logic are immune to XSS leads to this gap.
**Prevention:** Always include a baseline CSP meta tag in the `<head>` of HTML files, explicitly defining allowed sources for scripts, styles, fonts, and images, even for purely static frontends.
