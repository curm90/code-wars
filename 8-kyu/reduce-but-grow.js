// https://www.codewars.com/kata/57f780909f7e8e3183000078

// function grow(x){
//   return x.reduce((sum, num) => sum * num)
// }

const grow = x => x.reduce((sum, num) => sum * num)

console.log(grow([1, 2, 3]), 6);
console.log(grow([4, 1, 1, 1, 4]), 16); 
console.log(grow([2, 2, 2, 2, 2, 2]), 64); 