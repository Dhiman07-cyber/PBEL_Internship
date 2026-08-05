/*******************************************************************************************************
 *************************************** PROTECTED PROFILE & CART CONTROLLER ***************************
 *
 * New Topics Covered in Day 21:
 * - Accessing protected resources using middleware-injected request headers
 * - Querying MongoDB user records by ID using `userModel.findById()`
 * - Security Field Projection (`select("-password")`) to omit sensitive data from API payload
 * - Handling authorization-protected HTTP responses (200 OK, 404 Not Found, 500 Error)
 *
 * Cross-File & Architecture References:
 * - Upstream Middleware: `middleware/auth.js` (`authCheck`) intercepts the request, verifies JWT token,
 *   and attaches `req.headers.userId = decoded.userId` BEFORE this controller is invoked.
 * - Model Used: `userModel` imported from `../model/user.model.js`
 * - Downstream Consumer: Called when `frontend/user.js` sends `GET /api/user` request with Authorization header.
 *******************************************************************************************************/

// =========================================================================================
// IMPORTS
// =========================================================================================
const { userModel } = require("../model/user.model");
/*
We import userModel from user.model.js to query MongoDB for user profile details by ID.
*/

// =========================================================================================
// USER PROFILE CONTROLLER (`userProfile`)
// =========================================================================================
/*
ROLE OF THIS CONTROLLER:
Fetches the profile details of the authenticated user whose request passed through `authCheck` middleware.
*/
const userProfile = async (req, res) => {

    // 1. Extract `userId` from `req.headers`
    // CRITICAL: `req.headers.userId` was NOT sent directly by the client browser!
    // It was injected into headers by `middleware/auth.js` after successfully verifying the JWT token.
    const { userId } = req.headers;

    try {
        /*
        2. Query MongoDB by User ID using `userModel.findById(userId).select("-password")`
           - `findById(userId)`: Finds the document in the `users` collection whose `_id` matches `userId`.
           - `.select("-password")`: MongoDB Projection modifier. The minus `-` prefix explicitly EXCLUDES 
             the `password` hash field from the query output. This ensures the hashed password is NEVER 
             exposed across the network, preserving privacy & security!
        */
        const user = await userModel.findById(userId).select("-password");

        if(user){
            // 3. User found: Send HTTP 200 (OK) with profile payload back to `frontend/user.js`
            res.status(200).send({ "message": "User profile fetched successfully", user })
        } else {
            // 4. User ID not found in database: Send HTTP 404 (Not Found)
            res.status(404).send({ "message": "User not found" })
        }
    } catch (error) {
        // 5. Database or Server Exception: Send HTTP 500 (Internal Server Error)
        res.status(500).send({message:"Internal server error", error:error.message})
    }
}

// =========================================================================================
// EXPORTS
// =========================================================================================
module.exports = {
    userProfile
}