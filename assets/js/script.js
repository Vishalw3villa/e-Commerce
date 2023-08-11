

async function addHeaderInIndex() {
    try {
        let response = await fetch("./header.html");
        let data = await response.text();
        document.getElementById('headerPartInIndex').innerHTML = data;
        loadJS("./assets/js/login.js");
        loadJS("./assets/js/index.js")
        loadJS("./assets/js/addToCart.js")
        searchInput();
    }
    catch { error => console.error('Error fetching content:', error) };
}

addHeaderInIndex();

function loadJS(FILE_URL, async = true) {
    let scriptEle = document.createElement("script");

    scriptEle.setAttribute("src", FILE_URL);
    scriptEle.setAttribute("type", "text/javascript");
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

// *******************************************Script of Search Page


async function addHeaderInSearch() {
    try {
        let response = await fetch("./header.html");
        let data = await response.text();
        document.getElementById('headerPartInSearch').innerHTML = data;
        loadJS("./assets/js/login.js");
        searchInput();
        openCart();
    }
    catch { error => console.error('Error fetching content:', error) };
}

addHeaderInSearch();

const buttonList = document.getElementById("showListbtn");
const buttonGrid = document.getElementById("showGridbtn");
const elementToHide = document.getElementById("showGrid");
const elementToShow = document.getElementById("showList");

// Add a click event listener to the button
if (buttonList) {
    buttonList.addEventListener("click", function () {
        const computedStyleToHide = window.getComputedStyle(elementToHide);
        const computedStyleToShow = window.getComputedStyle(elementToShow);

        // Toggle the display property of the elements
        if (computedStyleToHide.display === "flex") {
            console.log(computedStyleToHide.display);
            elementToHide.style.display = "none";
            elementToShow.style.display = "block";
        }

        if (computedStyleToHide.display === "grid") {
            console.log(computedStyleToHide.display);
            elementToHide.style.display = "none";
            elementToShow.style.display = "block";
        }


    });
}

if (buttonGrid) {
    buttonGrid.addEventListener("click", function () {
        const computedStyleToHide = window.getComputedStyle(elementToHide);
        const computedStyleToShow = window.getComputedStyle(elementToShow);

        // Toggle the display property of the elements
        if (computedStyleToHide.display === "none") {
            console.log(computedStyleToHide.display);
            elementToHide.style.display = "flex";
            elementToShow.style.display = "none";
        }
    });
}








let minusPlus = document.getElementsByClassName("minusPlus_bar");

for (let i = 0; i < minusPlus.length; i++) {
    minusPlus[i].onclick = function () {
        let subBars = document.querySelectorAll(".sub_bar");
        for (let j = 0; j < subBars.length; j++) {
            if (i === j) {
                let hideBar = getComputedStyle(subBars[j]).display;
                console.log(hideBar);

                if (hideBar === "flex") {
                    subBars[j].style.display = "none";
                    this.style["color"] = "gray";
                    this.querySelector("span").innerHTML = `<i id="serch_plus" class="fa-solid fa-plus">`;
                }
                else {
                    subBars[j].style.display = "flex";
                    this.style["color"] = "#15429d";
                    this.querySelector("span").innerHTML = `<i id="serch_plus" class="fa-solid fa-minus">`;
                }

                console.log(hideBar);
                subBars[j].display = hideBar;
            }
        }
    }
}


/* ************
***** Search input*****
************************/

function searchInput() {
    const searchBtn = document.getElementById("searchbtn");
    const searchInput = document.getElementById("searchinput");

    if (searchBtn) {
        searchBtn.addEventListener('click', searchAction)
        searchInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                searchAction();
            }
        })
    }
    else {
        console.log(`error searchBtn`);
    }

    function searchAction() {
        let searchQuery1 = searchInput.value;
        if (searchQuery1) {
            console.log(searchQuery1);
            const searchPageUrl = `searchPage.html?search=${encodeURIComponent(searchQuery1)}`;
            window.location.href = searchPageUrl;
        }
        else {
            console.log("error searchAction");
        }
    }


    const userlParam = new URLSearchParams(window.location.search);
    const searchQuery = userlParam.get("search");

    if (searchQuery) {
        fetchSearchandDisplay(searchQuery);
    }

    function fetchSearchandDisplay(searchQuery) {
        document.getElementById("searchname").innerText = searchQuery;
        if (searchQuery != "Camera") {
            changeSearchUi();
        }
    }

    function changeSearchUi() {
        let leftSearch = document.getElementById("search_left");
        let hideGrid = document.getElementById("showGrid");
        let hideShowGridbtn = document.getElementById("hideshowgridbtn");
        let hideLine = document.getElementById("hideline");
        let hideContinue = document.getElementById("hidecontinue");
        let endList = document.getElementById("end_list");

        leftSearch.classList.add("hidesearchleft");
        hideGrid.classList.add("hidesearchleft");
        hideLine.classList.add("hidesearchleft");
        hideLine.classList.add("hidesearchleft");
        endList.classList.add("hidesearchleft");
        hideContinue.classList.remove("hidesearchleft");
        hideShowGridbtn.innerHTML = "There is no product that matches the search criteria.";
    }

    let hideContinue = document.getElementById("hidecontinue");
    if (hideContinue) {
        hideContinue.addEventListener('click', returnHome)
    }
}

