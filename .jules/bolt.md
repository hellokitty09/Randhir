## 2024-04-05 - IntersectionObserver Memory/CPU Leak
**Learning:** This codebase uses IntersectionObservers across multiple HTML pages (index.html, destinations.html, about.html) for one-time fade-in animations on scroll. However, the observers were not unobserving elements after they had animated in, leaving the observer active on every scroll event, which unnecessarily consumes CPU and memory.
**Action:** Always call `observer.unobserve(entry.target)` immediately inside the `if (entry.isIntersecting)` block for one-time entry animations to free up resources.
