/*******************************************************************************************************
 *************************************** USER MODEL & SCHEMA (GOOGLE OAUTH) *****************************
 *
 * Topics Covered:
 * - What is a Mongoose Schema for third-party OAuth (Google Sign-In)?
 * - Defining user profile fields: `name`, `googleId`, `email`, `picture`
 * - Setting up Mongoose constraints (`required: true`, `unique: true`)
 * - Enabling automatic audit timestamps (`{ timestamps: true }` -> `createdAt`, `updatedAt`)
 * - Compiling the schema into a Mongoose Model for database CRUD operations
 * - Exporting the User Model for use in Passport authentication strategy
 *
 * Cross-File & Architecture References:
 * - Strategy Consumer: `passport/google.js` uses `userModel` to find or create Google users
 * - Database: Maps to the `users` collection in MongoDB Atlas
 *
 *******************************************************************************************************/

// =========================================================================================
// ROLE OF THE MODEL LAYER IN OAUTH AUTHENTICATION
// =========================================================================================
/*
In previous days (Day 18 - Day 24), our User model stored credentials for standard local email/password 
authentication (including hashed passwords and phone numbers).

In Day 32, we introduce Google OAuth 2.0 / OpenID Connect authentication. Because Google handles user 
password security and identity verification on their secure servers, we DO NOT store passwords here.
Instead, we store the unique Google Account identifier (`googleId`), user profile details (`name`, 
`email`, `picture`), and automatic creation timestamps.
*/

// =========================================================================================
// MONGOOSE IMPORT
// =========================================================================================
const mongoose = require("mongoose");
/*
We import Mongoose to access its Schema builder (`mongoose.Schema`) and Model compiler (`mongoose.model`).
*/

// =========================================================================================
// DEFINING THE OAUTH USER SCHEMA
// =========================================================================================
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    googleId: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    picture: {
        type: String
    }
}, { timestamps: true });
/*
Breakdown of Schema Fields:
1. `name`: String type, required. Stores the user's full display name received from Google profile.
2. `googleId`: String type, required. The unique, immutable account ID issued by Google for this user.
   This ID allows us to identify returning users on subsequent Google logins.
3. `email`: String type, required, unique. The user's primary email address from their Google account.
   Enforcing `unique: true` prevents duplicate user accounts in MongoDB.
4. `picture`: String type, optional. URL pointing to the user's Google profile avatar photo.
5. `{ timestamps: true }`: Schema option that automatically creates and manages `createdAt` and 
   `updatedAt` Date fields in every document.
*/

// =========================================================================================
// COMPILING THE USER MODEL
// =========================================================================================
const userModel = mongoose.model("user", userSchema);
/*
We compile the `userSchema` into a usable Mongoose Model via `mongoose.model()`.
- Argument 1: "user" (MongoDB will automatically create/use the plural collection "users").
- Argument 2: `userSchema` (the schema structure defined above).
This model provides querying methods such as `userModel.findOne()`, `userModel.create()`, and `userModel.findById()`.
*/

// =========================================================================================
// EXPORTING THE MODEL
// =========================================================================================
module.exports = {
    userModel
};
/*
We export `userModel` so that `passport/google.js` and other controller/routing files can import it to 
query and persist user records in the database.
*/