// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

function arrayDiff(a, b) {
  let result = [];

  for (const num of a) {
    if (b.indexOf(num) < 0) {
      result.push(num);
    }
  }

  return result;
}

function arrayDiff(a, b) {
  return a.filter((num) => b.indexOf(num) < 0);
}

function arrayDiff(a, b) {
  return a.filter((num) => !b.includes(num));
}

console.log(arrayDiff([], [4, 5]), []);
console.log(arrayDiff([3, 4], [3]), [4]);
console.log(arrayDiff([1, 8, 2], []), [1, 8, 2]);

console.log(arrayDiff([1, 2, 2, 2, 3], [2]), [1, 3]);
