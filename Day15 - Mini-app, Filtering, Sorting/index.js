async function fetchData() {
    const response = await fetch('https://fakestoreapi.com/products');

    const data = await response.json();

    renderData(data);
}

async function renderData(data) {
    const parentContainer = document.getElementById('productContainer');

    data.forEach((e, i) => {
        console.log(e);
        const loader = document.getElementById('loader');
        loader.style.display = "none";
        const cardDiv = document.createElement('div');

        // cardDiv.style.border = "1px solid black";
        cardDiv.style.textAlign = "center";
        cardDiv.style.boxShadow="#0f62fe 5px 5px, rgba(45, 25, 155, 0.3) 10px 10px, rgba(82, 56, 155, 0.2) 15px 15px, rgba(124, 112, 181, 0.1) 20px 20px, rgba(135, 129, 205, 0.05) 25px 25px"


        const cat = document.createElement("p");
        cat.innerText = e.category;

        const img = document.createElement("img");
        img.src = e.image;
        img.style.width = "200px";
        img.style.height = "200px";

        const price = document.createElement("p");
        price.innerText = e.price;

        const title = document.createElement("p");
        title.innerText = e.title;

        const button = document.createElement("button");
        button.innerText = "Buy Now";
        button.style.backgroundColor = "#4a2fe4";
        button.style.border = "1px solid none";
        button.style.padding = "5px";
        button.style.borderRadius = "5px";
        button.style.width = "100px";
        button.style.color = "white";

        cardDiv.append(cat, img, price, title, button);
        parentContainer.append(cardDiv);

    /*******************************************************************************************************
     ************************************* FILTERING PRODUCTS **********************************************
    *
    * After displaying all the products, we want the user to see only a particular category.
    *
    * Instead of fetching data from the API again, we simply hide the products that do not
    * match the selected category. This makes filtering much faster because all the product
    * cards are already present on the webpage.
    *******************************************************************************************************/

    const filter = document.getElementById("filterByCategory");

    /*
    The first step is to access the <select> element used for filtering.

    This dropdown contains different categories such as

    • All
    • Men's Clothing
    • Women's Clothing
    • Jewelry
    • Electronics

    Whenever the user selects one of these options, we want our JavaScript code to know
    which option was chosen.
    */

    filter.addEventListener("change", (event) => {

        const selectedCategory = event.target.value;

        /*
        We attach a "change" event to the dropdown.

        The change event runs only when the selected option changes.

        Whenever the user selects another category, this function automatically executes.

        The event object contains information about the element that triggered the event.

        event.target refers to the dropdown itself.

        event.target.value gives us the value of the currently selected option.

        For example,

        "all"
        "electronics"
        "jewelery"
        "men's clothing"

        This value is stored inside the variable selectedCategory because we will compare it
        with every product's category.
        */

        if(selectedCategory === "all"){

            cardDiv.style.display = "block";

        }

        /*
        If the user selects "All", every product should become visible.

        Every product card enters this condition one by one, so each card's display property
        is changed to "block", making all the products visible again.
        */

        else if(selectedCategory === e.category){

            cardDiv.style.display = "block";

        }

        /*
        If the selected category matches the current product's category, that product should
        remain visible.

        Example:

        selectedCategory = "electronics"

        Current Product Category = "electronics"

        Since both values are equal, this product is displayed.
        */

        else{

            cardDiv.style.display = "none";

        }

        /*
        If the categories do not match, there is no need to remove the product from the DOM.

        Instead, we simply hide it using

            display: none;

        The element still exists inside the webpage but is no longer visible to the user.

        This approach is much faster than deleting the element and creating it again whenever
        another category is selected.
        */

    })





    /*******************************************************************************************************
     ************************************** SORTING PRODUCTS ***********************************************
    *
    * After implementing filtering, the next feature is sorting.
    *
    * Filtering decides "Which products should be visible?"
    *
    * Sorting decides "In what order should the products appear?"
    *
    * Unlike filtering, sorting does not hide or remove any product.
    * It simply rearranges the order of the objects inside the array.
    *
    * Once the array is sorted, we display the products again in their new order.
    *******************************************************************************************************/


    const sort = document.getElementById("sortByPrice");

    /*
    The first step is to access the sorting dropdown.

    This dropdown contains options like

    • Featured
    • Price (Low to High)
    • Price (High to Low)

    Whenever the user selects one of these options, we want to rearrange the products
    accordingly.
    */


    sort.addEventListener("change", (event)=>{

        const selectedValue = event.target.value;

        /*
        The "change" event runs whenever the selected option changes.

        event.target refers to the dropdown itself.

        event.target.value gives us the value of the selected option.

        Examples:

        "default"

        "low-high"

        "high-low"

        This value is stored in selectedValue because it tells us which type of sorting
        should be performed.
        */


        if(selectedValue === "low-high"){

            data.sort((a,b)=>{
                return a.price-b.price;
            });

        }

        /*
        Array.sort() is used to rearrange the elements of an array.

        Here, every element of the array is an object representing one product.

        sort() compares two objects at a time.

        'a' represents the first product.

        'b' represents the second product.

        Since we want to sort according to price, we compare

            a.price
            b.price

        When we return

            a.price - b.price

        JavaScript places the smaller price before the larger price.

        Example

        Before Sorting

        800
        250
        1200
        500

        After Sorting

        250
        500
        800
        1200

        This is called Ascending Order or Low to High.
        */


        else if(selectedValue === "high-low"){

            data.sort((a,b)=>{
                return b.price-a.price;
            });

        }

        /*
        For descending order, we simply reverse the comparison.

        Instead of

            a.price - b.price

        we write

            b.price - a.price

        Now JavaScript places the larger price before the smaller one.

        Example

        Before Sorting

        800
        250
        1200
        500

        After Sorting

        1200
        800
        500
        250

        This is called Descending Order or High to Low.
        */


        else{

            /*
            If the user selects the default option, no sorting is applied.

            The products remain in their original order.
            */

        }


        /*
        At this point, only the order of objects inside the array has changed.

        The webpage still shows the old order because the HTML has already been created.

        Therefore, we must display the products again.
        */


        parentContainer.innerHTML = "";

        /*
        innerHTML = "" removes all the existing product cards from the container.

        This gives us an empty container where the products can be displayed again in
        their new sorted order.
        */


        renderData(data);

        /*
        Finally, we call renderData() again.

        Notice that we are not fetching the API again.

        We are using the same array that already exists.

        The only difference is that its order has been changed using sort().

        Since renderData() loops through the array from the first element to the last,
        the products now appear on the webpage in the newly sorted order.

        Complete Flow

        User Selects Sorting Option

                ↓

        change Event Executes

                ↓

        Selected Value is Read

                ↓

        data.sort() Rearranges the Array

                ↓

        Remove Existing Product Cards

                ↓

        renderData(data)

                ↓

        Products Displayed in Sorted Order
        */
    });
    })
}

fetchData();