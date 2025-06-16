// https://www.codewars.com/kata/583ef2456e39941f810001c5/train/javascript

// First pass solution works but is too slow to pass code wars tests (Very large array)
function duplicateOrUnique(arr) {
  const numCounts = {};

  for (const num of arr) {
    numCounts[num] = (numCounts[num] || 0) + 1;
  }

  const values = Object.values(numCounts);

  if (values.filter((val) => val === 2).length === 1) {
    return +Object.keys(numCounts).find((key) => numCounts[key] === 2);
  }

  if (values.filter((val) => val === 1).length === 1) {
    return +Object.keys(numCounts).find((key) => numCounts[key] === 1);
  }
}

// This is also too slow for the tests.
function duplicateOrUnique(arr) {
  const numCounts = {};

  let once = null,
    twice = null,
    onceCount = 0,
    twiceCount = 0;

  for (const num of arr) {
    numCounts[num] = (numCounts[num] || 0) + 1;
  }

  for (const [num, count] of Object.entries(numCounts)) {
    if (count === 1) {
      once = +num;
      onceCount += 1;
    } else if (count === 2) {
      twice = +num;
      twiceCount += 1;
    }

    if (onceCount > 1 && twiceCount > 1) break;
  }

  if (twiceCount === 1) return twice;

  if (onceCount === 1) return once;

  return null;
}

console.log(duplicateOrUnique([1, 2, 3, 6, 5, 4, 1]), 1);
console.log(duplicateOrUnique([1, 2, 3, 1, 2, 3, 4]), 4);
console.log(duplicateOrUnique([1, 2, 3, 6, 5, 4, 6]), 6);
console.log(duplicateOrUnique([3, 6, 9, 2, 5, 8, 1, 4, 8, 7]), 8);
console.log(duplicateOrUnique([9, 8, 7, 1, 2, 3, 9, 7, 1, 2, 3, 4, 4, 5, 5, 6, 6]), 8);
