/*******************************************************************************************************
 *************************************** USER CONTROLLER ***********************************************
 *
 * Topics Covered:
 * - Separating controller business logic from routing
 * - Destructuring JSON data from request bodies (req.body)
 * - Basic backend-side validation for empty fields
 * - Checking database records using model queries (findOne)
 * - Password Hashing using the Bcrypt library (salt rounds, callback handlers, database security)
 * - Sending proper HTTP Status Codes (200 Success, 400 Bad Request)
 * - Exporting controller modules
 *
 *******************************************************************************************************/

// =========================================================================================
// ROLE OF CONTROLLERS IN ARCHITECTURE
// =========================================================================================
/*
In previous classes, when a request hit a URL, we wrote all database operations and logic directly 
inside index.js. In Day 18 and 19, we separate this logic into "controllers".
The controller receives the HTTP request from the route, processes the data, queries the database, 
and returns the HTTP response back to the client.
*/

// =========================================================================================
// CONTROLLER CORE IMPORTS
// =========================================================================================
const { userModel } = require("../model/user.model");
/*
We import the userModel we compiled in user.model.js. We need this to check if a user already 
exists in MongoDB and to insert new registered user documents.
*/

const bcrypt = require("bcrypt");
/*
We import the 'bcrypt' library. Storing plain-text passwords in databases is a major security risk. 
If our database is ever hacked, attackers could steal every password. 
Bcrypt is a library that hashes (encrypts) passwords into unreadable, irreversible strings.
*/

// =========================================================================================
// USER REGISTRATION CONTROLLER
// =========================================================================================
const registration = async (req, res) => {
/*
We define our asynchronous 'registration' function. It handles the request (req) and response (res) objects.
*/

    const { fullName, email, password, phoneNumber } = req.body;
/*
We use JavaScript destructuring to extract fullName, email, password, and phoneNumber directly 
from the request body (req.body). This keeps our code cleaner than writing req.body.fullName, req.body.email, etc.
*/

    if (fullName == "" || email == "" || password == "" || phoneNumber == "") {
        return res.send({ "message": "All fields are required" });
    }
/*
We check if any of the registration fields are empty. If a field is empty, we immediately stop execution 
by returning a response with a message stating that all fields are required. This is basic backend validation.
*/

    const existUser = userModel.findOne({ email });
/*
We call userModel.findOne({ email }) to check if there is already an existing user registered with the same 
email address in our MongoDB database. Since email is unique, we want to prevent duplicate accounts.
*/

    if (existUser) {
        return res.status(400).send({ "message": "User already exist" })
    }
/*
If existUser is not null (meaning a user with that email already exists), we return a status of 400 (Bad Request) 
and a message alerting the client that the user already exists.
*/

    try {
/*
We wrap our asynchronous bcrypt and database saving operations in a try-catch block to gracefully handle 
any unexpected failures.
*/

        bcrypt.hash(password, 5, async function (err, hash) {
/*
We call 'bcrypt.hash()' to encrypt the user's password. It takes three parameters:
1. 'password': The raw password string we want to encrypt.
2. '5' (Salt Rounds): The cost factor. Salt rounds determine how many times the hashing algorithm runs. 
   A higher number makes the hash more secure but takes more time and CPU power. A value of 5 is a standard classroom choice.
3. Callback Function: Runs once the hashing is finished. It receives:
   - 'err': Any error encountered during hashing.
   - 'hash': The final securely encrypted password string.
*/

            if (err) {
                return res.send({ "message": "There is error while creating account" })
            } else {
/*
If hashing fails, we return an error message. If it succeeds, we proceed to create and save the user.
*/

                const user = new userModel({ fullName, email, password: hash, phoneNumber });
/*
We instantiate a new document using the userModel. We pass in the destructured values, replacing the raw 
password with the newly generated secure 'hash'.
*/

                await user.save();
/*
We call 'user.save()' to write the new user document into our MongoDB database, using 'await' to wait until 
the database operation is fully completed.
*/

                res.status(200).send({ "message": "Registration is completed" })
/*
We send a success response with HTTP status code 200 (OK) to notify the frontend that registration was successful.
*/

            }
        });

    } catch (error) {
/*
If any database or code errors occur inside the try block, execution jumps to this catch block.
*/

        res.status(400).send({ "message": error })
/*
We send the error message back to the client along with a status 400 (Bad Request).
*/

    }
}

// =========================================================================================
// EXPORTING CONTROLLERS
// =========================================================================================
module.exports = {
    registration
}
/*
We export the registration function using module.exports so that our routes file can import and bind it 
to specific URL paths.
*/