// https://www.codewars.com/kata/541629460b198da04e000bb9/train/javascript

function last(list) {
  const lastVal = arguments[arguments.length - 1];

  return lastVal[lastVal.length - 1] || lastVal;
}

console.log(last([1, 2, 3, 4, 5]), 5); //-- array
console.log(last('abcde'), 'e'); //-- string
console.log(last(1, 'b', 3, 'd', 5), 5); //-- arguments
console.log(last(5), 5); //-- arguments
