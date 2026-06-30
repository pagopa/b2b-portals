---
"nextjs-website": patch
---

Newsletter Form: accessibility improvements (H90, ARIA17, H71)

- Wrap form content in semantic `<form>` tag with `aria-labelledby` pointing to the form title (ARIA landmark)
- Add visually hidden "(obbligatorio)" text inside each required field label (H90)
- Set `type="email"` on the email input
- Add `id="radio-group-title"` and `aria-labelledby` to the radio group (ARIA17); render title as `<p>` instead of `<h6>`
- Associate each radio button with its label via `id`/`for` attributes using `FormControlLabel` (H71/clickable label)
