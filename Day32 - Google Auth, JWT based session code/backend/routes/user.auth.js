/*******************************************************************************************************
 *************************************** GOOGLE OAUTH AUTHENTICATION ROUTES ****************************
 *
 * Topics Covered:
 * - Setting up Express Router for OAuth authentication endpoints
 * - Initiating Google OAuth Login Consent Screen (`/api/google`)
 * - Handling Google OAuth Callback URL (`/api/google/callback`)
 * - Generating JSON Web Tokens (JWT) from Google authenticated profile (`jwt.sign`)
 * - Redirecting authenticated users back to the React client application
 * - Exporting the authentication router to be mounted in `server.js`
 *
 * Cross-File & Architecture References:
 * - Upstream Strategy: `passport/google.js` configures the GoogleStrategy used by `passport.authenticate`
 * - Model: User document populated onto `req.user` by Passport verify callback
 * - Server Mount: `server.js` mounts this router globally via `app.use('/', userRouter)`
 * - Frontend Consumer: `App.jsx` triggers `/api/google` and parses the authenticated user session
 *
 *******************************************************************************************************/

// =========================================================================================
// ROLE OF THE ROUTER LAYER IN OAUTH
// =========================================================================================
/*
In our backend architecture, the "routes" directory defines API URL endpoints and attaches 
middleware and handlers to them. 

This file, `user.auth.js`, defines the two essential OAuth endpoints:
1. `GET /api/google`: Entry endpoint that starts the Google login process.
2. `GET /api/google/callback`: Return endpoint where Google sends the user after authentication.
*/

// =========================================================================================
// IMPORTS AND ROUTER INITIALIZATION
// =========================================================================================
const express = require("express");
/*
We import Express to create an isolated Router instance.
*/

const jwt = require("jsonwebtoken");
/*
We import JSON Web Token (JWT) library. Once Google authenticates the user, we issue our own 
custom JWT token that the frontend can store and use for authenticated API requests.
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
- Instead of returning JSON or HTML, Passport generates a Google OAuth authorization URL with our 
  `clientID` and redirects the user's browser directly to Google's official sign-in / consent page.
- `scope: ["profile", "email"]` specifies that we request the user's name, avatar picture, and email.
*/

// =========================================================================================
// ROUTE 2: GOOGLE OAUTH CALLBACK HANDLER & JWT GENERATION
// =========================================================================================
userRouter.get(
    "/api/google/callback",
    passport.authenticate("google", { session: false }),
    (req, res) => {
        /*
        Endpoint: GET /api/google/callback
        Purpose: After the user grants permission on Google, Google redirects back to this URL.

        How it works:
        1. `passport.authenticate("google", { session: false })`:
           Passport intercepts the incoming request, exchanges the authorization code with Google 
           for user profile data, runs our `verify` callback in `passport/google.js`, and attaches 
           the resulting MongoDB user document to `req.user`.
           Setting `{ session: false }` tells Passport we are using stateless JWT tokens instead of 
           server-side session cookies.

        2. JWT Token Generation:
           We generate a signed JWT containing essential non-sensitive user identity data:
           - `id`: MongoDB user `_id`
           - `name`: User's display name
           - `email`: User's email
           - `picture`: User's profile photo URL
           We sign it with our secret key ("PBEL") and set an expiration time of 1 day ("1d").

        3. Redirect to Frontend:
           We redirect the browser back to our React application running at `http://localhost:5173`.
        */

        const token = jwt.sign({
            id: req.user._id,
            name: req.user.name,
            email: req.user.email,
            picture: req.user.picture,
        }, "PBEL", { expiresIn: "1d" });

        // Redirect user back to the React frontend application
        res.redirect("http://localhost:5173");
    }
);

// =========================================================================================
// EXPORTING THE ROUTER
// =========================================================================================
module.exports = {
    userRouter
};
/*
We export `userRouter` so `server.js` can mount it using `app.use('/', userRouter)`.
*/