// https://www.codewars.com/kata/58aed2cafab8faca1d000e20/train/javascript

function modifiedSum(a, n) {
  // place to store the sum of powers
  let powersSum = 0;
  // place to store the sum of array nums
  let numSum = 0;
  // iterate over the array
  for (const num of a) {
    // add current num to num sum
    numSum += num;
    // add current nun raised to the power of n to powers sum
    powersSum += Math.pow(num, n);
  }
  // return powers sum - num sum
  return powersSum - numSum;
}

function modifiedSum(a, n) {
  return a.reduce((acc, curr) => {
    return acc + Math.pow(curr, n) - curr;
  }, 0);
}

function modifiedSum(a, n) {
  return a.reduce((acc, curr) => acc + Math.pow(curr, n) - curr, 0);
}

console.log(modifiedSum([1, 2, 3], 3), 30);
console.log(modifiedSum([1, 2], 5), 30);
