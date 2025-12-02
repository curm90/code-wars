// https://www.codewars.com/kata/5bed96b9a68c19d394000b1d/train/javascript

function vowelRecognition(input) {
  const vowels = 'aeiouAEIOU';
  let score = 0;

  for (let i = 0; i < input.length; i++) {
    if (vowels.includes(input[i])) {
      score += (i + 1) * (input.length - i);
    }
  }

  return score;
}

function vowelRecognition(input) {
  const vowels = 'aeiouAEIOU';
  let score = 0;
  const length = input.length;

  for (let i = 0; i < length; i++) {
    if (vowels.indexOf(input[i]) !== -1) {
      score += (i + 1) * (length - i);
    }
  }

  return score;
}

console.log(vowelRecognition('bbbb'), 0);
console.log(vowelRecognition('baceb'), 16);
console.log(vowelRecognition('aeiou'), 35);
console.log(vowelRecognition('aeiouAEIOU'), 220);
