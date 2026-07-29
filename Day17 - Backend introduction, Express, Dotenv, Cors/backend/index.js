/*******************************************************************************************************
 *************************************** DAY 17: BACKEND INTRODUCTION **********************************
 *
 * Topics Covered:
 *
 * 1. JSON Server
 * 2. Node Project Initialization
 * 3. package.json
 * 4. Installing Packages (Express, CORS, Dotenv)
 * 5. node_modules
 * 6. package-lock.json
 * 7. .gitignore
 * 8. Creating First Express Application
 * 9. Question Asked by Sir: CommonJS vs ES Modules
 * 10. Sending CSS using res.send()
 *
 *******************************************************************************************************/


// =========================================================================================
// 1. JSON SERVER
// =========================================================================================

/*
Why JSON Server Exists

When building frontend applications such as e-commerce websites or dashboard interfaces, the frontend needs to communicate with an API server to fetch, create, or update data. However, developing a full-featured custom backend server with a real database requires significant setup time and business logic.

JSON Server exists to solve this exact problem for frontend developers during early development and prototyping. It provides a full fake REST API with zero coding needed. By simply creating a local JSON file, JSON Server reads the file and instantly creates HTTP endpoints that respond to standard request methods.


Difference Between Fake Backend and Real Backend

A fake backend like JSON Server is designed purely to mock API responses locally. It uses a single text file (like db.json) as a temporary database. Whenever a request is made, JSON Server reads or writes directly to that text file. While this is great for rapid frontend prototyping, it lacks custom business logic, authentication mechanisms, data encryption, role-based access control, and complex database queries.

A real backend (built using frameworks like Express.js paired with real databases like MongoDB or PostgreSQL) handles production-level operations. It validates incoming user input, securely hashes passwords, checks authentication tokens, runs business rules, communicates with relational or document databases, handles file uploads, and optimizes query performance for thousands of concurrent users.

Workflow:

Browser Request  -->  Express Backend (Authentication & Business Logic)  -->  Database (MongoDB / SQL)
Browser Request  -->  JSON Server (Direct Read/Write)                   -->  db.json file


What db.json Is

db.json is a plain text file written in Standard JSON format that acts as the database for JSON Server. Each top-level array key inside this JSON object automatically becomes a RESTful resource route.

For example, if db.json contains:

{
  "users": [
    { "id": 1, "name": "Aman", "uni": "LPU" },
    { "id": 2, "name": "Riya", "uni": "CU" }
  ]
}

JSON Server automatically exposes a full set of REST endpoints under http://localhost:3000/users.


How JSON Server Automatically Creates REST APIs

JSON Server inspects the structure of db.json on startup. For every top-level key defined in the file, it automatically registers routes and handles standard HTTP operations without requiring us to write any route handlers.

When a client sends a GET request to /users, JSON Server returns the array of users. When a client sends a POST request with new user details, JSON Server automatically generates a unique ID, appends the new object into the users array, and writes the updated array back into the db.json file on disk.


JSON Structure Rules

JSON (JavaScript Object Notation) is a strict text-based data format used for data exchange between servers and clients.

The key rules for JSON structure are:

• All keys must be enclosed in double quotes (e.g., "name", not name or 'name').

• String values must also use double quotes (e.g., "Aman").

• Single quotes are strictly invalid in JSON.

• Allowed data types are strings, numbers, booleans, objects, arrays, and null.

• Functions, undefined, comments, and trailing commas are not allowed in JSON.
*/




// =========================================================================================
// 2. NODE PROJECT INITIALIZATION
// =========================================================================================

/*
Why Project Initialization Is Needed

Before writing any backend JavaScript code or installing third-party packages, Node.js needs to recognize our folder as an official Node project. Initialization creates a manifest file that tracks project details, scripts, and installed dependencies.


npm init

The command `npm init` starts an interactive command-line questionnaire. It asks a series of questions such as project name, version, description, entry point file, test commands, git repository, keywords, author, and license. Once answered, npm generates a `package.json` file in the root folder with those values.


npm init -y

The `-y` flag stands for "yes". Running `npm init -y` skips all interactive prompts and instantly generates a default `package.json` file using standard default values. This is commonly used when starting new projects quickly.


Project Metadata

Metadata is "data about data". In a Node project, source code files (like index.js) contain the actual application logic. Metadata, on the other hand, describes the project itself—its name, who wrote it, what external packages it depends on, how to start it, and what version of JavaScript modules it uses.


Why package.json Is Called Metadata

`package.json` is called project metadata because it does not run any application logic itself. Instead, it serves as the central configuration blueprint for Node.js, npm, and other developers, explaining how the project is configured and what resources it requires to execute properly.
*/




