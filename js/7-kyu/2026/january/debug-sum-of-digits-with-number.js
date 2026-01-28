// https://www.codewars.com/kata/563d59dd8e47a5ed220000ba/train/javascript

function getSumOfDigits(integer) {
  var sum = null;
  var digits = Math.floor(integer).toString();

  for (let ix = 0; ix < digits.length; ix++) {
    sum += +digits[ix];
  }
  return sum;
}

console.log(getSumOfDigits(123), 6, 'Incorrect answer for integer=123');
console.log(getSumOfDigits(223), 7, 'Incorrect answer for integer=223');
console.log(getSumOfDigits(0), 0, 'Incorrect answer for integer=0');
