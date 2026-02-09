// https://www.codewars.com/kata/5a55f04be6be383a50000187/train/javascript

function specialNumber(n) {
  const numArr = n.toString().split('');

  for (const num of numArr) {
    if (num > 5) return 'NOT!!';
  }

  return 'Special!!';
}

function specialNumber(n) {
  const str = n.toString();

  for (const digit of str) {
    if (digit > 5) return 'NOT!!';
  }

  return 'Special!!';
}

function specialNumber(n) {
  return /[6-9]/.test(n.toString()) ? 'NOT!!' : 'Special!!';
}

console.log(specialNumber(2), 'Special!!');
console.log(specialNumber(3), 'Special!!');
console.log(specialNumber(6), 'NOT!!');
console.log(specialNumber(9), 'NOT!!');
console.log(specialNumber(11), 'Special!!');
console.log(specialNumber(55), 'Special!!');
console.log(specialNumber(26), 'NOT!!');
console.log(specialNumber(92), 'NOT!!');
console.log(specialNumber(25432), 'Special!!');
console.log(specialNumber(2783), 'NOT!!');
