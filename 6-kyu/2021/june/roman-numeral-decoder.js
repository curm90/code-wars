// https://www.codewars.com/kata/51b6249c4612257ac0000005/train/javascript

function solution(roman) {
  // place to store a lookup (key: 'X' value: 10)
  const lookup = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  // place to store the sum
  let sum = 0;
  // iterate over the roman string
  for (let i = roman.length - 1; i >= 0; i--) {
    // get the value from the lookup table at the current roman string
    const current = lookup[roman[i]];
    // if the current number is greater than the preceding number
    if (current > lookup[roman[i - 1]]) {
      // we need to subtract that from the sum
      sum -= lookup[roman[i - 1]];
      // and decrement i
      i--;
    }
    // else we just add that number to the sum
    sum += current;
  }

  // return the sum
  return sum;
}

console.log(solution('XXI'), 21);
console.log(solution('I'), 1);
console.log(solution('IV'), 4);
console.log(solution('XXXIX'), 39);
console.log(solution('MMVIII'), 2008);
console.log(solution('MDCLXVI'), 1666);
console.log(solution('XXIC'));
