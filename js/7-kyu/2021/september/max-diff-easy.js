// https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095/train/javascript

function maxDiff(list) {
  return list.length <= 1 ? 0 : Math.max(...list) - Math.min(...list);
}

function maxDiff(list) {
  let max = -Infinity;
  let min = Infinity;

  for (const num of list) {
    if (num < min) {
      min = num;
    }

    if (num > max) {
      max = num;
    }
  }

  return list.length <= 1 ? 0 : max - min;
}

console.log(maxDiff([0, 1, 2, 3, 4, 5, 6]), 6);
console.log(maxDiff([-0, 1, 2, -3, 4, 5, -6]), 11);
console.log(maxDiff([0, 1, 2, 3, 4, 5, 16]), 16);
console.log(maxDiff([16]), 0);
console.log(maxDiff([]), 0);
