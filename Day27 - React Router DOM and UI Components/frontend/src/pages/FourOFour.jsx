/*******************************************************************************************************
 *************************************** 404 NOT FOUND PAGE COMPONENT (`FourOFour.jsx`) ******************
 *
 * New Topics & Key Concepts Covered in Day 27:
 * - Catch-All / Wildcard Fallback Route Component (`path="*"`)
 * - Graceful UI Degradation for Invalid URLs & Broken Links
 * - User Recovery Navigation back to Root (`/`)
 *
 * Differences & Architectural Progression (Day 25 / Day 26 vs Day 27):
 * - Day 25: Had 404 placeholder component.
 * - Day 26: No 404 handler present.
 * - Day 27: Integrated as the wildcard fallback route in `AllRoutes.jsx` (`<Route path="*" element={<FourOFour />} />`),
 *   ensuring that any unrecognized URL renders this custom 404 page rather than crashing or showing a blank page!
 *
 * Cross-File & Execution Flow:
 * 1. Mounted by `AllRoutes.jsx` whenever the browser URL path does not match any registered routes (`/home`, `/about`, `/contact`, `/drawer`).
 *******************************************************************************************************/

// =========================================================================================
// 404 NOT FOUND COMPONENT
// =========================================================================================
const FourOFour = () => {
  return (
    <div>
        {/* 404 Status Heading */}
        <h2>404 - Page Not Found</h2>

        {/* Explanation message */}
        <p>The page you are looking for does not exist.</p>

        {/* Home page recovery link */}
        <p><a href="/">Return to Home</a></p>
    </div>
  )
}

// Export FourOFour component for wild-card route handling in AllRoutes.jsx
export default FourOFour