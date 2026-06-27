# PAN LAN — DIGITAL ARCHIVE

A long-term, continuously updated personal research archive built with SvelteKit.

See [PROJECT_SPEC.md](./PROJECT_SPEC.md) for design and development guidelines.

## Setup

```sh
npm install
npm run dev
```

## Scripts

| Command           | Description                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Start development server          |
| `npm run build`   | Production build                  |
| `npm run preview` | Preview production build          |
| `npm run check`   | TypeScript / Svelte type checking |
| `npm run lint`    | ESLint + Prettier check           |
| `npm run format`  | Auto-format with Prettier         |

## Project Structure

```
PROJECT_SPEC.md          # Single source of truth for design & development
docs/                    # Design documentation
src/
├── lib/
│   ├── components/      # Reusable UI and layout components
│   ├── styles/          # Design token system (CSS Variables)
│   ├── utils/           # Shared utility functions
│   └── types/           # Shared TypeScript types
└── routes/              # SvelteKit file-based routing
```

## Recreate This Project

```sh
npx sv@0.16.1 create --template minimal --types ts --add prettier eslint --no-download-check --install npm .
```
