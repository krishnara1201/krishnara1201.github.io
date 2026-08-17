# krishnara1201.github.io

Personal portfolio site for Krish Lakshmi Narayanan — live at [krishnara1201.github.io](https://krishnara1201.github.io).

## Stack

Plain HTML/CSS/JS, no build step or framework. Fonts via Google Fonts (Space Grotesk, Inter, JetBrains Mono), icons via Font Awesome, contact form via [Formspree](https://formspree.io).

- `index.html` — page content and structure
- `styles.css` — theme, layout, responsive breakpoints
- `script.js` — nav/scroll interactions, custom cursor, contact form submission

## Running locally

Static site, no dependencies to install:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

Pushes to `main` deploy automatically via GitHub Pages.
