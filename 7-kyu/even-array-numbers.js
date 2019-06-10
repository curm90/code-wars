// https://www.codewars.com/kata/even-numbers-in-an-array/train/javascript

function evenNumbers(array, number) {
  let result = []

  for (let i = 0; i < array.length; i++) {
    const num = array[i];

    if (num % 2 === 0) {
      result.push(num)
    }
  }
  return result.slice(-number)
}

function evenNumbers(array, number) {
  return array.filter(item => item % 2 === 0).slice(-number)
}


console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8]);
console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), [-8, 26]);
console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), [6]);