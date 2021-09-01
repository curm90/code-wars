// https://www.codewars.com/kata/sum-of-digits-slash-digital-root/train/javascript

function digital_root(n) {
  // while n is greater than 9
  while (n > 9) {
    // a place to store the sum
    let sum = 0;
    // while n is greather than 0
    while (n > 0) {
      // mod the number by 10 to get the last digit
      const lastDigit = n % 10;
      // take math.floor of number divided by 10 to drop off last digit
      n = Math.floor(n / 10);
      // add last digit to sum
      sum += lastDigit;
    }
    // re-assign sum to n
    n = sum;
  }
  return n;
}

function digital_root(n) {
  while (n > 9) {
    n = n
      .toString()
      .split('')
      .reduce((sum, digit) => sum + +digit, 0);
  }
  return n;
}

function digital_root(n) {
  return ((n - 1) % 9) + 1;
}

console.log(digital_root(16), 7);
console.log(digital_root(456), 6);
