# Counsel — suite site

A small static site for the **Counsel** family, set in the shared gazette system
(Spectral + IBM Plex Mono, warm paper, gold accent).

## Pages

| File | Department | Notes |
|------|-----------|-------|
| `index.html` | The Suite (No. 00) | Front page — manifesto + table of contents, Personal / Corporate tiers |
| `docket.html` | Docket (No. 02) | The capture lane that feeds Inner Counsel (Personal · Free) |
| `corporate-counsel.html` | Corporate Counsel (No. 03) | The paid corporate tier (team → organisation) |

**Inner Counsel (No. 01)** lives in its own repo and is linked out to
`https://soccershoe.github.io/counsel-about/`.

## Shared assets

- `counsel.css` — the whole design system + per-page layouts.
- `tweaks-panel.jsx`, `tweaks-app.jsx` — the in-page Tweaks panel (theme / accent / headline font),
  driven over CSS variables. Loaded via React + Babel from a CDN.

## Deploy

Pure static — drop the folder on any static host (GitHub Pages, Netlify, etc.).
`index.html` is the entry point. The Tweaks panel needs network access to the React/Babel
CDN; remove those `<script>` tags (and `#tweaks-root`) if you want a fully offline build.

## Archive

`archive/docket-v1-dark.html` — the original dark-mode Docket landing, kept for reference.
