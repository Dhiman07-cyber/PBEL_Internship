const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const fullName = document.getElementById("registerName").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    const phoneNumber = document.getElementById("registerPhone").value;

    const userData = {
        fullName,
        email,
        password,
        phoneNumber: Number(phoneNumber)
    };

    try {
        const response = await fetch("http://localhost:8000/api/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });

        const res = await response.json();

        if (response.ok) {
            Toastify({
                text: res.message,
                duration: 3000,
                gravity: "top",
                position: "right",
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
            }).showToast();
            document.getElementById("tabLogin").click();
        } else {
            Toastify({
                text: res.message,
                duration: 3000,
                gravity: "top",
                position: "right",
                style: {
                    background: "linear-gradient(to right, #b00000, #460404)",
                }
            }).showToast();
        }
    } catch (error) {
        console.error("Registration error:", error);
    }
});

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const credentials = { email, password };

    try {
        const response = await fetch("http://localhost:8000/api/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        });

        const res = await response.json();

        if (response.ok) {
            Toastify({
                text: res.message,
                duration: 3000,
                gravity: "top",
                position: "right",
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
            }).showToast();

            localStorage.setItem("userId", res.user.id);
            localStorage.setItem("fullName", res.user.fullName);

            setTimeout(() => {
                window.location.href = "index.html";
            }, 1000);
        } else {
            Toastify({
                text: res.message,
                duration: 3000,
                gravity: "top",
                position: "right",
                style: {
                    background: "linear-gradient(to right, #b00000, #460404)",
                }
            }).showToast();
        }
    } catch (error) {
        console.error("Login error:", error);
    }
});
