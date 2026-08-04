/*******************************************************************************************************
 *************************************** BACKEND ENTRY POINT *******************************************
 *
 * Topics Covered:
 * - Introduction to Professional Backend Folder Architecture
 * - The role of index.js as the application bootstrapper
 * - Connecting Express Server to MongoDB using Mongoose Connection Promise
 * - Managing cross-origin resource sharing (CORS) and environment variables
 * - Defining server endpoints (app.get) and handling requests
 *
 *******************************************************************************************************/

// =========================================================================================
// PRODUCTION-GRADE BACKEND FOLDER STRUCTURE
// =========================================================================================
/*
As backend applications grow, placing all code in index.js makes the codebase impossible to maintain. 
To write professional, clean code, we organize the project into distinct directories. 
Here is today's new folder architecture:

backend/
├── config/       <-- Stores configuration setup (e.g., database connection settings in db.js)
├── controller/   <-- Houses business logic and database interactions (e.g., user.controller.js)
├── middleware/   <-- Holds helper functions executed before requests reach controllers (e.g., auth.js)
├── model/        <-- Holds database schema blueprints and model wrappers (e.g., user.model.js)
├── routes/       <-- Defines the API URL endpoints and maps them to controllers (e.g., user.route.js)
├── index.js      <-- The entry point that boots up the server and imports core components
├── .env          <-- Holds environment variables (like PORT and Database URIs)
└── package.json  <-- Stores project metadata and dependency list (Express, Mongoose, Cors, Dotenv)

Each folder has a single, distinct responsibility. This separation makes it easy to add features, 
write tests, and collaborate with other developers.
*/

// =========================================================================================
// CORE IMPORTS AND CONFIGURATION
// =========================================================================================
const express = require('express');
/*
We import the Express framework to create our server and handle HTTP requests.
*/

const cors = require('cors');
/*
We import the CORS (Cross-Origin Resource Sharing) middleware. This allows our backend to safely accept 
requests from different domains, such as a frontend application running on localhost:5500.
*/

const app = express();
/*
We initialize our Express application instance, which we configure with middleware and routes.
*/

require('dotenv').config();
/*
We invoke the configuration method of the 'dotenv' library. This reads our key-value pairs inside the 
secret '.env' file and attaches them to 'process.env', making them accessible in our code.
*/

const PORT = process.env.PORT;
/*
We extract the PORT number from process.env, which was defined inside our secret .env file.
*/

const { connection } = require('./config/db');
/*
We import the database connection promise ('connection') from our newly created config folder (config/db.js). 
By doing this, we keep index.js clean and delegate the database connection setup to db.js.
*/


app.use(cors());
/*
We register the CORS middleware globally. Every request entering our server will pass through this middleware 
to ensure the browser does not block cross-origin requests.
*/


app.listen(PORT, async () => {
/*
We start listening for incoming requests on our PORT. We pass an asynchronous callback function (using 'async') 
because we need to wait for our MongoDB database connection to be fully established before the server is ready.
*/

    try {
/*
We wrap our database connection wait in a try-catch block. If MongoDB fails to connect (e.g., wrong password, 
no internet, or invalid URI), the catch block will intercept the failure and prevent our server from crashing.
*/

        await connection;
/*
We use 'await' on the 'connection' Promise we imported from db.js. The execution pauses here and resumes only 
when Mongoose successfully establishes the connection to MongoDB Atlas.
*/

        console.log("Connection to DB is established");
/*
This log prints to the server terminal only if the connection is successfully established without errors.
*/

    } catch (error) {
/*
If Mongoose fails to connect to MongoDB, the promise rejects, and execution jumps directly here.
*/

        console.log(error);
/*
We log the connection error to the terminal to help us debug database connection issues.
*/

    }
    console.log(`Server is running on ${PORT}`);
/*
Once the connection attempt is finished (success or fail), we log that the Express server itself is listening 
on the specified PORT.
*/

});


app.get('/', (req, res) => {
/*
We define a simple GET route for the root URL ('/').
*/

    res.send('<h2 style="color: violet; text-align: center;">Server is running, Welcome!</h2>');
/*
When someone visits the home URL, we send a decorative HTML response welcoming them, showing that the server is alive.
*/

});


const users = [
    {
        "name": "Noyon",
        "uni": "AdtU"
    },
    {
        "name": "Bikash",
        "uni": "AdtU"
    },
    {
        "name": "Suraj",
        "uni": "AdtU"
    }
]
/*
This is a mock array of user data. Before connecting our controllers and routes to the real database in class, 
we used this local array as dummy data for testing.
*/


app.get('/users', (req, res) => {
/*
We define a GET route at '/users'.
*/

    res.json(users);
/*
We send the mock 'users' array back to the client as a JSON response. In a fully completed database architecture, 
this route would instead use our imported user route, which calls a controller to retrieve these users dynamically 
from MongoDB.
*/

});