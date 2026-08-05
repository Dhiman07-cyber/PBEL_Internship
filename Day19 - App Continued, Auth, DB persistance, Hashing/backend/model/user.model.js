/*******************************************************************************************************
 *************************************** USER MODEL AND SCHEMA *****************************************
 *
 * Topics Covered:
 * - What is a Mongoose Schema? (defining types, constraints, validations)
 * - Mapping specific user collection requirements (fullName, email, password, phoneNumber)
 * - Setting up Mongoose validation constraints (`required`, `unique`)
 * - Compiling schemas into a Mongoose Model for database queries
 * - Exporting the Model
 *
 *******************************************************************************************************/

// =========================================================================================
// ROLE OF THE MODEL LAYER
// =========================================================================================
/*
In backend applications, we separate the data structure from the routing and controllers. 
The "model" folder contains files that act as a blueprint for our database collections.
Here, we define user.model.js which holds the definition for our "users" collection inside MongoDB.
*/

// =========================================================================================
// MONGOOSE IMPORT
// =========================================================================================
const mongoose = require("mongoose");
/*
We import Mongoose here because we need its built-in functions:
1. mongoose.Schema: To build the structural blueprint.
2. mongoose.model: To create the database interface helper.
*/

// =========================================================================================
// DEFINING THE USER SCHEMA
// =========================================================================================
const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    }
});
/*
We define a new Mongoose Schema using 'new mongoose.Schema()'.
A Schema is a blueprint that tells MongoDB what fields our documents can contain, their data types, 
and any validation rules. 

Let's look at the fields defined for our user document (note the changes from Day 18):
- 'fullName': Changed from 'name' (in Day 18) to represent the user's full name. It is a String and required.
- 'email': String type, required, and unique. Mongoose enforces uniqueness inside the MongoDB database.
- 'password': String type and required.
- 'phoneNumber': Changed from 'phone' (in Day 18). It is a Number type and is required.
*/

// =========================================================================================
// COMPILING THE USER MODEL
// =========================================================================================
const userModel = mongoose.model("user", userSchema);
/*
We compile our blueprint schema into a Mongoose Model by calling 'mongoose.model()'. 
The model is an interface object that allows us to interact with the database (performing CRUD).

We pass two arguments:
1. 'user': The singular name of the collection. MongoDB automatically pluralizes this to 'users'.
2. 'userSchema': The schema blueprint we defined.
*/

// =========================================================================================
// EXPORTING THE MODEL
// =========================================================================================
module.exports = {
    userModel
}
/*
We export the userModel so that our controller (e.g., user.controller.js) can import it and register users.
*/