## 2024-05-22 - [DoS Mitigation via Client-side Limits]
**Vulnerability:** [Missing input length restrictions on form fields allowed potential excessively large payload submissions (client-side resource exhaustion / large form submissions).]
**Learning:** [Input constraints need to be enforced across all data intake endpoints to maintain availability and performance.]
**Prevention:** [Always enforce strict, reasonable `maxlength` attributes on HTML input/textarea elements as a frontline defense-in-depth measure, backed by server-side validation.]