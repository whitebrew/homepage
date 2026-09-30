# Whitebrew Homepage

One-page company site for whitebrew, a small software studio with no released product yet. Served by GitHub Pages from `main` (custom domain in `CNAME`), so every push to `main` goes live.

## Stack
- Plain HTML/CSS/vanilla JS. No build step, no framework.
- `index.html` (markup, KO/EN content), `style.css` (all styles), `main.js` (language toggle), `favicon.svg`.
- Only external dependency: Pretendard via jsDelivr CDN.

## Design
- Source: Claude Design project "화이트브루 회사소개 페이지", file `Whitebrew.dc.html`, direction **1a Manifesto**.
- Big bold Pretendard type, numbered principles (01–03) with an empty 04 row where steam rises ("첫 번째 제품을 빚는 중" / "Something's brewing.").
- One accent color: persimmon `oklch(0.62 0.19 38)` (dark: `oklch(0.74 0.15 48)`). Tokens live on `:root` in `style.css`.
- Light/dark follows `prefers-color-scheme`. Steam animation respects `prefers-reduced-motion`.
- Korean text uses `word-break: keep-all`.

## Language toggle
- Default KO; choice stored in `localStorage` (`wb-lang`) and applied in `<head>` before first paint.
- Every translatable element is a `.stack` holding one `<span lang="ko">` and one `<span lang="en">` in the same grid cell; the inactive one is hidden with `visibility`, so switching never shifts layout. Add new copy the same way.

## Copy notes
- Wordmark is lowercase "whitebrew"; inside English sentences use "Whitebrew".
- English headline: "A studio for small software." ("software" is uncountable, never "softwares").

## Local preview
`python3 -m http.server 8080` → http://localhost:8080 (also configured in `.claude/launch.json`).

## History
- 2026-02-28: Tailwind/daisyUI "future-oriented IT company" redesign (removed).
- 2026-09-30: Full rebuild from Claude Design direction 1a; legacy images and planning docs removed.
