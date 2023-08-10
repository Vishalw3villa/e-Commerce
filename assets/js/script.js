
async function addHeaderInIndex() {
    try {
        let response = await fetch("./header.html");
        let data = await response.text();
        document.getElementById('containheaderindex').innerHTML = data;
        loadJS("./assets/js/login.js");
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

/* ****************
******Why Buy from Us ****
*********************/

async function whyBuyUs(clickedBtn, cardOneImg, cardOneBtn) {
    try {
        let response = await fetch("./assets/data/whyBuyUs.json");
        let data = await response.json();

        for (let j = 0; j < cardOneImg.length; j++) {
            let {
                img,
                tag
            } = data[clickedBtn][j % 5];
            cardOneImg[j].src = img;
            cardOneBtn[j].innerHTML = tag;
        }
    } catch (error) {
        console.error("Error fetching or processing data:", error);
    }

}



let aboutOneBtn = document.getElementsByClassName("about1_btn");

for (let i = 0; i < aboutOneBtn.length; i++) {
    aboutOneBtn[i].onclick = function () {
        var clickedBtn = this.querySelector('p').textContent;
        var cardOneImg = document.querySelectorAll(".about1_card img");
        var cardOneBtn = document.querySelectorAll(".about1_card button");

        // Fetch json data****
        whyBuyUs(clickedBtn, cardOneImg, cardOneBtn);

        for (let k = 0; k < aboutOneBtn.length; k++) {
            aboutOneBtn[k].style["background-color"] = "hsl(0deg 0% 97.25%)";
            aboutOneBtn[k].style["color"] = "black";
        }

        let arrowShape = document.getElementsByClassName("about1_arrow_shape");
        for (let a = 0; a < arrowShape.length; a++) {
            arrowShape[a].style["display"] = "none";
        }

        this.style["background-color"] = "hsl(216.17deg 100% 40.98%)";
        this.style["color"] = "white";
        this.innerHTML += `<div class="about1_arrow_shape"></div>`;
    };
}

/* ****************
******Featured Products****
*********************/

async function fetchDataJSON(url) {
    try {
        let response = await fetch(url);
        let data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching or processing data:", error);
    }
}


function filterData(data, clickedCategory) {
    let categoryData = [];

    for (let j = 0; j < data.products.length; j++) {

        let {
            id,
            img,
            company,
            model,
            name,
            price,
            category,
            description
        } = data["products"][j];

        if (category === clickedCategory) {
            categoryData.push(data["products"][j]);
        }
    }

    return categoryData;
}

async function featuredProduct(clickedCategory) {
    // console.log(clickedCategory);
    let parentAbout = document.querySelector('.about2_sub2')
    let aboutTwoHtml;
    let data = await fetchDataJSON("./assets/data/product.json");
    data = filterData(data, clickedCategory);
    var aboutTwoCard = document.getElementById("about2_sub2_sub2");
    if (aboutTwoCard) {
        aboutTwoCard.remove();
    }
    aboutTwoHtml = '<div class="about2_sub2_sub2 owl-carousel owl-theme" id="about2_sub2_sub2">';
    for (let j = 0; j < data.length; j++) {
        let id = data[j].id;
        let img = data[j].img;
        let company = data[j].company;
        let model = data[j].model;
        let price = data[j].price;

        aboutTwoHtml += `
                <div class="about2_card ">
                    <div class="about2_img">
                            <div class="about3_label">JUST NOW</div>
                            <img src=${img} alt="">
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
                                            <button class="addToCart">ADD TO CART</button>
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
                </div>
                `
    }
    aboutTwoHtml += "</div>";

    parentAbout.insertAdjacentHTML("beforeend", aboutTwoHtml);
    aboutTwoCrowsel();
    function aboutTwoCrowsel() {
        $(".about2_sub2_sub2").owlCarousel({
            loop: true,
            nav: false,
            margin: 25,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,

                },
                600: {
                    items: 2,

                },
                992: {
                    items: 3,
                },
                1272: {
                    items: 3,
                },
                1500: {
                    items: 4
                }
            }
        })
    }

    addToCart("addToCart");
}



