/* Function for loading required js file */
function loadJS(FILE_URL, type = "text/javascript", async = true) {
    let scriptEle = document.createElement("script");

    scriptEle.setAttribute("src", FILE_URL);
    scriptEle.setAttribute("type", type);
    scriptEle.setAttribute("async", async);

    document.body.appendChild(scriptEle);

    // success event 
    scriptEle.addEventListener("load", () => {
        console.log("File loaded")
    });

    // error event
    scriptEle.addEventListener("error", (ev) => {
        console.log("Error on loading file", ev);
    });
}

let productStorage = JSON.parse(localStorage.getItem("products"));
let productIdContainer = new Set();
if (productStorage) {
    productIdContainer = new Set(Object.keys(productStorage));
}

let wishlistStorage = JSON.parse(localStorage.getItem("wishCart"));
let wishlistIdContainer = new Set();
if (wishlistStorage) {
    wishlistIdContainer = new Set(Object.keys(wishlistStorage));
}



// *******************
// Landing page script
// *******************

/* Add header html file to landing Page */
async function addHeaderInIndex() {
    try {
        let response = await fetch("./header.html");
        let data = await response.text();
        document.getElementById('headerPartInIndex').innerHTML = data;
        loadJS("./assets/js/login.js");
        loadJS("./assets/js/index.js", "module")
        loadJS("./assets/js/searchPage.js")
        loadJS("./assets/js/addToCart.js")
        loadJS("./assets/js/wishList.js")
    }
    catch { error => console.error('Error fetching content:', error) };
}

addHeaderInIndex();

/* Add footer html file to landing Page */
async function addFooterInIndex() {
    try {
        let response = await fetch("./footer.html");
        let data = await response.text();
        document.getElementById('indexFooter').innerHTML = data;
    }
    catch { error => console.error('Error fetching content:', error) };
}

addFooterInIndex();




// *********************
// Script of Search Page
// *********************


/* Add header html file to search Page */
async function addHeaderInSearch() {
    try {
        let response = await fetch("./header.html");
        let data = await response.text();
        document.getElementById('headerPartInSearch').innerHTML = data;
        loadJS("./assets/js/login.js");
        loadJS("./assets/js/searchPage.js")
        loadJS("./assets/js/addToCart.js")
        loadJS("./assets/js/wishList.js")
        openCart();
        openWishlist();
    }
    catch { error => console.error('Error fetching content:', error) };
}


addHeaderInSearch();

/* Add footer html file to search Page */
async function addFooterInSearch() {
    try {
        let response = await fetch("./footer.html");
        let data = await response.text();
        document.getElementById('searchFooter').innerHTML = data;
    }
    catch { error => console.error('Error fetching content:', error) };
}

addFooterInSearch();




// ***********************
// Script for Product page
// ***********************

/* Add header html file to Product Page */
async function addHeaderInProduct() {
    try {
        let response = await fetch("./header.html");
        let data = await response.text();
        document.getElementById('headerPartInProduct').innerHTML = data;
        loadJS("./assets/js/login.js");
        loadJS("./assets/js/searchPage.js")
        loadJS("./assets/js/addToCart.js")
        loadJS("./assets/js/wishList.js")
        openCart();
        openWishlist();
    }
    catch { error => console.error('Error fetching content:', error) };
}

addHeaderInProduct();

/* Add footer html file to product Page */
async function addFooterInProduct() {
    try {
        let response = await fetch("./footer.html");
        let data = await response.text();
        document.getElementById('productFooter').innerHTML = data;
    }
    catch { error => console.error('Error fetching content:', error) };
}

addFooterInProduct();

var aboutProduct = {
    "Description": "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sapient Hello how ",
    "Specification": "Specification Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sapient Hello how ",
    "reviews": "reviews Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sapient Hello how ",
    "Custom Tabs": "Custom Tabs Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sapient Hello how ",
}

var aboutProductTab = document.getElementsByClassName("overview_slide");

