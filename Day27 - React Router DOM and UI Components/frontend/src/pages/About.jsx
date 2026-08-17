/*******************************************************************************************************
 *************************************** ABOUT PAGE VIEW COMPONENT (`About.jsx`) ************************
 *
 * New Topics & Key Concepts Covered in Day 27:
 * - Dedicated Page View Component in Client-Side Routing Hierarchy
 * - Static Content Rendering within SPA Navigation Architecture
 * - Semantic Text Structure (`<h1>`, `<p>`) inheritable by global theme styling variables
 *
 * Differences & Architectural Progression (Day 25 / Day 26 vs Day 27):
 * - Day 25: Basic static About placeholder component.
 * - Day 26: Not present (single-file App monolith).
 * - Day 27: Integrated as a first-class route view (`/about`) in `AllRoutes.jsx`, seamlessly dynamic without page reload!
 *
 * Cross-File & Execution Flow:
 * 1. Mounted dynamically by `AllRoutes.jsx` when URL path is `/about`.
 * 2. Styled automatically by root CSS theme variables defined in `index.css`.
 *******************************************************************************************************/

// =========================================================================================
// ABOUT US COMPONENT
// =========================================================================================
const About = () => {
    return (
        <div>
            {/* Page Heading */}
            <h1>About Us</h1>

            {/* Subtitle intro */}
            <p>Welcome to our about page!</p>

            {/* Body content text block */}
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quas tempora eaque id quis perferendis distinctio, magnam quasi quod illo, obcaecati perspiciatis fuga ipsum, error hic maiores veritatis laboriosam et.
                Autem tenetur fugiat quasi adipisci dicta ratione, consequuntur nisi enim temporibus ea tempora ad labore. Dicta quam, a blanditiis labore odit ullam adipisci, rem consequuntur corrupti, nobis dolorum architecto sunt!
                Amet sequi cumque totam, eveniet ex tenetur mollitia exercitationem nisi dicta deserunt culpa nihil delectus iste laborum hic. Adipisci omnis voluptate debitis temporibus repellat, quia laudantium asperiores et culpa labore?
                Ab vel tenetur sapiente tempore cumque impedit odit aliquid, quia asperiores ex aut? Unde reprehenderit eligendi libero, ipsa similique nam magnam est fugiat nesciunt magni a facilis non blanditiis vero.
            </p>
        </div>
    )
}

// Export About component for consumption in AllRoutes.jsx
export default About