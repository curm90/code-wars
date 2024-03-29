// https://www.codewars.com/kata/5ba38ba180824a86850000f7/train/javascript

function solve(arr) {
  const seen = {};

  for (let i = arr.length - 1; i >= 0; i--) {
    if (seen[arr[i]]) {
      arr.splice(i, 1);
    } else {
      seen[arr[i]] = true;
    }
  }

  return arr;
}

function solve(arr) {
  return arr.filter((num, i) => arr.lastIndexOf(num) == i);
}

console.log(solve([3, 4, 4, 3, 6, 3]), [4, 6, 3]);
console.log(solve([1, 2, 1, 2, 1, 2, 3]), [1, 2, 3]);
console.log(solve([1, 2, 3, 4]), [1, 2, 3, 4]);
console.log(solve([1, 1, 4, 5, 1, 2, 1]), [4, 5, 2, 1]);
console.log(solve([1, 2, 1, 2, 1, 1, 3]), [2, 1, 3]);
