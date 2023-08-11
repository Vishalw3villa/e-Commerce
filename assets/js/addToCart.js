
let storedProducts = JSON.parse(localStorage.getItem("products"));

if (storedProducts) {
    let totalProduct = Object.keys(storedProducts).length;
    let itemOfCart = document.getElementById("cartItemCount");
    console.log(totalProduct);
    itemOfCart.innerText = totalProduct;
    showCartItem(storedProducts, totalProduct);
}
else {
    console.log("Cart is empty");
}

function showCartItem(storedProducts, totalProduct) {
    let tableItem = document.getElementById("table");

    tableItem.innerHTML += `<tr id="cartRowHead">
                                <th id="imageHeading">IMAGE</th>
                                <th>Product Name</th>
                                <th>Model</th>
                                <th>Unit Price</th>
                                <th>Total</th>
                                <th>Quantity</th>
                            </tr>`
     for(let j=0;j<totalProduct;j++){
        tableItem.innerHTML += `<tr>
                                    <td class="cartImg"><img src="./assets/images/apple.png" alt=""></td>
                                    <td>Erickson</td>
                                    <td>model519</td>
                                    <td>$999.00 </td>
                                    <td>$999.00 </td>
                                    <td>
                                        <div class="quantity">
                                            <div><i class="fa-solid fa-rotate reloadCart"></i></div>
                                            <div><input type="number" min="1" max="10" value="2" name="" id=""></div>
                                            <div><i class="fa-solid fa-xmark"></i></div>
                                        </div>
                                    </td>
                                </tr>`
        
     }                        
}