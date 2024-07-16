// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

function disemvowel(str) {
  // a place to store all vowels
  const vowels = ['i', 'e', 'o', 'u', 'a'];
  // place to store the result
  const result = [];
  // iterate over the string
  [...str].forEach((letter) => {
    // if current letter is not a vowel
    if (!vowels.includes(letter.toLowerCase())) {
      // push into result array
      result.push(letter);
    }
  });
  // return the array joined by a space
  return result.join('');
}

console.log(
  disemvowel('This website is for losers LOL!'),
  'Ths wbst s fr lsrs LL!'
);
console.log(
  disemvowel("No offense but,\nYour writing is among the worst I've ever read"),
  "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"
);
console.log(disemvowel('What are you, a communist?'), 'Wht r y,  cmmnst?');
