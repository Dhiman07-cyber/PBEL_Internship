const welcomeMsg = document.getElementById("welcomeMsg");
const authBtn = document.getElementById("authBtn");
const cartBtn = document.getElementById("cartBtn");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartSidebar = document.getElementById("cartSidebar");
const productGrid = document.getElementById("productGrid");
const cartItemsList = document.getElementById("cartItemsList");
const cartTotalVal = document.getElementById("cartTotalVal");
const cartCount = document.getElementById("cartCount");

const userId = localStorage.getItem("userId");
const fullName = localStorage.getItem("fullName");

if (userId && fullName) {
    welcomeMsg.innerText = `Welcome, ${fullName}`;
    authBtn.innerText = "Logout";
    authBtn.onclick = () => {
        localStorage.clear();
        window.location.reload();
    };
} else {
    welcomeMsg.innerText = "";
    authBtn.innerText = "Login";
    authBtn.onclick = () => {
        window.location.href = "login.html";
    };
}

cartBtn.onclick = (e) => {
    e.preventDefault();
    if (!userId) {
        Toastify({
            text: "Please login first!",
            duration: 3000,
            gravity: "top",
            position: "right",
            style: {
                background: "linear-gradient(to right, #b00000, #460404)"
            }
        }).showToast();
        setTimeout(() => {
            window.location.href = "login.html";
        }, 1500);
        return;
    }
    cartSidebar.classList.add("open");
    fetchCart();
};

closeCartBtn.onclick = () => {
    cartSidebar.classList.remove("open");
};

async function fetchProducts() {
    try {
        const response = await fetch("http://localhost:8000/api/products");
        const products = await response.json();
        renderProducts(products);
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

function renderProducts(products) {
    productGrid.innerHTML = "";
    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";

        const img = document.createElement("img");
        img.src = product.image || "https://placehold.co/200";
        img.alt = product.name;

        const name = document.createElement("h3");
        name.innerText = product.name;

        const desc = document.createElement("p");
        desc.className = "desc";
        desc.innerText = product.description || "";

        const price = document.createElement("div");
        price.className = "price";
        price.innerText = `$${product.price}`;

        const addBtn = document.createElement("button");
        addBtn.className = "primary-btn";
        addBtn.innerText = "Add to Cart";
        addBtn.onclick = () => addToCart(product._id);

        card.append(img, name, desc, price, addBtn);
        productGrid.append(card);
    });
}

async function addToCart(productId) {
    if (!userId) {
        Toastify({
            text: "Please login first to add items!",
            duration: 3000,
            gravity: "top",
            position: "right",
            style: {
                background: "linear-gradient(to right, #b00000, #460404)"
            }
        }).showToast();
        setTimeout(() => {
            window.location.href = "login.html";
        }, 1500);
        return;
    }

    try {
        const response = await fetch("http://localhost:8000/api/cart/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ userId, productId, quantity: 1 })
        });

        const res = await response.json();
        if (response.ok) {
            Toastify({
                text: "Product added to cart!",
                duration: 2000,
                gravity: "top",
                position: "right",
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)"
                }
            }).showToast();
            fetchCart();
        }
    } catch (error) {
        console.error("Error adding to cart:", error);
    }
}

async function fetchCart() {
    if (!userId) return;
    try {
        const response = await fetch(`http://localhost:8000/api/cart/${userId}`);
        const cartItems = await response.json();
        renderCart(cartItems);
    } catch (error) {
        console.error("Error fetching cart:", error);
    }
}

function renderCart(items) {
    cartItemsList.innerHTML = "";
    let total = 0;
    let totalItems = 0;

    items.forEach(item => {
        if (!item.productId) return;
        const product = item.productId;
        total += product.price * item.quantity;
        totalItems += item.quantity;

        const cartItemDiv = document.createElement("div");
        cartItemDiv.className = "cart-item";

        const info = document.createElement("div");
        info.className = "info";

        const name = document.createElement("h4");
        name.innerText = product.name;

        const price = document.createElement("p");
        price.innerText = `$${product.price} x ${item.quantity}`;

        info.append(name, price);

        const actions = document.createElement("div");
        actions.className = "actions";

        const decBtn = document.createElement("button");
        decBtn.innerText = "-";
        decBtn.onclick = () => changeQty(product._id, "remove");

        const incBtn = document.createElement("button");
        incBtn.innerText = "+";
        incBtn.onclick = () => changeQty(product._id, "add");

        actions.append(decBtn, incBtn);
        cartItemDiv.append(info, actions);
        cartItemsList.append(cartItemDiv);
    });

    cartTotalVal.innerText = total.toFixed(2);
    cartCount.innerText = totalItems;
}

async function changeQty(productId, action) {
    const url = action === "add" ? "http://localhost:8000/api/cart/add" : "http://localhost:8000/api/cart/remove";
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ userId, productId })
        });
        if (response.ok) {
            fetchCart();
        }
    } catch (error) {
        console.error("Error changing quantity:", error);
    }
}

fetchProducts();
if (userId) {
    fetchCart();
}