for (let i = 0; i < aboutProductTab.length; i++) {
    aboutProductTab[i].onclick = function () {
        var clickedValue = this.innerHTML;
        document.getElementById("truncate").innerHTML = aboutProduct[clickedValue];

        for (var j = 0; j < aboutProductTab.length; j++) {
            aboutProductTab[j].style["border-bottom"] = "0px";
            aboutProductTab[j].style["color"] = "gray";
        }

        this.style["border-bottom"] = "2px solid orange";
        this.style["color"] = "black";

    }
}

let sapmleImg = [
    "./assets/images/camera1.avif",
    "./assets/images/campng.png",
    "./assets/images/computer.avif",
    "./assets/images/mobile2.avif",
    "./assets/images/mobile3.avif",
    "./assets/images/mobile1.avif"
]

let sampleImgTab = document.getElementsByClassName("sample_img");

for (let i = 0; i < sampleImgTab.length; i++) {
    sampleImgTab[i].onclick = function () {
        var clickedImg = this.innerHTML;
        document.getElementById("appleproduct").src = sapmleImg[i];
    }
}


// *************************
// Script for AddToCart page
// *************************

/* Add header html file to addToCart Page */
async function addHeaderInAddtoCart() {
    try {
        let response = await fetch("./header.html");
        let data = await response.text();
        document.getElementById('headerPartInAddToCart').innerHTML = data;
        loadJS("./assets/js/login.js");
        loadJS("./assets/js/searchPage.js")
        loadJS("./assets/js/wishList.js")
        loadJS("./assets/js/addToCart.js")
        searchInput();
        openWishlist();
    }
    catch { error => console.error('Error fetching content:', error) };
}

addHeaderInAddtoCart();

/* Add footer html file to addToCart Page */
async function addFooterInaddToCart() {
    try {
        let response = await fetch("./footer.html");
        let data = await response.text();
        document.getElementById('addToCartFooter').innerHTML = data;
    }
    catch { error => console.error('Error fetching content:', error) };
}

addFooterInaddToCart();



function openCart() {
    let cartBtn = document.querySelector("#cartbtn");
    cartBtn.addEventListener("click", () => {
        gotoAddToCart("addToCart.html");
    })
}

let gotoAddToCart = (link) => {
    window.location.href = link;
}

// ***************************
// Function for Switching to 
// product page by clicking 
// any images to landing page
// ***************************

function switchToProductPage(className) {
    let seeProductBtn = document.getElementsByClassName(className);
    if (seeProductBtn) {
        for (let j = 0; j < seeProductBtn.length; j++) {
            seeProductBtn[j].addEventListener("click", () => {
                let seeProduct = seeProductBtn[j].parentElement.id;
                console.log(seeProduct);
                gotoProductPage("productPage.html", seeProduct);
            })
        }
    }
    else {
        console.log("switchToProductPage error..");
    }

    let gotoProductPage = (link, seeProduct) => {
        const productPageUrl = `${link}?productId=${encodeURIComponent(seeProduct)}`;
        window.location.href = productPageUrl;
    }
}

const urlParam = new URLSearchParams(window.location.search);
const productQuery = urlParam.get("productId");

if (productQuery) {
    fetchProductandDisplay(productQuery);
}

function fetchProductandDisplay(productQuery) {
    // document.getElementById("searchname").innerText = productQuery;
    let allAvailableItems = queryProduct(productQuery);
    allAvailableItems.then((data) => {
        renderProduct(data);
    })

}

function renderProduct(data) {
    let productDispaly = document.getElementsByClassName("productDisplay");
    for (let j = 0; j < productDispaly.length; j++) {
        productDispaly[j].src = data.img;
    }

    let productName = document.getElementsByClassName("productName");
    for (let j = 0; j < productName.length; j++) {
        productName[j].innerText = data.model;
    }
}

async function queryProduct(productQuery) {
    try {
        let response = await fetch("./assets/data/product.json");
        data = await response.json();
        data = data["products"];
        productQuery = Number(productQuery);
        let availableProducts = data.find((product) => product.id === productQuery);
        if (availableProducts) {
            return availableProducts;
        }
        else {
            throw (new Error("Product is not available."))
        }
    }
    catch (error) {
        console.log("Error fetching on products data: ", error);
    }
}



