# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a fullstack React + TypeScript application deployed on Cloudflare Workers. The frontend is built with Vite and uses Tailwind CSS v4 with shadcn/ui components. The backend is a Cloudflare Worker that serves both the API and static assets.

## Architecture

### Frontend (`/src`)
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS v4 with shadcn/ui components
- **Structure**: 
  - `src/components/` - Reusable UI components
  - `src/lib/utils.ts` - Utility functions (includes `cn()` for class merging)
  - `src/App.tsx` - Main application component
  - `src/main.tsx` - Application entry point

### Backend (`/worker`)
- **Runtime**: Cloudflare Workers
- **Entry Point**: `worker/index.ts`
- **API**: Simple fetch handler that responds to `/api/*` routes
- **Assets**: Serves static files with SPA fallback

### Configuration
- **TypeScript**: Multi-project setup with separate configs for app, node, and worker
- **Tailwind**: v4 configuration using `@import "tailwindcss"` syntax
- **shadcn/ui**: Configured with components in `src/components/` and utils in `src/lib/`
- **Biome**: Replaces ESLint, configured for React with accessibility rules
- **Wrangler**: Cloudflare Workers deployment configuration

## Development Commands

### Core Development
```bash
# Start development server (frontend + worker)
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview

# Deploy to Cloudflare Workers
pnpm run deploy
```

### Code Quality
```bash
# Run linting and formatting checks
pnpm run lint

# Auto-fix linting issues
pnpm run lint:fix

# Format code
pnpm run format
```

### Cloudflare Workers
```bash
# Generate TypeScript types for Workers
pnpm run cf-typegen

# Deploy to Cloudflare Workers
pnpm run deploy
```

## Key Technologies

### Tooling Stack
- **Package Manager**: pnpm 10.11.0
- **Linter/Formatter**: Biome 2.0.6 (replaces ESLint)
- **Build Tool**: Vite 7 with React plugin
- **TypeScript**: 5.8.3 with strict configuration

### UI Stack
- **Tailwind CSS**: v4 with simplified configuration
- **shadcn/ui**: Component library with `class-variance-authority` and `tailwind-merge`
- **Icons**: Lucide React
- **Styling Philosophy**: Utility-first with component composition

### Deployment
- **Platform**: Cloudflare Workers
- **Configuration**: `wrangler.jsonc` with SPA asset handling
- **Observability**: Enabled in production

## Development Workflow

1. **Frontend Development**: Edit files in `/src`, hot reload via Vite
2. **API Development**: Edit `worker/index.ts`, handled by Vite's Cloudflare plugin
3. **Styling**: Use Tailwind classes, add shadcn/ui components as needed
4. **Components**: Add to `src/components/` following shadcn/ui patterns
5. **Utilities**: Add to `src/lib/utils.ts` or create new files in `src/lib/`

## Adding shadcn/ui Components

```bash
# Add a new component (e.g., button)
pnpx shadcn@latest add button
```

Components are automatically configured to use `src/components/` and `src/lib/utils.ts`.

## Type Safety

- Worker types are generated via `pnpm run cf-typegen`
- Frontend and worker have separate TypeScript configurations
- Strict TypeScript settings enabled across all projects

## Biome Configuration

The project uses Biome for linting and formatting with React-specific rules:
- Tab indentation, 100 character line width
- Double quotes, semicolons, ES5 trailing commas
- Accessibility rules enabled for React components
- Automatic import organization