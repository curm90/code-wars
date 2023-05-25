// https://www.codewars.com/kata/58235a167a8cb37e1a0000db/train/javascript

function numberOfPairs(gloves) {
  const pairs = {};

  gloves.forEach((glove) => (pairs[glove] = pairs[glove] + 1 || 1));

  return Object.values(pairs).reduce(
    (pairs, current) => pairs + Math.floor(current / 2),
    0
  );
}

console.log(numberOfPairs(['red', 'red']), 1);
console.log(numberOfPairs(['red', 'green', 'blue']), 0);
console.log(
  numberOfPairs(['gray', 'black', 'purple', 'purple', 'gray', 'black']),
  3
);
