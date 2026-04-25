# Game Hub - AI Agent Guidelines

## Architecture Overview

- **Framework**: React 18 with TypeScript, built with Vite
- **UI Library**: Chakra UI v2 for components and responsive design
- **Animations**: Framer Motion for motion effects
- **Entry Point**: `src/main.tsx` wraps `App` in `ChakraProvider` for theming
- **Layout**: Responsive grid layout in `src/App.tsx` using Chakra's `Grid` and `Show` components

## Key Files

- `package.json`: Scripts - `npm run dev` (Vite dev server), `npm run build` (TypeScript compile + Vite build),
  `npm run preview` (preview built app)
- `vite.config.ts`: Standard Vite config with React plugin
- `tsconfig.json`: Strict TypeScript config targeting ESNext, JSX as react-jsx
- `src/App.tsx`: Main app component with responsive grid areas: nav, aside (lg+), main

## Development Workflow

- Start dev server: `npm run dev` (hot reload enabled)
- Build for production: `npm run build` (runs TypeScript check first)
- Preview build: `npm run preview`

## Patterns & Conventions

- **Responsive Design**: Use Chakra's `Show` component for breakpoint-based visibility (e.g., aside hidden on <lg in
  App.tsx)
- **Grid Layout**: Define template areas in `Grid` props, reference with `area` prop on `GridItem`
- **Styling**: Prefer Chakra UI components over custom CSS; global styles in `src/App.css` (currently minimal)
- **Imports**: Absolute imports from src (e.g., `import App from './App'`)

## Dependencies

- Core: React, React DOM
- UI: @chakra-ui/react, @emotion/react, @emotion/styled
- Motion: framer-motion
- Build: Vite, TypeScript, @vitejs/plugin-react

## Notes

- Project is in early stages; App.tsx contains placeholder layout
- No tests or additional components yet
- Follow Chakra UI docs for component usage and theming

# Senior AI Architect Guidelines: Game Hub

## 1. Architectural Strategy: Feature-Based Modularity

- **Constraint**: Group by Feature, not by File Type.
- **Structure**: Every feature in `src/features/[feature-name]` must contain its own components, hooks, and types.
- **Encapsulation**: Use a public API (`index.ts`) for each feature. Only export what is necessary.
- **Shared Layer**: Global UI goes in `src/components`, global logic in `src/hooks`.

## 2. Component Standards (React 18 & Chakra UI)

- **Pattern**: Prefer Functional Components with explicit TypeScript interfaces.
- **Logic Isolation**: Keep components "thin." Move complex logic/state into custom hooks within the feature folder.
- **Styling**: Use Chakra UI's style props. Avoid external CSS unless it's for global theme resets.
- **Performance**: Use `React.memo` for expensive leaf components; utilize React 18's `useTransition` for non-urgent UI
  updates (e.g., search filtering).

## 3. Strict TypeScript & Code Quality

- **Principles**: DRY (Don't Repeat Yourself), KISS (Keep It Simple), and YAGNI (You Ain't Gonna Need It).
- **Naming**: Use PascalCase for components/types, camelCase for functions/variables.
- **Strictness**: No `any`. Use `unknown` or Discriminated Unions for complex states.
- **Immutability**: Treat state as immutable; prefer `map/filter/reduce` over imperative loops.
