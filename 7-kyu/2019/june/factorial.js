// https://www.codewars.com/kata/factorial-1/train/javascript

function factorial(n){
  if (n === 0) return 1
  return n * factorial(n - 1)
}

function factorial(n) {
  let result = 1

  while (n > 0) {
    result *= n
    n--
  }
  return result
}



console.log(factorial(0), 1);
console.log(factorial(1), 1);
console.log(factorial(4), 24);
console.log(factorial(7), 5040);
console.log(factorial(17), 355687428096000);