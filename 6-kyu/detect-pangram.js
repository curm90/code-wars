//https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

function isPangram(string) {
  // place to store the occurences of each letter
  let occurences = [];
  // remove non alphabetic chars
  const regex = /[a-z]/gi;
  const letterArr = string.match(regex);
  // if length of arr is less than 26
  // return false
  if (letterArr.length < 26) return false;
  // iterate over the arr
  for (let i = 0; i < letterArr.length; i++) {
    const currentLetter = letterArr[i].toLowerCase();
    // if occurences includes current letter
    if (occurences.includes(currentLetter)) {
      // continue
      continue;
      // else
    } else {
      // add letter to the occurences
      occurences.push(currentLetter);
    }
  }
  // return occurences.length === 26
  return occurences.length === 26;
}

console.log(
  isPangram('The quick brown fox jumps over the lazy dog.'),
  true
);
console.log(isPangram('This is not a pangram.'), false);
