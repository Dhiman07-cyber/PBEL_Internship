/*******************************************************************************************************
 *************************************** FRONTEND CHANGE PASSWORD SCRIPT (`changePass.js`) *************
 *
 * New Topics Covered in Day 22:
 * - Handling Password Change Form Submissions (`changePasswordForm.addEventListener("submit", ...)`)
 * - Client-Side Validation: Password matching check (`newPassword !== confirmPassword`)
 * - Authenticated POST Requests with `Authorization` headers
 * - Displaying interactive status feedback via `Toastify`
 *
 * Cross-File & Architecture References:
 * - Token Source: Reads `localStorage.getItem("token")` saved during login by `login.js`
 * - Backend API Target: Hits `POST http://localhost:8000/api/change-password`
 * - Backend Middleware: Intercepted by `middleware/auth.js` (`authCheck`) to verify token and inject `userId`
 * - Backend Controller: Handled by `controller/user.controller.js` (`changePassword`)
 *******************************************************************************************************/

// Select password change form element in `changePass.html`
const changePasswordForm = document.getElementById('changePasswordForm');

changePasswordForm.addEventListener("submit", async(e)=>{
    // 1. Prevent default form submission page reload
    e.preventDefault();

    // 2. Capture password inputs from form fields
    const oldPassword = document.getElementById('oldPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    /*
    3. CLIENT-SIDE VALIDATION:
       Check if new password and confirmation password match before sending request to backend server.
    */
    if(newPassword !== confirmPassword){
        Toastify({
            text: "New passwords do not match!",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", 
            position: "right", 
            stopOnFocus: true, 
            style: {
                background: "linear-gradient(to right, #b00000, #460404)",
            },
            onClick: function () { }
        }).showToast();

        return; // Stop function execution
    }

    const passwordData = {
        oldPassword, newPassword
    }

    // 4. Retrieve stored JWT token from browser `localStorage`
    const token = localStorage.getItem("token");

    /*
    5. Send authenticated POST request to `http://localhost:8000/api/change-password`
       - Header `"Authorization": token`: Attaches JWT for backend verification in `authCheck` middleware.
    */
    const response = await fetch("http://localhost:8000/api/change-password", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
        body: JSON.stringify(passwordData)
    });

    // 6. Parse server JSON response
    const res = await response.json();

     // 7. Display Toastify notification based on backend response status
     if (response.ok) {
        Toastify({
            text: res.message,
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", 
            position: "right", 
            stopOnFocus: true, 
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function () { } 
        }).showToast();
    } else {
        Toastify({
            text: res.message,
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", 
            position: "left", 
            stopOnFocus: true, 
            style: {
                background: "linear-gradient(to right, #b00000, #460404)",
            },
            onClick: function () { } 
        }).showToast();
    }
})