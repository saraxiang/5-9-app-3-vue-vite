# AGENTS.md

## Cursor Cloud specific instructions

This is a **Vue 3 + Vite + Tailwind CSS** single-page application (trivia game for kids). There is no backend, database, or external services.

### Services

| Service | Command | Port |
|---|---|---|
| Vite dev server | `npm run dev` | 5173 |

### Key commands

- **Install deps:** `npm install`
- **Dev server:** `npm run dev` (add `-- --host 0.0.0.0` to expose on all interfaces)
- **Build:** `npm run build` (outputs to `dist/`)
- **Preview prod build:** `npm run preview`

### Notes

- No linter or test framework is configured in this project. There are no `lint` or `test` npm scripts.
- The `tailwind.config.js` has an empty `content: []` array. Tailwind utility classes won't be generated until content paths are configured (e.g., `content: ["./index.html", "./src/**/*.{vue,js,ts}"]`).
- Node.js v22+ and npm v10+ work fine with this project.
