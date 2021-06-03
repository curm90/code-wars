// https://www.codewars.com/kata/count-of-positives-slash-sum-of-negatives/train/javascript

function countPositivesSumNegatives(input) {
  if (input === null || input.length < 1) return []

  let count = 0
  let sum = []

  for (let i = 0; i < input.length; i++) {
    const currentNumber = input[i];
    
    if (currentNumber > 0) {
      sum.push(count)
    } else {
      count += currentNumber
    }
  }
  return [sum.length, count]
}

function countPositivesSumNegatives(input) {
  if (input === null || input.length < 1) return []

  return [
    input.filter(num => num > 0).length,
    input.reduce((sum, num) => num < 0 ? sum + num : sum, 0)
  ]
}

console.log(countPositivesSumNegatives(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));