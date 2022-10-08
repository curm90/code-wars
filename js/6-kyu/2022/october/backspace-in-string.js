// https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/train/javascript

function cleanString(s) {
  // place to store the result string
  let result = [];
  // iterate over the string
  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];
    // if current char is equal to # pop off the last added char in result str
    if (currentChar === '#') {
      result.pop();
    } else {
      result.push(currentChar);
    }
  }

  //return result
  return result.join('');
}

function cleanString(s) {
  return s
    .split('')
    .reduce((acc, curr) => (curr === '#' ? acc.slice(0, -1) : acc + curr), '');
}

console.log(cleanString('abc#d##c'), 'ac');
console.log(cleanString('abc####d##c#'), '');
