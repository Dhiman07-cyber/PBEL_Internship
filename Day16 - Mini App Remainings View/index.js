/*******************************************************************************************************
 *************************************** FETCH STORE PRODUCTS ******************************************
 *
 * Topics Covered:
 *
 * 1. Fetch API
 * 2. Async / Await
 * 3. Rendering Products
 * 4. DOM Manipulation
 * 5. Local Storage
 * 6. View Product
 * 7. Add To Cart
 *
 * Note:
 * Filtering and Sorting have already been discussed in the previous class, so those
 * sections are not explained again here.
 *******************************************************************************************************/


// =========================================================================================
// FETCH DATA FROM API
// =========================================================================================

async function fetchData() {

    /*
    fetch() sends a request to the Fake Store API.

    Since the API takes some time to respond, we use await so JavaScript waits until
    the response arrives before executing the next line.
    */

    try {

        let response = await fetch(

            "https://fakestoreapi.com/products"

        );



        /*
        The response received from the API is still not usable.

        It is in JSON format, so we convert it into JavaScript objects.
        */

        let data = await response.json();



        /*
        Once the data becomes an array of JavaScript objects, we pass it to
        renderData() so that product cards can be created dynamically.
        */

        renderData(data);

    }

    catch (error) {

        let loader = document.getElementById("loader");

        loader.style.display = "none";



        document.getElementById("productContainer").innerHTML =

            "<h2>Unable to Load Products.</h2>";



        console.log(error);

    }

}



// =========================================================================================
// DISPLAY ALL PRODUCTS
// =========================================================================================

function renderData(data) {

    let parentContainer = document.getElementById("productContainer");



    /*
    Before displaying products, we clear the container.

    This is useful whenever sorting is applied because the old cards are removed
    before displaying the updated order.
    */

    parentContainer.innerHTML = "";



    /*
    Once the data is available, we hide the loading spinner.

    We do this only once before creating all product cards.
    */

    let loader = document.getElementById("loader");

    loader.style.display = "none";



    data.forEach((e, i) => {

        // ==========================================================
        // PRODUCT CARD
        // ==========================================================

        let cardDiv = document.createElement("div");
        cardDiv.className = "card";



        let cat = document.createElement("p");
        cat.innerText = e.category;
        cat.className = "category";



        let img = document.createElement("img");
        img.src = e.image;
        img.className = "product-image";



        let title = document.createElement("p");
        title.innerText = e.title;
        title.className = "title";



        let price = document.createElement("p");
        price.innerText = "$ " + e.price;
        price.className = "price";



        // ==========================================================
        // VIEW DETAILS BUTTON
        // ==========================================================

        let viewBtn = document.createElement("button");

        viewBtn.innerText = "View Details";

        viewBtn.className = "buy-btn";



        /*
        Whenever this button is clicked, we want to open another page
        containing complete information about the selected product.

        Since another HTML page cannot directly access this object,
        we temporarily store it inside Local Storage.
        */

        viewBtn.addEventListener("click", () => {

            /*
            localStorage can store only strings.

            Therefore we first convert the product object into a JSON string.
            */

            localStorage.setItem(
                "singleProduct",
                JSON.stringify(e)
            );

            /*
            After storing the object, we simply navigate to another page.

            That page will read the same object from Local Storage and
            display all its information.
            */

            window.location.href = "view.html";

        });



        // ==========================================================
        // ADD TO CART BUTTON
        // ==========================================================

        let cartBtn = document.createElement("button");

        cartBtn.innerText = "Add To Cart";

        cartBtn.className = "buy-btn";

        cartBtn.style.marginTop = "10px";



        cartBtn.addEventListener("click", () => {

            addToCart(e);

        });



        cardDiv.append(

            cat,
            img,
            title,
            price,
            viewBtn,
            cartBtn

        );



        parentContainer.append(cardDiv);

    });



    // =====================================================================================
    // FILTERING
    // =====================================================================================

    /*
    Filtering Notes

    (Already explained in previous class.)

    Keep your existing filtering code here.
    */



    let filter = document.getElementById("filterByCategory");

    filter.onchange = function (event) {

        let value = event.target.value;

        let cards = document.querySelectorAll(".card");

        cards.forEach((card, index) => {

            if (value == "all") {

                card.style.display = "block";

            }

            else if (data[index].category == value) {

                card.style.display = "block";

            }

            else {

                card.style.display = "none";

            }

        });

    };



    // =====================================================================================
    // SORTING
    // =====================================================================================

    /*
    Sorting Notes

    (Already explained in previous class.)

    Keep your existing sorting logic here.
    */



    let sort = document.getElementById("sortByPrice");

    sort.onchange = function (event) {

        let value = event.target.value;

        if (value == "low-high") {

            data.sort((a, b) => a.price - b.price);

        }

        else if (value == "high-low") {

            data.sort((a, b) => b.price - a.price);

        }

        renderData(data);

    };

}



// =========================================================================================
// ADD TO CART
// =========================================================================================

function addToCart(product) {

    /*
    Whenever a user clicks "Add To Cart", we want that product to remain
    available even if the page is refreshed.

    Therefore we store cart data inside Local Storage.
    */



    /*
    First we read the existing cart.

    If the cart does not exist yet, we create an empty array.

    || [] prevents errors during the very first click.
    */

    let cart = JSON.parse(

        localStorage.getItem("cart")

    ) || [];



    /*
    push() adds the newly selected product to the end of the array.
    */

    cart.push(product);



    /*
    Local Storage cannot store arrays or objects directly.

    Therefore we convert the updated array into a JSON string before storing it.
    */

    localStorage.setItem(

        "cart",

        JSON.stringify(cart)

    );



    /*
    Simple success message.
    */

    alert("Product Added To Cart Successfully.");

}



// =========================================================================================
// START APPLICATION
// =========================================================================================

/*
Everything begins here.

Calling fetchData() starts the complete execution.

fetchData()

      ↓

API Request

      ↓

Response

      ↓

Convert JSON

      ↓

renderData()

      ↓

Display Product Cards

      ↓

User can

• View Details

• Add To Cart

• Filter

• Sort
*/

fetchData();