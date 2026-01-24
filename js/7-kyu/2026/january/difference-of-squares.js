// https://www.codewars.com/kata/558f9f51e85b46e9fa000025/train/javascript

function differenceOfSquares(n) {
  function sumNumbers(n) {
    if (n === 1) return 1;

    return n + sumNumbers(n - 1);
  }

  function sumSquares(n) {
    if (n === 1) return 1;

    return Math.pow(n, 2) + sumSquares(n - 1);
  }

  const squareSum = Math.pow(sumNumbers(n), 2);
  const sumOfSquares = sumSquares(n);

  return squareSum - sumOfSquares;
}

console.log(differenceOfSquares(5), 170, 'differenceOfSquares(5)');
console.log(differenceOfSquares(10), 2640, 'differenceOfSquares(10)');
console.log(differenceOfSquares(100), 25164150, 'differenceOfSquares(100)');
