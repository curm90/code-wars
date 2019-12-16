// https://www.codewars.com/kata/is-this-a-triangle/train/javascript

function isTriangle(a, b, c) {
  return a + b <= c || a + c <= b || b + c <= a ? false : true;
}

function isTriangle(a, b, c) {
  return a + b > c && a + c > b && c + b > a;
}

const isTriangle = (a, b, c) => Math.max(a, b, c) < (a + b + c) / 2;

console.log(isTriangle(1, 2, 2), true);
console.log(isTriangle(7, 2, 2), false);
