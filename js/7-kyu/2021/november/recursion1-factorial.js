// https://www.codewars.com/kata/5694cb0ec554589633000036/train/javascript

function factorial(n) {
  if (n < 2) return 1;

  return n * factorial(n - 1);
}

function factorial(n) {
  return n < 2 ? 1 : n * factorial(n - 1);
}

console.log(factorial(0), 1);
console.log(factorial(1), 1);
console.log(factorial(2), 2);
console.log(factorial(3), 6);