// =========================================================================================
// 3. PACKAGE.JSON
// =========================================================================================

/*
Understanding package.json Properties

The `package.json` file is a JSON object located at the root of every Node.js project. It contains several key properties that govern how Node.js manages and executes the project.

The most important properties include:

• name: Defines the unique name of the project. It must be lowercase, URL-friendly, and contain no spaces.

• version: Tracks the current version of the project following Semantic Versioning rules (MAJOR.MINOR.PATCH, e.g., 1.0.0).

• main: Specifies the entry point file of the application (e.g., "index.js"). When Node.js or an external package executes or requires the project folder, it begins execution at this file.

• scripts: A dictionary of custom terminal commands that automate repetitive tasks. For example, setting `"start": "node index.js"` allows us to run `npm start` in the terminal instead of typing the full node command.

• dependencies: An object listing all external packages downloaded from npm that our application requires to run in production, along with their installed version numbers.

• type: Controls the module system Node.js uses to process `.js` files. If set to `"commonjs"` (or left omitted), Node uses CommonJS syntax (`require()` and `module.exports`). If set to `"module"`, Node uses ES Modules syntax (`import` and `export`).
*/




// =========================================================================================
// 4. INSTALLING PACKAGES
// =========================================================================================

/*
Core Installation Concepts

• npm install: The terminal command used to download external code modules from the remote npm registry into our local project.

• Package: A pre-written, reusable folder of code containing JavaScript files and a package.json file that solves a specific development problem.

• Dependency: Any external package that our project relies upon to function correctly.

• npm registry: A massive online public database where developers publish open-source JavaScript packages so anyone can download and reuse them.


Installing All Required Packages at Once

Instead of installing packages one by one, npm allows us to list multiple package names in a single command.

Terminal Command:
npm install express cors dotenv

This single command contacts the npm registry, downloads Express, CORS, and Dotenv simultaneously, extracts them into the node_modules folder, and records all three under the "dependencies" key in package.json.


Packages Installed Today


1. Express

Why it exists: Node.js has a built-in HTTP module (`require("http")`), but writing a server directly with it requires manual parsing of URLs, HTTP methods, request headers, query strings, and body streams. This leads to tedious, repeated boilerplate code.

Problem it solves: Express provides a simple, clean, and flexible routing and middleware framework built on top of Node's HTTP module. It abstracts complex HTTP logic into intuitive methods like `app.get()`, `app.post()`, and `app.use()`.

Where it is generally used: Express is used as the core framework for building Web APIs, microservices, and web server applications in Node.js.


2. CORS (Cross-Origin Resource Sharing)

Why it exists: Web browsers implement a strict security rule called the Same-Origin Policy (SOP). Under SOP, a web application running on one origin (e.g., frontend running at http://localhost:3000) is blocked from making HTTP requests to a backend server on a different origin (e.g., server running at http://localhost:8000).

Problem it solves: The CORS package acts as server middleware that injects specific HTTP headers (like `Access-Control-Allow-Origin: *`) into outgoing responses. These headers inform the browser that the backend server explicitly allows cross-origin requests from frontend clients.

Where it is generally used: CORS middleware is added to backend servers whenever frontend and backend applications are hosted on different ports, domains, or subdomains.


3. Dotenv

Why it exists: Applications require configuration settings that differ across environments (like database passwords, secret keys, and port numbers). Storing credentials directly in source code creates severe security risks and requires changing code when moving between local development and production servers.

Problem it solves: Dotenv allows developers to store sensitive environment variables in a separate `.env` file that is kept out of version control. Dotenv reads this file on application startup and loads those key-value pairs into Node's global `process.env` object.

Where it is generally used: Dotenv is used in virtually all backend projects to securely manage database connection URIs, API tokens, secret keys, and server port numbers.
*/




// =========================================================================================
// 5. NODE_MODULES
// =========================================================================================

