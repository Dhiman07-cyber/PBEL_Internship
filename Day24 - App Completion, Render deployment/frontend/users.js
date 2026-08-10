let currentPage = 1;
const limit = 6;

const usersContainer = document.getElementById("usersContainer");
const pageNumber = document.getElementById("pageNumber");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const getUsers = async () => {
    const response = await fetch(`http://localhost:8000/api/users?page=${currentPage}&limit=${limit}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    const res = await response.json();
    console.log(res);

    usersContainer.innerHTML = "";

    res.users.forEach((el) => {
        const userDiv = document.createElement("div");
        userDiv.className = "user-card";

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
            </div>`;
            
        usersContainer.appendChild(userDiv);
    });

    pageNumber.innerText = currentPage;

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

getUsers();

nextBtn.addEventListener("click", () => {
    currentPage++;
    getUsers();
});

prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        getUsers();
    }
});