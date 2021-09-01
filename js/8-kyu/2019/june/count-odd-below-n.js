// https://www.codewars.com/kata/count-odd-numbers-below-n/train/javascript

// Server timed out
// function oddCount(n){
//   let count = 0

//   for (let i = 0; i < n; i++) {
//     if (i < n && i % 2 !== 0) {
//       count++
//     }
//   }
//   return count
// }

const oddCount = n => Math.floor(n / 2)


console.log(oddCount(15), 7, "Oops! Wrong.");
console.log(oddCount(15023), 7511, "Oops! Wrong.");