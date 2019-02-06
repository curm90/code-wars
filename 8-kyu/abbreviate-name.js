// https://www.codewars.com/kata/abbreviate-a-two-word-name

function abbrevName(name){
  let result = name.split(' ')
  return (result[0][0] + '.' + result[1][0])
}

function abbrevName(name){
  return name.split(' ').map(word => word[0]).join('.')
}