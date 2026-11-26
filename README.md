# Thanujan — Personal Portfolio (React)

Vite + React version of Sooriyapalan Thanujan's personal portfolio.
Same design, sections and real details as the standalone HTML page —
no link to the old portfolio site anywhere.

## Sections (in order)

Navigation → Hero → About → Skills → Projects → Work Experience (+ Education) → Contact

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for hosting

```bash
npm run build
npm run preview   # optional: preview the production build
```

Upload the `dist/` folder to Netlify, Vercel or GitHub Pages.

## Project structure

```
index.html                  Page shell, title, Google Fonts
public/assets/              Photos (profile, about, 6 project images)
src/
  main.jsx                  React entry point
  App.jsx                   Page assembly
  index.css                 All styles (dark purple theme)
  data/portfolio.js         ALL text content — edit this one file to change wording
  components/
    Navbar.jsx              Sticky nav, active-link highlight, mobile menu
    Hero.jsx                Name, role, stats, portrait in purple blob
    About.jsx               Photo, bio, highlights list
    Skills.jsx              Tech tiles (HTML5…Git) + 6 expertise cards
    Projects.jsx            6 project cards with real photos (incl. Trending Dart)
    Experience.jsx          Work timeline + education cards
    Contact.jsx             Contact details, social buttons, fixed send form
    Footer.jsx
```

## Notes

- The contact form has no server: pressing Send Message opens the
  visitor's email app with the message addressed to
  Sooriyapalanthanujan1@gmail.com, then shows a confirmation panel with
  "Open Email App" and "Send via WhatsApp" (to +94 76 269 5281) fallback
  buttons, so the message is never silently lost.
- Project cards have no Live Demo / Source Code links because no real
  URLs exist for these projects — none were invented.
