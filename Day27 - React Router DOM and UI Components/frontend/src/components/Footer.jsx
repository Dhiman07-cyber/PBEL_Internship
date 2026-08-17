/*******************************************************************************************************
 *************************************** FOOTER COMPONENT (`Footer.jsx`) ********************************
 *
 * New Topics & Key Concepts Covered in Day 27:
 * - Flexbox Sticky Footer Positioning (`marginTop: 'auto'` within flex column root layout `#root`)
 * - Theme-reactive CSS Variables (`var(--footer-bg)`) adapting automatically between Light & Dark themes
 * - Semantic HTML5 Markup (`<footer>`, `<p>`) with copyright entity encoding (`&copy;`)
 *
 * Differences & Architectural Progression (Day 25 / Day 26 vs Day 27):
 * - Day 25: Simple footer layout.
 * - Day 26: No footer present in single-file monolith view.
 * - Day 27: Persistent Footer component anchored to the bottom of the viewport using Flexbox `marginTop: 'auto'`,
 *   styled using CSS custom variables that switch dynamically with Chakra UI color mode state!
 *
 * Cross-File & Execution Flow:
 * 1. Rendered inside `<App />` (`App.jsx`) below `<AllRoutes />`.
 * 2. Styled via `var(--footer-bg)` which toggles dynamically when `ColorModeButton` is clicked in `Header.jsx`.
 *******************************************************************************************************/

// =========================================================================================
// FOOTER COMPONENT
// =========================================================================================
/*
   HOW STICKY FOOTER WORKS WITH FLEXBOX:
   In `#root` (`index.css`), the container has `display: flex; flex-direction: column; min-height: 100vh;`.
   Applying `marginTop: 'auto'` to `<footer>` forces it to push itself to the very bottom of the viewport,
   even if page content is short!
*/
const Footer = () => {
    return (
        <footer style={{ 
            backgroundColor: 'var(--footer-bg)', // Dynamic CSS token updated by .dark class theme switch
            padding: '10px', 
            textAlign: 'center', 
            marginTop: 'auto', // Pushes footer to bottom of flex container
            transition: 'background-color 0.2s' // Smooth color transition when switching light/dark mode
        }}>
            {/* Copyright text notice */}
            <p>&copy; 2024 My App. All rights reserved.</p>
        </footer>
    )
}

// Export Footer component for consumption in App.jsx
export default Footer;