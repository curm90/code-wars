// https://www.codewars.com/kata/sum-mixed-array/train/javascript

function sumMix(arr){
  // place to store sum
  let sum = 0
  // iterate over arr 
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    // add number to sum
    sum = sum + Number(num)
  }
  // return sum
  return sum
}

function sumMix(arr){
  return arr.map(a => +a).reduce((a, b) => a + b)
}

function sumMix(arr){
  return arr.reduce((acc, arr) => acc + +arr, 0)
}

const sumMix = (arr) => arr.reduce((sum, num) => sum + (+num), 0)


console.log(sumMix([9, 3, '7', '3']), 22);
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);