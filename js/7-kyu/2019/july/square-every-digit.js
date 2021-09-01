// https://www.codewars.com/kata/square-every-digit/train/javascript

function squareDigits(num){
  let result = []
  const nums = num.toString().split('')
  nums.map((num) => {
    num = num * num
    result.push(num)
  })
  return Number(result.join(''))
}

console.log(squareDigits(9119), 811181);
