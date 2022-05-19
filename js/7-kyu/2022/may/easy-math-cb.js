// https://www.codewars.com/kata/54b7c8d2cd7f51a839000ebf/train/javascript

function processArray(arr, callback) {
  return arr.map(callback);
}

console.log(
  processArray([4, 8, 2, 7, 5], (num) => num + 1),
  [5, 9, 3, 8, 6]
);
