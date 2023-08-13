let storedProducts = JSON.parse(localStorage.getItem("products"));
const isLoggedIn = localStorage.getItem("loggedInUser");
let totalProduct = Object.keys(storedProducts);

// Check The local storage have storedProducts or Not *********
// **********************************
if (totalProduct.length > 0) {
    let itemOfCart = document.getElementById("cartItemCount");
    if (isLoggedIn) {
        itemOfCart.innerText = totalProduct.length;
        showCartItem(storedProducts, totalProduct);
    }
    else {
        itemOfCart.innerText = 0;
    }
}
else {
    let tableItem = document.getElementById("table");
    if (tableItem) {
        tableItem.innerHTML = `<h2>Your cart is empty.</h2>`;
    }
}

// Show storedProduct of local storege into addToCart Page **************
// *****************************************
function showCartItem(storedProducts, totalProduct) {
    let tableItem = document.getElementById("table");
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
        console.log(deleteProduct);
        deleteItemById(deleteProduct);
    })
}

function deleteItemById(deleteProductId) {
    delete storedProducts[deleteProductId];
    console.log(storedProducts);
    localStorage.setItem("products", JSON.stringify(storedProducts));
    window.location.reload();
}

// Switch to productPage *********
// *********************************
let seeProductBtn = document.getElementsByClassName("cartImg");

if (seeProductBtn) {
    for (let j = 0; j < seeProductBtn.length; j++) {
        seeProductBtn[j].addEventListener("click", () => {
            let seeProduct = seeProductBtn[j].parentElement.id;
            gotoProductPage("productPage.html")
        })
    }
}

let gotoProductPage = (link) => {
    window.location.href = link;
}
