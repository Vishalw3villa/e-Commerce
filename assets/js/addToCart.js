let storedProducts = JSON.parse(localStorage.getItem("products"));
isLoggedIn = localStorage.getItem("loggedInUser");
let totalProduct = [];
if (storedProducts) {
    totalProduct = Object.keys(storedProducts);
}



/* ***********************
*********** Add to cart *****
********************************/

function addToCart(productId) {
    console.log(productIdContainer);
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        if (!productIdContainer.has(String(productId))) {
            productIdContainer.add(String(productId));
            storeItemtoLocal(Number(productId));
        }
        else {
            alert("Already have the item in Cart.")
        }
    }
    else {
        alert("LoggIn first");
    }
}


let storeItemtoLocal = async (newId) => {
    let product = await filteredProducts(newId);
    let localStoredProduct = JSON.parse(localStorage.getItem("products"));
    localStoredProduct[newId] = product;
    localStorage.setItem("products", JSON.stringify(localStoredProduct));
    addCartItem();
}


const addCartItem = () => {
    let storedProducts = JSON.parse(localStorage.getItem("products"));
    let totalProduct = Object.keys(storedProducts).length;
    let itemOfCart = document.getElementById("cartItemCount");
    let mobileItemOfCart = document.getElementById("mobileCartItemCount");

    itemOfCart.innerText = totalProduct;
    mobileItemOfCart.innerText = totalProduct;
}



async function filteredProducts(newId) {
    try {
        let response = await fetch("./assets/data/product.json");
        data = await response.json();
        data = data["products"];

        let filteredId = data.find((product) => product.id === newId);
        if (filteredId) {
            return filteredId;
        }
        else {
            throw (new Error("Product is not available."))
        }
    }
    catch (error) {
        console.log("Error fetching on products data: ", error);
    }

}




// Check The local storage have storedProducts or Not *********
// **********************************
if (totalProduct.length > 0) {
    let itemOfCart = document.getElementById("cartItemCount");
    let mobileItemOfCart = document.getElementById("mobileCartItemCount");
    if (isLoggedIn) {
        itemOfCart.innerText = totalProduct.length;
        mobileItemOfCart.innerText = totalProduct.length;
        showCartItem(storedProducts, totalProduct);
    }
    else {
        itemOfCart.innerText = 0;
    }
}
else {
    let tableItem = document.getElementById("cartTable");
    if (tableItem) {
        tableItem.innerHTML = `<h2>Your cart is empty.</h2>`;
    }
}

// Show storedProduct of local storege into addToCart Page **************
// *****************************************
function showCartItem(storedProducts, totalProduct) {
    let tableItem = document.getElementById("cartTable");
    if (tableItem) {
        tableItem.innerHTML += `<tr id="cartRowHead">
                                <th id="imageHeading">IMAGE</th>
                                <th>Product Name</th>
                                <th>Model</th>
                                <th>Unit Price</th>
                                <th>Total</th>
                                <th>Quantity</th>
                            </tr>`
        for (let j = 0; j < totalProduct.length; j++) {
            let {
                id,
                img,
                company,
                model,
                name,
                price,
                category,
                description
            } = storedProducts[totalProduct[j]];

            tableItem.innerHTML += `<tr id=${id}>
                                    <td class="cartImg"><img src=${img} alt=""></td>
                                    <td>${company}</td>
                                    <td>${model}</td>
                                    <td>${price}</td>
                                    <td>$999.00 </td>
                                    <td>
                                        <div class="quantity">
                                            <div><i class="fa-solid fa-rotate reloadCart"></i></div>
                                            <div><input type="number" min="1" max="10" value="2" name="" id=""></div>
                                            <div class = "deleteCartItem"><i class="fa-solid fa-xmark"></i></div>
                                        </div>
                                    </td>
                                </tr>`

        }
    }
}


// Delete Item from cart ******************
// **********************************************************************
let deleteItem = document.getElementsByClassName("deleteCartItem");
for (let j = 0; j < deleteItem.length; j++) {
    deleteItem[j].addEventListener("click", () => {
        let deleteProduct = deleteItem[j].parentElement.parentElement.parentElement.id;

        deleteItemById(deleteProduct);
    })
}

function deleteItemById(deleteProductId) {
    delete storedProducts[deleteProductId];

    localStorage.setItem("products", JSON.stringify(storedProducts));
    window.location.reload();
}


switchToProductPage("cartImg");
openWishlist();

