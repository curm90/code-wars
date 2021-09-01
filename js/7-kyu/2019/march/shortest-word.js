// https://www.codewars.com/kata/shortest-word/train/javascript

function findShort(s) {
  // place to store the length initialized to 0
  let result = s.length
  // split string on spaces
  let string = s.split(' ')
  // iterate over words
  for (let i = 0; i < string.length; i++) {
    const currentWord = string[i];
    // if length of current word is less than length of result
    if (currentWord.length < result) {
      // append length
      result = currentWord.length
    }
  }
  // return length
  return result
}

function findShort(s) {
  // split string on spaces
  let string = s.split(' ')
  // place to store the length initialized to 0
  let result = string[0]
  // iterate over words
  for (let i = 0; i < string.length; i++) {
    const currentWord = string[i];
    // if length of current word is less than length of result
    if (currentWord.length < result.length) {
      // append length
      result = currentWord
    }
  }
  // return length
  return result.length
}

function findShort(s) {
  return Math.min(...s.split(' ').map(s => s.length))
}

function findShort(s) {
  return s.split(' ').reduce((min, word) => Math.min(min, word.length), Infinity)
}

function findShort(s) {
  return s.split(' ').sort((a, b) => a.length - b.length)[0].length || 0
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
console.log(findShort("turns out random test cases are easier than writing out basic ones"), 3);