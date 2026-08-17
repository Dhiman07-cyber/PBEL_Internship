/*******************************************************************************************************
 *************************************** ROUTE REGISTRY COMPONENT (`AllRoutes.jsx`) ********************
 *
 * Concepts Covered in Day 25:
 * - Centralized Application Routing (`react-router-dom` v6+)
 * - `<Routes>` Container: Evaluates current browser window URL path against nested `<Route>` definitions
 * - `<Route path="..." element={<Component />} />`: Maps a URL route path to a React view component
 * - Single Page Application (SPA) Routing Lifecycle: Swapping components dynamically without server reloads
 *******************************************************************************************************/

import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Contact from "../pages/Contact"

const AllRoutes = () => {
    return (
        <Routes>
            {/* Route for Home Page (Root Path '/') */}
            <Route path="/" element={<Home />} />

            {/* Route for Contact Page ('/contact') */}
            <Route path="/contact" element={<Contact />} />
        </Routes>
    )
}

export default AllRoutes