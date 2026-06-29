## 2024-06-29 - Enforce Content Security Policy (CSP)
**Vulnerability:** Missing Content Security Policy (CSP) across all HTML files, increasing the risk of Cross-Site Scripting (XSS) and unauthorized resource loading.
**Learning:** In a static site without a dynamic backend, security headers must be enforced via `<meta>` tags. CSP needs to be carefully crafted to allow essential CDNs (like Cloudflare for Font Awesome and Google Fonts) and images (Unsplash) while maintaining a strict `default-src 'self'`.
**Prevention:** Always implement a baseline CSP in HTML templates or CI/CD pipelines to ensure resources are explicitly allowed and XSS vectors are mitigated by default.
