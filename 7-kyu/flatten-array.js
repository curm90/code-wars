// https://www.codewars.com/kata/5250a89b1625e5decd000413/train/javascript

function flatten(array) {
  return [].concat.apply([], array);
}

function flatten(array) {
  return [].concat(...array);
}

function flatten(array) {
  return array.reduce((prev, curr) => {
    return prev.concat(curr);
  }, []);
}

function flatten(array) {
  return array.flat();
}

console.log(flatten([]), []);
console.log(flatten([1, 2, 3]), [1, 2, 3]);
console.log(
  flatten([
    [1, 2, 3],
    ['a', 'b', 'c'],
    [1, 2, 3],
  ]),
  [1, 2, 3, 'a', 'b', 'c', 1, 2, 3]
);
console.log(flatten([[3, 4, 5], [[9, 9, 9]], ['a,b,c']]), [
  3,
  4,
  5,
  [9, 9, 9],
  'a,b,c',
]);
console.log(flatten([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]]), [
  [3],
  [4],
  [5],
  9,
  9,
  8,
  [1, 2, 3],
]);
