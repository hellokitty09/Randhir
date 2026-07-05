## 2025-01-08 - [Add Content Security Policy]
**Vulnerability:** [Missing Content-Security-Policy (CSP) headers in all HTML files]
**Learning:** [A basic static site requires careful consideration of external resources (like FontAwesome, Google Fonts, Unsplash) when implementing CSP to prevent XSS. It requires 'unsafe-inline' for scripts/styles if inline code is heavily used, and 'data:' URIs if SVG/images use data schemes.]
**Prevention:** [Always define a strict Content Security Policy meta tag explicitly allowing necessary external CDNs/domains while restricting default sources.]
