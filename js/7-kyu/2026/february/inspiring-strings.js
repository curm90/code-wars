// https://www.codewars.com/kata/5939ab6eed348a945f0007b2/train/javascript

function longestWord(stringOfWords) {
  let result = '';
  const strArr = stringOfWords.split(' ');

  for (let i = strArr.length - 1; i >= 0; i--) {
    const currentWord = strArr[i];

    if (currentWord.length > result.length) {
      result = currentWord;
    }
  }

  return result;
}

function longestWord(stringOfWords) {
  return stringOfWords
    .split(' ')
    .reduceRight((longest, current) => (current.length > longest.length ? current : longest), '');
}

console.log(longestWord('lonely'), 'lonely');
console.log(longestWord('a pair'), 'pair');
console.log(longestWord('a b c d e fgh'), 'fgh');
console.log(longestWord('one two three'), 'three');
console.log(longestWord('red blue grey'), 'grey');
