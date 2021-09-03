// https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/train/javascript

function highestRank(arr) {
  const lookup = {};
  let res = -Infinity;
  let timesSeen = 0;

  for (const num of arr) {
    lookup[num] = lookup[num] + 1 || 1;
  }

  for (const num of arr) {
    if (lookup[num] > timesSeen) {
      res = num;
      timesSeen = lookup[num];
    } else if (lookup[num] == timesSeen) {
      res = Math.max(res, num);
    }
  }

  return res;
}

const arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
const arr2 = [5, 4, 5, 6, 6];
const arr3 = [6, 5, 6, 5];
const arr4 = [6, 5, 6, 5];

console.log(highestRank(arr), 12);
console.log(highestRank(arr2), 6);
console.log(highestRank(arr3), 6);
console.log(highestRank(arr4), 6);
