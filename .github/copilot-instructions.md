# Copilot instructions for FAQ accordion

This repository is a small static frontend for an "FAQ accordion" page. The project is lightweight: HTML + Tailwind CSS in `src/styles.css`, built/consumed as `dist/styles.css` and served via `index.html`.

Keep guidance concise and focused on actionable edits for this codebase.

What the project contains
- `index.html` — single-page static HTML. It references `dist/styles.css` and places an image pattern with responsive `picture`/`source` elements.
- `src/styles.css` — Tailwind entry + custom CSS variables and a `@font-face` for "Work Sans". The file imports Tailwind and declares theme tokens used in `index.html`.
- `assets/` — static assets (images, fonts). Important files: `assets/fonts/WorkSans-VariableFont_wght.ttf`, `assets/images/background-pattern-mobile.svg`, `assets/images/background-pattern-desktop.svg`.

Key conventions and patterns
- The build artifact is `dist/styles.css` (not present in source). Editors should prefer editing `src/styles.css` and regenerate `dist/` if a build step exists.
- CSS uses custom properties in `:root` (e.g. `--purple950`, `--font1`) and Tailwind utilities are expected (see `@import "tailwindcss"`). Preserve those tokens and update variants in `src/styles.css`.
- `index.html` uses a responsive `picture` element for background illustrations — follow that pattern when adding responsive images.
- Keep markup minimal and semantic. The `main` element exists and is the intended insertion point for the accordion content.

Build, run, and dev notes
- No package.json or explicit build script detected in the repo. If you add JS/CSS tooling, include a minimal `package.json` and document commands in `README.md`.
- When making style changes, edit `src/styles.css` and ensure `dist/styles.css` is produced. If you can't run a Tailwind build locally, make conservative CSS edits directly to `dist/styles.css` and leave a note in the PR describing the reason.

Examples and actionable suggestions
- To add FAQ items: insert accessible accordion markup inside the `main` element in `index.html`. Prefer details/summary for simple JS-free accordions, or follow site styles and use ARIA when implementing custom JS.
  Example pattern (insert into `index.html` main):

  <details>
    <summary class="font-semibold text-[var(--purple950)]">Question text</summary>
    <div class="mt-2 text-[var(--purple600)]">Answer text</div>
  </details>

- To change colors or typography, edit the CSS variables in `src/styles.css`. For example, change `--purple600` to adjust body text color.
- If you add interactivity, keep it unobtrusive and avoid shipping large frameworks; the project is intentionally minimal.

Files to reference when coding
- `index.html` — main HTML structure and responsive image patterns
- `src/styles.css` — Tailwind entry, variables, and font-face
- `assets/` — fonts and images

Tests and quality gates
- No test framework found. Keep changes small and include a screenshot or short instructions for manual verification when opening a PR.

What not to change
- Do not rename or move the `assets/fonts` files unless also updating `@font-face` paths.
- Avoid removing the `@import "tailwindcss"` line from `src/styles.css` unless you provide a replacement build approach.

If something is unclear
- Ask for clarification and attach a screenshot or a short code snippet of the intended change.

Please review this file and tell me if you want more examples or a different level of detail.