/*******************************************************************************************************
 * *************************************** REACT OAUTH HOME PAGE (SESSION-BASED) **********************
 *
 * Topics Covered:
 * - Fetching session user profile info from backend (`/api/me`)
 * - Using `credentials: "include"` in fetch to allow cross-origin cookie transfer
 * - Managing conditional rendering and loading states
 * - Handling session-based logout by redirecting to backend `/api/logout`
 *
 * Architecture & Details:
 * - When the page mounts, React queries `/api/me`. If the browser sends a valid cookie, the backend 
 *   returns the user profile data.
 * - Without `credentials: "include"`, the browser omits the session cookie, resulting in a 401 response.
 *
 *******************************************************************************************************/

import { useEffect, useState } from 'react';
import './App.css';

function Home() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // =====================================================================================
    // FETCH USER DETAILS ON MOUNT
    // =====================================================================================
    useEffect(() => {
        /*
        Fetch the current user profile from the backend session endpoint.
        IMPORTANT: we must specify credentials: "include" so the browser sends the session cookie.
        */
        fetch("http://localhost:8000/api/me", {
            credentials: "include"   // CRITICAL: sends the express-session cookie to the backend
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error("Authentication failed");
                }
                return res.json();
            })
            .then(data => {
                if (data.user) {
                    setUser(data.user);
                }
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, []);

    // =====================================================================================
    // LOGOUT HANDLER
    // =====================================================================================
    const handleLogout = () => {
        /*
        For session-based authentication, logout is initiated by sending the user's browser 
        to the backend logout endpoint. The backend clears the server session and cookie, 
        then redirects the user back to the home page (where they are logged out).
        */
        window.location.href = "http://localhost:8000/api/logout";
    };

    // Conditional Rendering: Loading State
    if (loading) {
        return (
            <div style={{ textAlign: "center", marginTop: "100px" }}>
                <p>Loading user profile...</p>
            </div>
        );
    }

    // Conditional Rendering: Unauthenticated State
    if (!user) {
        return (
            <div style={{ textAlign: "center", marginTop: "100px" }}>
                <p>Session expired or not authenticated.</p>
                <a href="/">Go back to login</a>
            </div>
        );
    }

    // Render User Profile Card
    return (
        <div style={{ textAlign: "center", marginTop: "60px" }}>
            <div className="profile-card" style={{ border: "1px solid #ccc", padding: "30px", borderRadius: "10px", display: "inline-block" }}>
                {user.picture && (
                    <img 
                        src={user.picture} 
                        alt="Profile" 
                        style={{ borderRadius: "50%", width: "100px", marginBottom: "15px" }} 
                    />
                )}
                <h2>Welcome, {user.name}!</h2>
                <p>Email: {user.email}</p>
                <button 
                    onClick={handleLogout} 
                    style={{ marginTop: "20px", padding: "8px 16px", cursor: "pointer", background: "#f44336", color: "#fff", border: "none", borderRadius: "5px" }}
                >
                    Logout
                </button>
            </div>
        </div>
    );
}

export default Home;
