// https://www.codewars.com/kata/find-the-next-perfect-square/train/javascript

function findNextSquare(sq) {
  const sqRoot = Math.sqrt(sq);
  if (sqRoot - Math.floor(sqRoot) !== 0) return -1;

  do {
    sq++;
  } while (sqRoot - Math.floor(sqRoot) !== 0);
  return sq;
}

function findNextSquare(sq) {
  let result = Math.sqrt(sq);

  return result % 1 ? -1 : ++result * result;
}

function findNextSquare(sq) {
  const sqRoot = Math.sqrt(sq);

  return sqRoot - Math.floor(sqRoot) === 0 ? Math.pow(sqRoot + 1, 2) : -1;
}

console.log(findNextSquare(121), 144);
console.log(findNextSquare(625), 676);
console.log(findNextSquare(319225), 320356);
console.log(findNextSquare(15241383936), 15241630849);
console.log(findNextSquare(155), -1);
console.log(findNextSquare(342786627), -1);
