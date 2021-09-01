// https://www.codewars.com/kata/isograms/train/javascript

function isIsogram(str) {
  const counts = {};

  str.split('').map(letter => {
    letter = letter.toLowerCase();
    counts[letter] = counts[letter] || 0;
    counts[letter]++;
  });

  for (const keys in counts) {
    if (counts[keys] > 1) {
      return false;
    }
  }
  return true;
}

function isIsogram(str) {
  return new Set(str.toLowerCase()).size === str.length;
}

console.log(isIsogram('Dermatoglyphics'), true);
console.log(isIsogram('isogram'), true);
console.log(isIsogram('aba'), false, 'same chars may not be adjacent');
console.log(isIsogram('moOse'), false, 'same chars may not be same case');
console.log(isIsogram('isIsogram'), false);
console.log(isIsogram(''), true, 'an empty string is a valid isogram');
