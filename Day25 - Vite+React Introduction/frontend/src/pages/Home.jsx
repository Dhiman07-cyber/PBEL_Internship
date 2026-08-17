/*******************************************************************************************************
 *************************************** HOME PAGE COMPONENT (`Home.jsx`) ******************************
 *
 * Concepts Covered in Day 25:
 * - React Functional Components: Arrow functions returning JSX markup
 * - JSX (JavaScript XML) Rules & Features:
 *   1. Must return a single root element (or Fragment).
 *   2. HTML attributes use camelCase syntax (e.g., `className` instead of `class`).
 *   3. Embedded JS expressions inside `{}` curly braces.
 * - Vite Build Tool Advantages:
 *   - Native ES Modules (no bundling during development).
 *   - Fast HMR (Hot Module Replacement) preserving application state during edits.
 *   - Lightning-fast startup times powered by esbuild.
 *******************************************************************************************************/

const Home = () => {
    return (
        <div className="page-container">
            <div className="hero-section">
                <h1 className="hero-title">🚀 Welcome to Day 25: Vite + React Intro</h1>
                <p className="hero-description">
                    Learn modern web application development with React components, declarative client-side routing,
                    and Vite's next-generation frontend tooling!
                </p>
            </div>

            <div className="cards-grid">
                <div className="info-card">
                    <h3>⚡ Why Vite?</h3>
                    <ul>
                        <li><strong>Instant Server Start:</strong> Uses native ES modules (ESM) over traditional bundling.</li>
                        <li><strong>Fast HMR:</strong> Lightning-quick Hot Module Replacement retains component state.</li>
                        <li><strong>Optimized Builds:</strong> Powered by Rollup for production bundling and esbuild for pre-bundling.</li>
                    </ul>
                </div>

                <div className="info-card">
                    <h3>⚛️ Core React Concepts</h3>
                    <ul>
                        <li><strong>Component-Based Architecture:</strong> Reusable, self-contained UI building blocks.</li>
                        <li><strong>Declarative UI:</strong> Define *what* the interface should look like; React updates the DOM.</li>
                        <li><strong>Virtual DOM:</strong> Lightweight in-memory representation for high-performance diffing and rendering.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home