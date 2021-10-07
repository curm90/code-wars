// https://www.codewars.com/kata/586909e4c66d18dd1800009b/train/javascript

function multiplyAll(arr) {
  return function (int) {
    return arr.map((num) => num * int);
  };
}

function multiplyAll(arr) {
  return (int) => {
    return arr.map((num) => num * int);
  };
}

function multiplyAll(arr) {
  return (int) => arr.map((num) => num * int);
}

console.log(Array.isArray(multiplyAll([1])(1)));
console.log(
  multiplyAll([1, 2])(1).length === 2,
  'array should have the same length as the array passed in as an argument'
);
console.log(multiplyAll([1, 2, 3])(1), [1, 2, 3]);
console.log(multiplyAll([1, 2, 3])(2), [2, 4, 6]);
console.log(multiplyAll([1, 2, 3])(0), [0, 0, 0]);
console.log(multiplyAll([])(10), [], 'should return an empty array');
