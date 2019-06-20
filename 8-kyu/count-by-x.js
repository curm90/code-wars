// https://www.codewars.com/kata/count-by-x/train/javascript

function countBy(a, b) {
  let result = []
  let count = 0
  while (result.length < b) {
    count += a
    result.push(count)
  }
  return result
}

function countBy(a, b) {
  let result = []
  for (let i = 1; i <= b; i++) {
    result.push(a * i)
  }
  return result
}

console.log(countBy(1,5), [1,2,3,4,5], "Array does not match")
console.log(countBy(2,5), [2,4,6,8,10], "Array does not match")