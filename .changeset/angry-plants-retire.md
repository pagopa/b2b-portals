---
'nextjs-website': patch
---

ServiceCarousel: fix accessibility issues

Reference: https://www.w3.org/WAI/ARIA/apg/patterns/carousel/examples/carousel-1-prev-next/

- Only the currently active slide is exposed to (and focusable by) assistive technology at a time — avoids exposing react-slick's internal clone slides used for the infinite loop, and keeps focus in sync with the active card when navigating via the previous/next buttons or arrow keys.
- Add `aria-controls` to the previous/next buttons pointing to the carousel container, so screen readers can announce which element each button controls (per W3C ARIA pattern).
- The carousel is now a named landmark and labelled by its visible heading `<Title>`
- Replace `role="list"` + inner `role="listitem"` wrappers with `role="group" aria-roledescription="slide" aria-label="N di N"` on each card — the word "slide" is omitted from `aria-label` because `aria-roledescription="slide"` already causes screen readers to announce it, which would otherwise produce the redundant announcement "slide, Slide 1 di 5"
