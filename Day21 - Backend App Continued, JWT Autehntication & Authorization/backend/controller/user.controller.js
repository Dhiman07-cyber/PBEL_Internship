/*******************************************************************************************************
 *************************************** USER CONTROLLER (DAY 21 UPDATE) *******************************
 *
 * New Topics Covered in Day 21:
 * - User Authentication & Login handling
 * - Verifying hashed passwords using Bcrypt (`bcrypt.compare`)
 * - Generation of JSON Web Tokens (JWT) using `jwt.sign()`
 * - Statistically attaching payload data (userId) into JWT tokens
 * - Setting token expiration (`expiresIn: '1h'`)
 * - Returning authentication tokens to the client application
 *
 * Cross-File & Architecture References:
 * - Imported by: `routes/user.route.js` (or mounted route endpoints)
 * - Model Used: `userModel` defined in `../model/user.model.js`
 * - Library Dependencies: `jsonwebtoken` (npm package), `bcrypt` (npm package)
 * - Connected Frontend: Token generated here is received by `frontend/login.js` and saved in `localStorage`
 *******************************************************************************************************/

// =========================================================================================
// IMPORTS
// =========================================================================================
const { userModel } = require("../model/user.model");
/*
We import userModel from user.model.js to query MongoDB for registered users during 
registration and login verification.
*/

const bcrypt = require("bcrypt");
/*
We import bcrypt to securely compare plaintext user passwords with the hashed passwords stored in MongoDB.
*/

// [NEW IN DAY 21] JWT (JSON Web Token) IMPORT
const jwt = require("jsonwebtoken");
/*
WHY IS THIS NEEDED?
HTTP is a stateless protocol — it does not remember users between separate requests.
JWT (JSON Web Token) is an industry-standard mechanism to encode user identity into a signed,
compact string (token). Once logged in, the server signs a token and gives it to the user.
The client then sends this token in subsequent requests to prove their identity without re-entering credentials.
*/

// =========================================================================================
// USER REGISTRATION CONTROLLER (Existing from Day 19)
// =========================================================================================
const registration = async (req, res) => {

    const { fullName, email, password, phoneNumber } = req.body;

    if (fullName == "" || email == "" || password == "" || phoneNumber == "") {
        return res.send({ "message": "All fields are required" });
    }

    const existUser = await userModel.findOne({email});
    console.log(existUser)

    if(existUser){
        return res.status(400).send({"message":"User already exist"})
    }

    try {
        bcrypt.hash(password, 5,  async function (err, hash) {
            if (err) {
                return res.send({ "message": "There is error while creating account" })
            } else {
                const user = new userModel({ fullName, email, password:hash, phoneNumber });
                await user.save();

                res.status(200).send({ "message": "Registration is completed" })
            }
        });

    } catch (error) {
        res.status(500).send({message:"Internal Server Error", error:error.message})
    }
}

// =========================================================================================
// [NEW IN DAY 21] USER LOGIN CONTROLLER (`userLogin`)
// =========================================================================================
/*
ROLE OF THIS FUNCTION:
Handles user authentication by validating email & password credentials, and upon successful validation,
issues a signed JWT token back to the user.
*/
const userLogin = async(req, res) => {

    // 1. Destructure incoming credentials from the HTTP request body (sent by frontend `login.js`)
    const { email, password } = req.body;

    try {
        // 2. Query MongoDB collection via `userModel` to check if a user exists with the provided email
        const existUser = await userModel.findOne({email});

        if(existUser){
            /*
            3. `bcrypt.compare(plaintextPassword, hashedPassword, callback)`
               WHY? Passwords stored in DB are hashed (irreversible). We cannot do `if (password === existUser.password)`.
               Instead, `bcrypt.compare` hashes the incoming `password` with the salt saved in `existUser.password`
               and checks if they match.
               - `password`: The raw string password submitted in `req.body`.
               - `existUser.password`: The securely hashed password string stored in MongoDB.
               - `result`: Boolean true if passwords match, false if wrong password.
            */
            bcrypt.compare(password, existUser.password, function(err, result) {
                if(result){
                    /*
                    4. `jwt.sign(payload, secretKey, options)`
                       WHAT IT DOES: Encodes a JSON object (payload) into a signed cryptographic token string.
                       PARAMETERS EXPLAINED:
                       - Payload `{ userId: existUser._id }`: Embeds the user's MongoDB unique `_id` into the token payload.
                       - Secret Key `"PBEL"`: A secret signature key used by the server to sign the token so no client can tamper with it.
                       - Options `{ expiresIn: '1h' }`: Sets token lifespan to 1 hour for security. After 1 hour, the token expires.
                    
                       WHERE IS THIS USED NEXT?
                       The returned `token` is sent to `frontend/login.js`, where it is saved in browser's `localStorage`
                       and later sent in `Authorization` headers for protected routes like `GET /api/user`.
                    */
                    const token = jwt.sign({ userId: existUser._id }, "PBEL", { expiresIn: '1h' });
                    
                    // 5. Send HTTP 200 (Success) with response body containing user details and authentication token
                    res.status(200).send({ "message": "Login is successful", user:{user:existUser, token} })
                } else {
                    // Password comparison failed (incorrect password)
                    res.status(400).send({ "message": "Invalid credentials" })
                }
            });
        } else {
            // No user found with the given email address in MongoDB
            res.status(400).send({ "message": "User not found" })
        }

    } catch (error) {
        // Handle unexpected server/database failures
        res.status(500).send({message:"Internal Server Error", error:error.message})
    }

}

// =========================================================================================
// EXPORTS
// =========================================================================================
module.exports = {
    registration, 
    userLogin // Exporting new userLogin function for use in routes
}