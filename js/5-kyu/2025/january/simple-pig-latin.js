// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

function pigIt(str) {
  return str
    .split(' ')
    .map((word) => {
      if (/^[a-zA-Z]+$/.test(word)) {
        return word.substring(1) + word[0] + 'ay';
      }
      return word;
    })
    .join(' ');
}

function pigIt(str) {
  return str
    .split(' ')
    .map((word) => {
      let isWord = true;

      for (let char of word) {
        const charCode = char.charCodeAt(0);
        if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122))) {
          isWord = false;
          break;
        }
      }

      if (isWord) {
        return word.substring(1) + word[0] + 'ay';
      }
      return word;
    })
    .join(' ');
}

console.log(pigIt('O tempora o mores !'), 'Oay emporatay oay oresmay !');
console.log(pigIt('Pig latin is cool'), 'igPay atinlay siay oolcay');
console.log(pigIt('This is my string'), 'hisTay siay ymay tringsay');
