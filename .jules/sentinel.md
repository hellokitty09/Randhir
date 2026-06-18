## 2024-05-24 - Content Security Policy for Static Sites
**Vulnerability:** Missing Content Security Policy (CSP), leaving the site vulnerable to Cross-Site Scripting (XSS) and data injection attacks.
**Learning:** Even static sites require a CSP to prevent execution of unauthorized scripts. The CSP needs to accurately reflect the site's asset requirements, such as allowing external fonts and images (e.g., from `cdnjs.cloudflare.com`, `fonts.googleapis.com`, `images.unsplash.com`) and accommodating inline scripts/styles if the architecture depends on them (e.g., `'unsafe-inline'`).
**Prevention:** Implement a strong, default-deny CSP (`default-src 'self'`) on all HTML pages and explicitly allowlist required domains and resource types.
