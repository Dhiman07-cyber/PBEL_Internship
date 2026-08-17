/*******************************************************************************************************
 *************************************** REACT MAIN ENTRY POINT (`main.jsx`) ***************************
 *
 * Concepts Covered in Day 25:
 * - React 18 Concurrent Rendering Entry Point (`createRoot` from `react-dom/client`)
 * - Virtual DOM Mounting: Attaching the React Component Tree to the Real DOM (`#root` div in `index.html`)
 * - Client-Side Router Wrapper: `BrowserRouter` from `react-router-dom` providing HTML5 History API context
 * - Global Stylesheet Import (`index.css`)
 *
 * Execution Flow & Architecture:
 * 1. Browser loads `index.html` -> executes `<script type="module" src="/src/main.jsx"></script>` (Vite ES Module loader).
 * 2. `main.jsx` imports `react-dom/client`, `BrowserRouter`, `App` component, and global CSS.
 * 3. `createRoot(document.getElementById('root'))` initializes React's Fiber root node on the `#root` element.
 * 4. `.render()` mounts `<BrowserRouter><App /></BrowserRouter>` into the DOM.
 *******************************************************************************************************/

import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// =========================================================================================
// 1. VIRTUAL DOM MOUNTING & ROUTER WRAPPER
// =========================================================================================
/*
  `createRoot()` creates a React root container for the supplied DOM node (`document.getElementById('root')`).
  `BrowserRouter` uses HTML5 history API (pushState, replaceState, popstate event) to keep UI in sync with the URL.
*/
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
