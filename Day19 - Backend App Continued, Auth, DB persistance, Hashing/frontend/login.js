/*******************************************************************************************************
 *************************************** FRONTEND AUTHENTICATION HANDLER *******************************
 *
 * Topics Covered:
 * - Handling HTML Form submission events
 * - Preventing default browser behaviors (page refresh)
 * - Capturing input values from the DOM
 * - Sending asynchronous POST requests using the Fetch API
 * - Configuring request options (Method, Headers, JSON Body serialization)
 * - Parsing server responses and handling conditional success/failure states
 * - Enhancing User Experience using Toastify notification library
 *
 *******************************************************************************************************/

// =========================================================================================
// REGISTER FORM SELECTOR
// =========================================================================================
const loginForm = document.getElementById('registerForm');
/*
We select the registration form element using its ID ('registerForm') from our HTML structure.
*/

// =========================================================================================
// FORM SUBMISSION EVENT LISTENER
// =========================================================================================
loginForm.addEventListener("submit", async (e) => {
/*
We listen for the "submit" event on the form. The submit event triggers when the user clicks the "Register" 
button inside the form. We use an 'async' callback function because sending network requests to our backend 
server is an asynchronous operation.
*/

    e.preventDefault();
/*
By default, HTML forms reload the entire page upon submission. We call 'e.preventDefault()' to stop this 
default browser reload, allowing our custom JavaScript to handle the submission in the background without 
disrupting the user interface.
*/

    const fullName = document.getElementById("registerName").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    const phoneNumber = document.getElementById("registerPhone").value;
/*
We retrieve the text values entered by the user in each form input field by targeting their individual 
IDs (registerName, registerEmail, registerPassword, registerPhone) and accessing their '.value' properties.
*/

    const userData = {
        fullName, email, password, phoneNumber
    }
/*
We package these input values into a single JavaScript object 'userData'. The keys correspond to the 
variables we extracted, matching the payload fields required by our backend registration controller.
*/

    const response = await fetch("http://localhost:8000/api/registration", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    });
/*
We make an asynchronous HTTP request to our backend server's registration endpoint ("http://localhost:8000/api/registration"). 
We configure our request object with:
1. 'method: "POST"': Indicating we are sending data to the server to create a new resource.
2. 'headers': We set "Content-Type" to "application/json" to inform the backend that the data we are sending is formatted as JSON.
3. 'body: JSON.stringify(userData)': We convert our JavaScript object 'userData' into a serialized JSON string 
   so it can travel across the network.
We use 'await' to wait until the server responds before moving to the next line.
*/

    const res = await response.json();
/*
We extract the JSON payload from the server's response object using 'response.json()'. We use 'await' 
since parsing the response body is also asynchronous.
*/

    if (res.ok) {
        Toastify({
            text: res.message,
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function () { } // Callback after click
        }).showToast();
/*
If the response indicates success ('res.ok' is true, which correlates to a successful status response), 
we invoke the Toastify library to display a green toast notification with the server's success message.
The message will stay visible for 3000ms (3 seconds) in the top-right corner of the screen.
*/

    } else {
        Toastify({
            text: res.message,
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #b00000, #460404)",
            },
            onClick: function () { } // Callback after click
        }).showToast();
/*
If the registration failed ('res.ok' is false, due to empty fields, duplicate user, or connection error), 
we trigger a red error Toastify notification on the top-left of the screen containing the backend's error message.
*/

    }

})