// https://www.codewars.com/kata/5546180ca783b6d2d5000062/train/javascript

function squares(x, n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    if (i == 0) {
      result.push(x);
    } else {
      const square = Math.pow(result[i - 1], 2);
      result.push(square);
    }
  }
  return result;
}

function squares(x, n) {
  let result = [];

  for (let i = 0; i < n; i++) {
    result.push(x);
    x = Math.pow(result[i], 2);
  }

  return result;
}

console.log(squares(2, 5), [2, 4, 16, 256, 65536]);
console.log(squares(3, 3), [3, 9, 81]);
console.log(squares(5, 3), [5, 25, 625]);
console.log(squares(10, 4), [10, 100, 10000, 100000000]);
console.log(squares(2, 0), []);
console.log(squares(2, -5), []);
