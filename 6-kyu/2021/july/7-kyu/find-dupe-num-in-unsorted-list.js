// https://www.codewars.com/kata/558dd9a1b3f79dc88e000001/train/javascript

function findDup(arr) {
  const sorted = arr.sort();
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] == sorted[i + 1]) {
      return sorted[i];
    }
  }
}

function findDup(arr) {
  const seen = {};

  for (const num of arr) {
    if (seen[num]) return num;
    seen[num] = true;
  }
}

console.log(findDup([1, 2, 2, 3]), 2);
console.log(findDup([1, 3, 2, 5, 4, 5, 7, 6]), 5);
