// https://www.codewars.com/kata/527e4141bb2ea5ea4f00072f/train/javascript

// add helper fn to sum numbers > 9
// function getSumOfNumGreaterThanNine(num) {
//   return num
//     .toString()
//     .split('')
//     .map(Number)
//     .reduce((sum, curr) => sum + curr);
// }

// or a mathy helper fn
function getSumOfNumGreaterThanNine(num) {
  return (num % 10) + Math.floor(num / 10);
}

function twistedSum(n) {
  // place to store the sum
  let sum = 0;
  // while n > 0
  while (n > 0) {
    // if the current number > 9
    if (n > 9) {
      // run the num through getSumOfNumGreaterThanNine
      sum += getSumOfNumGreaterThanNine(n);
      // decrement n
      n--;
    } else {
      // else add the current number to the sum
      sum += n;
      // and decrement n
      n--;
    }
  }

  // return sum
  return sum;
}

console.log(twistedSum(3), 6, 'n = 3');
console.log(twistedSum(10), 46, 'n = 10');
console.log(twistedSum(11), 48, 'n = 11');
console.log(twistedSum(12), 51, 'n = 12');
