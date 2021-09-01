function squareSum(numbers){
  let sum = 0

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i]

    sum += num * num
  }
  return sum
}

function squareSum(numbers){
  return numbers.reduce((acc, current) => acc += current * current, 0)
}


console.log(squareSum([1,2]), 5)
console.log(squareSum([0, 3, 4, 5]), 50)