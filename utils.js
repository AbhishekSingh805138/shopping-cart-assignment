
// Function to round up the value to 2 decimal places
function roundUp(value) {
    return Math.ceil(value * 100) / 100;
}

module.exports = { roundUp };
