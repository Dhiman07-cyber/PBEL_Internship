/*******************************************************************************************************
 * ********************************* PASSPORT.JS GOOGLE OAUTH CONFIGURATION (JWT-BASED) *****************
 *
 * Topics Covered:
 * - What is Passport.js and why do we use a dedicated `passport/` folder?
 * - What is OAuth 2.0 and OpenID Connect (OIDC)?
 * - Configuring `GoogleStrategy` (`passport-google-oidc`) with credentials & scopes
 * - Handling the `verify` callback function (finding existing user vs creating new user in MongoDB)
 * - Stateless authentication (session-free verification)
 * - Exporting configured `passport` instance to server and route layers
 *
 * Cross-File & Architecture References:
 * - Model Used: `userModel` imported from `../models/user.model.js`
 * - Environment Config: `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` from `.env`
 * - Route Consumers: `routes/user.auth.js` attaches `passport.authenticate('google')` to endpoints
 * - Server Integration: `server.js` initializes `passport.initialize()` without session support
 *
 *******************************************************************************************************/

// =========================================================================================
// WHAT IS PASSPORT.JS & THE NEW "PASSPORT" FOLDER?
// =========================================================================================
/*
1. What is Passport.js?
   Passport is an extremely flexible and modular authentication middleware for Node.js. 
   Instead of writing custom OAuth handshake protocols and token exchanges from scratch, 
   Passport encapsulates different authentication mechanisms into pluggable modules called "Strategies".

2. Why is there a separate "passport" folder?
   In a production backend, authentication configurations should not clutter `server.js`.
   The `passport/` directory centralizes all third-party strategy setups (e.g., `google.js`).

3. What is OAuth 2.0 & OpenID Connect (OIDC)?
   - OAuth 2.0 is an authorization framework that lets a third-party application access user data 
     without the user ever sharing their password with our application.
   - OpenID Connect (OIDC) is an identity layer built on top of OAuth 2.0. It allows our app to verify 
     the user's identity and obtain basic profile information (like name, email, and photo) directly 
     from the identity provider (Google).

4. Google OAuth Flow (JWT-Based / Stateless):
   Browser (React) 
     --> Clicks "Sign in with Google" (`/api/google`)
     --> Redirected to Google Consent Screen
     --> User authorizes access
     --> Google redirects back to backend callback URL (`/api/google/callback`) with auth code
     --> Passport exchanges code for profile info & runs verify callback below
     --> Backend creates/finds user in MongoDB & generates a JWT token for the frontend!
*/

// =========================================================================================
// IMPORTS AND ENVIRONMENT SETUP
// =========================================================================================
const passport = require("passport");
/*
We import the core Passport library. It acts as the central registry where strategies are mounted.
*/

const GoogleStrategy = require('passport-google-oidc');
/*
We import the OpenID Connect Strategy for Google. This strategy automates communicating with 
Google's OAuth 2.0 / OIDC endpoints to request profile information and verify identity.
*/

const { userModel } = require("../models/user.model");
/*
We import `userModel` to query MongoDB: checking if the authenticated Google user already exists 
in our database or creating a new document if it is their first time logging in.
*/

require('dotenv').config();
/*
Loads sensitive environment variables (`GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`) from `.env`.
*/

// =========================================================================================
// GOOGLE STRATEGY CONFIGURATION
// =========================================================================================
/*
We register the "google" strategy with `passport.use()`. 
We instantiate `new GoogleStrategy(options, verifyCallback)`.
*/
passport.use("google", new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    /*
    Client ID issued by Google Cloud Console for our project. It identifies our application to Google.
    */

    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    /*
    Client Secret issued by Google Cloud Console. Must be kept strictly secret in `.env`.
    */

    callbackURL: 'http://localhost:8000/api/google/callback',
    /*
    The authorized redirect URI. After the user approves the login prompt on Google, Google redirects 
    the browser to this backend endpoint along with an authorization code.
    */

    scope: ['profile', 'email']
    /*
    Specifies the permissions requested from the user. 
    - 'profile': Grants access to user's name and avatar photo.
    - 'email': Grants access to the user's Google account email address.
    */
}, 

// =========================================================================================
// VERIFY CALLBACK FUNCTION
// =========================================================================================
async function verify(issuer, profile, done) {
    /*
    This asynchronous function is invoked automatically by Passport once Google successfully authenticates 
    the user and returns their profile payload.
    
    Parameters:
    - `issuer`: The identity provider URL (e.g., 'https://accounts.google.com').
    - `profile`: An object containing the user's Google profile information (id, displayName, emails, photos).
    - `done`: A callback function `done(err, user)` used to pass control back to Passport.
    */
    try {
        // Step 1: Check if a user with this unique Google ID already exists in our MongoDB database
        let user = await userModel.findOne({ googleId: profile.id });

        // Step 2: If the user does not exist (first-time login), create a new user document in MongoDB
        if (!user) {
            user = await userModel.create({
                name: profile.displayName,
                googleId: profile.id,
                email: profile.emails[0].value,
                picture: profile.photos ? profile.photos[0].value : "",
            });
        }

        // Step 3: Successfully pass the authenticated MongoDB user object to Passport
        return done(null, user);

    } catch (error) {
        // If any database or server error occurs, pass the error to done()
        return done(error, null);
    }
}));

// =========================================================================================
// EXPORTING THE CONFIGURED PASSPORT INSTANCE
// =========================================================================================
module.exports = {
    passport
};
/*
We export the configured `passport` object so that:
- `server.js` can initialize Passport middleware (`passport.initialize()`).
- `routes/user.auth.js` can trigger Google OAuth authentication on routes.
*/