/*******************************************************************************************************
 *************************************** SHOPPING CART *************************************************
 *
 * Topics Covered:
 *
 * 1. Reading Data From Local Storage
 * 2. JSON.parse()
 * 3. Displaying Cart Products
 * 4. Remove Product
 * 5. splice()
 * 6. Updating Local Storage
 * 7. Re-rendering the UI
 *
 * Note:
 * Fetch API, Rendering, Filtering and Sorting have already been discussed in previous
 * classes, so this file mainly focuses on Local Storage and Remove Cart functionality.
 *******************************************************************************************************/



// =========================================================================================
// READ CART DATA
// =========================================================================================

/*
When products are added from the Home page, they are stored inside Local Storage.

Now we want to display those products on the Cart Page.

Since Local Storage stores everything as a STRING, we first convert it back into a
JavaScript array using JSON.parse().
*/

let data = JSON.parse(localStorage.getItem("cart")) || [];


/*
If "cart" does not exist inside Local Storage, getItem() returns null.

JSON.parse(null) also returns null.

Using

|| []

ensures that data always becomes an array.

This prevents our program from crashing during the very first visit.
*/





// =========================================================================================
// DISPLAY CART PRODUCTS
// =========================================================================================

function renderData(data){

    /*
    First we access the parent container where all cart products
    will be displayed.
    */

    let parentContainer = document.getElementById("productContainer");


    /*
    Before creating new cards, we remove all the old ones.

    This is important because renderData() will also be called after
    removing a product.

    Without clearing the container, duplicate cards would appear.
    */

    parentContainer.innerHTML = "";



    /*
    Suppose the cart becomes empty.

    Instead of showing a blank page, we display a friendly message.
    */

    if(data.length == 0){

        parentContainer.innerHTML = `

            <div class="empty-cart">

                <h2>Your Cart is Empty</h2>

                <p>
                    Looks like you haven't added any products yet.
                </p>

                <a href="index.html">
                    Continue Shopping
                </a>

            </div>

        `;

        return;

    }



    /*
    forEach() visits every product stored inside the cart array.

    Each iteration gives us

    el  → Current Product

    i   → Current Index
    */

    data.forEach((el, i)=>{


        // =====================================================
        // PRODUCT CARD
        // =====================================================

        let cardDiv = document.createElement("div");
        cardDiv.className = "card";



        let category = document.createElement("p");
        category.innerText = el.category;
        category.className = "category";



        let image = document.createElement("img");
        image.src = el.image;
        image.className = "product-image";



        let title = document.createElement("p");
        title.innerText = el.title;
        title.className = "title";



        let price = document.createElement("p");
        price.innerText = "$ " + el.price;
        price.className = "price";



        // =====================================================
        // REMOVE BUTTON
        // =====================================================

        let removeBtn = document.createElement("button");

        removeBtn.innerText = "Remove From Cart";

        removeBtn.className = "remove-btn";



        /*
        Whenever this button is clicked, we call removeCart().

        We send

        el → current product

        i → current position of that product inside the array.

        The index helps JavaScript know exactly which product
        should be removed.
        */

        removeBtn.addEventListener("click", ()=>{

            removeCart(el, i);

        });



        cardDiv.append(

            category,
            image,
            title,
            price,
            removeBtn

        );



        parentContainer.append(cardDiv);

    });

}





// =========================================================================================
// REMOVE PRODUCT
// =========================================================================================

function removeCart(el, i){

    /*
    The first step is reading the latest cart data.

    We do NOT use the old data variable because Local Storage
    should always be considered the latest source of information.

    Therefore we read it again.
    */

    let cartData = JSON.parse(

        localStorage.getItem("cart")

    ) || [];



    /*
    Array.splice() removes elements from an array.

    Syntax

    splice(startIndex, deleteCount)

    startIndex  → Where deletion starts

    deleteCount → Number of elements to remove
    */

    cartData.splice(i,1);



    /*
    Example

    Before

    0 → Shoes

    1 → Watch

    2 → Laptop

    3 → Bag



    Suppose

    splice(1,1)



    After

    0 → Shoes

    1 → Laptop

    2 → Bag



    The Watch has been removed.

    Remaining elements automatically shift forward.
    */



    /*
    At this point the array has changed only inside JavaScript.

    Local Storage still contains the old cart.

    Therefore we save the updated array back into Local Storage.
    */

    localStorage.setItem(

        "cart",

        JSON.stringify(cartData)

    );



    /*
    The webpage is still showing the old product cards.

    Therefore we call renderData() again.

    renderData()

        ↓

    Clears the screen

        ↓

    Reads updated array

        ↓

    Creates fresh cards

        ↓

    Displays updated cart

    This process is called Re-rendering.
    */

    renderData(cartData);

}





// =========================================================================================
// START APPLICATION
// =========================================================================================

/*
Execution Flow

Open Cart Page

        ↓

Read Local Storage

        ↓

Convert JSON String into Array

        ↓

renderData()

        ↓

Display Cart Products

        ↓

User Clicks Remove

        ↓

removeCart()

        ↓

splice()

        ↓

Update Local Storage

        ↓

renderData()

        ↓

Updated Cart Displayed
*/

renderData(data);