## 2024-05-15 - Missing Content Security Policy
**Vulnerability:** The application lacks a Content Security Policy (CSP), making it more susceptible to Cross-Site Scripting (XSS) attacks.
**Learning:** CSP is an important defense-in-depth mechanism. It restricts the sources from which content (like scripts, styles, images) can be loaded, mitigating the impact of XSS vulnerabilities. In static sites where backend configuration of headers is not possible, meta tags are a viable way to implement CSP.
**Prevention:** Always implement a robust CSP for web applications, carefully configuring allowed sources for scripts, styles, images, and other resources.
