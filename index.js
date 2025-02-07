const ShoppingCart = require("./cart");

async function main() {
    // Creating a new shopping cart
    const cart = new ShoppingCart();

    await cart.addProduct("cornflakes", 1);
    await cart.addProduct("cornflakes", 1);
    await cart.addProduct("weetabix", 1);

    cart.displayCart();
}

main();
