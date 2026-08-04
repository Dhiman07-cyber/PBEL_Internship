/*******************************************************************************************************
 *************************************** USER MODEL AND SCHEMA *****************************************
 *
 * Topics Covered:
 * - What is a Mongoose Schema? (defining types, constraints, validations)
 * - What is a Mongoose Model? (compiling a schema to query MongoDB)
 * - Defining user collection requirements (name, email, password, phone)
 * - Exporting the Model to make it available to controllers
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
const mongoose = require('mongoose');
/*
We import Mongoose here because we need its built-in functions:
1. mongoose.Schema: To build the structural blueprint.
2. mongoose.model: To create the database interface helper.
*/

// =========================================================================================
// DEFINING THE USER SCHEMA
// =========================================================================================
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    }
})
/*
We define a new Mongoose Schema using 'new mongoose.Schema()'.
A Schema is a blueprint that tells MongoDB what fields our documents can contain, their data types, 
and any validation rules. 

Let's break down each field and configuration:
- 'name': String type, 'required: true' (cannot be missing).
- 'email': String type, 'required: true', and 'unique: true'. The 'unique' constraint ensures no two 
  users can register with the same email.
- 'password': String type and required.
- 'phone': Number type and required.
*/

// =========================================================================================
// COMPILING THE USER MODEL
// =========================================================================================
const userModel = mongoose.model('user', userSchema);
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
