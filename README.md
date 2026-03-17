# Andrei Dameniia — Personal Site

Portfolio site built with React + Vite. Live at [adameniia.com](https://adameniia.com).

## Stack

- **React 18** + **React Router 7** — SPA with client-side routing
- **Vite** + **SWC** — fast builds and HMR
- **pnpm** — package manager

## Development

```bash
pnpm install    # Install dependencies
pnpm dev        # Start dev server with HMR
pnpm build      # Production build → dist/
pnpm preview    # Preview production build locally
pnpm lint       # Run ESLint
```

## Project Structure

```
src/
├── App.jsx              # Root router (BrowserRouter + all routes)
├── main.jsx             # React entry point
├── index.css            # Global styles and design tokens
├── pages/               # One component per route
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Resume.jsx
│   ├── Projects.jsx
│   └── PatchNotes.jsx
├── components/          # Shared UI components
│   ├── Nav.jsx
│   ├── Footer.jsx
│   ├── ProjectList.jsx
│   └── Project.jsx
├── css/                 # Per-feature stylesheets (global, not scoped)
│   ├── navigation.css
│   ├── projects.css
│   ├── tag-buttons.css
│   └── patch-notes.css
└── data/
    ├── projects.json    # Project card content and filter tags
    └── db.json          # Patch notes history
public/
└── images/              # Static image assets (absolute paths: /images/*)
```

## Deployment

Deployed to Hostinger via FTP using GitHub Actions (`.github/workflows/deploy.yml`) on every push to `main`. The `public/.htaccess` handles SPA routing on the Apache server.
