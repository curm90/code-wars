// https://www.codewars.com/kata/minimize-sum-of-array-array-series-number-1/train/javascript

function minSum(arr) {
  const sorted = arr.sort((a, b) => a - b)
  const result = sorted.reduce((total, number, index, arr) => {
    total += number * arr[arr.length - index - 1]
    return total
  }, 0) / 2
  return result
}

function minSum(arr) {
  return arr.sort((a, b) => a - b)
    .reduce((total, number, index, arr) => {
    return total += number * arr[arr.length - index - 1]
  }, 0) / 2
}

function minSum(arr) {
  let result = 0;
  let sorted = arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length / 2; i++) {
    result += parseInt(sorted[i]) * parseInt(sorted[sorted.length - (i + 1)]);
  }
  return result;
}

console.log(minSum([5,4,2,3]), 22);
// console.log(minSum([12,6,10,26,3,24]), 342);
// console.log(minSum([9,2,8,7,5,4,0,6]), 74);