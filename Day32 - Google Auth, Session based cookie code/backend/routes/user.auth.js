/*******************************************************************************************************
 * *************************************** GOOGLE OAUTH AUTHENTICATION ROUTES (SESSION-BASED) **********
 *
 * Topics Covered:
 * - Setting up Express Router for Session-based Google OAuth endpoints
 * - Initiating Google OAuth Login Consent Screen (`/api/google`)
 * - Handling Google OAuth Callback URL (`/api/google/callback`)
 * - Persisting session using Passport's default session handling
 * - Redirecting authenticated users to the React client home page
 * - Fetching authenticated user profile from session (`/api/me`)
 * - Clearing the server-side session and cookie on logout (`/api/logout`)
 * - Exporting the authentication router to be mounted in `server.js`
 *
 * Cross-File & Architecture References:
 * - Upstream Strategy: `passport/google.js` configures the GoogleStrategy and serialize/deserialize callbacks
 * - Model: User document populated onto `req.user` by Passport verify/deserialize callback
 * - Server Mount: `server.js` mounts this router globally via `app.use('/', userRouter)`
 * - Frontend Consumer: `App.jsx` and `Home.jsx` consume these routes using credentials (session cookies)
 *
 *******************************************************************************************************/

// =========================================================================================
// ROLE OF THE ROUTER LAYER IN OAUTH
// =========================================================================================
/*
In our backend architecture, the "routes" directory defines API URL endpoints and attaches 
middleware and handlers to them. 

This file, `user.auth.js`, defines the session-based authentication endpoints:
1. `GET /api/google`: Initiates Google login.
2. `GET /api/google/callback`: Receives callback from Google and logs user into session.
3. `GET /api/me`: Returns the current logged-in user's profile from the session.
4. `GET /api/logout`: Logs the user out of the session and redirects.
*/

// =========================================================================================
// IMPORTS AND ROUTER INITIALIZATION
// =========================================================================================
const express = require("express");
/*
We import Express to create an isolated Router instance.
*/

const passport = require("passport");
/*
We import Passport to utilize `passport.authenticate()` middleware for our Google strategy.
*/

const userRouter = express.Router();
/*
We instantiate a new Express Router instance to group and manage our user authentication routes.
*/

// =========================================================================================
// ROUTE 1: INITIATE GOOGLE OAUTH LOGIN
// =========================================================================================
userRouter.get(
    "/api/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);
/*
Endpoint: GET /api/google
Purpose: When a user clicks "Sign in with Google" on the React frontend, the browser navigates here.

How it works:
- `passport.authenticate("google", { scope: ["profile", "email"] })` acts as middleware.
- Passport generates a Google OAuth authorization URL with our `clientID` and redirects the user's browser.
- `scope: ["profile", "email"]` specifies that we request the user's name, avatar picture, and email.
*/

// =========================================================================================
// ROUTE 2: GOOGLE OAUTH CALLBACK HANDLER (SESSION-BASED)
// =========================================================================================
userRouter.get(
    "/api/google/callback",
    passport.authenticate("google", { failureRedirect: "http://localhost:5173/" }),
    (req, res) => {
        /*
        Endpoint: GET /api/google/callback
        Purpose: After the user grants permission on Google, Google redirects back to this URL.

        How it works:
        1. `passport.authenticate("google", { failureRedirect: "http://localhost:5173/" })`:
           Passport exchanges the authorization code with Google for profile data, runs the `verify`
           callback, creates/finds the user, and calls `serializeUser` to save the user ID in the session.
        2. Redirect to Frontend:
           We redirect the browser back to our React application's home page running at `http://localhost:5173/home`.
        */
        res.redirect("http://localhost:5173/home");
    }
);

// =========================================================================================
// ROUTE 3: GET CURRENT USER FROM SESSION
// =========================================================================================
userRouter.get("/api/me", (req, res) => {
    /*
    Endpoint: GET /api/me
    Purpose: Called by the React frontend on the home page to fetch the logged-in user's profile.
    
    How it works:
    - `req.isAuthenticated()` is a Passport helper method that checks if a valid session exists.
    - If authenticated, `req.user` (populated by `deserializeUser`) is returned as JSON.
    - Otherwise, a 401 Unauthorized status is returned.
    */
    if (req.isAuthenticated()) {
        res.json({ user: req.user });
    } else {
        res.status(401).json({ message: "Not authenticated" });
    }
});

// =========================================================================================
// ROUTE 4: LOGOUT & CLEAR SESSION
// =========================================================================================
userRouter.get("/api/logout", (req, res) => {
    /*
    Endpoint: GET /api/logout
    Purpose: Clears the login session on the backend and redirects the user back to the login page.
    
    How it works:
    - `req.logout()` is a Passport helper that destroys the session on the server and clears the cookie.
    - Once logged out, we redirect to the React login landing page at `http://localhost:5173/`.
    */
    req.logout((err) => {
        if (err) return res.status(500).json({ message: "Logout failed" });
        res.redirect("http://localhost:5173/");
    });
});

// =========================================================================================
// EXPORTING THE ROUTER
// =========================================================================================
module.exports = {
    userRouter
};