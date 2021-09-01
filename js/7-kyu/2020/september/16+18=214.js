// https://www.codewars.com/kata/5effa412233ac3002a9e471d/train/javascript

function add(num1, num2) {
  let result = '';
  let num1Copy = num1.toString().split('').reverse().join('');
  let num2Copy = num2.toString().split('').reverse().join('');

  if (num1 < num2) {
    [num1Copy, num2Copy] = [num2Copy, num1Copy];
  }

  for (let i = 0; i < num1Copy.length; i++) {
    let largest = +num1Copy[i];
    let smallest = +num2Copy[i] || 0;
    result = (largest + smallest).toString() + result;
  }
  return +result;
}

console.log(add(1222, 30277), 31499);
console.log(add(1236, 30977), 31111013);
console.log(add(38810, 1383), 391193);
// console.log(add(49999, 49999), 818181818);
// console.log(add(16, 18), 214);
// console.log(add(26, 39), 515);
// console.log(add(122, 81), 1103);
