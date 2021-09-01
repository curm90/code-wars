// https://www.codewars.com/kata/convert-number-to-reversed-array-of-digits/train/javascript

function digitize(n) {
  return n
    .toString()
    .split('')
    .reverse()
    .map(item => Number(item));
}

function digitize(n) {
  return String(n)
    .split('')
    .reverse()
    .map(Number);
}

function digitize(n) {
  return Array.from(String(n), Number).reverse();
}

console.log(digitize(35231), [1, 3, 2, 5, 3]);
