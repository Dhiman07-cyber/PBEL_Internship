/*******************************************************************************************************
 *************************************** REACT MAIN ENTRY POINT (`main.jsx`) ***************************
 *
 * New Topics & Key Concepts Covered in Day 27:
 * - Chakra UI v3 Theme Provider Integration (`<Provider>` from `@/components/ui/provider`)
 * - React Path Aliasing (`@/` mapping to `./src/` directory configured in `vite.config.js` & `jsconfig.json`)
 * - Nested Component Wrappers Architecture: Provider (UI/Theme) -> BrowserRouter (Routing) -> App (Layout)
 * - React 18/19 Concurrent Root Initialization (`createRoot` from `react-dom/client`)
 *
 * Differences & Architectural Progression (Day 25 / Day 26 vs Day 27):
 * - Day 25 & Day 26: Entry point wrapped `<App />` ONLY inside `<BrowserRouter>` without any UI design framework provider.
 * - Day 27: Wrapped `<BrowserRouter>` inside Chakra UI's `<Provider>`, giving every child component in the DOM tree
 *   access to Chakra UI tokens, Next-Themes dark/light color mode context, CSS reset rules, and custom component styles.
 *
 * Cross-File & Execution Flow:
 * 1. Vite loads `index.html` -> executes `<script type="module" src="/src/main.jsx"></script>`.
 * 2. `main.jsx` imports `Provider` (from `components/ui/provider.jsx`), `BrowserRouter`, and `App`.
 * 3. `createRoot(document.getElementById('root'))` attaches React's Fiber root node to DOM `#root`.
 * 4. `.render()` mounts `<Provider><BrowserRouter><App /></BrowserRouter></Provider>`.
 *******************************************************************************************************/

// =========================================================================================
// IMPORTS & MODULE ALIASING
// =========================================================================================
// 1. Import Chakra UI Provider using Vite path alias (`@/` resolves to `./src/`)
import { Provider } from "@/components/ui/provider"

// 2. Import `createRoot` for client-side DOM rendering in React 18+
import { createRoot } from 'react-dom/client'

// 3. Import `BrowserRouter` to supply HTML5 History API context to the entire component tree
import { BrowserRouter } from 'react-router-dom'

// 4. Import global CSS variables, resets, and CSS custom property definitions
import './index.css'

// 5. Import top-level layout container component (`App.jsx`)
import App from './App.jsx'

// =========================================================================================
// VIRTUAL DOM MOUNTING & PROVIDER COMPOSITION
// =========================================================================================
/*
   WHAT IS COMPONENT COMPOSITION & NESTED PROVIDERS IN REACT?
   React applications wrap root components in 'Providers' (higher-order context components)
   to broadcast shared configuration down the tree without prop-drilling.
   - `<Provider>`: Supplies Chakra UI v3 design system tokens and next-themes color mode context.
   - `<BrowserRouter>`: Listens to URL changes (`window.location`) and enables `<Routes>`, `<Route>`, `<Link>`.
   - `<App />`: The core application container mounting Header, AllRoutes, and Footer.
*/

// Initialize React application root on DOM element `#root` and render provider hierarchy
createRoot(document.getElementById('root')).render(
  <Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

