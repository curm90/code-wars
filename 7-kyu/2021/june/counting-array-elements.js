// https://www.codewars.com/kata/5569b10074fe4a6715000054/train/javascript

function count(array) {
  const frequencies = {};

  for (const item of array) {
    frequencies[item] = frequencies[item] + 1 || 1;
  }

  return frequencies;
}

function count(array) {
  return array.reduce((freq, val) => {
    return freq[val] ? freq[val]++ : (freq[val] = 1), freq;
  }, {});
}

console.log(count(['a', 'a', 'b', 'b', 'b']), { a: 2, b: 3 });
