// https://www.codewars.com/kata/5b39e3772ae7545f650000fc/train/javascript

function removeDuplicateWords(s) {
  // place to store the new string
  let result = [];
  let strArr = s.split(' ');
  // iterate over string
  for (let i = 0; i < strArr.length; i++) {
    // if new string includes current word
    if (result.includes(strArr[i])) {
      // do nothing
      continue;
      // else
    } else {
      // add that word to the new string
      result.push(strArr[i]);
    }
  }
  // return new string
  return result.join(' ');
}

function removeDuplicateWords(s) {
  // place to store the new string
  let result = [];
  let strArr = s.split(' ');
  // iterate over string
  strArr.forEach((word) => {
    // if new string includes current word
    if (!result.includes(word)) {
      // add word the reuslt array
      result.push(word);
    }
  });
  // return new string
  return result.join(' ');
}

function removeDuplicateWords(s) {
  const noDupes = new Set(s.split(' '));

  return Array.from(noDupes).join(' ');
}

function removeDuplicateWords(s) {
  const noDupes = new Set(s.split(' '));

  return [...noDupes].join(' ');
}

function removeDuplicateWords(s) {
  return [...new Set(s.split(' '))].join(' ');
}

const removeDuplicateWords = (s) =>
  [...new Set(s.split(' '))].join(' ');

console.log(
  removeDuplicateWords(
    'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
  ),
  'alpha beta gamma delta'
);
