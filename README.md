# Monorepo - React Components Package

This monorepo contains reusable React components and core utilities.

## Packages

- **`core`** - Core utilities and functions
- **`@monorepo/react`** - React components (includes `core` as dependency)

## Building

Build all packages:
```bash
npm run build
```

Build individual packages:
```bash
npm run build:core
npm run build:react
```

## Publishing/Using in Vite React App

### Option 1: Using Git Link (Recommended for Vite React App)

1. **In the monorepo, build the packages first:**
   ```bash
   npm install
   npm run build
   ```

2. **Commit and push the `dist` folders to your git repository:**
   ```bash
   git add packages/*/dist
   git commit -m "Build packages"
   git push
   ```

3. **In your Vite React app, install via git:**
   ```bash
   npm install git+https://github.com/gokulraj-iaaxin/monorepo.git#packages/react
   ```

   **Important:** The `core` package will be **automatically installed** as a dependency when you install `@monorepo/react`!

4. **That's it!** You can now import and use the components.

### Option 2: Using npm link (Local Development)

1. **In the monorepo root, build and link:**
```bash
npm run build
cd packages/react
npm link
```

2. **Link core package:**
```bash
cd ../core
npm link
```

3. **In your Vite React app:**
```bash
npm link @monorepo/react
npm link @monorepo/core
```

### Option 3: Publishing to npm

1. **Build packages:**
```bash
npm run build
```

2. **Publish core first:**
```bash
cd packages/core
npm publish
```

3. **Publish react package:**
```bash
cd ../react
npm publish
```

4. **In your Vite React app:**
```bash
npm install @monorepo/react
```

## Usage in Vite React App

After installing `@monorepo/react`, the `core` package will be automatically installed as a dependency.

### Import and Use the Button Component

```tsx
import { MyButton } from '@monorepo/react';

function App() {
  return (
    <div>
      <h1>My App</h1>
      <MyButton />
    </div>
  );
}

export default App;
```

### Import Core Functions

```tsx
import call from 'core';

function App() {
  const handleClick = () => {
    call("Hello from Vite app!");
  };

  return <button onClick={handleClick}>Click me</button>;
}
```

## Development

### Project Structure
```
monorepo/
├── packages/
│   ├── core/
│   │   ├── src/
│   │   │   └── index.ts
│   │   ├── dist/          # Built files
│   │   └── package.json
│   └── react/
│       ├── src/
│       │   ├── index.ts
│       │   └── UI/
│       │       └── button.tsx
│       ├── dist/          # Built files
│       └── package.json
├── package.json
└── tsconfig.json
```

### Requirements

- Node.js 18+
- npm 9+ (for workspaces)

## Notes

- The `core` package is automatically installed when you install `@monorepo/react`
- All packages are built to `dist/` folders
- TypeScript declarations (`.d.ts`) are included in the build
- The packages use ES modules (`"type": "module"`)

