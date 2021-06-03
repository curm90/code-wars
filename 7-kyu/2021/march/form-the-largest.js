// https://www.codewars.com/kata/5a4ea304b3bfa89a9900008e/train/javascript

function maxNumber(n) {
  // turn the number into an array
  const numArr = n.toString().split('');
  // sort the array
  const sorted = numArr.sort((a, b) => b - a);
  // turn the array back to a string
  const numStr = sorted.join('');
  // return the string coerced to a numner
  return +numStr;
}

function maxNumber(n) {
  return +[...n.toString()].sort((a, b) => b - a).join('');
}

console.log(maxNumber(213), 321);
console.log(maxNumber(7389), 9873);
console.log(maxNumber(63792), 97632);
console.log(maxNumber(566797), 977665);
console.log(maxNumber(1000000), 1000000);
