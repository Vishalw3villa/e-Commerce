
// *****************************************************************Script of landing Page

let aboutOneImages = {
    "TOP CREATION": [
        "./assets/images/fashion.avif",
        "./assets/images/bags.avif",
        "./assets/images/health&beuty.avif",
        "./assets/images/footwear.avif",
        "./assets/images/homedecor.avif",
    ],
    "ELECTRONICS": [
        "./assets/images/electronicsHeadphone.avif",
        "./assets/images/electonicsGame.avif",
        "./assets/images/electonicsCameracheckbox_bar.avif",
        "./assets/images/electronicsEarpods.avif",
        "./assets/images/electonicsCamera.avif",
    ],
    "BEAUTY": [
        "./assets/images/beautyAcces.avif",
        "./assets/images/beautyLip.avif",
        "./assets/images/beautyBody.avif",
        "./assets/images/beautyMascara.avif",
        "./assets/images/beautyMakeup.avif",
    ],
    "FASHION": [
        "./assets/images/fashionAssco.avif",
        "./assets/images/fashionDress.avif",
        "./assets/images/fashionPant.avif",
        "./assets/images/fashionTshirt.avif",
        "./assets/images/fashionTop.avif",
    ]
};

let aboutOneTags = {
    "TOP CREATION": [
        "Fashion",
        "Bags",
        "Health & Beauty",
        "Footwear",
        "Home Decor",
    ],
    "ELECTRONICS": [
        "Headfone",
        "Game",
        "Camera",
        "Earpod",
        "Camera",
    ],
    "BEAUTY": [
        "Accesories",
        "Lipstic",
        "Body",
        "Mascara",
        "Makeup",
    ],
    "FASHION": [
        "Accesories",
        "Dresses",
        "Pant",
        "T-shirt",
        "Top",
    ]
};



let aboutOneBtn = document.getElementsByClassName("about1_btn");

for (let i = 0; i < aboutOneBtn.length; i++) {
    aboutOneBtn[i].onclick = function () {
        var clickedImg = this.querySelector('p').textContent;
        console.log(clickedImg)
        var cardOneImg = document.querySelectorAll(".about1_card img");
        for (let j = 0; j < cardOneImg.length; j++) {
            cardOneImg[j].src = aboutOneImages[clickedImg][j % 5];
        }

        var cardOneBtn = document.querySelectorAll(".about1_card button");
        for (let j = 0; j < cardOneBtn.length; j++) {
            cardOneBtn[j].innerHTML = aboutOneTags[clickedImg][j % 5];
        }

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



let aboutTwoImages = {
    "FEATURED": [
        "./assets/images/electronics.avif",
        "./assets/images/bags.avif",
        "./assets/images/bags.avif",
        "./assets/images/fashion.avif",
        "./assets/images/homedecor.avif",
    ],
    "LATEST": [
        "./assets/images/electronics.avif",
        "./assets/images/bags.avif",
        "./assets/images/bags.avif",
        "./assets/images/fashion.avif",
        "./assets/images/homedecor.avif",
    ],
    "BESTSELLERS": [
        "./assets/images/electronics.avif",
        "./assets/images/bags.avif",
        "./assets/images/bags.avif",
        "./assets/images/fashion.avif",
        "./assets/images/homedecor.avif",
    ],
    "SPECIALS": [
        "./assets/images/electronics.avif",
        "./assets/images/bags.avif",
        "./assets/images/bags.avif",
        "./assets/images/fashion.avif",
        "./assets/images/homedecor.avif",
    ]
};


let aboutTwoBtn = document.getElementsByClassName("about2_btn");

for (let i = 0; i < aboutTwoBtn.length; i++) {
    aboutTwoBtn[i].onclick = function () {
        var clickedImg = this.querySelector('p').textContent;
        console.log(clickedImg)
        var cardTwoImg = document.querySelectorAll(".about2_img img");
        for (let j = 0; j < cardTwoImg.length; j++) {
            cardTwoImg[j].src = aboutTwoImages[clickedImg][j % 5];
        }



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

let aboutSixImages = {
    "LATEST POST": [
        "./assets/images/img61.avif",
        "./assets/images/img62.avif",
        "./assets/images/img63.avif",
    ],
    "MOST READ": [
        "./assets/images/img63.avif",
        "./assets/images/img61.avif",
        "./assets/images/img62.avif",
    ],
}

let aboutSixBtn = document.getElementsByClassName("about6_btn");

for (let i = 0; i < aboutSixBtn.length; i++) {
    aboutSixBtn[i].onclick = function () {
        var clickedImg = this.querySelector('p').textContent;
        console.log(clickedImg)
        var cardSixImg = document.querySelectorAll(".about6_card_img img");
        for (let j = 0; j < cardSixImg.length; j++) {
            cardSixImg[j].src = aboutSixImages[clickedImg][j % 3];
        }



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


// ***************************************************************************Script for Product page

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


// *******************************************Script of Search Page


const buttonList = document.getElementById("showListbtn");
const buttonGrid = document.getElementById("showGridbtn");
const elementToHide = document.getElementById("showGrid");
const elementToShow = document.getElementById("showList");

// Add a click event listener to the button

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















