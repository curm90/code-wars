// https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript

function getDivisorsCnt(n) {
  // place to store the result
  let result = 0;
  // iterate until we reach n
  for (let i = 1; i <= n; i++) {
    // check if n is divisible by i
    if (n % i === 0) {
      // if so add 1 to result
      result++;
    }
  }
  // return result
  return result;
}

console.log(getDivisorsCnt(1), 1);
console.log(getDivisorsCnt(10), 4);
console.log(getDivisorsCnt(11), 2);
console.log(getDivisorsCnt(54), 8);
