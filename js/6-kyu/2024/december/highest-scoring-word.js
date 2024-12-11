// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

function high(x) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const words = x.split(' ');
  let highestScore = 0;

  return words.reduce((acc, word) => {
    const score = word.split('').reduce((acc, letter) => acc + alphabet.indexOf(letter) + 1, 0);

    if (score > highestScore) {
      highestScore = score;
      return word;
    }

    return acc;
  }, '');
}

console.log(high('man i need a taxi up to ubud'), 'taxi');
console.log(high('what time are we climbing up the volcano'), 'volcano');
console.log(high('take me to semynak'), 'semynak');
console.log(high('aa b'), 'aa');
console.log(high('b aa'), 'b');
console.log(high('bb d'), 'bb');
console.log(high('d bb'), 'd');
console.log(high('aaa b'), 'aaa');
