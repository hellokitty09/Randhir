## 2025-01-20 - [CSP Implementation Learning]
**Vulnerability:** Missing Content Security Policy
**Learning:** The static website architecture relies on inline scripts and styles (for animations, styling) which necessitates using 'unsafe-inline' for both script-src and style-src in the CSP to prevent breaking functionality.
**Prevention:** Consider refactoring inline scripts and styles into external files to enable a more restrictive CSP in the future.