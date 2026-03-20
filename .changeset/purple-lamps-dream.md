---
"nextjs-website": patch
---
MegaHeader:

Desktop
  - Fix keyboard tab order: the submenu panel is now reachable immediately after the button that opens it, instead of only after tabbing through all social links and the button "Scarica IO".
  - Add role="region" and aria-labelledby (pointing to the corresponding top-level nav button id) to each submenu container
  - Wrap each group of links inside a dedicated <ul> and mark each group heading as <h2> (e.g. "Cosa puoi fare con l'app", "Bonus e iniziative")

Mobile
  - Wrap the top-level accordion buttons in a <ul> list, consistent with the desktop nav structure

---
