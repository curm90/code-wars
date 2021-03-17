// https://www.codewars.com/kata/58712dfa5c538b6fc7000569/train/javascript

function countRedBeads(n) {
  if (n < 2) return 0;

  let redsCount = 0;

  while (n > 1) {
    redsCount += 2;
    n--;
  }

  return redsCount;
}

function countRedBeads(n) {
  return n < 2 ? 0 : (n - 1) * 2;
}

function countRedBeads(n) {
  return n < 2 ? 0 : 2 * n - 2;
}

console.log(countRedBeads(0), 0);
console.log(countRedBeads(1), 0);
console.log(countRedBeads(2), 2);
console.log(countRedBeads(3), 4);
console.log(countRedBeads(5), 8);
