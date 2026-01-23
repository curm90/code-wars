// https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0/train/javascript

function last(x) {
  const wordsArr = x.split(' ');

  return wordsArr.sort((a, b) => {
    const lastLetterA = a[a.length - 1];
    const lastLetterB = b[b.length - 1];

    return lastLetterA.charCodeAt(0) - lastLetterB.charCodeAt(0);
  });
}

function last(x) {
  return x.split(' ').sort((a, b) => {
    const lastLetterACode = a[a.length - 1].charCodeAt(0);
    const lastLetterBCode = b[b.length - 1].charCodeAt(0);

    return lastLetterACode - lastLetterBCode;
  });
}

console.log(last('man i need a taxi up to ubud'), [
  'a',
  'need',
  'ubud',
  'i',
  'taxi',
  'man',
  'to',
  'up',
]);
console.log(last('what time are we climbing up the volcano'), [
  'time',
  'are',
  'we',
  'the',
  'climbing',
  'volcano',
  'up',
  'what',
]);
console.log(last('take me to semynak'), ['take', 'me', 'semynak', 'to']);
