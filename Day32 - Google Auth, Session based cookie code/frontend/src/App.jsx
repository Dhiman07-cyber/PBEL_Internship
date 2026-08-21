/*******************************************************************************************************
 * *************************************** REACT GOOGLE OAUTH CLIENT (SESSION-BASED) *******************
 *
 * Topics Covered:
 * - Initiating Google OAuth flow from React by redirecting to backend endpoint (`handleGoogleLogin`)
 * - Handling session-based authentication using cookies
 * - Initiating logout by redirecting to backend `/api/logout`
 * - Styling and rendering base Google sign-in layout
 *
 * Architecture & Flow:
 * 1. User clicks "Sign in with Google" -> Browser navigates to `http://localhost:8000/api/google`
 * 2. Backend + Google handle authentication -> Backend redirects back to `http://localhost:5173/home`
 * 3. On the `/home` route, `Home.jsx` fetches user data from the backend's `/api/me` route.
 *
 *******************************************************************************************************/

// =========================================================================================
// REACT IMPORTS
// =========================================================================================
import { useState } from 'react';
/*
- `useState`: React hook for managing local state.
*/

import './App.css';
/*
Import custom CSS styling for the application.
*/

// =========================================================================================
// MAIN APP COMPONENT (LOGIN SCREEN)
// =========================================================================================
function App() {
    // =====================================================================================
    // GOOGLE LOGIN HANDLER
    // =====================================================================================
    const handleGoogleLogin = () => {
        /*
        Redirects the user's browser to the backend OAuth entry route (`/api/google`).
        The Express backend + Passport intercepts this and redirects to Google's sign-in screen.
        */
        window.location.href = "http://localhost:8000/api/google/";
    };

    // =====================================================================================
    // UI RENDERING
    // =====================================================================================
    return (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
            <h1>Google Auth Session Login</h1>
            <p style={{ color: "#888", marginBottom: "30px" }}>
                Welcome to the Session-based Authentication Demo. Please click below to sign in.
            </p>
            <button onClick={handleGoogleLogin} style={{ padding: "12px 24px", fontSize: "16px", cursor: "pointer" }}>
                Sign in with Google
            </button>
        </div>
    );
}

// =========================================================================================
// EXPORT COMPONENT
// =========================================================================================
export default App;
