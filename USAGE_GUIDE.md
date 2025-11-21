# Complete Usage Guide - Using @monorepo/react in Vite React App

## Quick Start

### Step 1: Install & Build the Monorepo Packages

In your monorepo directory:
```bash
npm install
npm run build
```

This will:
- Build `core` package to `packages/core/dist/`
- Build `@monorepo/react` package to `packages/react/dist/`
- Generate TypeScript declarations (`.d.ts` files)

### Step 2: Commit the Built Files

Make sure the `dist` folders are committed to your git repository:
```bash
git add packages/*/dist
git commit -m "Build packages for distribution"
git push
```

### Step 3: Install in Your Vite React App

In your Vite React app directory:
```bash
npm install git+https://github.com/gokulraj-iaaxin/monorepo.git#packages/react
```

**✅ The `core` package will be automatically installed** because it's listed as a dependency in `@monorepo/react/package.json`.

### Step 4: Use the Components

In your Vite React app, import and use the button component:

```tsx
// App.tsx or any component file
import { MyButton } from '@monorepo/react';

function App() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <MyButton />
    </div>
  );
}

export default App;
```

### Step 5: Use Core Functions (Optional)

You can also import and use functions from the `core` package:

```tsx
import call from 'core';

function MyComponent() {
  const handleClick = () => {
    const message = call("Hello from Vite!");
    console.log(message);
  };

  return <button onClick={handleClick}>Call Core Function</button>;
}
```

## How It Works

1. **Dependency Chain:**
   - `@monorepo/react` depends on `core`
   - When you install `@monorepo/react`, your package manager automatically installs `core` as well

2. **Package Structure:**
   ```
   packages/
   ├── core/
   │   ├── dist/           # Built JavaScript files
   │   │   ├── index.js
   │   │   └── index.d.ts
   │   └── package.json    # Points to dist/index.js
   └── react/
       ├── dist/           # Built JavaScript files
       │   ├── index.js
       │   ├── index.d.ts
       │   └── UI/
       │       └── button.js
       └── package.json    # Points to dist/index.js, depends on "core"
   ```

3. **Package.json Configuration:**
   - `main`: Points to `./dist/index.js` (the built file)
   - `types`: Points to `./dist/index.d.ts` (TypeScript declarations)
   - `files`: Only includes `dist` folder when publishing
   - `dependencies`: `core` is listed, so it installs automatically

## Troubleshooting

### Issue: "Cannot find module '@monorepo/react'"

**Solution:** Make sure you've built the packages and the `dist` folders exist:
```bash
cd monorepo
npm run build
```

### Issue: "Cannot find module 'core'"

**Solution:** The `core` package should install automatically. If not:
1. Check that `packages/react/package.json` has `"core": "*"` in dependencies
2. Try deleting `node_modules` and `package-lock.json` in your Vite app, then reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

### Issue: TypeScript errors

**Solution:** The packages include TypeScript declarations. Make sure:
- Your Vite app has TypeScript configured
- The `dist` folders contain `.d.ts` files
- You've run `npm run build` in the monorepo

## Alternative: Using npm link (Local Development)

If you're developing both the monorepo and your Vite app locally:

1. **In monorepo:**
   ```bash
   npm run build
   cd packages/core
   npm link
   cd ../react
   npm link
   ```

2. **In your Vite app:**
   ```bash
   npm link @monorepo/react
   npm link @monorepo/core
   ```

3. **When you make changes to the monorepo:**
   ```bash
   cd monorepo
   npm run build
   # Changes will be reflected in your Vite app
   ```

## Publishing to npm (Optional)

If you want to publish to npm instead of using git:

1. **Build packages:**
   ```bash
   npm run build
   ```

2. **Publish core first:**
   ```bash
   cd packages/core
   npm publish
   ```

3. **Update react package.json to reference published core version:**
   ```json
   "dependencies": {
     "core": "^1.0.0"  // Use the published version
   }
   ```

4. **Publish react:**
   ```bash
   cd ../react
   npm publish
   ```

5. **In your Vite app:**
   ```bash
   npm install @monorepo/react
   ```

## Summary

✅ **Build once:** `npm run build` in monorepo  
✅ **Install once:** `npm install git+...` in Vite app  
✅ **Core installs automatically** - no extra step needed!  
✅ **Use components:** `import { MyButton } from '@monorepo/react'`

That's it! The `core` package is automatically included when you install `@monorepo/react`.

