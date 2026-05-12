# AGENTS.md

## Project Overview

- Vite + React 19 frontend for a Q&A-style app.
- Styling mixes global CSS variables with React Bootstrap components and `react-icons`.
- This is starter code: some pages, components, and tests are intentionally incomplete and marked with `TODO` or placeholder content.

## Common Commands

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run test`

## Structure That Matters

- `src/main.jsx` boots the app and imports Bootstrap CSS globally.
- `src/App.jsx` is the current composition root. It manages dark mode in `localStorage`, wraps content with `BaseLayout` and `SideBarLayout`, and swaps pages manually. `react-router-dom` is installed, but routing is not wired into the current app shell.
- `src/layouts/` contains shared page chrome.
- `src/components/` is organized by feature area, with CSS files colocated beside each component.
- `src/pages/` contains top-level screens.
- `data/questions.js` is the current mock data source for question and answer content.
- `tests/unit/` mirrors component/page behavior with Vitest and Testing Library.

## Editing Guidance

- Match the existing import style: local component imports usually include the `.jsx` extension.
- Prefer existing UI primitives before introducing new patterns: React Bootstrap for layout/cards/buttons and colocated CSS for custom styling.
- Keep changes narrow. Do not replace the current manual page composition with routing unless the task explicitly asks for it.
- When implementing placeholders, check for nearby `TODO` comments first. Several files are intentionally stubs for graded work.
- Use `data/questions.js` for local page/component behavior unless the task explicitly adds API or Redux wiring.

## Testing Guidance

- Test runner config lives in `vite.config.js` and uses `jsdom` with `tests/setup.js`.
- Prefer focused Vitest + Testing Library tests under `tests/unit/` for any implemented component or page behavior.
- Some existing tests are placeholders; if you implement a stubbed component/page, update or add the nearest focused test rather than broad end-to-end coverage.