/*******************************************************************************************************
 *************************************** HEADER & NAVIGATION COMPONENT (`Header.jsx`) *******************
 *
 * New Topics & Key Concepts Covered in Day 27:
 * - Single Page Navigation with React Router `<Link to="...">` (No Page Refresh)
 * - Integration of Chakra UI / Next-Themes Dark & Light Mode Toggle (`ColorModeButton`)
 * - Dynamic Styling via CSS Custom Variables (`var(--header-bg)`) responsive to dark mode theme state
 * - Flexbox Navigation Layout with Accessible List Structure (`<nav>`, `<ul>`, `<li>`)
 *
 * Differences & Architectural Progression (Day 25 / Day 26 vs Day 27):
 * - Day 25: `Navbar.jsx` used simple links without theme switcher integrations.
 * - Day 26: No header/navbar component present; navigation was unaddressed.
 * - Day 27: Created `Header.jsx` integrating client-side router navigation links (`<Link to="...">`) alongside
 *   a live dark/light mode toggle button (`<ColorModeButton />`) connected to Chakra UI's Theme Provider!
 *
 * Cross-File & Execution Flow:
 * 1. Rendered inside `<App />` (`App.jsx`).
 * 2. When user clicks `<Link to="/about">`, `react-router-dom` updates the URL path without reloading the web page.
 * 3. When user clicks `<ColorModeButton />`, `useColorMode()` toggles the `.dark` class on html/body elements.
 * 4. CSS variables automatically transition (`transition: background-color 0.2s`) to dark theme values!
 *******************************************************************************************************/

// =========================================================================================
// IMPORTS
// =========================================================================================
// 1. Import `<Link>` from `react-router-dom` for client-side SPA navigation
import { Link } from 'react-router-dom';

// 2. Import Chakra UI / Next-Themes Color Mode Button using Vite path alias `@/`
import { ColorModeButton } from '@/components/ui/color-mode';

// =========================================================================================
// HEADER COMPONENT
// =========================================================================================
/*
   WHY USE `<Link>` INSTEAD OF STANDARD `<a href="...">`?
   Standard HTML anchor tags (`<a href="/about">`) force the browser to unload the current document,
   send an HTTP request to the server, and download HTML from scratch.
   React Router's `<Link to="/about">` intercepts the click, prevents page reload (`e.preventDefault()`),
   updates `window.location` via HTML5 History `pushState`, and instructs `<AllRoutes />` to swap views instantly!
*/
const Header = () => {
    return (
        <div>
            {/* Main Application Branding Heading */}
            <h1>My App</h1>

            {/* Semantic Navigation Container with dynamic theme-aware background color */}
            <nav style={{ backgroundColor: 'var(--header-bg)', padding: '10px', transition: 'background-color 0.2s' }}>
                <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    {/* Navigation Link to Home Page (`/home`) */}
                    <li><Link to="/home">Home</Link></li>

                    {/* Navigation Link to About Us Page (`/about`) */}
                    <li><Link to="/about">About</Link></li>

                    {/* Navigation Link to Contact Form Page (`/contact`) */}
                    <li><Link to="/contact">Contact</Link></li>

                    {/* Navigation Link to Chakra UI Drawer Component Demo (`/drawer`) */}
                    <li><Link to="/drawer">Drawer</Link></li>

                    {/* Dark/Light Mode Theme Switcher Button */}
                    <li><ColorModeButton /></li>
                </ul>
            </nav>
        </div>
    )
}

// Export Header component for layout assembly in App.jsx
export default Header;