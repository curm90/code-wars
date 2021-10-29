// https://www.codewars.com/kata/5a54e796b3bfa8932c0000ed/train/javascript

function jumpingNumber(n) {
  if (n < 10) return 'Jumping!!';

  const strNum = String(n);

  for (let i = 0; i < strNum.length - 1; i++) {
    if (strNum[i] - strNum[i + 1] != 1 && strNum[i + 1] - strNum[i] != 1) {
      return 'Not!!';
    }
  }

  return 'Jumping!!';
}

function jumpingNumber(n) {
  const strArr = String(n).split('');

  for (let i = 0; i < strArr.length - 1; i++) {
    if (Math.abs(strArr[i] - strArr[i + 1]) != 1) {
      return 'Not!!';
    }
  }
  return 'Jumping!!';
}

console.log(jumpingNumber(1), 'Jumping!!');
console.log(jumpingNumber(7), 'Jumping!!');
console.log(jumpingNumber(9), 'Jumping!!');
console.log(jumpingNumber(23), 'Jumping!!');
console.log(jumpingNumber(32), 'Jumping!!');
console.log(jumpingNumber(79), 'Not!!');
console.log(jumpingNumber(98), 'Jumping!!');
console.log(jumpingNumber(8987), 'Jumping!!');
console.log(jumpingNumber(4343456), 'Jumping!!');
console.log(jumpingNumber(98789876), 'Jumping!!');
console.log(jumpingNumber(871), 'Not!!');
console.log(jumpingNumber(4555), 'Not!!');
