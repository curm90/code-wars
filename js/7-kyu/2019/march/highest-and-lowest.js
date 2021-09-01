// https://www.codewars.com/kata/highest-and-lowest/train/javascript

function highAndLow(numbers){
  let nums = numbers.split(' ')
  return `${Math.max(...nums)} ${Math.min(...nums)}`
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");
