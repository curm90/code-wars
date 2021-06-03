// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

function solution(string) {
  // place to store a string
  let str = '';
  // place to store a array of strings
  const wordArr = [];
  // iterate over string
  for (let i = 0; i < string.length; i++) {
    // if current letter ascii code is between 65 and 90
    if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
      // add current string to array
      wordArr.push(str);
      // reset the string to be empty
      str = '';
      // add that letter to the string
      str += string[i];
    } else {
      // else add each letter to the string
      str += string[i];
    }
  }

  wordArr.push(str);

  // return array.join(' ') on a space
  return wordArr.join(' ');
}

function solution(string) {
  let str = '';
  const wordArr = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      wordArr.push(str);
      str = '';
      str += string[i];
    } else {
      str += string[i];
    }
  }

  wordArr.push(str);

  return wordArr.join(' ');
}

function solution(string) {
  return string
    .split('')
    .map((letter) => {
      if (letter === letter.toUpperCase()) {
        letter = ' ' + letter;
      }
      return letter;
    })
    .join('');
}

function solution(string) {
  return string
    .split('')
    .map((letter) => {
      return letter === letter.toUpperCase() ? ` ${letter}` : letter;
    })
    .join('');
}

console.log(solution('camelCasing'), 'camel Casing');
console.log(solution('camelCasingTest'), 'camel Casing Test');
