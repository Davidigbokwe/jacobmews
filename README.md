# Jacob Mews Estate

A React + TypeScript website built with Vite and React Router. The existing estate design is retained across Home, Gallery, Apartments, Services and Contact.

## Run locally

```sh
npm install
npm run dev
```

## Verify and build

```sh
npm run typecheck
npm test
npm run lint
npm run build
npm run preview
```

## Structure

- `src/pages`: public page components
- `src/components`: shared navigation, content sections and UI
- `src/lib/estate.ts`: shared apartment facts, all twelve services and image paths
- `src/styles.css`: visual system and responsive layouts
- `public/images`: original estate photos, served locally without a platform asset service

Content and images were checked against https://jacobmewsestate.com on 15 October 2026. The original content is represented across the five pages, including apartment specifications, facilities and all enquiry fields.

The enquiry form is presentation-only. It validates fields and previews an enquiry without transmitting or storing visitor data.

Original bookmarks (`/#gallery`, `/#apartments`, `/#services`, and `/#js-form`) open the corresponding React pages. Mobile navigation, stacked forms and apartment cards, and touch-sized gallery controls support small screens.

The project runs independently with React, Vite and React Router; no TanStack or Lovable runtime or build integration is used. Node.js 22.18+ or 24+ is required for the native TypeScript configuration loader.

## Hosting

Upload `dist/` after `npm run build`. Configure the host to serve `index.html` for frontend routes such as `/apartments` and `/contact`. A `public/_redirects` fallback is included for hosts supporting that format. No backend or environment variables are required.
