/*******************************************************************************************************
 *************************************** NAVIGATION BAR COMPONENT (`Navbar.jsx`) ***********************
 *
 * Concepts Covered in Day 26:
 * - Client-Side Route Navigation with `NavLink`
 * - Active Navigation Styling & State Synchronization
 *******************************************************************************************************/

import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="navbar-logo">
                <h2>⚛️ Day 26: Hooks & API Fetch</h2>
            </div>
            <nav className="navbar-links">
                <NavLink 
                    to="/" 
                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                    Home (State & Fetch)
                </NavLink>
                <NavLink 
                    to="/contact" 
                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                    Contact
                </NavLink>
            </nav>
        </header>
    );
};

export default Navbar;
