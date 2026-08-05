/*******************************************************************************************************
 *************************************** DATABASE CONNECTION *******************************************
 *
 * Topics Covered:
 * - Separating database connection config from index.js
 * - Integrating dotenv configuration locally inside the db config file
 * - Connecting to MongoDB using Mongoose with process.env.MONGODB_URI
 * - Exporting the connection promise
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
const mongoose = require("mongoose");

// =========================================================================================
// DNS SRV LOOKUP FIX (querySrv ECONNREFUSED)
// =========================================================================================
const dns = require('dns');
/*
IMPORTANT NOTE ON DATABASE CONNECTION ERRORS:
-----------------------------------------------------------------------------------------
1. Why this error occurs:
   MongoDB Atlas uses 'mongodb+srv://' connection URIs which perform DNS SRV record lookups.
   On certain local networks or ISPs (e.g., Jio, Airtel, mobile hotspots, or college Wi-Fi), 
   the default router DNS server blocks or fails to resolve DNS SRV records, triggering a 
   'querySrv ECONNREFUSED' error.

2. Is this required for everyone?
   No! This fix is NOT necessarily required on every machine or network. If your network/ISP's 
   default DNS resolves SRV records properly (like your instructor's system), you don't need 
   any changes. You only need a fix if you encounter 'querySrv ECONNREFUSED' errors.

3. Two ways to solve this issue:
   
   • OPTION A (Code-level fix): 
     Add 'dns.setServers(['8.8.8.8', '8.8.4.4'])' as done below. This forces Node.js to use 
     Google's Public DNS specifically for this application regardless of local router DNS restrictions.
     
   • OPTION B (System-level fix - Recommended so you don't need code edits):
     Set your Windows network adapter DNS to Google DNS globally so all Node apps work automatically:
     - Press Win + R, type 'ncpa.cpl', and hit Enter.
     - Right-click your active Wi-Fi/Ethernet connection -> Properties.
     - Select 'Internet Protocol Version 4 (TCP/IPv4)' -> Properties.
     - Select 'Use the following DNS server addresses':
         Preferred DNS:  8.8.8.8
         Alternate DNS:  8.8.4.4
     - Click OK. Once configured in Windows, this explicit code block is no longer needed!
-----------------------------------------------------------------------------------------
*/
dns.setServers(['8.8.8.8', '8.8.4.4']);

/*
Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It acts as a bridge between 
our JavaScript code and MongoDB. Instead of writing raw database queries, Mongoose helps us manage 
relationships between data, validate data formats, and translate JavaScript objects into MongoDB documents.
*/

// =========================================================================================
// LOCAL DOTENV CONFIGURATION
// =========================================================================================
require('dotenv').config()
/*
In Day 18, require('dotenv').config() was called inside index.js. In Day 19, we load the environment 
variables directly inside db.js as well. This ensures that when db.js is imported, all variables 
defined inside the .env file (specifically MONGODB_URI) are parsed and attached to process.env immediately 
before Mongoose attempts to execute the connect function.
*/

// =========================================================================================
// DATABASE CONNECTION SETUP
// =========================================================================================
const connection = mongoose.connect(process.env.MONGODB_URI);
/*
We initiate the connection to our MongoDB database by calling mongoose.connect(). We pass in process.env.MONGODB_URI, 
which contains our secret database connection string retrieved from the .env environment configuration file.
Note that the key changed from MONGO_URI (Day 18) to MONGODB_URI (Day 19).
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