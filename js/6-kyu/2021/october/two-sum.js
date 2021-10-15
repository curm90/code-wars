// https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript

function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] == target) {
        return [i, j];
      }
    }
  }
}

function twoSum(numbers, target) {
  const lookup = {};

  numbers.forEach((num, i) => (lookup[num] = i));

  for (let i = 0; i < numbers.length; i++) {
    let temp = target - numbers[i];

    if (lookup[temp]) {
      return [i, lookup[temp]];
    }
  }
}

function numericalCompare(a, b) {
  return a - b;
}

console.log(twoSum([1, 2, 3], 4).sort(numericalCompare), [0, 2]);
console.log(twoSum([1234, 5678, 9012], 14690).sort(numericalCompare), [1, 2]);
console.log(twoSum([2, 2, 3], 4).sort(numericalCompare), [0, 1]);
