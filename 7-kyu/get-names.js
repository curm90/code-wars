// https://www.codewars.com/kata/getnames/train/javascript

function getNames(data){
  return data.map((item) => item.name)
}

var data = [
  {name: 'Joe', age: 20},
  {name: 'Bill', age: 30},
  {name: 'Kate', age: 23}
]

console.log(getNames(data))