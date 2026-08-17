/*******************************************************************************************************
 *************************************** VITE BUILD CONFIGURATION (`vite.config.js`) *******************
 *
 * New Topics & Key Concepts Covered in Day 27:
 * - Module Path Aliasing in Vite (`resolve.alias: { '@': './src' }`)
 * - ES Module `import.meta.url` conversion to Node `__dirname` using `fileURLToPath`
 * - React Vite Plugin Integration (`@vitejs/plugin-react`)
 *
 * Differences & Architectural Progression (Day 25 / Day 26 vs Day 27):
 * - Day 25 & Day 26: Basic Vite setup without path aliases (`resolve.alias`). Imports used relative paths (`../../`).
 * - Day 27: Configured path aliasing (`@/` -> `./src`), allowing imports like `@/components/ui/provider`
 *   which avoids deep relative path nesting (`../../components/ui/provider`)!
 *
 * Cross-File & Execution Flow:
 * 1. Read by Vite dev server during `npm run dev` and `vite build`.
 * 2. Paired with `jsconfig.json` so VS Code IDE recognizes `@/` imports with auto-complete and intellisense!
 *******************************************************************************************************/

// =========================================================================================
// IMPORTS
// =========================================================================================
// 1. Convert ES Module file URL (`import.meta.url`) into standard OS file system path
import { fileURLToPath } from 'url'

// 2. Node path module for resolving file paths
import path from 'path'

// 3. Vite configuration helper function
import { defineConfig } from 'vite'

// 4. React plugin for Fast Refresh (HMR) and JSX compilation
import react from '@vitejs/plugin-react'

// Derive directory name from current ES Module context URL
const __dirname = path.dirname(fileURLToPath(import.meta.url))

// =========================================================================================
// VITE CONFIGURATION EXPORT
// =========================================================================================
export default defineConfig({
  // React JSX and Fast Refresh HMR plugin
  plugins: [react()],

  // Path resolution configuration
  resolve: {
    alias: {
      // Maps `@/` directly to `./src/` directory
      '@': path.resolve(__dirname, './src'),
    },
  },
})