const fetchUser = async () => {
    try {
        const response = await fetch("http://localhost:8000/api/user", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": localStorage.getItem("token")
            }
        });

        const userData = await response.json();

        if (response.ok) {
            const userProfileDiv = document.getElementById("userProfile");
            
            userProfileDiv.innerHTML = `
                <h2>User Profile</h2>
                <p><strong>Name:</strong> ${userData.user.fullName}</p>
                <p><strong>Email:</strong> ${userData.user.email}</p>
            `;
        } else {
            const userProfileDiv = document.getElementById("userProfile");
            userProfileDiv.innerHTML = `
                <h2>Error</h2>
                <p>${userData.message}</p>
            `;
        }
    } catch (error) {
        console.log(error.message);
    }
}

fetchUser();