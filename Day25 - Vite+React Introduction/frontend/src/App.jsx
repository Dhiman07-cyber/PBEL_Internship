/*******************************************************************************************************
 *************************************** MAIN APPLICATION ROOT (`App.jsx`) *****************************
 *
 * Concepts Covered in Day 25:
 * - Root Component Composition: `App` serves as the top-level container for global layout & routing
 * - React JSX Fragments (`<> ... </>`): Grouping multiple components without injecting extra DOM wrapper nodes
 * - Layout Structure: Navigation header (`Navbar`) persistent across all routes, with dynamic router viewport (`AllRoutes`)
 *******************************************************************************************************/

import './App.css'
import Navbar from './components/Navbar'
import AllRoutes from './routes/AllRoutes'

function App() {
  return (
    <div className="app-container">
      {/* Persistent Navigation Bar across all pages */}
      <Navbar />

      {/* Main Content Viewport managed by React Router */}
      <main className="main-content">
        <AllRoutes />
      </main>

      {/* Persistent Footer */}
      <footer className="footer">
        <p>Day 25 - FullStack IBM Internship Coursework | Vite + React Introduction</p>
      </footer>
    </div>
  )
}

export default App
