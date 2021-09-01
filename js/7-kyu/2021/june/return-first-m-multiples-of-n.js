// https://www.codewars.com/kata/593c9175933500f33400003e/train/javascript

function multiples(m, n) {
  // place to store the result array
  let result = [];
  // while m is greater than 0
  while (m > 0) {
    // unshift m * n
    result.unshift(m * n);
    // decrement m
    m--;
  }
  // return result array
  return result;
}

function multiples(m, n) {
  const b = [];

  for (let i = 1; i <= m; i++) {
    b.push(n * i);
  }

  return b;
}

function multiples(m, n) {
  return [...Array(m)].map((_, i) => ++i * n);
}

console.log(multiples(3, 5), [5, 10, 15]);
