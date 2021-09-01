// https://www.codewars.com/kata/586909e4c66d18dd1800009b/train/javascript

function multiplyAll(arr) {
  return function muliplyBy(n) {
    return arr.map((num) => num * n);
  };
}

function multiplyAll(arr) {
  return (v) => arr.map((n) => n * v);
}

const multiplyAll = (arr) => (v) => arr.map((n) => n * v);

console.log(multiplyAll([1, 2, 3])(1), [1, 2, 3]);
console.log(multiplyAll([1, 2, 3])(2), [2, 4, 6]);
console.log(multiplyAll([1, 2, 3])(0), [0, 0, 0]);
console.log(multiplyAll([])(10), [], 'should return an empty array');
