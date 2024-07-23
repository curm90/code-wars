// https://www.codewars.com/kata/5825792ada030e9601000782/train/javascript

function zipWith(fn, a0, a1) {
  const shortestArrayLength = Math.min(a0.length, a1.length);

  const result = [];

  for (let i = 0; i < shortestArrayLength; i++) {
    result.push(fn(a0[i], a1[i]));
  }

  return result;
}

function zipWith(fn, a0, a1) {
  return Array.from({ length: Math.min(a0.length, a1.length) }, (_, i) => fn(a0[i], a1[i]));
}

const plus = (a, b) => a + b;
console.log(zipWith(plus, [0, 1, 2, 3, 4, 5], [6, 5, 4, 3, 2, 1]), [6, 6, 6, 6, 6, 6]);
console.log(zipWith(plus, [0, 1, 2, 3, 4], [6, 5, 4, 3, 2, 1]), [6, 6, 6, 6, 6]);
console.log(zipWith(plus, [0, 1, 2, 3, 4, 5], [6, 5, 4, 3, 2]), [6, 6, 6, 6, 6]);
console.log(zipWith(Math.pow, [10, 10, 10, 10], [0, 1, 2, 3]), [1, 10, 100, 1000]);
console.log(zipWith(Math.max, [1, 4, 7, 1, 4, 7], [4, 7, 1, 4, 7, 1]), [4, 7, 7, 4, 7, 7]);
console.log(
  zipWith(
    function (a, b) {
      return a + b;
    },
    [0, 1, 2, 3],
    [0, 1, 2, 3]
  ),
  [0, 2, 4, 6]
);
console.log(
  zipWith((a, b) => a + b, [0, 1, 2, 3], [0, 1, 2, 3]),
  [0, 2, 4, 6]
);
