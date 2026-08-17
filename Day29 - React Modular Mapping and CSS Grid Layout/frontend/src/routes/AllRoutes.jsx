import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import About from "../pages/About"
import FourOFour from "../pages/FourOFour"
import DrawerPage from "../pages/DrawerPage"

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/drawer" element={<DrawerPage />} />
            <Route path="*" element={<FourOFour />} />
        </Routes>
    )
}

export default AllRoutes