// https://www.codewars.com/kata/substituting-variables-into-strings-padded-numbers/train/javascript

function solution(value){
  const padded = value.toString()
  let zero = 5 - padded.length
  let zeros = ''

  while (zero !== 0) {
    zeros += '0'
    zero--
  }
  return `Value is ${zeros}${padded}`
}

function solution(value) {
  let output = value.toString()
  while(output.length < 5) output += '0'
  return 'Value is ' + output
}

function solution(value){
  return "Value is " + ("00000" + value).slice(-5)
}

const solution = value => 'Value is ' + value.toString().padStart(5, '0')

console.log(solution(5),"Value is 00005")