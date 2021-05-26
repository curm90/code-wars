// https://www.codewars.com/kata/59f11118a5e129e591000134/train/javascript

function repeats(arr) {
  // place to store the sum
  let sum = 0;
  // place to store the lookup table
  let lookup = {};
  // build up object with number of occurancies of each number
  for (let num of arr) {
    lookup[num] = lookup[num] + 1 || 1;
  }
  // iterate over the values
  for (const key in lookup) {
    if (Object.hasOwnProperty.call(lookup, key)) {
      // if the values is 1
      if (lookup[key] == 1) {
        // add the key to the sum
        sum += +key;
      }
    }
  }
  // return sum
  return sum;
}

function repeats(arr) {
  const seen = new Set();
  let sum = 0;

  for (const num of arr) {
    if (seen.has(num)) {
      sum -= num;
    } else {
      seen.add(num);
      sum += num;
    }
  }

  return sum;
}

function repeats(arr) {
  return arr
    .filter((num) => arr.indexOf(num) == arr.lastIndexOf(num))
    .reduce((sum, num) => sum + num);
}

console.log(repeats([4, 5, 7, 5, 4, 8]), 15);
console.log(repeats([9, 10, 19, 13, 19, 13]), 19);
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]), 12);
console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]), 22);
console.log(repeats([5, 10, 19, 13, 10, 13]), 24);
