// https://www.codewars.com/kata/5299413901337c637e000004/train/javascript

function getMissingElement(arr) {
  const sorted = arr.sort((a, b) => a - b);

  if (!sorted.includes(0)) {
    return 0;
  }

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i + 1] != sorted[i] + 1) {
      return sorted[i] + 1;
    }
  }
}

function getMissingElement(arr) {
  for (let i = 0; i <= 10; i++) {
    if (!arr.includes(i)) {
      return i;
    }
  }
}

function getMissingElement(arr) {
  return arr.reduce((total, curr) => total - curr, 45);
}

console.log(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4]), 8);
console.log(getMissingElement([9, 2, 4, 5, 7, 0, 8, 6, 1]), 3);
console.log(getMissingElement([9, 2, 4, 5, 7, 3, 8, 6, 1]), 0);
