// https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3/train/javascript

function sumEvenNumbers(input) {
  let sum = 0;

  for (let i = 0; i < input.length; i++) {
    const num = input[i];

    if (num % 2 == 0) {
      sum += num;
    }
  }

  return sum;
}

function sumEvenNumbers(input) {
  return input.reduce((sum, num) => {
    if (num % 2 == 0) {
      sum += num;
    }

    return sum;
  }, 0);
}

function sumEvenNumbers(input) {
  return input.reduce((sum, num) => {
    return num % 2 == 0 ? sum + num : sum;
  }, 0);
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]), 12);
