/*******************************************************************************************************
 *************************************** FRONTEND PAGINATED USERS LIST SCRIPT (`users.js`) *************
 *
 * New Topics Covered in Day 22:
 * - Dynamic Frontend Pagination State (`currentPage`, `limit`)
 * - Fetching Paginated API Data with URL Query Parameters (`fetch('/api/users?page=X&limit=Y')`)
 * - Dynamic UI Card Grid Generation & Initial Avatar Generation (`el.fullName.charAt(0)`)
 * - Pagination Controls Management (Disabling `prevBtn` on page 1, disabling `nextBtn` on totalPages)
 * - Event-Driven Page Navigation (`nextBtn.addEventListener`, `prevBtn.addEventListener`)
 *
 * Cross-File & Architecture References:
 * - Backend Endpoint: Hits `GET http://localhost:8000/api/users?page=${currentPage}&limit=${limit}`
 * - Backend Controller: Handled by `controller/user.controller.js` (`getAllUsers`)
 * - Target HTML Container: Mounts dynamic user cards into `#usersContainer` in `users.html`
 *******************************************************************************************************/

// 1. Pagination State Variables
let currentPage = 1; // Tracks current active page index (1-indexed)
const limit = 6;    // Number of user items to request per page batch

// 2. DOM Elements Selection from `users.html`
const usersContainer = document.getElementById("usersContainer");
const pageNumber = document.getElementById("pageNumber");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// =========================================================================================
// FETCH PAGINATED USERS FUNCTION (`getUsers`)
// =========================================================================================
const getUsers = async () => {

    /*
    3. Send HTTP GET request with query parameters: `?page=${currentPage}&limit=${limit}`
       Express server parses these via `req.query.page` and `req.query.limit` inside `getAllUsers` controller.
    */
    const response = await fetch(`http://localhost:8000/api/users?page=${currentPage}&limit=${limit}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    // 4. Parse backend response JSON `{ users, totalUsers, totalPages, currentPage }`
    const res = await response.json();

    console.log(res);

    // 5. Clear previous DOM contents inside user grid container before rendering new page
    usersContainer.innerHTML = "";

    /*
    6. DYNAMIC UI CARD GENERATION:
       Loop through each user object in `res.users` array and append card elements to DOM grid.
    */
    res.users.forEach((el, i) => {
        const userDiv = document.createElement("div");
        userDiv.className = "user-card";

        // Dynamic avatar generation using the first letter of user's full name
        userDiv.innerHTML = `
        <div class="avatar">
                ${el.fullName.charAt(0).toUpperCase()}
            </div>

            <h3>${el.fullName}</h3>

            <div class="info">
                <strong>Email:</strong> ${el.email}
            </div>

            <div class="info">
                <strong>Phone:</strong> ${el.phoneNumber || "N/A"}
            </div>`
            
        usersContainer.appendChild(userDiv);
    });

    // 7. Update current page number indicator in UI
    pageNumber.innerText = currentPage;

    /*
    8. PAGINATION BUTTON CONTROLS:
       - Disable 'Previous' button if user is on page 1 (cannot go below 1).
       - Disable 'Next' button if user reaches `res.totalPages` (cannot exceed total pages).
    */
    if (currentPage == 1) {
        prevBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
    }

    if (currentPage == res.totalPages) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }
}

// Automatically fetch first page of users on script load
getUsers();

// =========================================================================================
// EVENT LISTENERS FOR PAGINATION BUTTONS
// =========================================================================================

// Next Page Click Handler: Increments `currentPage` state and fetches updated batch
nextBtn.addEventListener("click", () => {
    currentPage++;
    getUsers();
});

// Previous Page Click Handler: Decrements `currentPage` state and fetches updated batch
prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        getUsers();
    }
});