/*******************************************************************************************************
 *************************************** REACT APPLICATION ENTRY POINT *********************************
 *
 * Topics Covered:
 * - Vite React client entry point
 * - Initializing root DOM mounting via `createRoot`
 * - Enabling React `StrictMode` for development diagnostics
 * - Rendering main `App` component with global CSS styles
 *
 *******************************************************************************************************/

import { StrictMode } from 'react';
/*
`StrictMode` is a development helper component in React that checks for potential problems, 
deprecated API usages, and unexpected side effects.
*/

import { createRoot } from 'react-dom/client';
/*
`createRoot` is the modern React 18+ DOM rendering API that attaches the React application to 
the HTML root container element.
*/

import './index.css';
/*
Global stylesheet providing base typography, CSS reset, and theme properties.
*/

import App from './App.jsx';
/*
Root application component containing Google OAuth state logic and user profile display.
*/

// =========================================================================================
// ROOT MOUNTING
// =========================================================================================
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
);

