/*******************************************************************************************************
 *************************************** CENTRAL ROUTING CONFIGURATION (`AllRoutes.jsx`) ****************
 *
 * New Topics & Key Concepts Covered in Day 27:
 * - Client-Side Routing Architecture with `react-router-dom` (`Routes` and `Route` components)
 * - Route-to-Component Mapping: Declarative URL path matching without full page reloads
 * - Multi-Path Aliasing: Mapping multiple paths (`/` and `/home`) to the same component (`<Home />`)
 * - Wildcard Fallback Routing (`path="*"`): Catch-all route to display 404 Not Found page for invalid URLs
 * - UI Feature Page Routes: Dedicated route (`/drawer`) for testing Chakra UI Drawer UI components
 *
 * Differences & Architectural Progression (Day 25 / Day 26 vs Day 27):
 * - Day 25: Had basic `AllRoutes` file with basic routes.
 * - Day 26: Did not utilize modular routes (focused on single App view with hooks).
 * - Day 27: Expanded `AllRoutes.jsx` to include dedicated page routes for `Home`, `About`, `Contact`,
 *   `DrawerPage` (Chakra UI interactive drawer), and wildcard 404 fallback routing (`*`).
 *
 * Cross-File & Execution Flow:
 * 1. Rendered inside `<App />` (`App.jsx`) which is wrapped by `<BrowserRouter>` (`main.jsx`).
 * 2. Listens to URL state changes when user clicks `<Link>` in `Header.jsx` or navigates via browser history.
 * 3. Compares current URL path against `<Route path="...">` definitions.
 * 4. Mounts matching `element={<Component />}` into the DOM tree. If no path matches, triggers `path="*"`.
 *******************************************************************************************************/

// =========================================================================================
// IMPORTS
// =========================================================================================
// 1. Import router primitives from `react-router-dom`
// - `Routes`: Container that inspects children `<Route>` elements and selects the best matching route.
// - `Route`: Defines coupling between URL `path` string and React `element` component.
import { Routes, Route } from "react-router-dom"

// 2. Import page view components from `../pages/`
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import About from "../pages/About"
import FourOFour from "../pages/FourOFour"
import DrawerPage from "../pages/DrawerPage"

// =========================================================================================
// ROUTING COMPONENT (`AllRoutes`)
// =========================================================================================
/*
   HOW REACT ROUTER MATCHING WORKS:
   `react-router-dom` inspects `window.location.pathname`. `<Routes>` iterates over its child `<Route>` elements,
   finds the first matching `path`, and dynamically instantiates the `element` JSX node in place.
   This avoids server round-trips, giving instant page transitions!
*/
const AllRoutes = () => {
    return (
        <Routes>
            {/* 1. Root Route: Matches http://localhost:5173/ -> renders Home component */}
            <Route path="/" element={<Home />} />

            {/* 2. Contact Route: Matches http://localhost:5173/contact -> renders Contact page with Chakra UI form */}
            <Route path="/contact" element={<Contact />} />

            {/* 3. Explicit Home Route: Alias route matching http://localhost:5173/home -> renders Home component */}
            <Route path="/home" element={<Home />} />

            {/* 4. About Route: Matches http://localhost:5173/about -> renders About Us text page */}
            <Route path="/about" element={<About />} />

            {/* 5. Drawer UI Route: Matches http://localhost:5173/drawer -> renders Chakra UI Drawer component demo */}
            <Route path="/drawer" element={<DrawerPage />} />

            {/* 
               6. Wildcard / Catch-All 404 Route (`path="*"`):
               If user enters an undefined URL (e.g. `/xyz`, `/dashboard`), React Router matches `*` as fallback
               and mounts `<FourOFour />` component, preventing blank screens or unhandled UI states!
            */}
            <Route path="*" element={<FourOFour />} />
        </Routes>
    )
}

// Export AllRoutes for consumption by App.jsx
export default AllRoutes