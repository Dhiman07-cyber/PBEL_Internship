/*******************************************************************************************************
 *************************************** DATABASE CONNECTION *******************************************
 *
 * Topics Covered:
 * - Separation of database connection configuration from index.js
 * - Importing Mongoose for MongoDB communication
 * - Configuring DNS servers for resolving local database connection issues
 * - Connecting to MongoDB using Environment Variables
 * - Exporting the connection promise to make it available globally
 *
 *******************************************************************************************************/

// =========================================================================================
// WHY SEPARATE THE DATABASE CONNECTION?
// =========================================================================================
/*
In previous classes, we wrote all our logic inside index.js. As our applications grow, keeping everything 
in a single file makes the code hard to read, debug, and maintain. 

This file, db.js, is stored in a new folder called "config". The sole responsibility of this folder and file 
is to configure and manage the database connection. By separating this logic, we keep our index.js clean 
and focused only on booting up the server and managing requests.
*/

// =========================================================================================
// MONGOOSE IMPORT
// =========================================================================================
const mongoose = require('mongoose');
/*
Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It acts as a bridge between 
our JavaScript code and MongoDB. Instead of writing raw database queries, Mongoose helps us manage 
relationships between data, validate data formats, and translate JavaScript objects into MongoDB documents.
*/

// =========================================================================================
// DATABASE CONNECTION SETUP
// =========================================================================================
const connection = mongoose.connect(process.env.MONGO_URI);
/*
We initiate the connection to our MongoDB database by calling mongoose.connect(). We pass in process.env.MONGO_URI, 
which contains our secret database connection string retrieved from the .env environment configuration file.
This connection returns a Promise. We store this Promise in the 'connection' variable, which will resolve 
once the connection is successfully established or reject if there's an error. We don't await the connection 
here because we want to export it and await it in index.js when starting up our server.
*/

// =========================================================================================
// EXPORTING THE CONNECTION
// =========================================================================================
module.exports = {
    connection
}
/*
We export the 'connection' object using module.exports so that index.js can import it and wait for the database 
connection to complete before starting to listen for user requests on the port.
*/