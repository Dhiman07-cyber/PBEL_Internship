/*******************************************************************************************************
 *************************************** APPLICATION ROOT (`App.jsx`) **********************************
 *
 * Concepts Covered in Day 26:
 * - App Layout Composition & Navigation Header Integration
 * - Router Viewport Management (`AllRoutes`)
 *******************************************************************************************************/

import './App.css'
import Navbar from './components/Navbar'
import AllRoutes from './routes/AllRoutes'

function App() {
  return (
    <div className="app-container">
      <Navbar />

      <main className="main-content">
        <AllRoutes />
      </main>

      <footer className="footer">
        <p>Day 26 - FullStack IBM Internship Coursework | State, Hooks & API Data Fetching Walkthrough</p>
      </footer>
    </div>
  )
}

export default App
