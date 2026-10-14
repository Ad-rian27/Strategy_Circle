# Strategy Circle

A responsive, frontend-only React site built with Vite.

## Run locally

1. Install Node.js (18 or newer).
2. Run `npm install` in this folder.
3. Run `npm run dev` and open the local URL printed by Vite.
4. Run `npm run build` to create a production build in `dist/`.

## Personalise the team

Edit the `team` array in `src/data/team.js`. Each entry has `name`, `role`, `focus`, `bio`, and `image` fields. Replace the placeholder content with approved member details, and put their photographs in `public/images/` (for example, set `image` to `/images/member-one.jpg`). The shared SVG in `public/images/member-placeholder.svg` is the fallback portrait.

The theme toggle stores its choice in local storage. Navigation, mobile menu, reduced-motion support, and page sections are implemented in `src/App.jsx` and `src/styles.css`.
