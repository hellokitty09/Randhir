## 2024-04-09 - [Input Validation and Sanitization Pitfall]
**Vulnerability:** Adding HTML sanitization to plain-text sinks like `alert()`
**Learning:** Adding HTML escaping to plain-text contexts creates functionality bugs (displaying literal entities) without providing security benefits, as the sink doesn't execute HTML anyway.
**Prevention:** Always consider the context of the sink before applying escaping or sanitization techniques. Ensure sanitization is appropriate for the context where the data will be used or rendered.
