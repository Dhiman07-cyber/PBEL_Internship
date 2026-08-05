/*******************************************************************************************************
 *************************************** AUTHENTICATION MIDDLEWARE (`auth.js`) **************************
 *
 * New Topics Covered in Day 21:
 * - Express Middleware Architecture: The role of `next()` function
 * - Intercepting client request headers (`req.headers.authorization`)
 * - Verifying & decoding JWT tokens using `jwt.verify()`
 * - Cross-verifying decoded `userId` against MongoDB database
 * - Header Injection: Passing authenticated user state (`req.headers.userId`) down to controllers
 * - Handling Authentication Errors (401 Unauthorized, 500 Internal Server Error)
 *
 * Cross-File & Architecture References:
 * - Upstream Caller: Frontend request in `frontend/user.js` sends `headers: { "Authorization": token }`
 * - Model Used: `userModel` imported from `../model/user.model.js`
 * - Downstream Target: Upon `next()`, request proceeds to `controller/cart.controller.js` (`userProfile`)
 *******************************************************************************************************/

// =========================================================================================
// IMPORTS
// =========================================================================================
const jwt = require("jsonwebtoken");
/*
We import the `jsonwebtoken` package to cryptographically verify incoming JWT tokens sent by clients.
*/

const { userModel } = require("../model/user.model");
/*
We import userModel to verify that the user ID embedded in the JWT token still exists in MongoDB.
*/

require('dotenv').config();
/*
Loads environment variables from `.env` file into `process.env`.
*/

// =========================================================================================
// AUTH CHECK MIDDLEWARE (`authCheck`)
// =========================================================================================
/*
WHAT IS AN EXPRESS MIDDLEWARE?
A function that runs IN BETWEEN receiving the HTTP request and executing the final controller.
It takes three parameters: `req` (request), `res` (response), and `next` (function to pass control forward).
*/
const authCheck = (req, res, next) => {

    // 1. Extract the authorization token from request headers sent by frontend (`frontend/user.js`)
    const token = req.headers.authorization;

    /*
    2. `jwt.verify(token, secretKey, callback)`
       WHAT IT DOES: Cryptographically verifies if the token was signed by our server key ("PBEL")
       and checks whether the token is valid and unexpired.
       - `token`: The JWT string received from `req.headers.authorization`.
       - `'PBEL'`: Secret key used during token creation in `user.controller.js` (`jwt.sign`).
       - `err`: Populated if token is tampered, invalid, or expired.
       - `decoded`: The payload object decoded from token (e.g. `{ userId: "..." }`).
    */
    jwt.verify(token, 'PBEL', async(err, decoded) => {
        if(err){
            // Token is invalid, expired, or corrupted: Send 401 Unauthorized
            res.status(401).send({message:"Unauthorized access", error:err.message})
        } else {
            try {
                // 3. User ID decoded successfully: Check if user exists in MongoDB database
                const user = await userModel.findById(decoded.userId);
                
                if(user){
                    /*
                    4. HEADER INJECTION & PASSING CONTROL (`next()`)
                       - `req.headers.userId = decoded.userId`: We attach the decoded user ID to the `req.headers` object.
                         This allows downstream controllers (like `cart.controller.js`) to access `req.headers.userId` directly!
                       - `next()`: Tells Express that authentication succeeded, and transfers execution to the next controller!
                    */
                    req.headers.userId = decoded.userId;
                    next();
                } else {
                    // Decoded userId does not exist in database: Block access with 401 Unauthorized
                    res.status(401).send({message:"Unauthorized access"})
                }
            } catch (error) {
                // Internal database error during lookup: Send 500
                res.status(500).send({message:"Internal server error", error:error.message})
            }
        }
    })

}

// =========================================================================================
// EXPORTS
// =========================================================================================
module.exports = {
    authCheck
}