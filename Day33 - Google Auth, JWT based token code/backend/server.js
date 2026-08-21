/*******************************************************************************************************
 * *************************************** BACKEND SERVER ENTRY POINT (JWT-BASED) **********************
 *
 * Topics Covered:
 * - Production backend directory structure for stateless JWT Google OAuth applications
 * - Bootstrapping Express.js application
 * - Registering global middleware: CORS, JSON parser (stateless, session-free)
 * - Initializing Passport authentication middleware (session-free)
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

app.use(cors());
/*
Globally register CORS middleware so browsers permit requests from other origins.
For stateless JWT, we do not require credentials (cookies) in CORS since we pass the token in 
request headers or handle it in localStorage on the client side.
*/

app.use(express.json());
/*
Built-in Express body-parser middleware that parses incoming requests with JSON payloads into `req.body`.
*/

// =========================================================================================
// PASSPORT MIDDLEWARE REGISTRATION (STATELESS / NO SESSION)
// =========================================================================================
app.use(passport.initialize());
/*
Initializes Passport middleware on the Express application. 
Since we are using stateless JWT authentication, we DO NOT mount `passport.session()`.
The server does not maintain user state in memory or standard express sessions.
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