/*******************************************************************************************************
 *************************************** BACKEND SERVER ENTRY POINT ************************************
 *
 * Topics Covered:
 * - Production backend directory structure for Google OAuth applications
 * - Bootstrapping Express.js application
 * - Registering global middleware: CORS, JSON parser, Express Session
 * - Initializing Passport authentication middleware and session integration
 * - Mounting authentication routes
 * - Asynchronous MongoDB connection with Mongoose before listening on PORT
 *
 * Architecture & Folder Structure:
 * backend/
 * ├── config/       <-- Database connection setup (`db.js`)
 * ├── models/       <-- MongoDB schemas and models (`user.model.js`)
 * ├── passport/     <-- Modular third-party auth strategies (`google.js`)
 * ├── routes/       <-- API endpoint definitions (`user.auth.js`)
 * ├── server.js     <-- Application entry point / bootstrapper
 * ├── .env          <-- Environment variables (PORT, DB URI, Google Client ID & Secret)
 * └── package.json  <-- Project dependencies & scripts
 *
 *******************************************************************************************************/

// =========================================================================================
// CORE IMPORTS
// =========================================================================================
const express = require("express");
/*
We import the Express framework to create the server application and handle incoming HTTP requests.
*/

const session = require("express-session");
/*
We import `express-session` to manage server-side user sessions. Passport uses this session middleware 
to maintain persistent login state across HTTP requests if session-based auth is used.
*/

const { passport } = require("./passport/google");
/*
We import the configured `passport` instance from our `passport/google.js` module.
*/

const cors = require("cors");
/*
We import CORS (Cross-Origin Resource Sharing) middleware to allow cross-origin requests from 
our React frontend (running on http://localhost:5173).
*/

const { userRouter } = require("./routes/user.auth");
/*
We import the OAuth router that defines `/api/google` and `/api/google/callback` endpoints.
*/

const { connection } = require("./config/db");
/*
We import the database connection Promise from our config directory (`config/db.js`).
*/

// =========================================================================================
// APPLICATION INITIALIZATION & MIDDLEWARE REGISTRATION
// =========================================================================================
const app = express();
/*
Instantiate the Express server application.
*/

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
/*
Globally register CORS middleware with origin and credentials enabled so browsers permit session cookies cross-origin.
*/

app.use(express.json());
/*
Built-in Express body-parser middleware that parses incoming requests with JSON payloads into `req.body`.
*/

// =========================================================================================
// SESSION CONFIGURATION
// =========================================================================================
app.use(
    session({
        secret: "PBEL",
        /*
        The secret key used to sign the session ID cookie, ensuring session tamper resistance.
        */

        resave: false,
        /*
        Forces the session to NOT be saved back to the session store if it wasn't modified during the request.
        */

        saveUninitialized: false
        /*
        Forces an uninitialized session to NOT be saved to the store (improves efficiency & compliance).
        */
    })
);

// =========================================================================================
// PASSPORT MIDDLEWARE REGISTRATION
// =========================================================================================
app.use(passport.initialize());
/*
Initializes Passport middleware on the Express application, allowing it to hook into request lifecycles.
*/

app.use(passport.session());
/*
Enables Passport to use express-session for persistent login sessions (calls `deserializeUser` on requests).
*/

// =========================================================================================
// ROUTE MOUNTING
// =========================================================================================
app.use("/", userRouter);
/*
Mount the authentication routes under the root path `/`. 
This registers endpoints like `/api/google` and `/api/google/callback`.
*/

// =========================================================================================
// DATABASE CONNECTION & SERVER LISTENING
// =========================================================================================
const PORT = process.env.PORT || 8000;

app.listen(PORT, async () => {
    /*
    Start the HTTP server on the configured PORT. 
    We pass an asynchronous callback to ensure MongoDB Atlas connection is verified on startup.
    */
    try {
        await connection;
        /*
        Pause execution until the Mongoose connection promise resolves successfully.
        */
        console.log("Connected to DB successfully");
    } catch (error) {
        /*
        Catch and display any database connection errors (e.g., DNS SRV lookup or bad credentials).
        */
        console.log("Database connection error:", error);
    }

    console.log(`Server is running on port ${PORT}`);
});