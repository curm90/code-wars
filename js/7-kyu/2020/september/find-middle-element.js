// https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript

const gimme = (arr) => {
  const mid = [...arr].sort((a, b) => a - b)[1];

  return arr.findIndex((num) => num === mid);
};

console.log(gimme([2, 3, 1]), 0, 'Finds the index of middle element');
console.log(
  gimme([5, 10, 14]),
  1,
  'Finds the index of middle element'
);
