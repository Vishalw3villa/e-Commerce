import {aboutTwoCrowsel, aboutThreeCrowsel} from "./jQuery.js";

/* Fetch data to JSON data products page
To show on the whyBuyUs Section*********/

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


/* ********************
******Featured Products
***********************/

async function fetchDataJSON(url) {
    try {
        let response = await fetch(url);
        let data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching or processing data:", error);
    }
}

/* Filter Data Category Wise from fetch JSON Data*/
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
        let name = data[j].name;

        aboutTwoHtml += `
                <div class="about2_card ">
                    <div class="about2_img" id=${id}>
                            <div class="about3_label">JUST NOW</div>
                            <img class="productImg" src=${img} alt="">
                    </div>
                        <div class="about2_description">
                            <div class="about2_bar">
                                <p class="underline">${company}</p>
                                <p>${model}</p>
                            </div>

                            <div class="about2_text">
                                <h3>${name}</h3>
                                <p>${price} <del>$3,299.00</del></p>
                                <div class="about2_cart">
                                    <div class="about2_cart1" id = ${id}>
                                        <span>
                                            <input type="number" min="1" max="10" value="1">
                                            <button class="addToCart" onclick="addToCart(${id})">ADD TO CART</button>
                                        </span>
                                        <span>
                                            <i class="fa-regular fa-heart wishList" id="wishId" onclick="addToWishlist(this, ${id})"></i>
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
    showLikedIcon("wishList", wishlistIdContainer);
    switchToProductPage("productImg");
}






let aboutTwoBtn = document.getElementsByClassName("about2_btn");
featuredProduct("FEATURED");

for (let i = 0; i < aboutTwoBtn.length; i++) {
    aboutTwoBtn[i].onclick = function () {
        var clickedCategory = this.querySelector('p').textContent;
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



/*****************
Featured Category
*******************/

async function featuredCategory(clickedCategory) {
    let parentAbout = document.querySelector('.about3_sub2')
    let aboutTwoHtml;
    let data = await fetchDataJSON("./assets/data/product.json");
    data = filterData(data, clickedCategory);
    aboutTwoHtml = ' <div class="about3_sub2_sub2 owl-carousel owl-theme">';
    for (let j = 0; j < data.length; j++) {
        let id = data[j].id;
        let img = data[j].img;
        let company = data[j].company;
        let model = data[j].model;
        let price = data[j].price;

        aboutTwoHtml += `<div class="about3_card">
                            <button class="about3_tags" id="top_brand">TOP BRAND</button>
                            <div class="about3_label">JUST NOW</div>
                            <div class="about3_img" id=${id}>
                                <img class="productImg" src=${img} alt="">
                            </div>
                            <div class="about3_text" id=${id}>
                                <a href="#">${model}</a>
                                <p>${price}</p>
                                <hr>
                                <div class="cart" id=${id}>
                                    <button class= "addToCart" onclick="addToCart(${id})">Add to cart</button>
                                    <span>
                                        <i class="fa-regular fa-heart wishList" id="wishId" onclick="addToWishlist(this, ${id})"></i>
                                        <i class="fa-solid fa-code-compare"></i>
                                    </span>
                                </div>
                            </div>
                        </div>`
    }
    aboutTwoHtml += "</div>";

    parentAbout.insertAdjacentHTML("beforeend", aboutTwoHtml);
    aboutThreeCrowsel();
    showLikedIcon("wishList", wishlistIdContainer);
    switchToProductPage("productImg");
}

featuredCategory("newfashion");



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


/* This method will load after 
loading all js code of Landing page*/

openCart();
openWishlist();



