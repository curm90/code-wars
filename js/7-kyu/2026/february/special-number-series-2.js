// https://www.codewars.com/kata/5a53a17bfd56cb9c14000003/train/javascript

function disariumNumber(n) {
  // we need to access to all digits
  const digits = n.toString().split('').map(Number);
  // iterate over the digits to get the sum of each digit multiplied by its index + 1
  // add that to the sum
  const sum = digits.reduce((acc, digit, i) => acc + Math.pow(digit, i + 1), 0);
  // return if the sum is equal to n Disarium !! else Not !!
  return n === sum ? 'Disarium !!' : 'Not !!';
}

console.log(disariumNumber(89), 'Disarium !!');
console.log(disariumNumber(564), 'Not !!');
console.log(disariumNumber(1024), 'Not !!');
console.log(disariumNumber(135), 'Disarium !!');
console.log(disariumNumber(136586), 'Not !!');
