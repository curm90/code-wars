// https://www.codewars.com/kata/54df2067ecaa226eca000229/train/javascript

function f(n) {
  if (!n || typeof n !== 'number' || n < 1 || n % 2 !== 0)
    return false;
  // place to store the sum
  let sum = 0;
  // place to store counter
  let counter = 0;
  // while counter is less than input number
  while (counter <= n) {
    // sum = sum + counter
    sum += counter;
    // increment counter
    counter++;
  }
  // return sum
  return sum;
}

function f(n) {
  if (!n || typeof n !== 'number' || n < 1 || n % 2 !== 0)
    return false;
  return (n * (n + 1)) / 2;
}

function f(n) {
  return parseInt(n) === n && n > 0 ? (n * (n + 1)) / 2 : false;
}

console.log(f(100), 5050);
console.log(f(300), 45150);
console.log(f(50000), 1250025000);
console.log(f('n'), false, 'n must be a number');
console.log(f(), false, 'n must be a value');
console.log(f(3.14), false, 'n must be an integer');
console.log(f(0), false, 'a value of n greater than 0 is required');
console.log(f(-10), false, 'a positive value of n is required');
