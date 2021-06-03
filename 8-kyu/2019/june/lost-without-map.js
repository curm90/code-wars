// https://www.codewars.com/kata/beginner-lost-without-a-map/train/javascript

function maps(x){
  return x.map(function(num) {
    return num * 2
  })
}

function maps(x){
  return x.map(num => num * 2)
}

const maps = x => x.map(num => num * 2)

console.log(maps([1, 2, 3]), [2, 4, 6]);
console.log(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]); 
console.log(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]);
