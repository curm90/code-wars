// https://www.codewars.com/kata/528e95af53dcdb40b5000171/train/javascript

function factorial(n) {
  if (n < 0) return null;
  if (n == 0) return 1;

  let result = 1;

  while (n > 0) {
    result *= n;
    n--;
  }

  return result;
}

function factorial(n) {
  if (n < 0) return null;
  if (n == 0) return 1;

  return n * factorial(n - 1);
}

function factorial(n) {
  return n < 0 ? null : n == 0 ? 1 : n * factorial(n - 1);
}

console.log(factorial(2), 2, 'Your math may be incorrect');
console.log(factorial(5), 120, 'Your math may be incorrect');
console.log(factorial(-1), null, "Don't forget to check for negatives!");
