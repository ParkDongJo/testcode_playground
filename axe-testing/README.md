# axe-testing

A React + TypeScript + Vite project with comprehensive testing setup using Vitest, Testing Library, and accessibility testing with axe-core.

## Features

- ⚛️ React 19 with TypeScript
- ⚡ Vite for fast development and building
- 🧪 Vitest for unit testing
- 🎯 Testing Library for component testing
- ♿ Accessibility testing with axe-core
- 🎨 Modern CSS with dark/light mode support

## Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Testing

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test

# Run tests once
npm run test:run

# Run tests with UI
npm run test:ui

# Run tests with coverage (requires @vitest/coverage-v8)
npm run test:coverage
```

## Test Structure

- **Unit Tests**: `*.test.tsx` - Component functionality and behavior
- **Accessibility Tests**: `*.a11y.test.tsx` - WCAG compliance using axe-core
- **Test Utils**: `src/test/` - Shared testing utilities and setup

## Available Scripts

- `dev` - Start development server
- `build` - Build for production
- `preview` - Preview production build
- `test` - Run tests in watch mode
- `test:run` - Run tests once
- `test:ui` - Run tests with UI
- `test:coverage` - Run tests with coverage report
- `lint` - Run ESLint

## Project Structure

```
src/
├── components/          # React components
│   ├── Button.tsx
│   ├── Button.test.tsx
│   └── Button.a11y.test.tsx
├── test/               # Test utilities and setup
│   ├── setup.ts
│   └── utils.tsx
├── types/              # TypeScript type definitions
│   └── index.ts
├── App.tsx
├── App.test.tsx
├── App.a11y.test.tsx
└── main.tsx
```