/*
Why node_modules Becomes Huge

When we install a package like Express, Express itself relies on other packages (such as `body-parser`, `qs`, `send`, `type-is`, etc.). These are called transitive dependencies. npm automatically downloads not only the package we asked for, but also every nested dependency required by that package. As a result, installing just a few packages can create thousands of small files and folders inside `node_modules`.


Why We Do Not Edit node_modules

We should never open or edit files inside `node_modules` directly. Any manual changes made inside `node_modules` will be completely overwritten and lost the next time `npm install` or `npm update` is executed. Additionally, changes made inside your local `node_modules` will not exist on your teammates' computers or deployment servers.


Why node_modules Is Ignored in Git

`node_modules` contains thousands of files amounting to hundreds of megabytes. Committing `node_modules` to Git would make repository sizes massive, slow down `git clone` operations, and cause file merge conflicts across different operating systems. Since `package.json` records every dependency needed, any developer can recreate the exact `node_modules` folder locally by cloning the code and running `npm install`.


How require() Searches node_modules

Workflow:

Calling require("express")
        ↓
1. Node checks if "express" is a built-in core module (like fs, http, path).
        ↓ (No)
2. Node searches for a "node_modules" folder in the current working directory.
        ↓ (If found, looks for "express" inside it)
3. If not found in current directory, Node moves up one directory level ("../node_modules") and searches there.
        ↓
4. Node continues traveling up parent directories toward the root drive until it finds "express" or throws "MODULE_NOT_FOUND".
*/




// =========================================================================================
// 6. PACKAGE-LOCK.JSON
// =========================================================================================

/*
Why package-lock.json Exists

In `package.json`, package versions are recorded with semantic version ranges (such as `"express": "^4.18.2"`). The caret symbol (`^`) allows npm to automatically download compatible minor or patch updates during future installations.

However, if two developers run `npm install` on different days, one developer might receive version 4.18.2 while another receives a newly released 4.18.3 patch that contains a breaking bug. This introduces inconsistent behavior between environments.

`package-lock.json` exists to guarantee absolute deterministic builds. It records the exact version of every single package and sub-dependency actually downloaded, along with exact source URLs and cryptographic integrity hashes.


Exact Version Locking

When `package-lock.json` is present in a project folder, running `npm install` instructs npm to install the exact dependency versions specified in `package-lock.json`, ignoring range symbols in `package.json`. This ensures that every developer and server installs the exact same code byte-for-byte.


Why package-lock.json Is Committed to Version Control

Unlike `node_modules`, `package-lock.json` MUST be committed to Git. Committing `package-lock.json` guarantees that every team member, CI/CD pipeline, and production server installs the exact identical dependency tree, eliminating "works on my machine" bugs.


Comparison: package.json vs package-lock.json

• package.json: High-level manifest written for humans. Specifies project metadata, custom scripts, and broad acceptable dependency ranges.

• package-lock.json: Detailed manifest generated automatically for npm. Specifies the exact resolved dependency tree, exact nested versions, and integrity hashes.
*/




// =========================================================================================
// 7. .GITIGNORE
// =========================================================================================

/*
Why .gitignore Is Essential

The `.gitignore` file tells Git which files and folders must be excluded from version control tracking.


Why node_modules Is Ignored

`node_modules` is ignored because it is extremely large and easily reproducible anywhere by executing `npm install`.


Why .env Is Ignored

The `.env` file contains sensitive security credentials such as database passwords, secret tokens, and private API keys. Pushing `.env` to public version control repositories like GitHub exposes these credentials to attackers, leading to security breaches and compromised servers.
*/




// =========================================================================================
// 8. CREATING FIRST EXPRESS APPLICATION
// =========================================================================================

const express = require("express");

/*
Line 1 Explanation:

Why this line exists: We need to import the Express library into our file so we can construct a web server.

What require() is: `require()` is a built-in CommonJS function used to import external modules or local files.

What it returns: `require("express")` searches `node_modules` for the express package, executes its main file, and returns the top-level function exported by Express.

Why we store it: We store the returned function in a constant variable named `express` so we can invoke it to instantiate our application.

When it executes: It executes synchronously at startup when Node.js parses line 1.

Internal working: Node checks core modules, finds express in `node_modules`, reads its package.json `main` file, loads it into memory, caches the module export, and assigns it to `express`.
*/

const cors = require("cors");

/*
Line 2 Explanation:

Why this line exists: We need to import the CORS package to prevent web browsers from blocking cross-origin requests from our frontend app.

What it returns: Returns the CORS initialization function exported by the `cors` package.

Why we store it: We store it in `cors` so we can pass it into Express middleware configuration.
*/

require("dotenv").config();

/*
Line 3 Explanation:

Why this line exists: We need to load environment variables from our local `.env` file into the server runtime environment.

Internal working: `require("dotenv")` imports the dotenv module, and calling `.config()` immediately reads the `.env` file at the project root, parses its key-value pairs, and assigns them to Node's global `process.env` object.

Why we don't store it in a variable: `.config()` performs a side-effect (modifying `process.env`) and returns an object containing parsed status. Since we only need the side-effect, storing the result in a variable is unnecessary.
*/