function returnHome() {
    let returnHomeUrl = "index.html";
    window.location.href = returnHomeUrl;
}



// ***************************************************************************Script for Product page
async function addHeaderInProduct() {
    try {
        let response = await fetch("./header.html");
        let data = await response.text();
        document.getElementById('headerPartInProduct').innerHTML = data;
        loadJS("./assets/js/login.js");
        searchInput();
        openCart();
    }
    catch { error => console.error('Error fetching content:', error) };
}

addHeaderInProduct();

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


// **************************************************************Add to cart Script
async function addHeaderInAddtoCart() {
    try {
        let response = await fetch("./header.html");
        let data = await response.text();
        document.getElementById('headerPartInAddToCart').innerHTML = data;
        loadJS("./assets/js/login.js");
        loadJS("./assets/js/addToCart.js")
        searchInput();
    }
    catch { error => console.error('Error fetching content:', error) };
}

addHeaderInAddtoCart();



/* ***********************
*********** Add to cart *****
********************************/

function addToCart(idTag, productIdContainer) {
    let addToCartBtn = document.getElementsByClassName(idTag);
    console.log(addToCartBtn.length)

    for (let j = 0; j < addToCartBtn.length; j++) {
        addToCartBtn[j].onclick = function () {
            let productId = addToCartBtn[j].parentElement.parentElement.id;
            if (!productIdContainer.has(productId)) {
                productIdContainer.add(productId);
                storeItemtoLocal(Number(productId));
            }
            else {
                alert("Already have the item in Cart.")
            }
        }
    }
}


const addCartItem = () => {
    let storedProducts = JSON.parse(localStorage.getItem("products"));
    let totalProduct = Object.keys(storedProducts).length;
    let itemOfCart = document.getElementById("cartItemCount");
    console.log(totalProduct);
    itemOfCart.innerText = totalProduct;
}

let storeItemtoLocal = async (newId) => {
    let product = await filteredProducts(newId);
    console.log(product);
    let localStoredProduct = JSON.parse(localStorage.getItem("products"));
    console.log(localStoredProduct);
    localStoredProduct[newId] = product;
    console.log(localStoredProduct);

    localStorage.setItem("products", JSON.stringify(localStoredProduct));
    addCartItem();
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

function openCart() {
    let cartBtn = document.querySelector("#cartbtn");
    console.log("Open cart loaded.");
    cartBtn.addEventListener("click", () => {
        gotoAddToCart("addToCart.html");
    })
}

let gotoAddToCart = (link) => {
    window.location.href = link;
}















