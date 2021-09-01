// https://www.codewars.com/kata/556196a6091a7e7f58000018/train/javascript

function largestPairSum(numbers) {
  numbers.sort((a, b) => b - a);
  return numbers[0] + numbers[1];
}

function largestPairSum(numbers) {
  const [a, b] = numbers.sort((a, b) => b - a);
  return a + b;
}

console.log(largestPairSum([10, 14, 2, 23, 19]), 42, 'Sum should be 42');
console.log(largestPairSum([-100, -29, -24, -19, 19]), 0, 'Sum should be 0');
console.log(largestPairSum([1, 2, 3, 4, 6, -1, 2]), 10, 'Sum should be 10');
console.log(largestPairSum([-10, -8, -16, -18, -19]), -18, 'Sum should be -18');