const app = express();

/*
Line 4 Explanation:

Why this line exists: We must create an instance of an Express application to configure routes, attach middleware, and start listening for HTTP requests.

What express() returns: Invoking `express()` returns an instance of an Express application object containing routing methods (`get`, `post`, `put`, `delete`), middleware handlers (`use`), and server initialization methods (`listen`).

Why we store it: We store it in `app` because `app` represents our entire backend application.
*/

const PORT = process.env.PORT || 8000;

/*
Line 5 Explanation:

Why this line exists: Web servers must listen on a specific network port. In production environments (like AWS or Render), the platform dynamically assigns a port via `process.env.PORT`.

Internal working: Line 5 inspects `process.env.PORT`. If `process.env.PORT` is defined, `PORT` takes that value. If it is undefined (such as during local development without a PORT in `.env`), the logical OR operator (`||`) falls back to `8000`.

Why we store it: We store it in `PORT` to pass it into `app.listen()` cleanly.
*/

app.use(cors());

/*
Line 6 Explanation:

Why this line exists: To enable Cross-Origin Resource Sharing globally across all incoming routes.

What app.use() is: `app.use()` is an Express method used to register middleware functions that execute for incoming HTTP requests.

What cors() returns: Invoking `cors()` returns a middleware function. Passing `cors()` into `app.use()` registers this middleware so it appends HTTP headers (`Access-Control-Allow-Origin: *`) to every outgoing response.
*/

app.use(express.json());

/*
Line 7 Explanation:

Why this line exists: By default, Express cannot parse incoming HTTP request bodies containing JSON data (such as data sent in POST or PUT requests). `req.body` would remain `undefined`.

What express.json() is: `express.json()` is a built-in middleware function provided by Express.

Internal working: When a request arrives with header `Content-Type: application/json`, this middleware intercepts the raw incoming request data stream, parses the JSON string into a native JavaScript object, and attaches it to `req.body`.
*/

app.get("/", (req, res) => {
  res.send("Welcome to the Server");
});

/*
Line 8 Explanation:

Why this line exists: To define a specific HTTP GET route handler for the root endpoint (`"/"`).

What app.get() does: Registers a route for incoming HTTP GET requests targeting the specified path (`"/"`). It accepts two arguments: the path string and a callback function.

What req is: `req` (Request object) represents the incoming HTTP request. It contains data sent by the client, such as query parameters (`req.query`), route parameters (`req.params`), headers (`req.headers`), and request body (`req.body`).

What res is: `res` (Response object) represents the outgoing HTTP response generated by Express to send back to the client.

What res.send() does: `res.send()` sends the response payload back to the client. It automatically inspects the data type of the parameter, sets the appropriate `Content-Type` header (e.g., `text/html` for strings, `application/json` for objects/arrays), sets the HTTP status code to 200 OK by default, and closes the HTTP connection.

Workflow of Request Lifecycle:

Client Request  -->  app.use(cors())  -->  app.use(express.json())  -->  app.get("/") Handler  -->  res.send() Response
*/

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/*
Line 9 Explanation:

Why this line exists: Defining routes in Express creates route definitions in memory, but does not start a network server. `app.listen()` binds the application to a network port and starts listening for incoming client requests.

Arguments passed:
1. `PORT`: The port number on which the server should listen for incoming traffic.
2. Callback function: Executes once the server has successfully bound to the port and started listening.

When it executes: Runs asynchronously after Node successfully opens the TCP socket on the specified port.
*/




// =========================================================================================
// 9. QUESTION ASKED BY SIR: COMMONJS VS ES MODULES
// =========================================================================================

/*
Sir asked in class:

"Why did we create this Express application using CommonJS instead of
ES Modules? ES Modules are also based on ES6."


The answer is YES.

ES Modules are the modern JavaScript module system introduced in ES6,
and Express works perfectly with both CommonJS and ES Modules.

For example, today's code was written using CommonJS.


const express = require("express");

const cors = require("cors");

require("dotenv").config();


The same application can also be written using ES Modules.


import express from "express";

import cors from "cors";

import dotenv from "dotenv";

dotenv.config();


So why didn't we use this?


The reason is not that Express doesn't support ES Modules.

The real reason is that Node.js treats JavaScript files as CommonJS by
default. Unless we explicitly tell Node to use ES Modules, statements
like

import

and

export

are not allowed.


To use ES Modules, we must add the following property to package.json.


"type": "module"


Only after adding this can we write


import express from "express";


instead of


const express = require("express");


Most Express tutorials and classroom examples still begin with
CommonJS because it requires no extra configuration and matches a large
number of existing Express projects.

Nowadays, many modern projects such as React, Vite, Next.js and even new
Node.js applications prefer ES Modules, but understanding CommonJS is
still important because a significant amount of backend code is written
using it.

*/



