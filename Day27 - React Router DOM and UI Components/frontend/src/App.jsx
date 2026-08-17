/*******************************************************************************************************
 *************************************** ROOT APPLICATION COMPONENT (`App.jsx`) *************************
 *
 * New Topics & Key Concepts Covered in Day 27:
 * - Application Shell / Master Layout Pattern: Structuring persistent UI elements around dynamic routes
 * - Component Decomposition: Decoupling header navigation and footer from dynamic page view content
 * - Seamless Page Switching without Page Reloads (Single Page Application - SPA architecture)
 *
 * Differences & Architectural Progression (Day 25 / Day 26 vs Day 27):
 * - Day 25: Basic layout rendering Navbar, AllRoutes, and Footer.
 * - Day 26: `App.jsx` had state logic (`useState`, `useEffect`, `fetch`) written directly inside the root component,
 *   causing a monolithic structure where page content was mixed with state.
 * - Day 27: Refactored `App.jsx` into a clean Layout Shell component. All state management and API fetching 
 *   moved out of `App.jsx` into modular Page components (`pages/Home.jsx`), while `App.jsx` renders `<Header />`,
 *   `<AllRoutes />` (dynamic outlet), and `<Footer />`.
 *
 * Cross-File & Execution Flow:
 * 1. Mounted inside `<BrowserRouter>` in `main.jsx`.
 * 2. `<Header />` renders persistent top navigation with router `<Link>` components and theme toggle.
 * 3. `<AllRoutes />` evaluates current browser URL path and conditionally mounts the corresponding page component.
 * 4. `<Footer />` renders persistent footer at the bottom of the application.
 *******************************************************************************************************/

// =========================================================================================
// IMPORTS
// =========================================================================================
// 1. Import App-specific layout CSS styling
import './App.css'

// 2. Import sticky bottom Footer component
import Footer from './components/Footer'

// 3. Import sticky top Header navigation component
import Header from './components/Header'

// 4. Import client-side route manager component containing all `<Route>` path declarations
import AllRoutes from './routes/AllRoutes'

// =========================================================================================
// APPLICATION LAYOUT COMPONENT
// =========================================================================================
/*
   WHAT IS THE MASTER LAYOUT PATTERN IN REACT?
   Instead of duplicating Header and Footer across every individual page, `App.jsx` defines
   a top-level wrapper. `<Header />` and `<Footer />` stay persistently mounted in the DOM
   while `<AllRoutes />` dynamically replaces page content based on the active URL path.
*/
function App() {

  return (
    // React Fragment (`<> ... </>`) to wrap multiple top-level elements without adding extra DOM nodes
    <>
      {/* 1. Top persistent navigation bar with links & color mode toggle */}
      <Header />

      {/* 2. Dynamic Router outlet: renders Home, About, Contact, DrawerPage, or FourOFour based on URL */}
      <AllRoutes />

      {/* 3. Bottom persistent site footer */}
      <Footer />
    </>
  )
}

// Export App component as default export for main.jsx
export default App