// *************************
// Script for Wishlist Page
// *************************

/* Add header html file to wishlist Page */
async function addHeaderInWishlist() {
    try {
        let response = await fetch("./header.html");
        let data = await response.text();
        document.getElementById('headerPartInWishlist').innerHTML = data;
        loadJS("./assets/js/login.js");
        loadJS("./assets/js/searchPage.js")
        loadJS("./assets/js/wishList.js")
        loadJS("./assets/js/addToCart.js")
        searchInput();
    }
    catch { error => console.error('Error fetching content:', error) };
}

addHeaderInWishlist();

/* Add footer html file to wishlist Page */
async function addFooterInWishlist() {
    try {
        let response = await fetch("./footer.html");
        let data = await response.text();
        document.getElementById('addWishlistFooter').innerHTML = data;
    }
    catch { error => console.error('Error fetching content:', error) };
}

addFooterInWishlist();

function openWishlist() {
    let wishlistBtn = document.querySelector("#wishList");
    wishlistBtn.addEventListener("click", () => {
        gotoWishList("wishlist.html");
    })
}

let gotoWishList = (link) => {
    window.location.href = link;
}


// ****************************
// Script for allProducts Page
// ****************************

/* Add header html file to wishlist Page */
async function addHeaderInAllProduct() {
    try {
        let response = await fetch("./header.html");
        let data = await response.text();
        document.getElementById('headerPartInAllProduct').innerHTML = data;
        loadJS("./assets/js/login.js");
        loadJS("./assets/js/searchPage.js")
        loadJS("./assets/js/allProducts.js");
        loadJS("./assets/js/wishList.js")
        loadJS("./assets/js/addToCart.js")
        searchInput();
    }
    catch { error => console.error('Error fetching content:', error) };
}

addHeaderInAllProduct();

/* Add footer html file to wishlist Page */
async function addFooterInAllProduct() {
    try {
        let response = await fetch("./footer.html");
        let data = await response.text();
        document.getElementById('addAllProductsFooter').innerHTML = data;
    }
    catch { error => console.error('Error fetching content:', error) };
}

addFooterInAllProduct();


function seeAllProducts() {
    window.location.href = "allProducts.html";
}


// ***************************
// A general function for
// subscribing the newslatter
// ****************************

function subscription() {
    let reqEmail = document.getElementById("subscribed").value;
    let userEmail = JSON.parse(localStorage.getItem(reqEmail));
    let checkbox = document.getElementById("checkbox").checked;
    let isSubscribed = localStorage.getItem("isSubscribed") === "true";

    if (reqEmail && userEmail) {
        if (!isSubscribed) {
            if (checkbox) {
                localStorage.setItem("isSubscribed", "true");
                swal(`Welcome! ${userEmail.usernameVal}`, "You have succesfully subscribed newsletter.", "success");
            }
            else {
                alert("Yuo did not accept the policy.")
            }

        }
        else {
            swal(`Already! Subscribed`, "", "success");
        }
    }
    else if (!reqEmail) {
        alert("Please enter email Id.")
    }
    else {
        alert("Enter registered email.");
    }
}


function mobileOpenCart() {
    gotoAddToCart("addToCart.html");
}

function showMobileMenu(){
    let leftMenuBar = document.getElementById("leftMenuBar");
    const showLeftMenuBar = window.getComputedStyle(leftMenuBar);
    if(showLeftMenuBar.display === "none"){
        leftMenuBar.style.display = "flex";
    }
    else{
        leftMenuBar.style.display = "none";
    }

}


/* Start Mobile onClick functionality */

function showMobileSearchBar(){
    let leftSearchBar = document.getElementById("mobileSearchInput");
    const showLeftSearchBar = window.getComputedStyle(leftSearchBar);
    console.log(showLeftSearchBar.display);
    if(showLeftSearchBar.display === "none"){
        leftSearchBar.style.display = "block";
    }
    else{
        leftSearchBar.style.display = "none";
    }

}

/* End Mobile onClick functionality */




