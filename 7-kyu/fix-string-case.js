// https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/javascript

function solve(s) {
  // place to store upper and lower counters
  let upperCount = 0;
  let lowerCount = 0;
  // iterate over the string
  for (let i = 0; i < s.length; i++) {
    const currentLetter = s[i];
    // if current letter === current letter toUpperCase
    if (currentLetter === currentLetter.toUpperCase()) {
      // increment upper counter
      upperCount++;
      // else
    } else {
      // increment lower counter
      lowerCount++;
    }
  }

  // if lower >= upper
  if (lowerCount >= upperCount) {
    // return s.toLowerCase
    return s.toLowerCase();
  }
  // else
  // return s.toUpperCase
  return s.toUpperCase();
}

function solve(s) {
  let upperCount = 0;
  let lowerCount = 0;

  for (let i = 0; i < s.length; i++) {
    const currentLetter = s[i];
    if (currentLetter === currentLetter.toUpperCase()) {
      upperCount++;
    } else {
      lowerCount++;
    }
  }

  return lowerCount >= upperCount ? s.toLowerCase() : s.toUpperCase();
}

function solve(s) {
  let upperCount = s
    .split('')
    .filter((letter) => letter === letter.toUpperCase()).length;
  let lowerCount = s.length - upperCount;

  return upperCount > lowerCount ? s.toUpperCase() : s.toLowerCase();
}

console.log(solve('code'), 'code');
console.log(solve('CODe'), 'CODE');
console.log(solve('COde'), 'code');
console.log(solve('Code'), 'code');
