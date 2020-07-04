// https://www.codewars.com/kata/stop-gninnips-my-sdrow

function reverseString(input) {
  return input.split('').reverse().join('');
}

function spinWords(sentence) {
  // place to store result
  let result = '';
  // split input on spaces
  const words = sentence.split(' ');
  // iterate over the words
  for (let word of words) {
    // if the word is longer than 5, reverse and add it to results
    if (word.length >= 5) {
      word = reverseString(word);
    }
    // else just add it to results array
    result += ' ' + word;
  }
  // return the result
  return result.trim();
}

function reverseString(input) {
  return input.split('').reverse().join('');
}

function spinWords(sentence) {
  return sentence
    .split(' ')
    .map((word) => {
      if (word.length >= 5) {
        return reverseString(word);
      }
      return word;
    })
    .join(' ');
}

function reverseString(input) {
  return input.split('').reverse().join('');
}

function spinWords(sentence) {
  return sentence
    .split(' ')
    .reduce((result, word) => {
      if (word.length >= 5) {
        word = reverseString(word);
      }
      result += ' ' + word;
      return result;
    }, '')
    .trim();
}
