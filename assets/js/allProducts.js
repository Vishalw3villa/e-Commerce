let data = fetchAllProductJSON("./assets/data/product.json");
data.then((data) => {
    data = data["products"];
    let allProductsCard = document.getElementById("productCard");

    for (let j = 0; j < data.length; j++) {
        let id = data[j].id;
        let img = data[j].img;
        let company = data[j].company;
        let model = data[j].model;
        let price = data[j].price;

        allProductsCard.innerHTML += `<div class="about2_card search_card">

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
                                        </div>`
    }

    switchToProductPage("productImg");
})






async function fetchAllProductJSON(url) {
    try {
        let response = await fetch(url);
        let data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching or processing data:", error);
    }
}

