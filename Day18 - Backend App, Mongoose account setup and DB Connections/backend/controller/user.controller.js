/*******************************************************************************************************
 *************************************** USER CONTROLLER ***********************************************
 *
 * Topics Covered:
 * - What are Controllers and why do we use them?
 * - Separating business logic from request routing
 * - Handling request payload (req.body)
 * - Interacting with Mongoose Models (create and save operations)
 * - Sending responses and error handling with try-catch blocks
 *
 *******************************************************************************************************/

// =========================================================================================
// ROLE OF CONTROLLERS IN ARCHITECTURE
// =========================================================================================
/*
In previous classes, when a request hit a URL, we wrote the database operations and logic directly 
inside index.js within the route handler function. 

In a professional architecture, we separate this logic into "controllers".
The responsibilities of Controllers are:
• Receive requests.
• Extract request payloads and parameters (like req.body, req.params).
• Call Database Models to read, write, or update data.
• Execute business logic (validations, calculations, formatting).
• Return responses (success or error messages) to the client.

By keeping controllers separate:
- Routes only handle the mappings (URL -> Controller).
- Controllers handle what actually happens when that URL is requested.
- Models handle the data storage rules.
*/

// =========================================================================================
// USER REGISTRATION CONTROLLER
// =========================================================================================
const registration = async (req, res) => {
/*
We define an asynchronous function 'registration' that accepts the Express request (req) and response (res) objects. 
We use 'async' because database operations (like creating and saving a user) are asynchronous and return Promises. 
Using async/await allows us to write this asynchronous database code in a clean, synchronous-looking style.
*/

    const userData = req.body;
/*
We extract the JSON data sent by the client in the request body (e.g., from a registration form on the frontend) 
and store it in 'userData'. This contains the user's name, email, password, and phone number.
*/

    try {
/*
We wrap our database operations in a 'try' block. Database queries can fail for many reasons (e.g., database server is down, 
validation fails, or email is already registered). The try block lets us attempt these operations safely.
*/

        const user = await userModel.create(userData);
/*
We call 'userModel.create(userData)' to create a new instance of our User model prepopulated with the request data. 
Under the hood, Mongoose validates this data against the schema we defined in 'user.model.js'. 
If validation succeeds, it returns a new document instance. We use 'await' to wait for this creation to complete.
*/

        await user.save();
/*
Once the user document is created, we call 'user.save()' to write the data permanently into our MongoDB database. 
We use 'await' to make sure the program waits until the database confirms the user has been successfully saved.
*/

        res.send({ message: "User registered successfully", user });
/*
If both the creation and save processes succeed, we send a HTTP response back to the client with a status 200 (Success) 
and a JSON object containing a success message and the saved user details.
*/

    } catch (error) {
/*
If any error occurs inside the 'try' block (such as a duplicate email violation or missing field), execution immediately 
jumps to this 'catch' block, capturing the error details in the 'error' parameter.
*/

        console.log(error);
/*
We print the error details to the server console so that we can debug what went wrong during the registration process.
*/

    }
}