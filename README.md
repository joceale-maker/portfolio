# Cel Julieza — Portfolio Website

A clean, responsive portfolio website built with HTML, CSS, and vanilla JS.
Mauve and blush palette. No frameworks, no dependencies — just edit and deploy.

---

## How to edit

All editable sections are marked with `<!-- EDIT: ... -->` comments in `index.html`.

### Quick edits:
- **Your name / title** → top of `index.html` (page title) and nav logo
- **Hero tagline and description** → Hero section
- **Stats (years of experience etc.)** → Hero card
- **Tools list** → Hero card tools section
- **Services** → Services section (copy/paste a `.service-card` to add more)
- **Case studies** → Work section (copy/paste a `.case-card` to add more)
- **About bio** → About section
- **Certifications** → About section `.certs` block
- **Contact email** → Contact section `href="mailto:..."` and the text
- **Colours** → Edit CSS variables at the top of `style.css`

### To add your photo:
1. Put your photo in an `assets/` folder e.g. `assets/photo.jpg`
2. In `index.html`, replace the `<div class="photo-placeholder">CJ</div>` with:
   ```html
   <img src="assets/photo.jpg" alt="Cel Julieza" class="about-img" />
   ```
3. In `style.css`, uncomment the `.about-photo img` block

---

## How to deploy to GitHub Pages

1. Create a new repository on GitHub (e.g. `cel-portfolio`)
2. Upload all three files: `index.html`, `style.css`, `script.js`
3. Go to **Settings → Pages**
4. Under **Source**, select `main` branch and `/ (root)` folder
5. Click **Save**
6. Your site will be live at: `https://yourusername.github.io/cel-portfolio`

---

## File structure

```
cel-portfolio/
├── index.html    ← main page (edit content here)
├── style.css     ← all styles (edit colours and layout here)
├── script.js     ← animations and mobile nav
├── README.md     ← this file
└── assets/       ← create this folder for your photo
    └── photo.jpg
```

---

## Colour scheme

Edit these CSS variables in `style.css` to change the palette:

```css
:root {
  --dark: #2a2420;        /* dark headers and nav card */
  --mauve: #9c7b8b;       /* accent colour */
  --mauve-light: #c4a0b3; /* lighter accent */
  --blush: #f5eeeb;       /* soft background tint */
  --cream: #faf8f4;       /* page background */
  --warm: #8a8278;        /* body text */
  --text: #3d3835;        /* dark body text */
  --border: #e8ddd9;      /* borders */
}
```
