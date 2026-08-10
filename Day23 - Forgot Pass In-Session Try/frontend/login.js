const registrationForm = document.getElementById('registerForm');

registrationForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const fullName = document.getElementById("registerName").value;
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;
    const phoneNumber = document.getElementById("registerPhone").value;

    const userData = {
        fullName, email, password, phoneNumber
    };

    const response = await fetch("http://localhost:8000/api/registration", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    });

    const res = await response.json();

    if (res.ok) {
        Toastify({
            text: res.message,
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }).showToast();
    } else {
        Toastify({
            text: res.message,
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top",
            position: "left",
            stopOnFocus: true,
            style: {
                background: "linear-gradient(to right, #b00000, #460404)",
            }
        }).showToast();
    }

});

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const userData = {
        email, password
    };

    try {
        const response = await fetch("http://localhost:8000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });

        const res = await response.json();

        if (response.ok && res.user) {
            localStorage.setItem("user", JSON.stringify(res.user));
            localStorage.setItem("token", res.user.token || res.user.user?.token);

            window.location.href = "user.html";
            
            Toastify({
                text: res.message || "Login successful!",
                duration: 3000,
                close: true,
                gravity: "top",
                position: "right",
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
            }).showToast();
        } else {
            Toastify({
                text: res.message || "Login failed!",
                duration: 3000,
                close: true,
                gravity: "top",
                position: "left",
                style: {
                    background: "linear-gradient(to right, #b00000, #460404)",
                }
            }).showToast();
        }
    } catch (err) {
        console.error("Login Error:", err);
        Toastify({
            text: "Server error or connection failed!",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "left",
            style: {
                background: "linear-gradient(to right, #b00000, #460404)",
            }
        }).showToast();
    }
});