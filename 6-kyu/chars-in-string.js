// https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

function count(string) {
  const counts = {};

  string.split('').forEach((letter) => {
    counts[letter] = counts[letter] + 1 || 1;
  });

  return counts;
}

function count(string) {
  return string.split('').reduce((counts, current) => {
    counts[current] = counts[current] + 1 || 1;
    return counts;
  }, {});
}

console.log(count('aba'), { a: 2, b: 1 });
console.log(count(''), {});
