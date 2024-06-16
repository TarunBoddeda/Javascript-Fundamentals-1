const totalValue = 2000;
const discountPercentage = 20;

const discountPrice = (discountPercentage / 100) * 2000;
console.log(`The deducted amount after discount is: ${discountPrice}`);
const actualAmount = totalValue - discountPrice;
console.log(`The actual value will be: ${actualAmount}`);