// =========================================================================================
// 10. SENDING CSS USING RES.SEND()
// =========================================================================================

/*
Returning HTML and CSS directly from Express Routes

Express route handlers are not limited to sending plain text strings or JSON objects. By using template literals, we can send complete HTML pages with embedded CSS styling directly inside `res.send()`.
*/

app.get("/styled-page", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Styled Express Response</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f0f2f5;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        .card {
          background-color: #ffffff;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          text-align: center;
          max-width: 400px;
        }
        h1 {
          color: #1a73e8;
          font-size: 24px;
          margin-bottom: 10px;
        }
        p {
          color: #5f6368;
          font-size: 14px;
          line-height: 1.5;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>Styled Server Response</h1>
        <p>This HTML content with embedded CSS was sent directly from Express using res.send() and Template Literals.</p>
      </div>
    </body>
    </html>
  `);
});

/*
Detailed Explanation of Template Literals and CSS Integration


Template Literals and Backticks

In JavaScript, template literals are delimited by backtick characters (`` ` ``) rather than single (`'`) or double (`"`) quotes. Introduced in ES6, backticks allow multi-line strings and string interpolation (`${expression}`).


Why Standard Quotes Cannot Easily Handle Multi-line HTML

Single and double quotes in JavaScript do not allow line breaks inside string literals. Writing multi-line HTML using regular quotes requires appending string concatenation operators (`+`) or escape characters (`\`) at the end of every line:

// Messy and error-prone with regular quotes:
res.send("<html>" +
  "<head><style>body { color: red; }</style></head>" +
  "<body><h1>Hello</h1></body>" +
"</html>");

Backticks solve this completely by allowing raw multiline text to be written naturally across multiple lines exactly as it will appear in HTML.


How CSS Is Written Inside <style>

Inside the template literal, CSS is placed directly inside standard HTML `<style>` tags in the `<head>` section. The browser receives the raw HTML string, parses the `<style>` block, and renders styled elements accordingly.


Where Brackets, Commas, Parentheses, and Backticks Belong

Syntax placement breakdown:

1. `app.get("/styled-page", (req, res) => {`
   • Parenthesis `(` opens `app.get()` arguments.
   • String `"/styled-page"` specifies the URL route path.
   • Comma `,` separates route path from the callback function.
   • `(req, res) => {` defines the arrow callback function.

2. `res.send(`
   • Opening parenthesis `(` belongs to `res.send(`.

3. `` ` `` (Backtick)
   • Opening backtick `` ` `` immediately follows `res.send(`.
   • Closing backtick `` ` `` marks the exact end of the multiline HTML/CSS template string.

4. `);`
   • Closing parenthesis `)` closes `res.send()`.
   • Semicolon `;` terminates the `res.send()` statement.

5. `});`
   • Closing curly brace `}` closes the arrow function body.
   • Closing parenthesis `)` closes `app.get()`.
   • Semicolon `;` terminates the route definition.


Common Beginner Mistakes

• Unclosed Backticks: Forgetting to close the opening backtick before `);`, resulting in an `Unterminated template literal` syntax error.

• Mixing Quotes with Backticks: Opening with a backtick `` ` `` but attempting to close with a double quote `"`, causing parsing errors.

• Confusing CSS Curly Braces with JS Template Interpolation: In template literals, `${}` is evaluated as JavaScript variable interpolation. If you write `${color}` inside a `<style>` tag, JavaScript will look for a JS variable named `color`. Standard CSS rules like `body { color: red; }` work fine, but avoid putting `${` inside CSS unless you intend to dynamically interpolate a JS variable.

• Calling res.send() Multiple Times: Attempting to call `res.send()` twice inside the same route handler:
  res.send("First Response");
  res.send("Second Response"); // Throws Error: Cannot set headers after they are sent to the client.

• Missing Content-Type Awareness: Assuming `res.send()` only sends text. Express automatically sets `Content-Type: text/html` when the string starts with HTML tags like `<!DOCTYPE html>` or `<html>`.
*/
