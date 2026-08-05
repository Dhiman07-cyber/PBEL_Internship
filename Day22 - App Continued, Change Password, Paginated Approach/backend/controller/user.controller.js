/*******************************************************************************************************
 *************************************** USER CONTROLLER (DAY 22 UPDATE) *******************************
 *
 * New Topics Covered in Day 22:
 * - Password Change Flow (`changePassword`) with re-authentication via `bcrypt.compare`
 * - Re-hashing new passwords (`bcrypt.hash`) and updating database documents
 * - Server-Side Database Pagination (`getAllUsers`)
 * - Query Parameters (`req.query.page`, `req.query.limit`)
 * - MongoDB Pagination Methods: `.skip(skip)` and `.limit(limit)`
 * - Document Counting (`userModel.countDocuments()`) and dynamic total pages calculation (`Math.ceil`)
 *
 * Cross-File & Architecture References:
 * - Model Used: `userModel` imported from `../model/user.model.js`
 * - Upstream Middleware: `middleware/auth.js` (`authCheck`) validates JWT token and injects `req.headers.userId` for `changePassword`
 * - Frontend Consumers: 
 *   - `changePass.js` sends `POST /api/change-password` with old & new passwords and JWT token
 *   - `users.js` sends `GET /api/users?page=1&limit=6` to fetch paginated user lists
 *******************************************************************************************************/

// =========================================================================================
// IMPORTS
// =========================================================================================
const { userModel } = require("../model/user.model");
/*
We import userModel to perform CRUD operations (finding users, updating passwords, counting total documents).
*/

const bcrypt = require("bcrypt");
/*
We import bcrypt for verifying current passwords (`bcrypt.compare`) and hashing new passwords (`bcrypt.hash`).
*/

const jwt = require("jsonwebtoken");
/*
We import jsonwebtoken to sign authentication tokens upon successful user login.
*/

// =========================================================================================
// USER REGISTRATION CONTROLLER
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
// USER LOGIN CONTROLLER
// =========================================================================================
const userLogin = async(req, res) =>{

    const { email, password } = req.body;

    try {
        const existUser = await userModel.findOne({email});

        if(existUser){
            bcrypt.compare(password, existUser.password, function(err, result) {
                if(result){
                    // Day 22 update: Extended token lifespan options (5 hours)
                    const token = jwt.sign({ userId: existUser._id }, "PBEL", { expiresIn: '5h' });
                    res.status(200).send({ "message": "Login is successful", user:{user:existUser, token} })
                } else {
                    res.status(400).send({ "message": "Invalid credentials" })
                }
            });
        } else {
            res.status(400).send({ "message": "User not found" })
        }

    } catch (error) {
        res.status(500).send({message:"Internal Server Error", error:error.message})
    }

}

// =========================================================================================
// [NEW IN DAY 22] CHANGE PASSWORD CONTROLLER (`changePassword`)
// =========================================================================================
/*
ROLE OF THIS CONTROLLER:
Allows an authenticated user to change their existing password by verifying their old password first.
*/
const changePassword = async(req, res) => {
    // 1. Extract oldPassword and newPassword from request body (sent by `changePass.js`)
    const { oldPassword, newPassword } = req.body;

    // 2. Extract userId injected by `middleware/auth.js` (`authCheck`) into `req.headers`
    const { userId } = req.headers;

    // 3. Find user record in MongoDB using the authenticated userId
    const existUser = await userModel.findById(userId);

    // Basic empty field validation
    if(oldPassword == "" || newPassword == ""){
        return res.status(400).send({ "message": "All fields are required" });
    }

    try {
         /*
         4. VERIFY OLD PASSWORD:
            `bcrypt.compare(oldPassword, existUser.password, callback)`
            Compares raw `oldPassword` with the securely hashed password currently saved in MongoDB.
         */
         bcrypt.compare(oldPassword, existUser.password, async function(err, result){
            if(result){
                /*
                5. HASH NEW PASSWORD:
                   If old password is verified, we hash `newPassword` with 6 salt rounds before saving.
                */
                bcrypt.hash(newPassword, 6, async function (err, hash) {
                    if(err){
                        return res.status(500).send({message:"Internal Server Error", error:err.message})
                    }

                    // 6. Update user's password property with new hash and save back to MongoDB
                    existUser.password = hash;
                    await existUser.save();
                    res.status(200).send({ "message": "Password changed successfully" })
                })
            } else {
                // Old password verification failed
                res.status(400).send({ "message": "Password is incorrect" })
            }
         })
        
    } catch (error) {
        res.status(500).send({message:"Internal Server Error", error:error.message})
    }
}

// =========================================================================================
// [NEW IN DAY 22] PAGINATED ALL USERS CONTROLLER (`getAllUsers`)
// =========================================================================================
/*
ROLE OF THIS CONTROLLER:
Retrieves a paginated list of user documents from MongoDB to prevent loading thousands of records at once.
*/
const getAllUsers = async(req, res) => {
    /*
    1. QUERY PARAMETERS EXTRACTION & DEFAULT VALUES:
       - `req.query.page`: Extracted from URL (e.g. `/api/users?page=2`). Defaults to page 1.
       - `req.query.limit`: Extracted from URL (e.g. `/api/users?limit=5`). Defaults to limit 5 per page.
       - `Number(...)`: Converts query string inputs into numeric integer values.
    */
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;

    /*
    2. SKIP CALCULATION:
       Formula: `skip = (page - 1) * limit`
       - Page 1: (1 - 1) * 5 = 0 (Skip 0 records, return items 1 to 5)
       - Page 2: (2 - 1) * 5 = 5 (Skip first 5 records, return items 6 to 10)
    */
    const skip = (page - 1) * limit;

    try {
        /*
        3. PAGINATED MONGODB QUERY:
           - `.find()`: Fetches user documents.
           - `.select("-password")`: Excludes sensitive password hash field.
           - `.skip(skip)`: Skips the calculated number of initial records.
           - `.limit(limit)`: Restricts the response payload to at most `limit` documents.
        */
        const user = await userModel.find().select("-password").skip(skip).limit(limit);
        
        /*
        4. METADATA CALCULATION:
           - `countDocuments()`: Gets total count of user documents in MongoDB collection.
           - `totalPages`: Calculated using `Math.ceil(totalUsers / limit)` to round up partial pages.
        */
        const totalUser = await userModel.countDocuments();
        const totalPages = Math.ceil(totalUser / limit);

        // 5. Send HTTP 200 (OK) with paginated items list and pagination metadata
        res.status(200).send({
            "message": "Users fetched successfully",
            "users": user,
            "totalUsers": totalUser,
            "totalPages": totalPages,
            "currentPage": page
        })

    } catch (error) {
        return res.status(500).send({message:"Internal Server Error", error:error.message})
    }
}

// =========================================================================================
// EXPORTS
// =========================================================================================
module.exports = {
    registration, 
    userLogin, 
    changePassword, // [NEW IN DAY 22]
    getAllUsers     // [NEW IN DAY 22]
}