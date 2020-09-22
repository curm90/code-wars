// https://www.codewars.com/kata/55d1d6d5955ec6365400006d/train/javascript

function roundToNext5(num) {
  let numCopy = num;

  while (numCopy % 5 !== 0) {
    numCopy++;
  }

  return numCopy;
}

function roundToNext5(num) {
  return Math.ceil(num / 5) * 5;
}

function roundToNext5(num) {
  if (num % 5 === 0) {
    return num;
  }

  return roundToNext5(num + 1);
}

console.log(roundToNext5(0), 0);
console.log(roundToNext5(1), 5);
console.log(roundToNext5(2), 5);
console.log(roundToNext5(5), 5);
console.log(roundToNext5(7), 10);
console.log(roundToNext5(12), 15);
