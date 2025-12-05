# Hero Platform - Piral Micro Frontend Architecture

A micro frontend platform built with [Piral](https://piral.io/), implementing the Hero Platform design system. This project demonstrates how to structure a scalable micro frontend application using Piral's shell + pilet architecture.

## Architecture Overview

```
hero-platform-piral/
├── hero-piral/          # Piral Shell (Main Application)
├── pilet-alpha/         # Dashboard Module
├── pilet-beta/          # CV Parser Module
└── pilet-gamma/         # Hero Scraping Module
```

### Components

| Component | Description | Port |
|-----------|-------------|------|
| **hero-piral** | Main shell application with layout, navigation, and routing | 1234 |
| **pilet-alpha** | Dashboard with metrics, analytics, and reports | - |
| **pilet-beta** | CV upload, parsing results, and statistics | - |
| **pilet-gamma** | Job scraping, matching, and settings | - |

## Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 9

### Installation

```bash
# Install all dependencies
npm run install:all

# Or install individually
cd hero-piral && npm install
cd ../pilet-alpha && npm install
cd ../pilet-beta && npm install
cd ../pilet-gamma && npm install
```

### Development

```bash
# Start the shell (in one terminal)
npm run start:shell

# In separate terminals, start each pilet for hot-reload development
npm run start:alpha
npm run start:beta
npm run start:gamma
```

### Building

```bash
# Build everything
npm run build:all

# Or build individually
npm run build:shell
npm run build:alpha
npm run build:beta
npm run build:gamma
```

## Project Structure

### Shell (hero-piral)

The shell provides:
- **Layout**: Header with navigation, collapsible sidebar, main content area
- **Design System**: Hero Platform brand colors and components
- **Routing**: React Router integration
- **Pilet Loading**: Loads pilets from feed or local development

### Pilets

Each pilet:
- Registers pages via `api.registerPage()`
- Registers menu items via `api.registerMenu()`
- Registers dashboard tiles via `api.registerTile()`
- Uses shared styles from the shell

## Design System

### Colors

| Variable | Value | Usage |
|----------|-------|-------|
| `--hero-blue` | #073889 | Primary brand color |
| `--hero-orange` | #f46015 | Accent, CTAs |
| `--hero-yellow` | #ffbd0d | Highlights |
| `--hero-green` | #22c55e | Success states |

### Typography

- Font: Inter
- Sizes: text-xs (0.75rem) to text-3xl (1.875rem)

## Migration from Module Federation

This project is a Piral-based implementation of the original Module Federation setup:

| Module Federation | Piral Equivalent |
|-------------------|------------------|
| `mf-master` | `hero-piral` (shell) |
| `mf-app-alpha` | `pilet-alpha` |
| `mf-app-beta` | `pilet-beta` |
| `mf-app-gamma` | `pilet-gamma` |
| `vite-plugin-federation` | Piral CLI + feed |
| `remoteEntry.js` | Pilet bundles |

## License

MIT
