// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

function findUniq(arr) {
  const frequencies = {};

  for (const num of arr) {
    frequencies[num] = frequencies[num] ? frequencies[num] + 1 : 1;
  }

  for (const key in frequencies) {
    if (frequencies[key] === 1) {
      return +key;
    }
  }
}

function findUniq(arr) {
  return arr.find((num) => arr.indexOf(num) === arr.lastIndexOf(num));
}

function findUniq(arr) {
  return +arr.filter((num) => {
    return arr.indexOf(num) == arr.lastIndexOf(num);
  });
}

console.log(findUniq([0, 1, 0]), 1);
console.log(findUniq([1, 1, 1, 2, 1, 1]), 2);
console.log(findUniq([3, 10, 3, 3, 3]), 10);
