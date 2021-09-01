// https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0/train/javascript

function solve(arr) {
  return arr.map((str) =>
    str.split('').reduce((total, curr, i) => {
      if (i == curr.toLowerCase().charCodeAt() - 97) {
        total++;
      }
      return total;
    }, 0)
  );
}

function solve(arr) {
  return arr.map((str) =>
    [...str].reduce((total, curr, i) => {
      if (i == curr.toLowerCase().charCodeAt() - 97) {
        total++;
      }
      return total;
    }, 0)
  );
}

function solve(arr) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';

  return arr.map(
    (str) =>
      str
        .toLowerCase()
        .split('')
        .filter((letter, i) => i == alpha.indexOf(letter)).length
  );
}

console.log(solve(['abode', 'ABc', 'xyzD']), [4, 3, 1]);
console.log(solve(['abide', 'ABc', 'xyz']), [4, 3, 0]);
console.log(solve(['IAMDEFANDJKL', 'thedefgh', 'xyzDEFghijabc']), [6, 5, 7]);
console.log(solve(['encode', 'abc', 'xyzD', 'ABmD']), [1, 3, 1, 3]);
