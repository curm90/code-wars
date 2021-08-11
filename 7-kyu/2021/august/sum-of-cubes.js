// https://www.codewars.com/kata/59a8570b570190d313000037/train/javascript

function sumCubes(n) {
  let sum = 0;

  while (n > 0) {
    sum += n ** 3;
    n--;
  }

  return sum;
}

function sumCubes(n) {
  let sum = 0;

  while (n > 0) {
    sum += Math.pow(n, 3);
    n--;
  }

  return sum;
}

function sumCubes(n) {
  if (n == 0) return 0;

  return n ** 3 + sumCubes(n - 1);
}

function sumCubes(n) {
  if (n == 1) return n ** 3;

  return n ** 3 + sumCubes(n - 1);
}

function sumCubes(n) {
  if (n < 2) return 1;

  return n ** 3 + sumCubes(n - 1);
}

console.log(sumCubes(2), 9);
console.log(sumCubes(3), 36);
