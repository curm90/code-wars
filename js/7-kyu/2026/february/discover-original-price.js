// https://www.codewars.com/kata/552564a82142d701f5001228/train/javascript

function discoverOriginalPrice(discountedPrice, salePercentage) {
  const discountDecimal = salePercentage / 100;
  return Number((discountedPrice / (1 - discountDecimal)).toFixed(2));
}

console.log(discoverOriginalPrice(75, 25), 100);
console.log(discoverOriginalPrice(25, 75), 100);
console.log(discoverOriginalPrice(75.75, 25), 101);
console.log(discoverOriginalPrice(458.2, 17.13), 553);
