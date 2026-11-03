## Project Overview

This is fun web app that I personally thought, it's a spin the wheel concept but for a group of people that cannot decide what to eat. Primary users are non-technical so they will have clarity, guidance and not complexity.

The purpose of the app is to make breakfast, lunch and dinner fun without having to take time and guess where the gang will eat.

Avoid over-engineer. Prefer readability over cleverness. When in doubt make it simpler

## Commands

- `npm run dev` — dev server at http://localhost:3000
- `npm run build` — production build (also the type check; there is no separate `tsc` script)
- `npm run lint` — ESLint (flat config, `eslint-config-next` core-web-vitals + typescript, Prettier rules disabled via `eslint-config-prettier`)
- `npm run format` / `npm run format:check` — Prettier with `prettier-plugin-tailwindcss` (sorts Tailwind classes)

No test framework is set up.

## Tech Stack

- Next.js 16 with App Router (not Pages Router)
- TypeScript
- AntDesign for ui component library
- Tailwind CSS for styling
- Supabase for database (Not installed / configured in the project yet) // Don't make any Supbase changes for now
- npm as the package manager

Do NOT introduce:

- Any global state library
- Styled-components, Emotion or CSS Modules
- Bad TypeScript practices, avoid any and type assertions (as)

## Architecture

```text
app/
components/
  layout/
  ui/
features/
  meal-picker/
    components/
    hooks/
    lib/
    types.ts
lib/
public/
  icons/
  images/
```

- Keep `app/page.tsx` thin. It should compose feature components.
- Keep feature-specific code inside `features/meal-picker/`.
- Move code into `components/` or `lib/` only when multiple features use it.
- Keep interactive state local to the meal-picker client component.
- Add directories only when their first real file is needed. Do not add placeholders.

## Coding Convention

TypeScript:

- Use interface for objects, type aliases for unions and primitives and component prop types
- use type only for ENUM

Components:

- Functional components only
- Keep components files short
- Filename Use PascalCase naming convention
- Add a index.tsx when referencing to the directory of the component
- Component props use camelCase or use PascalCase if the prop value is a React component

Patterns:

- Extract repeated logic into hooks
- Loading, empty and error states are required for any data-fetching component
