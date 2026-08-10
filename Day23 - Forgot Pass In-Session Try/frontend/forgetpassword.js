const forgotPasswordForm = document.getElementById('forgotPasswordForm');

forgotPasswordForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (newPassword !== confirmPassword) {
        Toastify({
            text: "Passwords do not match!",
            duration: 3000,
            gravity: "top",
            position: "right",
            style: { background: "linear-gradient(to right, #b00000, #460404)" }
        }).showToast();
        return;
    }

    const payload = { email, newPassword };

    const response = await fetch("http://localhost:8000/api/forgot-password", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });

    const res = await response.json();

    if (response.ok) {
        Toastify({
            text: res.message,
            duration: 3000,
            gravity: "top",
            position: "right",
            style: { background: "linear-gradient(to right, #00b09b, #96c93d)" }
        }).showToast();

        setTimeout(() => {
            window.location.href = "login.html";
        }, 2000);

    } else {
        Toastify({
            text: res.message,
            duration: 3000,
            gravity: "top",
            position: "left",
            style: { background: "linear-gradient(to right, #b00000, #460404)" }
        }).showToast();
    }
});
