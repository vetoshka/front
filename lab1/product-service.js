let products = JSON.stringify([
    {
        "name": "I'm a product",
        "price": 15.00,
        "image": "./images/product1.jpg"
    },
    {
        "name": "I'm a product",
        "price": 15.00,
        "image": "./images/product2.jpg"
    },
    {
        "name": "I'm a product",
        "price": 15.00,
        "image": "./images/product3.jpg"
    }
    ,
    {
        "name": "I'm a product",
        "price": 15.00,
        "image": "./images/product4.jpg"
    }
    ,
    {
        "name": "I'm a product",
        "price": 15.00,
        "image": "./images/product5.jpg"
    }
    ,
    {
        "name": "I'm a product",
        "price": 15.00,
        "image": "./images/product6.jpg"
    }
    ,
    {
        "name": "I'm a product",
        "price": 15.00,
        "image": "./images/product7.jpg"
    }
]);


window.onload = function() {
const container = document.querySelector(".product_list");
JSON.parse(products).forEach(e => {
    container.insertAdjacentHTML('beforeend', 
    `<div class="product">
        <img class= "product_image" src="${e.image}">
        <span class="product_name">${e.name}</span>
        <div class="line"></div>
        <span class="product_price">$${e.price}</span>
        <a href = "./details.html">Details</a>
    </div>` 
    );
})}