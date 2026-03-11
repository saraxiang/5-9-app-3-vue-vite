# AGENTS.md

## Cursor Cloud specific instructions

This is a Vue 3 + Vite + Tailwind CSS frontend-only SPA. No backend, database, or Docker required.

**Service:** Vite dev server on port 5173.

**Commands** (see `package.json` scripts and `README.md`):
- Dev server: `npm run dev` (add `-- --host 0.0.0.0` for network access)
- Build: `npm run build`
- Preview production build: `npm run preview`

**Notes:**
- No linter or test framework is configured in this project. There are no `lint` or `test` npm scripts.
- The `tailwind.config.js` has an empty `content: []` array, so Tailwind utility classes won't be generated for any files. This is the project's current state and should not be treated as a bug to fix unless explicitly asked.
- The Tailwind CSS warning during build (`content option is missing or empty`) is expected given the above.
