let quantity = 5;
let pricePerDroid = 3000;
quantity = 5;
pricePerDroid = 3000;
function totalPrice(quantity, pricePerDroid) {
  return quantity * pricePerDroid;
}
function makeTransaction(quantity, totalPrice) {
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"
