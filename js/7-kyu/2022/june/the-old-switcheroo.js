// https://www.codewars.com/kata/55d410c492e6ed767000004f/train/javascript

function vowel2index(str) {
  // place to store the vowels
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  // place to store the result string
  let resultStr = '';
  // iterate over the string
  for (let i = 0; i < str.length; i++) {
    let currentLetter = str[i];
    // if current letter is a vowel
    if (vowels.includes(currentLetter.toLowerCase())) {
      // set the current letter equal to the index
      currentLetter = i + 1;
      resultStr += currentLetter;
    } else {
      resultStr += currentLetter;
    }
  }

  //  return result str
  return resultStr;
}

function vowel2index(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  return str
    .split('')
    .map((letter, i) => {
      if (vowels.includes(letter.toLowerCase())) {
        return i + 1;
      }

      return letter;
    })
    .join('');
}

function vowel2index(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  return str
    .split('')
    .map((letter, i) => {
      return vowels.includes(letter.toLowerCase()) ? i + 1 : letter;
    })
    .join('');
}

function vowel2index(str) {
  return str.replace(/[aeiou]/gi, (_, i) => i + 1);
}

console.log(vowel2index('this is my string'), 'th3s 6s my str15ng');
console.log(
  vowel2index('Codewars is the best site in the world'),
  'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
);
console.log(
  vowel2index('Tomorrow is going to be raining'),
  'T2m4rr7w 10s g1415ng t20 b23 r2627n29ng'
);
console.log(vowel2index(''), '');
