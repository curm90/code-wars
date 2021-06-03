// https://www.codewars.com/kata/577b9960df78c19bca00007e/train/javascript

function findDigit(num, nth) {
  // turn the num into a string and remove the sign
  const strArr = Math.abs(num).toString().split('');
  // place to store the length of the string
  const length = strArr.length;
  // if length is less than nth return 0
  if (length < nth) {
    return 0;
  }

  // if nth is less than 1 return -1
  if (nth <= 0) {
    return -1;
  }

  // return the number at the index length - nth
  return +strArr[length - nth];
}

function findDigit(num, nth) {
  if (nth <= 0) return -1;
  let absNum = Math.abs(num);

  for (let i = 1; i < nth; i++) {
    absNum /= 10;
  }

  return Math.floor(absNum) % 10;
}

console.log(findDigit(5673, 4), 5);
console.log(findDigit(129, 2), 2);
console.log(findDigit(-2825, 3), 8);
console.log(findDigit(-456, 4), 0);
console.log(findDigit(0, 20), 0);
console.log(findDigit(65, 0), -1);
console.log(findDigit(24, -8), -1);
