// https://www.codewars.com/kata/5a4138acf28b82aa43000117/train/javascript

function adjacentElementsProduct(array) {
  // place to store the current max
  let max = -Infinity;
  // iterate over the array
  for (let i = 0; i < array.length - 1; i++) {
    // multiply the current num and next num
    // if that sum is greater than the current max
    if (array[i] * array[i + 1] > max) {
      // set current max to be the new sum
      max = array[i] * array[i + 1];
    }
  }
  // return max
  return max;
}

function getSumHelper(a, b) {
  return a * b;
}

function adjacentElementsProduct(array) {
  let max = -Infinity;
  for (let i = 0; i < array.length - 1; i++) {
    const sum = getSumHelper(array[i], array[i + 1]);
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}

function adjacentElementsProduct(array) {
  let sumsArr = [];

  for (let i = 0; i < array.length - 1; i++) {
    const sum = array[i] * array[i + 1];
    sumsArr = [sum, ...sumsArr];
  }

  return Math.max(...sumsArr);
}

function adjacentElementsProduct(array) {
  return array
    .slice(1)
    .reduce((max, curr, i) => Math.max(array[i] * curr, max), -Infinity);
}

console.log(adjacentElementsProduct([5, 8]), 40);
console.log(adjacentElementsProduct([1, 2, 3]), 6);
console.log(adjacentElementsProduct([1, 5, 10, 9]), 90);
console.log(adjacentElementsProduct([4, 12, 3, 1, 5]), 48);
console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6);
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]), 21);
console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]), 50);
console.log(adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23]), 30);
console.log(
  adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]),
  -14
);
console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4]), 6);
console.log(adjacentElementsProduct([1, 0, 1, 0, 1000]), 0);
console.log(adjacentElementsProduct([1, 2, 3, 0]), 6);
