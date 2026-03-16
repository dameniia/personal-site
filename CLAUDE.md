# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server (Vite HMR)
pnpm build      # Production build
pnpm preview    # Preview production build
pnpm lint       # Run ESLint
```

## Architecture

React SPA built with Vite + React Router. All pages are React components — there are no static HTML pages.

**Routing** (`src/App.jsx`): `BrowserRouter` wraps everything. Routes: `/` Home, `/about` About, `/resume` Resume, `/projects` Projects, `/patch-notes` PatchNotes.

**Shared layout**: `Nav` and `Footer` live in `src/components/` and are rendered in `App.jsx` around all routes. Nav manages the mobile hamburger state in React (replacing the old `scripts/app.js` vanilla JS). The `.overflow_fix > Nav + .wrapper > [page content] + Footer` DOM structure is required by the CSS sticky footer implementation.

**Pages** (`src/pages/`): Each page component renders its own `<header className="main-header">` and a content section. The `Projects` page imports `src/css/projects.css` and `src/css/tag-buttons.css` directly (CSS is global in this project, not scoped).

**Project data** (`src/data/projects.json`): Single source of truth for project cards. Image paths are absolute (`/images/...`) served from `public/images/`.

**CSS**:
- `src/index.css` — global styles (variables, reset, layout, header, footer, resume/about page styles); imported once in `main.jsx`
- `src/css/navigation.css` — nav and hamburger; imported in `Nav.jsx`
- `src/css/projects.css` — project grid cards; imported in `Projects.jsx`
- `src/css/tag-buttons.css` — filter buttons on Projects page; imported in `Projects.jsx`

**Static assets**: All images live in `public/images/` and are referenced with absolute paths (`/images/foo.png`).

**Unimplemented**: The filter tag buttons on the Projects page (`#JavaScript`, `#Java`, etc.) are UI-only — filtering logic is not yet built.
