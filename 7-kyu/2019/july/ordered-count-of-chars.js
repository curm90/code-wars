// https://www.codewars.com/kata/57a6633153ba33189e000074/train/javascript

// does not pass all tests, YET
function orderedCount(text) {
  // place to store the counts and letters
  const counts = {};
  // build up the object to calculate occurences
  for (const letter of text) {
    counts[letter] = counts[letter] + 1 || 1;
  }
  counts;
  // iterate over the object
  const entries = Object.entries(counts);
  // return entries
  return entries;
}

// console.log(orderedCount('abracadabra'), [
//   ['a', 5],
//   ['b', 2],
//   ['r', 2],
//   ['c', 1],
//   ['d', 1],
// ]);

console.log(orderedCount('233312'), [
  ['2', 2],
  ['3', 3],
  ['1', 1],
]);
