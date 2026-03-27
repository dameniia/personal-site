# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server (Vite HMR)
pnpm build      # Production build
pnpm preview    # Preview production build
pnpm lint       # Run ESLint
```

## Tech Stack

- **React 18.3.1** with functional components and hooks throughout
- **React Router 7.13.1** — client-side routing via `BrowserRouter`
- **Vite 5.4.10** with `@vitejs/plugin-react-swc` (SWC compiler, not Babel)
- **pnpm** — package manager (use `pnpm`, not `npm` or `yarn`)
- **ESLint** flat config (`eslint.config.js`), targeting JS/JSX files
- **prop-types** — runtime type validation on component props

## Architecture

React SPA built with Vite + React Router. All pages are React components — there are no static HTML pages.

**Routing** (`src/App.jsx`): `BrowserRouter` wraps everything. Routes:
- `/` → `Home`
- `/about` → `About`
- `/resume` → `Resume`
- `/projects` → `Projects`
- `/patch-notes` → `PatchNotes`

**Shared layout**: `Nav` and `Footer` live in `src/components/` and are rendered in `App.jsx` around all routes. The required DOM structure is:

```
.overflow_fix
  Nav
  .wrapper
    [page content via <Routes>]
  Footer
```

This structure is required by the CSS sticky footer implementation — do not change it.

**Pages** (`src/pages/`): Each page renders its own `<header className="main-header">` followed by a content section. CSS is global (not scoped modules).

**Components** (`src/components/`):
- `Nav.jsx` — sticky nav bar with mobile hamburger overlay. Manages `isOpen` state, locks body scroll when open, highlights active route via `useLocation`.
- `Footer.jsx` — email + social links (LinkedIn, Facebook).
- `ProjectList.jsx` — receives filtered `projects` array, renders grid of `Project` cards.
- `Project.jsx` — single project card with name, image, tech details, description, and external link.

## Data

**`src/data/projects.json`** — single source of truth for project cards. Each entry has:
- `projectName`, `projectImage` (absolute path `/images/...`), `projectDetails` (tech stack string), `projectDescription`, `link` (URL), `tags` (string array)

**`src/data/db.json`** — patch notes history. The `patch-notes` array has entries with `postId`, `date`, `title`, `body`, and optional `link`.

**`src/data/gallery.json`** — gallery media entries. Each entry has:
- `id` (unique string), `type` (`"photo"` or `"video"`), `src` (full-res Cloudinary URL), `thumbnail` (smaller Cloudinary URL for grid), `title`, `date` (e.g. `"2025-06"`), `tags` (string array)
- Videos also have `poster` (Cloudinary video thumbnail URL)
- Cloudinary thumbnails are generated via URL params: append `w_600/` before the filename in the Cloudinary URL

When adding a new project, add it to `projects.json`. When adding a patch note, add it to `db.json`. When adding gallery media, add it to `gallery.json`.

## CSS

CSS is global in this project — no CSS modules or scoped styles.

| File | Purpose | Imported in |
|------|---------|-------------|
| `src/index.css` | Global styles: variables, reset, layout, header, footer, resume/about styles | `src/main.jsx` |
| `src/css/navigation.css` | Nav bar, hamburger, mobile overlay | `Nav.jsx` |
| `src/css/projects.css` | Project grid and card layout | `Projects.jsx` |
| `src/css/tag-buttons.css` | Filter tag buttons on Projects page | `Projects.jsx` |
| `src/css/patch-notes.css` | Patch note cards | `PatchNotes.jsx` |

**Design tokens** (in `src/index.css`):
- `--base-color`: `rgb(210, 109, 0)` — orange accent used for highlights, active states, borders
- `--text-color`, `--header-bg` — text and header background
- Font: Raleway (loaded via CDN in `index.html`)

**Responsive breakpoints**: 768px (desktop nav vs hamburger), 600px (layout adjustments).

## Static Assets

All images live in `public/images/` and must be referenced with absolute paths: `/images/filename.png`. Do not use relative paths for images.

External dependencies loaded via CDN in `index.html`:
- **normalize.css** — CSS reset
- **Font Awesome 5.13.1** — icons (used for external link icon on project cards)

## Conventions

- **Exports**: Named exports (`export function ComponentName`) — no default exports on components.
- **File naming**: PascalCase for components (`Nav.jsx`), lowercase for CSS files (`navigation.css`), lowercase for data files.
- **PropTypes**: Validate props on all components that receive props.
- **Hooks**: `useLocation` for active route detection in Nav; `useState`/`useEffect` for UI state.
- **No TypeScript** — plain JSX throughout.

## Project Filtering (Projects page)

Filtering is fully implemented. `Projects.jsx` derives unique tags from `projects.json` at render time and displays them in a defined order (`tagOrder` array). Clicking a tag toggles it as the active filter; clicking "All" (or the active tag again) resets to show all projects. `ProjectList` receives the already-filtered array. To add a new filter tag, add it to the `tags` array in `projects.json` entries and, if desired, add it to the `tagOrder` array in `Projects.jsx` for consistent display ordering.

## Deployment

GitHub Actions workflow (`.github/workflows/deploy.yml`) deploys to Hostinger via FTP on push to `main`. The `public/.htaccess` contains Apache rewrite rules: requests to non-existent files and non-existent directories are rewritten to `index.html` for client-side routing. Existing directories (e.g. legacy static project pages under `public_html/projects/`) are intentionally excluded from the rewrite so they continue to be served as-is.
