function plus(button) {

    let number = button.parentElement
        .querySelector("span");

    let value = Number(number.innerText);

    number.innerText = value + 1;
}


function minus(button) {

    let number = button.parentElement
        .querySelector("span");

    let value = Number(number.innerText);

    if (value > 1) {
        number.innerText = value - 1;
    }
}
function plus(button) {

    var quantity = button.parentElement
        .querySelector(".quantity-number");

    var value = Number(quantity.innerText);

    quantity.innerText = value + 1;

    updateTotal();
}


function minus(button) {

    var quantity = button.parentElement
        .querySelector(".quantity-number");

    var value = Number(quantity.innerText);

    if (value > 1) {
        quantity.innerText = value - 1;
    }

    updateTotal();
}


function updateTotal() {

    var products = document.querySelectorAll(".product");

    var totalItems = 0;
    var totalPrice = 0;

    products.forEach(function (product) {

        var quantity = Number(
            product.querySelector(".quantity-number").innerText
        );

        var price = Number(
            product.querySelector(".price").dataset.price
        );

        totalItems += quantity;

        totalPrice += quantity * price;
    });


    document.getElementById("total-items").innerText =
        totalItems;

    document.getElementById("total-price").innerText =
        totalPrice.toLocaleString("vi-VN");
}
