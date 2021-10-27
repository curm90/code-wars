// https://www.codewars.com/kata/59c5f4e9d751df43cf000035/train/javascript

function solve(s) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const vowelLengths = [];
  let str = '';

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      while (vowels.includes(s[i])) {
        str += s[i];
        i++;
      }
      vowelLengths.push(str.length);
      str = '';
    }
  }

  return Math.max(...vowelLengths);
}

function solve(s) {
  const vowelStrings = s.split(/[^aeiou]/);
  return vowelStrings.reduce((acc, curr) => Math.max(acc, curr.length), 0);
}

function solve(s) {
  return s
    .split(/[^aeiou]/)
    .reduce((acc, curr) => Math.max(acc, curr.length), 0);
}

function solve(s) {
  return Math.max(...s.split(/[^aeiou]/).map((str) => str.length));
}

console.log(solve('codewarriors'), 2);
console.log(solve('suoidea'), 3);
console.log(solve('ultrarevolutionariees'), 3);
console.log(solve('strengthlessnesses'), 1);
console.log(solve('cuboideonavicuare'), 2);
console.log(solve('chrononhotonthuooaos'), 5);
console.log(solve('iiihoovaeaaaoougjyaw'), 8);
