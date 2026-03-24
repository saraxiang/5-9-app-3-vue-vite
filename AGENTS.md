# AGENTS.md

## Cursor Cloud specific instructions

This is a Vue 3 + Vite + Tailwind CSS frontend-only project (a kids' trivia game about countries). There is no backend, database, or Docker configuration.

### Services

| Service | Command | Port |
|---|---|---|
| Vite dev server | `npm run dev` | 5173 |

### Key commands

See `package.json` scripts: `dev`, `build`, `preview`. No lint or test scripts are configured in the repository.

### Notes

- The `tailwind.config.js` has an empty `content` array. Tailwind utility classes will not be generated until content paths are configured (e.g., `["./index.html", "./src/**/*.{vue,js,ts}"]`).
- The build produces a warning about the empty Tailwind content config — this is expected given the current state of the repo.
- Run the dev server with `--host 0.0.0.0` to make it accessible from outside the container: `npm run dev -- --host 0.0.0.0`.
