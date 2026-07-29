/*******************************************************************************************************
 ************************************** SINGLE PRODUCT *************************************************
 *
 * Topics Covered:
 *
 * 1. Reading Single Product From Local Storage
 * 2. JSON.parse()
 * 3. Dynamic HTML Creation
 * 4. Accessing Nested Objects
 * 5. Displaying Product Details
 * 6. Navigation Using window.location
 *
 * Note:
 * The selected product was already stored inside Local Storage from the Home Page.
 * This file simply reads that product and displays all its information.
 *******************************************************************************************************/



// =========================================================================================
// READ PRODUCT FROM LOCAL STORAGE
// =========================================================================================

/*
When the user clicks the "View Details" button on the Home Page,
we save that particular product inside Local Storage.

Example

localStorage.setItem(
    "singleProduct",
    JSON.stringify(product)
)

Now our task is to retrieve that stored product.

Again, Local Storage always stores data as a STRING.

Therefore we convert that string back into a JavaScript object
using JSON.parse().
*/

let product = JSON.parse(localStorage.getItem("singleProduct"));

if (!product) {
    window.location.href = "index.html";
}





// =========================================================================================
// ACCESS PAGE CONTAINERS
// =========================================================================================

/*
Our HTML contains two divisions.

leftChild

→ Displays the product image.

rightChild

→ Displays all product information.

We first access both containers so that JavaScript can insert
new elements into them.
*/

let leftDiv = document.getElementById("leftChild");

let rightDiv = document.getElementById("rightChild");





// =========================================================================================
// CREATE PRODUCT IMAGE
// =========================================================================================

/*
The product image will appear on the left side.

The image URL is already available inside

product.image

So we simply create an image element and assign its source.
*/

let image = document.createElement("img");

image.src = product.image;

leftDiv.append(image);





// =========================================================================================
// CREATE PRODUCT DETAILS
// =========================================================================================

/*
Now we create different HTML elements
to display every piece of information.

Each element is created dynamically using JavaScript.
*/

let category = document.createElement("p");

category.innerText = product.category;

category.className = "product-category";



let title = document.createElement("h2");

title.innerText = product.title;

title.className = "product-title";



let price = document.createElement("h3");

price.innerText = "$ " + product.price;

price.className = "product-price";



let description = document.createElement("p");

description.innerText = product.description;

description.className = "description";





// =========================================================================================
// ACCESSING NESTED OBJECTS
// =========================================================================================

/*
Some data inside an object can itself be another object.

Example

product

{

    title : "...",

    price : 250,

    rating : {

        rate : 4.8,

        count : 560

    }

}

Here,

rating

is another object inside the main product object.

This is called a Nested Object.

To access values inside a nested object,
we keep using the dot operator.

product.rating.rate

↓

product

↓

rating

↓

rate

Similarly,

product.rating.count

gives the total number of customer reviews.
*/

let ratingBox = document.createElement("div");

ratingBox.className = "rating-box";



let rating = document.createElement("p");

rating.innerText = "⭐ Rating : " + product.rating.rate;



let reviews = document.createElement("p");

reviews.innerText = "Reviews : " + product.rating.count;



ratingBox.append(

    rating,

    reviews

);





// =========================================================================================
// BACK BUTTON
// =========================================================================================

/*
This button takes the user back to the Home Page.

window.location.href changes the current webpage
to another webpage.

After clicking the button,

view.html

changes to

index.html.
*/

let button = document.createElement("button");

button.innerText = "Back To Products";

button.className = "back-btn";



button.addEventListener("click", ()=>{

    window.location.href = "index.html";

});





// =========================================================================================
// DISPLAY EVERYTHING
// =========================================================================================

/*
Finally, we append every element inside
the right side of our page.

The order of append() determines the order
in which elements appear on the screen.
*/

rightDiv.append(

    category,

    title,

    price,

    description,

    ratingBox,

    button

);





// =========================================================================================
// COMPLETE EXECUTION FLOW
// =========================================================================================

/*
Home Page Opens

        ↓

User Clicks "View Details"

        ↓

Selected Product Stored In Local Storage

        ↓

view.html Opens

        ↓

JavaScript Reads Local Storage

        ↓

JSON.parse()

        ↓

JavaScript Creates HTML Elements

        ↓

Product Image Displayed

        ↓

Product Information Displayed

        ↓

User Clicks "Back To Products"

        ↓

window.location.href

        ↓

Home Page Opens Again
*/