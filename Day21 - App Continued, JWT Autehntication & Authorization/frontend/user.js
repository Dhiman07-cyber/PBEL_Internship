/*******************************************************************************************************
 *************************************** PROTECTED PROFILE SCRIPT (`user.js`) **************************
 *
 * New Topics Covered in Day 21:
 * - Retrieving saved JWT authorization tokens from browser `localStorage`
 * - Sending authenticated GET HTTP requests with `Authorization` headers
 * - Accessing protected backend API endpoints (`http://localhost:8000/api/user`)
 * - Dynamic DOM rendering of fetched user profile data (`userProfileDiv.innerHTML`)
 * - Handling authorization failures gracefully on the client UI
 *
 * Cross-File & Architecture References:
 * - Token Source: Reads `localStorage.getItem("token")` saved during login by `frontend/login.js`
 * - Backend Target: Hits `GET http://localhost:8000/api/user`
 * - Backend Middleware: Intercepted by `middleware/auth.js` (`authCheck`) for JWT verification
 * - Backend Controller: Processed by `controller/cart.controller.js` (`userProfile`) to return sanitized user profile
 *******************************************************************************************************/

// =========================================================================================
// FETCH USER PROFILE FUNCTION (`fetchUser`)
// =========================================================================================
/*
ROLE OF THIS FUNCTION:
Executed automatically on page load to fetch sanitized user profile data from the backend
by attaching the stored JWT token to the request headers.
*/
const fetchUser = async () => {
    try {
        /*
        1. Send GET request to protected backend endpoint (`http://localhost:8000/api/user`)
           - Header `"Authorization": localStorage.getItem("token")`: Reads JWT string saved in browser storage.
             This header is received and verified by backend `middleware/auth.js` (`authCheck`).
        */
        const response = await fetch("http://localhost:8000/api/user", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("token")
            }
        });

        // 2. Parse incoming JSON response object from backend `userProfile` controller
        const userData = await response.json();

        // 3. Check if HTTP status code is 200-299 (`response.ok`)
        if (response.ok) {
            // Select container element in `user.html`
            const userProfileDiv = document.getElementById("userProfile");
            
            // Render user's full name and email dynamically into DOM
            userProfileDiv.innerHTML = `
                <h2>User Profile</h2>
                <p><strong>Name:</strong> ${userData.user.fullName}</p>
                <p><strong>Email:</strong> ${userData.user.email}</p>
            `;
        } else {
            // Authentication/Authorization failed or user not found: Render error message in DOM
            const userProfileDiv = document.getElementById("userProfile");
            userProfileDiv.innerHTML = `
                <h2>Error</h2>
                <p>${userData.message}</p>
            `;
        }
    } catch (error) {
        // Handle network exceptions or unexpected script failures
        console.log(error.message)
    }
}

// Automatically invoke `fetchUser()` when `user.html` page loads
fetchUser();