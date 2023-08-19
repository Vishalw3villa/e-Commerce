let storedLikedProducts = JSON.parse(localStorage.getItem("wishCart"));
let isLoggedIn = localStorage.getItem("loggedInUser");
let totalWishListProduct = [];
if (storedLikedProducts) {
    totalWishListProduct = Object.keys(storedLikedProducts);
}

// Showing heart icon red if you have added to its item into wishList
function showLikedIcon(classTag, wishlistIdContainer) {
    let wishlistBtn = document.getElementsByClassName(classTag);

    for (let j = 0; j < wishlistBtn.length; j++) {
        let itemId = wishlistBtn[j].parentElement.parentElement.id;
        if (wishlistIdContainer.has(String(itemId))) {
            wishlistBtn[j].classList.add("fa-solid");
            wishlistBtn[j].classList.add("redHeart");
            wishlistBtn[j].classList.remove("fa-regular");
            wishlistBtn[j].style.backgound = "red !important";
        }
    }
}



function addToWishlist(self, productId) {
    let wishCart = document.getElementById(wishId);
    self.classList.add("fa-solid");
    self.classList.add("redHeart");
    self.classList.remove("fa-regular");
    self.style.backgound = "red !important";


    if (isLoggedIn) {
        if (!wishlistIdContainer.has(String(productId))) {
            wishlistIdContainer.add(String(productId));
            storeItemToWishList(Number(productId));
            alert("Item is added into the wishlist.")
        }
        else {
            alert("Already have in wish list.")
        }
    }
    else {
        alert("Loggin first!");
    }
}


let storeItemToWishList = async (itemId) => {
    let product = await filteredLikedProducts(itemId);

    let localStoredProduct = JSON.parse(localStorage.getItem("wishCart"));

    localStoredProduct[itemId] = product;

    localStorage.setItem("wishCart", JSON.stringify(localStoredProduct));
    showWishListCount();
}

// Update wishlist count notification
const showWishListCount = () => {
    let storedProducts = JSON.parse(localStorage.getItem("wishCart"));
    let totalProduct = Object.keys(storedProducts).length;
    let itemOfWishlist = document.getElementById("wishcount");

    itemOfWishlist.innerText = totalProduct;
}

async function filteredLikedProducts(itemId) {
    try {
        let response = await fetch("./assets/data/product.json");
        data = await response.json();
        data = data["products"];

        let filteredId = data.find((product) => product.id === itemId);
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


// Check The local storage have wishList Item or Not *********
// **********************************
if (totalWishListProduct.length > 0) {
    let itemOfWishlist = document.getElementById("wishcount");
    if (isLoggedIn) {
        itemOfWishlist.innerText = totalWishListProduct.length;
        showWishlistItem(storedLikedProducts, totalWishListProduct);
    }
    else {
        itemOfWishlist.innerText = 0;
    }
}
else {
    let tableItem = document.getElementById("wishlistItem");
    if (tableItem) {
        tableItem.innerHTML = `<h2>Your wishlist is empty.</h2>`;
    }
}

// Show storedProduct of local storege into wishList Page **************
// *****************************************
function showWishlistItem(storedLikedProducts, totalWishListProduct) {
    let tableItem = document.getElementById("wishlistItem");
    if (tableItem) {
        tableItem.innerHTML += `<tr id="cartRowHead">
                                <th id="imageHeading">IMAGE</th>
                                <th>Product Name</th>
                                <th>Model</th>
                                <th>Unit Price</th>
                                <th>Total</th>
                                <th>Quantity</th>
                            </tr>`
        for (let j = 0; j < totalWishListProduct.length; j++) {
            let {
                id,
                img,
                company,
                model,
                name,
                price,
                category,
                description
            } = storedLikedProducts[totalWishListProduct[j]];

            tableItem.innerHTML += `<tr id=${id}>
                                    <td class="wishlistImg"><img src=${img} alt=""></td>
                                    <td>${company}</td>
                                    <td>${model}</td>
                                    <td>${price}</td>
                                    <td>$999.00 </td>
                                    <td>
                                        <div class="quantity">
                                            <div><i class="fa-solid fa-rotate reloadCart"></i></div>
                                            <div><input type="number" min="1" max="10" value="2" name="" id=""></div>
                                            <div class = "deleteLikedItem"><i class="fa-solid fa-xmark"></i></div>
                                        </div>
                                    </td>
                                </tr>`

        }
    }
}

// Delete Item from wishList ******************
// **********************************************************************
let deleteLikedItem = document.getElementsByClassName("deleteLikedItem");
for (let j = 0; j < deleteLikedItem.length; j++) {
    deleteLikedItem[j].addEventListener("click", () => {
        let deleteProduct = deleteLikedItem[j].parentElement.parentElement.parentElement.id;

        deleteLikedItemById(deleteProduct);
    })
}

function deleteLikedItemById(deleteProductId) {
    delete storedLikedProducts[deleteProductId];
    localStorage.setItem("wishCart", JSON.stringify(storedLikedProducts));
    window.location.reload();
}



switchToProductPage("wishlistImg");
openCart();






