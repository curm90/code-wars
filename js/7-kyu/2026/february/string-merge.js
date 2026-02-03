// https://www.codewars.com/kata/597bb84522bc93b71e00007e/train/javascript

function stringMerge(string1, string2, letter) {
  // place to store the result
  let result = [];
  // iterate over string1
  for (let i = 0; i < string1.length; i++) {
    // when we find the letter in string1 we need to get the position of the character in string2
    result.push(string1[i]);
    const matchedLetter = string1[i] === letter;
    if (matchedLetter) {
      const indexInSecondString = string2.indexOf(string1[i]);
      // then we need to add/concatenate the word up to and including the letter of the first word
      const remainingWord = string2.slice(indexInSecondString + 1);
      result.push(...remainingWord);
      // and then from the postion of the letter +1 in the word to the end of the string
      break;
    }
  }

  // return the result
  return result.join('');
}

console.log(stringMerge('person', 'here', 'e'), 'pere');
console.log(stringMerge('apowiejfoiajsf', 'iwahfeijouh', 'j'), 'apowiejouh');
console.log(stringMerge('abcdefxxxyzz', 'abcxxxyyyxyzz', 'x'), 'abcdefxxxyyyxyzz');
console.log(stringMerge('12345654321', '123456789', '6'), '123456789');
console.log(stringMerge('JiOdIdA4', 'oopopopoodddasdfdfsd', 'd'), 'JiOdddasdfdfsd');
console.log(stringMerge('incredible', 'people', 'e'), 'increople');
