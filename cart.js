const { getProductPrice } = require("./priceService");
const { roundUp } = require("./utils");

class ShoppingCart {
    constructor() {
        this.items = {};  // Stores { productName: { quantity, price } }
    }

    async addProduct(productName, quantity) {
        const price = await getProductPrice(productName);
        if (price === null) return;

        if (this.items[productName]) {
            this.items[productName].quantity += quantity;
        } else {
            this.items[productName] = { quantity, price };
        }
    }
    
// Calcualtion of the total price of the items in the cart
    calculateTotals() {
        let subtotal = 0;

        for (const product in this.items) {
            const { quantity, price } = this.items[product];
            subtotal += quantity * price;
        }

        const tax = roundUp(subtotal * 0.125);
        const total = subtotal + tax;

        return { subtotal: roundUp(subtotal), tax, total };
    }

    displayCart() {
        console.log("Shopping Cart:");
        for (const product in this.items) {
            console.log(`- ${this.items[product].quantity} × ${product}`);
        }

        const { subtotal, tax, total } = this.calculateTotals();
        console.log(`Subtotal: $${subtotal}`);
        console.log(`Tax (12.5%): $${tax}`);
        console.log(`Total Payable: $${total}`);
    }
}

module.exports = ShoppingCart;
