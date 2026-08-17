/*******************************************************************************************************
 *************************************** NAVIGATION BAR COMPONENT (`Navbar.jsx`) ***********************
 *
 * Concepts Covered in Day 25:
 * - Declarative Client-Side Navigation: `Link` & `NavLink` from `react-router-dom`
 * - Avoiding Full Page Reloads: Why standard `<a href="...">` reloads the page, while `<Link to="...">` prevents it
 * - Component Reusability & Layout Navigation Header
 *******************************************************************************************************/

import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="navbar-logo">
                <h2>⚡ Vite + React</h2>
            </div>
            <nav className="navbar-links">
                {/* 
                    `NavLink` automatically adds an `active` class to the link when its route matches the current URL.
                    This allows seamless styling for active navigation tabs without manual state management.
                */}
                <NavLink 
                    to="/" 
                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                    Home
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
