// https://www.codewars.com/kata/5a4e3782880385ba68000018/train/javascript

function balancedNum(number) {
  const strNum = number.toString();
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < strNum.length / 2 - 1; i++) {
    leftSum += +strNum[i];
    rightSum += +strNum[strNum.length - 1 - i];
  }

  return leftSum === rightSum ? 'Balanced' : 'Not Balanced';
}

function balancedNum(number) {
  const strNum = number.toString();
  const length = strNum.length;

  if (length <= 2) return 'Balanced';

  let leftSum = 0;
  let rightSum = 0;

  const digitsPerSide = Math.floor((strNum.length - 1) / 2);

  for (let i = 0; i < digitsPerSide; i++) {
    leftSum += +strNum[i];
    rightSum += +strNum[strNum.length - 1 - i];
  }

  return leftSum === rightSum ? 'Balanced' : 'Not Balanced';
}

console.log(balancedNum(7), 'Balanced', 'balancedNum(7)');
console.log(balancedNum(959), 'Balanced', 'balancedNum(959)');
console.log(balancedNum(1301), 'Balanced', 'balancedNum(959)');
console.log(balancedNum(13), 'Balanced', 'balancedNum(13)');
console.log(balancedNum(432), 'Not Balanced', 'balancedNum(432)');
console.log(balancedNum(424), 'Balanced', 'balancedNum(424)');
console.log(balancedNum(1024), 'Not Balanced', 'balancedNum(1024)');
console.log(balancedNum(66545), 'Not Balanced', 'balancedNum(66545)');
console.log(balancedNum(295591), 'Not Balanced', 'balancedNum(295591)');
console.log(balancedNum(1230987), 'Not Balanced', 'balancedNum(1230987)');
console.log(balancedNum(56239814), 'Balanced', 'balancedNum(56239814)');
