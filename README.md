# Bhavya — Personal Portfolio

A frontend-only editorial portfolio built with React, TypeScript and Vite.

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## Edit the content
Most text, projects, recognition entries and links live in `src/data/portfolio.ts`.

## Replace the portrait
Add Bhavya's photograph as `public/images/bhavya-portrait.jpg`. The homepage will use that path. Until then, it displays a designed placeholder.

## Deploy to Vercel
Import this repository into Vercel. Use:
- Framework: Vite
- Root Directory: `./`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

The project root contains `package.json`. Keep the `src` folder intact when uploading to GitHub.

## Notes
Content marked as editable sample copy should be reviewed and replaced. Do not publish unverified achievements or project roles.
