## 2026-04-06 - Stop IntersectionObserver Once Triggered
**Learning:** For one-time entry animations, keeping the IntersectionObserver active wastes main-thread CPU cycles by continually executing the callback (even to just check `entry.isIntersecting` or apply already present styles) every time the elements enter or leave the viewport.
**Action:** Always call `observer.unobserve(entry.target)` immediately after applying the target styles or logic for one-time effects like fade-ins.
