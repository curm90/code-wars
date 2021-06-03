// https://www.codewars.com/kata/580878d5d27b84b64c000b51/train/javascript

function sumTriangularNumbers(n) {
  const sums = [];
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += i + 1;
    sums.push(sum);
  }

  return sums.reduce((tot, curr) => tot + curr, 0);
}

function sumTriangularNumbers(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += (i * (i + 1)) / 2;
  }

  return sum;
}

function sumTriangularNumbers(n) {
  if (n < 0) {
    return 0;
  }

  return (n * (n + 1)) / 2 + sumTriangularNumbers(n - 1);
}

console.log(sumTriangularNumbers(4), 20);
console.log(sumTriangularNumbers(6), 56);
console.log(sumTriangularNumbers(34), 7140);
console.log(sumTriangularNumbers(-291), 0);
console.log(sumTriangularNumbers(943), 140205240);
console.log(sumTriangularNumbers(-971), 0);
