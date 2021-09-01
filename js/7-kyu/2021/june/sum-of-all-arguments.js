// https://www.codewars.com/kata/540c33513b6532cd58000259/train/javascript

function sum() {
  return Object.values(arguments).reduce((total, current) => {
    return total + current;
  }, 0);
}

console.log(sum(1, 2, 3), 6);
console.log(sum(8, 2), 10);
console.log(sum(1, 2, 3, 4, 5), 15);
