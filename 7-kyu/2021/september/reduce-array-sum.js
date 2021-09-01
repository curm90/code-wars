// https://www.codewars.com/kata/532b4057484b0e58e8000766/train/javascript

// Use array.reduce() to calculate and return the
// sum of the values in array.
function sum(array) {
  return array.reduce((sum, num) => {
    return sum + num;
  }, 0);
}

function sum(array) {
  return array.reduce((sum, num) => sum + num, 0);
}

const sum = (array) => array.reduce((sum, num) => sum + num);

console.log(sum([1, 2, 3, 4, 5, 6, 5, 6]), 32);
console.log(
  sum([71, -548, 12.3, 83, -47, -1.7, -892, 58, 31415, 2718, -38]),
  32830.6
);
