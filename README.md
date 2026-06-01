# Counsel — suite site

The public marketing / about site for the **Counsel** family
(Inner Counsel + Docket + Corporate Counsel). Hand-rolled HTML + CSS, served
on GitHub Pages. Set in the shared "gazette" system — Spectral + IBM Plex Mono,
warm paper, gold accent.

No build step, no framework, **no third-party requests**: fonts are self-hosted,
and there is no analytics, no CDN, and no tracking. The only JavaScript is a few
lines of inline `IntersectionObserver` for reveal-on-scroll.

## Pages

| File | Section | Notes |
|------|---------|-------|
| `index.html` | The Suite — No. 00 | Front page: manifesto, the eight principles, the personal suite, the seam |
| `docket.html` | Docket — No. 02 | The capture lane that feeds Inner Counsel (Personal · Free) |
| `corporate-counsel.html` | Corporate Counsel — No. 03 | The paid corporate tier (team → organisation) |
| `philosophy.html` | Reading | The eight principles, in full |
| `counsel.html` | Reading | "Your Counsel" — the ten Counselors |
| `how.html` | Reading | How a deliberation runs |
| `privacy.html` | Reading | The privacy boundary |

**Inner Counsel (No. 01)** lives in its own repo; the site links out to it.

## Assets

- `counsel.css` — the shared gazette design system (tokens, masthead, dateline,
  hero, feature, principles, footer). The reading pages add a small page-local
  `<style>` block for their bespoke layouts, re-based on the same tokens.
- `fonts.css` + `fonts/` — self-hosted **Spectral** and **IBM Plex Mono**
  (both OFL-licensed, free to redistribute). Replaces the former Google Fonts
  links so the site makes zero third-party requests.

## Deploy

Pure static — GitHub Pages serves `main` directly; edits to `.html` / `.css`
deploy on push. Preview locally with `python3 -m http.server` from the repo root.
