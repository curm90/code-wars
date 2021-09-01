// https://www.codewars.com/kata/57a62154cf1fa5b25200031e/train/javascript

function alternateCase(str) {
  // turn into array
  const strArr = str.split('');
  // iterate over the arr
  for (let i = 0; i < strArr.length; i++) {
    const letter = strArr[i];
    // if letter is equal to letter to upper case
    if (letter == letter.toUpperCase()) {
      // change to lowercase
      strArr[i] = letter.toLowerCase();
      // else
    } else {
      // change to uppercase
      strArr[i] = letter.toUpperCase();
    }
  }

  // return arr.join
  return strArr.join('');
}

function alternateCase(str) {
  return str
    .split('')
    .map((letter) => {
      if (letter == letter.toUpperCase()) {
        return letter.toLowerCase();
      } else {
        return letter.toUpperCase();
      }
    })
    .join('');
}

function alternateCase(str) {
  return str
    .split('')
    .map((letter) => {
      return letter == letter.toUpperCase()
        ? letter.toLowerCase()
        : letter.toUpperCase();
    })
    .join('');
}

console.log(alternateCase('abc'), 'ABC');
console.log(alternateCase('ABC'), 'abc');
console.log(alternateCase('Hello World'), 'hELLO wORLD');
