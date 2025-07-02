// https://www.codewars.com/kata/5340298112fa30e786000688/train/javascript

function twosDifference(input) {
  const result = [];
  const numSet = new Set(input);

  for (const num of input) {
    if (numSet.has(num + 2)) {
      result.push([num, num + 2]);
    }
  }

  return result.sort((a, b) => a[0] - b[0]);
}

function twosDifference(input) {
  const result = [];
  input.sort((a, b) => a - b);
  let left = 0;
  let right = 1;

  while (right < input.length) {
    const diff = input[right] - input[left];
    if (diff === 2) {
      result.push([input[left], input[right]]);
      left++;
      right++;
    } else if (diff < 2) {
      right++;
    } else {
      left++;
    }
  }

  return result;
}

console.log(
  twosDifference([1, 2, 3, 4]),
  [
    [1, 3],
    [2, 4],
  ],
  `twosDifference([1,2,3,4])`
);
console.log(
  twosDifference([1, 3, 4, 6]),
  [
    [1, 3],
    [4, 6],
  ],
  `twosDifference([1,3,4,6])`
);
