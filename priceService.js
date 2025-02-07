const axios = require("axios");

// URL of the price service
const BASE_URL = "http://localhost:3001/products";

// Fetching   price of a product from the price service
async function getProductPrice(productName) {
    try {
        const response = await axios.get(`${BASE_URL}/${productName}`);
        return response.data.price;
    } catch (error) {
        console.error(`Error fetching price for ${productName}:`, error.message);
        return null;
    }
}

module.exports = { getProductPrice };
