/*******************************************************************************************************
 *************************************** ROUTE REGISTRY (`AllRoutes.jsx`) ******************************
 *
 * Concepts Covered in Day 26:
 * - Route Mapping: Linking path endpoints (`/` and `/contact`) to Page View Components
 *******************************************************************************************************/

import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Contact from "../pages/Contact"

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    )
}

export default AllRoutes