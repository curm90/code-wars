// https://www.codewars.com/kata/javascript-array-filter/train/javascript

function getEvenNumbers(numbersArray){
  return numbersArray.filter(item => item % 2 === 0)
}

const getEvenNumbers = numbersArray => numbersArray.filter(item => item % 2 === 0)

console.log(getEvenNumbers([2,4,5,6]))