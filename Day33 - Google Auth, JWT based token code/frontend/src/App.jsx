/*******************************************************************************************************
 *************************************** REACT GOOGLE OAUTH CLIENT *************************************
 *
 * Topics Covered:
 * - Initiating Google OAuth flow from React by redirecting to backend endpoint (`handleGoogleLogin`)
 * - Handling OAuth callback redirect and extracting JWT token from URL query parameters
 * - Client-side JWT parsing using Base64 decoding (`atob` & `JSON.parse`) without external libraries
 * - Persisting authentication session in browser `localStorage`
 * - Restoring user authentication state on page refresh
 * - Managing logout and session cleanup (`handleLogout`)
 * - Dynamic UI rendering based on authenticated user state
 *
 * Architecture & Flow:
 * 1. User clicks "Sign in with Google" -> Browser navigates to `http://localhost:8000/api/google`
 * 2. Backend + Google handle authentication -> Backend redirects back to `http://localhost:5173/?token=...`
 * 3. `useEffect` in React extracts the token, decodes user details, and sets `user` state.
 *
 *******************************************************************************************************/

// =========================================================================================
// REACT HOOKS AND STYLES IMPORTS
// =========================================================================================
import { useState, useEffect } from 'react';
/*
- `useState`: React hook for managing local state (authenticated user data, counters, etc.).
- `useEffect`: React hook for running side-effects on component mount (extracting token from URL/localStorage).
*/

import './App.css';
/*
Import custom CSS styling for the application.
*/

// =========================================================================================
// MAIN APP COMPONENT
// =========================================================================================
function App() {
    // State to hold the authenticated user's profile data (name, email, picture, id)
    const [user, setUser] = useState(null);

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
    // LOGOUT HANDLER
    // =====================================================================================
    const handleLogout = () => {
        /*
        Clears the stored authentication token from the browser's localStorage and 
        reloads the application to reset the authentication state.
        */
        localStorage.removeItem("authToken");
        window.location.href = "http://localhost:5173/";
    };

    // =====================================================================================
    // AUTHENTICATION EFFECT (SESSION RESTORATION & TOKEN EXTRACTION)
    // =====================================================================================
    useEffect(() => {
        /*
        Runs once when the component first mounts.
        Checks two places for authentication token:
        1. URL Query Parameter: If returning from Google OAuth redirect with `?token=...`
        2. localStorage: If the user is refreshing an already authenticated page.
        */

        // Step 1: Check if the token was passed in the URL query string
        const queryParam = new URLSearchParams(window.location.search);
        const token = queryParam.get("token");

        if (token) {
            // Save the received token in localStorage for persistence across reloads
            localStorage.setItem("authToken", token);

            // A JWT consists of 3 parts separated by dots: header.payload.signature
            // Index [1] contains the Base64-encoded payload JSON
            const payloadBase64 = token.split(".")[1];

            // `atob()` decodes the Base64 string into a JSON string, then JSON.parse creates an object
            const decodedUser = JSON.parse(atob(payloadBase64));

            // Update React state with the authenticated user profile
            setUser(decodedUser);
        } else {
            // Step 2: If no token in URL, check if there is an existing token saved in localStorage
            const savedToken = localStorage.getItem("authToken");
            if (savedToken) {
                const payloadBase64 = savedToken.split(".")[1];
                setUser(JSON.parse(atob(payloadBase64)));
            }
        }
    }, []);

    // =====================================================================================
    // UI RENDERING
    // =====================================================================================
    return (
        <>
            {/* User Profile Card (renders user details if logged in) */}
            <div style={{ textAlign: "center", marginTop: "60px" }}>
                {user?.picture && (
                    <img 
                        src={user.picture} 
                        alt="Profile_picture" 
                        style={{ borderRadius: "50%", width: "100px" }}
                    />
                )}
                <h1>Welcome, {user ? user.name : "Guest"}</h1>
                {user && <p>Email: {user.email}</p>}
            </div>

            {/* Action Buttons */}
            <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "20px" }}>
                {!user ? (
                    <button onClick={handleGoogleLogin}>
                        Sign in with Google
                    </button>
                ) : (
                    <button onClick={handleLogout}>
                        Logout
                    </button>
                )}
            </div>
        </>
    );
}

// =========================================================================================
// EXPORT COMPONENT
// =========================================================================================
export default App;

