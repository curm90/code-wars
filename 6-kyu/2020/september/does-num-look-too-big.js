// https://www.codewars.com/kata/does-my-number-look-big-in-this/train/javascript

function narcissistic(value) {
  // find length of number
  const length = Math.floor(Math.log10(Math.abs(value))) + 1;

  // place to store sum
  let sum = 0;
  let digits = value;
  // while the current value is greater than 0
  while (digits > 0) {
    // grab last digit of the number
    const digit = digits % 10;
    // raise that digit to the length power, add value to sum
    sum += Math.pow(digit, length);
    // remove digit from value
    digits = Math.floor(digits / 10);
  }
  // return sum == value
  return sum == value;
}

function narcissistic(value) {
  return (
    value
      .toString()
      .split('')
      .reduce((sum, digit, i, { length }) => {
        return sum + Math.pow(digit, length);
      }, 0) == value
  );
}

function narcissistic(value) {
  return (
    [...value.toString()].reduce((sum, digit, i, { length }) => {
      return sum + Math.pow(digit, length);
    }, 0) == value
  );
}
