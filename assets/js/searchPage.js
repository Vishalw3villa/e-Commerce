
const buttonList = document.getElementById("showListbtn");
const buttonGrid = document.getElementById("showGridbtn");
const elementToHide = document.getElementById("showGrid");
const elementToShow = document.getElementById("showList");

/* Add a click event listener to the button */
if (buttonList) {
    buttonList.addEventListener("click", function () {
        const computedStyleToHide = window.getComputedStyle(elementToHide);
        const computedStyleToShow = window.getComputedStyle(elementToShow);

        /* Toggle the display property of the elements */
        if (computedStyleToHide.display === "flex") {

            elementToHide.style.display = "none";
            elementToShow.style.display = "block";
        }

        if (computedStyleToHide.display === "grid") {

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

                
                subBars[j].display = hideBar;
            }
        }
    }
}


// *************************
// Search Input Action
// *************************

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
        const searchPageUrl = `searchPage.html?search=${encodeURIComponent(searchQuery1)}`;
        window.location.href = searchPageUrl;
    }
    else {
        console.log("error searchAction");
    }
}

/* Fetch Query Parameter 
And show availabe products 
Into SearchPage */

const userlParam = new URLSearchParams(window.location.search);
const searchQuery = userlParam.get("search");

if (searchQuery) {
    fetchSearchandDisplay(searchQuery);
}

function fetchSearchandDisplay(searchQuery) {
    document.getElementById("searchname").innerText = searchQuery;
    let allAvailableItems = allAvailableProduct(searchQuery);
    allAvailableItems.then((data) => {
        if (data.length > 0) {
            showSearchItem(data);
            switchToProductPage("productImg");
        }
        else {
            changeSearchUi();
        }
    })
}

let goBack = document.getElementById("hidecontinue");
if (goBack) {
    goBack.addEventListener('click', returnHome)
}


async function allAvailableProduct(searchQuery) {
    try {
        let response = await fetch("./assets/data/product.json");
        data = await response.json();
        data = data["products"];
        searchQuery = searchQuery.toLowerCase();
        let availableProducts = data.filter((product) => product.name === searchQuery);
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


/* A function for changing UI of Search Page    
 When input doesn't match to the product data */

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

/* Display All the filtered Products 
On Search Page ********************/

function showSearchItem(product) {
    let showGridItem = document.getElementById("showGrid");
    let showListItem = document.getElementById("showList");

    showGridItem.innerHTML = "";
    showListItem.innerHTML = "";
    for (let j = 0; j < product.length; j++) {
        let {
            id,
            img,
            company,
            model,
            name,
            price,
            category,
            description
        } = product[j];

        /* Rendering the HTML code for showing products card */
        showGridItem.innerHTML += `<div class="about2_card search_card">

                                        <div class="about2_img" id=${id}>
                                            <button class="about3_tags discount">-70%</button>
                                            <img class="searchImg productImg" src=${img} alt="">
                                        </div>
                                        <div class="about2_description">
                                            <div class="about2_bar">
                                                <p class="underline">${company}</p>
                                                <p>${model}</p>
                                            </div>

                                            <div class="about2_text">
                                                <h3>Headphone</h3>
                                                <p>${price} <del>$3,299.00</del></p>
                                                <div class="about2_cart">
                                                    <div class="about2_cart1" id = ${id}>
                                                        <span>
                                                            <input type="number" min="1" max="10" value="1">
                                                            <button>ADD TO CART</button>
                                                        </span>
                                                        <span>
                                                            <i class="fa-regular fa-heart"></i>
                                                            <i class="fa-solid fa-code-compare"></i>
                                                        </span>
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="about2_cart2">
                                                <p>
                                                    <i class="fa-regular fa-dollar-sign doller_icon"></i>
                                                    Buy Now
                                                </p>
                                                <p>
                                                    <i class="fa-regular fa-circle-question question_icon"></i>
                                                    Question
                                                </p>
                                            </div>
                                        </div>
                                    </div>`;

        showListItem.innerHTML += `<div class=" listview_card">
                                    <div class="listview_img">
                                        <button class="about3_tags hot">Hot</button>
                                        <button class="about3_tags discount">-10%</button>

                                        <img class="searchImg productImg" src=${img} alt="">
                                    </div>
                                    <div class="listview_description">
                                        <div class="listview_bar">
                                            <span class="underline">Brand: <p class="productname">${company}</p></span>
                                            <span>Model: <p class="productversion">${model}</p></span>
                                        </div>

                                        <div class="listview_text">
                                            <h3 class="fw5">Power Shot Digital Camera</h3>
                                            <p class="product_about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                                                maiores odio?
                                                Molestias itaque earum velit dicta necessitatibus iste pariatur aspernatur tempore
                                                sit nostrum, possimus, voluptas amet, sunt harum corporis animi.</p>
                                            <h2 class="fw5 price_color">234.60$ <del>529.61$</del></h2>
                                            <small class="fw4">Ex Tax: 234.60$</small>

                                            <div class="listview_cart">
                                                <div class="listview_cart1">

                                                    <input type="number" min="1" max="10" value="1">
                                                    <button class="listview_addbtn"><i class="fa-solid fa-cart-shopping"></i> ADD TO
                                                        CART</button>
                                                    <i class="fa-regular fa-heart cart_icon"></i>
                                                    <i class="fa-solid fa-code-compare cart_icon"></i>

                                                </div>
                                                <div class="listview_cart2">
                                                    <p>
                                                        <i class="fa-regular fa-dollar-sign doller_icon"></i>
                                                        Buy Now
                                                    </p>
                                                    <p>
                                                        <i class="fa-regular fa-circle-question question_icon"></i>
                                                        Question
                                                    </p>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>`;

    }
}

/* Add functionaity to 
return back homePage */

function returnHome() {
    let returnHomeUrl = "index.html";
    window.location.href = returnHomeUrl;
}




