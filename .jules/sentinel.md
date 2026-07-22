## 2024-07-22 - [Add Content Security Policy]
**Vulnerability:** [Missing Content Security Policy (CSP) headers, allowing arbitrary external scripts, styles, and other resources to be loaded, increasing the risk of XSS.]
**Learning:** [The static HTML files lacked any CSP headers, leaving the application vulnerable to loading malicious resources from untrusted origins if a vulnerability is present in the code or a dependency.]
**Prevention:** [Implement restrictive CSP headers as meta tags in all HTML files, specifically restricting scripts, styles, fonts, and images to known trusted CDNs and origins (cdnjs.cloudflare.com, fonts.googleapis.com, fonts.gstatic.com, images.unsplash.com).]
