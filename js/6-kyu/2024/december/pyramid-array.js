// https://www.codewars.com/kata/515f51d438015969f7000013/train/javascript

function pyramid(n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    result.push(Array(i).fill(1));
  }

  return result;
}

function pyramid(n) {
  return Array.from({ length: n }, (_, i) => Array(i + 1).fill(1));
}

console.log(pyramid(0), []);
console.log(pyramid(1), [[1]]);
console.log(pyramid(2), [[1], [1, 1]]);
console.log(pyramid(2), [[1], [1, 1], [1, 1, 1]]);
