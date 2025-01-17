var vat = 5; 

function calculateTotalPrice(price) {
    vat = 10;
    return price*vat/100; 
}

let total = calculateTotalPrice(100);
console.log(total);

// Which VAT will it be used here?
let price = 200*vat/100;
console.log(price);

// In this code we want the vat in the funtion to only be used by the function.
// How can we make it so it doesnt