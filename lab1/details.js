let products = JSON.stringify([
    {
        "id": 1,
        "name": "I'm a product",
        "price": 15.00,
        "image": "./images/product1.jpg",
        "info": "Amazing product!"
    },
    {
        "id": 2,
        "name": "I'm a product",
        "price": 15.00,
        "image": "./images/product2.jpg",
        "info": "Amazing product!"
    },
    {
        "id": 3,
        "name": "I'm a product",
        "price": 15.00,
        "image": "./images/product3.jpg",
        "info": "Amazing product!"
    }
    ,
    {
        "id": 4,
        "name": "I'm a product",
        "price": 15.00,
        "image": "./images/product4.jpg",
        "info": "Amazing product!"
    }
    ,
    {
        "id": 5,
        "name": "I'm a product",
        "price": 15.00,
        "image": "./images/product5.jpg",
        "info": "Amazing product!"
    }
    ,
    {
        "id": 6,
        "name": "I'm a product",
        "price": 15.00,
        "image": "./images/product6.jpg",
        "info": "Amazing product!"
    }
    ,
    {
        "id": 7,
        "name": "I'm a product",
        "price": 15.00,
        "image": "./images/product7.jpg",
        "info": "Amazing product!"
    }
]);

window.onload = function() {
    let id = "1";
    const container = document.querySelector(".product");
    JSON.parse(products).forEach(e => {
        if(e.id === id) {
        container.insertAdjacentHTML('beforebegin',
        `<div class="product">
        <img class= "product_image" src="${e.image}">
            <span class="product_name">${e.name}</span>
            <div class="line"></div>
            <span class="product_price">$${e.price}</span>
            <div class="line"></div>
            <span class="product_info">$${e.info}</span>
            </div>`)
        }
    });
}