let aboutTwoBtn = document.getElementsByClassName("about2_btn");
featuredProduct("FEATURED");

for (let i = 0; i < aboutTwoBtn.length; i++) {
    aboutTwoBtn[i].onclick = function () {
        var clickedCategory = this.querySelector('p').textContent;
        console.log(clickedCategory)
        featuredProduct(clickedCategory);

        for (let k = 0; k < aboutTwoBtn.length; k++) {
            aboutTwoBtn[k].style["background-color"] = "hsl(0deg 0% 97.25%)";
            aboutTwoBtn[k].style["color"] = "black";
        }

        let arrowShape = document.getElementsByClassName("about2_arrow_shape");
        for (let a = 0; a < arrowShape.length; a++) {
            arrowShape[a].style["display"] = "none";
        }

        this.style["background-color"] = "hsl(216.17deg 100% 40.98%)";
        this.style["color"] = "white";
        this.innerHTML += `<div class="about2_arrow_shape"></div>`;

    };
}


/* ****************
******Blog Posts****
*********************/


async function blogPosts(clickedImg, cardSixImg) {
    try {
        let response = await fetch("./assets/data/blog.json");
        let data = await response.json();

        for (let j = 0; j < cardSixImg.length; j++) {
            let {
                img
            } = data[clickedImg][j % 3];
            cardSixImg[j].src = img;
        }
    } catch (error) {
        console.error("Error fetching or processing data:", error);
    }

}


let aboutSixBtn = document.getElementsByClassName("about6_btn");

for (let i = 0; i < aboutSixBtn.length; i++) {
    aboutSixBtn[i].onclick = function () {
        var clickedImg = this.querySelector('p').textContent;
        console.log(clickedImg)
        var cardSixImg = document.querySelectorAll(".about6_card_img img");
        blogPosts(clickedImg, cardSixImg);

        for (let k = 0; k < aboutSixBtn.length; k++) {
            aboutSixBtn[k].style["background-color"] = "hsl(0deg 0% 97.25%)";
            aboutSixBtn[k].style["color"] = "black";
        }

        let arrowShape = document.getElementsByClassName("about6_arrow_shape");
        for (let a = 0; a < arrowShape.length; a++) {
            arrowShape[a].style["display"] = "none";
        }

        this.style["background-color"] = "hsl(216.17deg 100% 40.98%)";
        this.style["color"] = "white";
        this.innerHTML += `<div class="about6_arrow_shape"></div>`;

    };
}

// *******************************************Script of Search Page


async function addHeaderInSearch() {
    try {
        let response = await fetch("./header.html");
        let data = await response.text();
        document.getElementById('containheader').innerHTML = data;
        loadJS("./assets/js/login.js");
        searchInput();
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
        document.getElementById('headerInProduct').innerHTML = data;
        loadJS("./assets/js/login.js");
        searchInput();
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



/* ***********************
*********** Wish List*****
********************************/
let productIdContainer = new Set();

function addToCart(idTag) {
    let addToCartBtn = document.getElementsByClassName(idTag);
    console.log(addToCartBtn.length)

    for (let j = 0; j < addToCartBtn.length; j++) {
        addToCartBtn[j].onclick = function () {
            let productId = addToCartBtn[j].parentElement.parentElement.id;
            if(!productIdContainer.has(productId)){
                productIdContainer.add(productId);
            }
            else{
                alert("Already have the item in Cart.")
            }
            
            addCartItem(productIdContainer);
        }
    }
}

function addCartItem(productIdContainer){
    console.log(productIdContainer);
    let itemOfCart = document.getElementById("cartItemCount");
    console.log(itemOfCart.innerText);
    itemOfCart.innerText = productIdContainer.size;
}














