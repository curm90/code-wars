// https://www.codewars.com/kata/5a9e86705ee396d6be000091/train/javascript

function checkThreeAndTwo(array) {
  const lookup = {};

  for (const char of array) {
    lookup[char] = lookup[char] + 1 || 1;
  }

  const counts = Object.values(lookup).sort();
  return counts.length === 2 && counts[0] === 2 && counts[1] === 3;
}

console.log(checkThreeAndTwo(['a', 'a', 'a', 'b', 'b'], true));
console.log(checkThreeAndTwo(['a', 'c', 'a', 'c', 'b'], false));
console.log(checkThreeAndTwo(['a', 'a', 'a', 'a', 'a'], false));
