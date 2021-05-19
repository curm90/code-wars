// https://www.codewars.com/kata/5680781b6b7c2be860000036/train/javascript

function vowelIndices(word) {
  // place to store the result array
  const resultArr = [];
  // place to store the vowels
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  // iterate over the word
  for (let i = 0; i < word.length; i++) {
    // if vowels include current letter
    if (vowels.includes(word[i].toLowerCase())) {
      // push the index + 1 to result array
      resultArr.push(i + 1);
    }
  }
  // return result array
  return resultArr;
}

function vowelIndices(word) {
  const resultArr = [];

  for (let i = 0; i < word.length; i++) {
    if (/[aeioyu]/i.test(word[i])) {
      resultArr.push(i + 1);
    }
  }
  return resultArr;
}

console.log(vowelIndices('mmm'), []);
console.log(vowelIndices('apple'), [1, 5]);
console.log(vowelIndices('super'), [2, 4]);
console.log(vowelIndices('orange'), [1, 3, 6]);
console.log(vowelIndices('supercalifragilisticexpialidocious'), [
  2,
  4,
  7,
  9,
  12,
  14,
  16,
  19,
  21,
  24,
  25,
  27,
  29,
  31,
  32,
  33,
]);
