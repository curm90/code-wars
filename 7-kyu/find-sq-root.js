// https://www.codewars.com/kata/find-the-square-root/train/javascript

function squareRoot(x) {
  return parseFloat((x ** 0.5).toFixed(5))
}

console.log(squareRoot(81), 9);
console.log(squareRoot(15), 3.87298);
console.log(squareRoot(21), 4.58258);