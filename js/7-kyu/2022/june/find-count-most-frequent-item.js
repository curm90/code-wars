// https://www.codewars.com/kata/56582133c932d8239900002e/train/javascript

function mostFrequentItemCount(collection) {
  if (!collection.length) return 0;
  // place to store a lookup table
  const lookup = {};
  // iterate over the array
  collection.forEach((num) => {
    // populate the lookup table to be the counts of each number
    lookup[num] ? lookup[num]++ : (lookup[num] = 1);
  });

  // iterate over the object and access the values
  const lookupValues = Object.values(lookup);
  // return the largest number of those values
  return Math.max(...lookupValues);
}

function mostFrequentItemCount(collection) {
  if (!collection.length) return 0;

  const lookup = {};

  collection.forEach((num) => {
    lookup[num] = lookup[num] + 1 || 1;
  });

  return Math.max(...Object.values(lookup));
}

console.log(mostFrequentItemCount([]), 0);
console.log(mostFrequentItemCount([3, -1, -1]), 2);
console.log(
  mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]),
  5
);
