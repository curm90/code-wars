// https://www.codewars.com/kata/57ee99a16c8df7b02d00045f/train/javascript

'use strict';

function flattenAndSort(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      result.push(array[i][j]);
    }
  }
  return result.sort((a, b) => (a < b ? -1 : b < a ? 1 : 0));
}

console.log(flattenAndSort([]), []);
console.log(flattenAndSort([[], [1]]), [1]);
console.log(
  flattenAndSort([
    [3, 2, 1],
    [7, 9, 8],
    [6, 4, 5],
  ]),
  [1, 2, 3, 4, 5, 6, 7, 8, 9]
);
console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]), [
  1,
  2,
  3,
  4,
  5,
  6,
  100,
]);
