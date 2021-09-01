// https://www.codewars.com/kata/find-numbers-which-are-divisible-by-given-number/train/javascript

function divisibleBy(numbers, divisor){
  let result = []

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    
    if (num % divisor === 0) {
      result.push(num)
    }
  }
  return result
}

function divisibleBy(numbers, divisor){
  return numbers.filter(num => num % divisor === 0)
}


console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2))
console.log(divisibleBy([1, 2, 3, 4, 5, 6], 3))
