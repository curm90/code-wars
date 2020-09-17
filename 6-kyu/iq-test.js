// https://www.codewars.com/kata/552c028c030765286c00007d/train/javascript

function iqTest(numbers) {
  let even = 0;
  const numArr = numbers.split(' ');

  for (let i = 0; i < numArr.length; i++) {
    const currentNum = numArr[i];

    if (currentNum % 2 === 0) {
      even++;
    }
  }

  if (even > 1) {
    return numArr.findIndex((num) => num % 2 !== 0) + 1;
  }

  return numArr.findIndex((num) => num % 2 === 0) + 1;
}

console.log(iqTest('2 4 7 8 10'), 3);
console.log(iqTest('1 2 2'), 1);
