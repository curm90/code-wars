// https://www.codewars.com/kata/sum-of-positive/train/javascript

function positiveSum(arr) {
  if (arr.length < 1) return 0
  let result = 0
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num > 0) {
      result += num
    }
  }
  return result
}

function positiveSum(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0)
}

console.log(positiveSum([1,2,3,4,5]),15);
console.log(positiveSum([1,-2,3,4,5]),13);
console.log(positiveSum([]),0);
console.log(positiveSum([-1,-2,-3,-4,-5]),0);
console.log(positiveSum([-1,2,3,4,-5]),9);