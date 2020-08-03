// https://www.codewars.com/kata/5663f5305102699bad000056/train/javascript

function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) return -1;

  const lengthOne = a1.map((string) => string.length);
  const lengthTwo = a2.map((string) => string.length);

  return Math.max(
    Math.max(...lengthOne) - Math.min(...lengthTwo),
    Math.max(...lengthTwo) - Math.min(...lengthOne)
  );
}

console.log(
  mxdiflg(
    [
      'hoqq',
      'bbllkw',
      'oox',
      'ejjuyyy',
      'plmiis',
      'xxxzgpsssa',
      'xxwwkktt',
      'znnnnfqknaz',
      'qqquuhii',
      'dvvvwz',
    ],
    ['cccooommaaqqoxii', 'gggqaffhhh', 'tttoowwwmmww']
  ),
  13
);
