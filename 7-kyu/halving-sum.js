// https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d/train/javascript

function halvingSum(n) {
  let sum = 0;

  while (n > 0) {
    sum += n;
    n = Math.floor(n / 2);
  }

  return sum;
}

function halvingSum(n) {
  if (n == 1) return n;
  return n + halvingSum(Math.floor(n / 2));
}

function halvingSum(n) {
  return n == 1 ? 1 : n + halvingSum(Math.floor(n / 2));
}

console.log(halvingSum(25), 47);
console.log(halvingSum(127), 247);
