/*******************************************************************************************************
 * *************************************** DATABASE CONNECTION *******************************************
 *
 * Topics Covered:
 * - Separating database connection config from index.js
 * - Configuring DNS servers to fix local network SRV lookup issues (querySrv ECONNREFUSED)
 * - Connecting to MongoDB Atlas using Mongoose with environment variables
 * - Exporting the connection promise
 *
 *******************************************************************************************************/

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

// =========================================================================================
// LOCAL DOTENV CONFIGURATION
// =========================================================================================
require('dotenv').config();

// =========================================================================================
// DATABASE CONNECTION SETUP
// =========================================================================================
const connection = mongoose.connect(process.env.MONGODB_URI);

module.exports = {
    connection
};



