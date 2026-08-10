const changePasswordForm = document.getElementById('changePasswordForm');

changePasswordForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const oldPassword = document.getElementById('oldPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (newPassword !== confirmPassword) {
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
            }
        }).showToast();
        return;
    }

    const passwordData = {
        oldPassword, newPassword
    };

    const token = localStorage.getItem("token");

    const response = await fetch("http://localhost:8000/api/change-password", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
        body: JSON.stringify(passwordData)
    });

    const res = await response.json();

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
            }
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
            }
        }).showToast();
    }
});