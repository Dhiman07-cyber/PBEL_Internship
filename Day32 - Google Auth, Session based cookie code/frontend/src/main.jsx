/*******************************************************************************************************
 * *************************************** REACT APPLICATION ENTRY POINT (SESSION-BASED) ***************
 *
 * Topics Covered:
 * - Vite React client entry point
 * - Configuring React Router DOM for multi-page application routing (`BrowserRouter`, `Routes`, `Route`)
 * - Mapping home and login paths to their respective components
 * - Rendering within React `StrictMode`
 *
 *******************************************************************************************************/

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Home from './Home.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>,
);
