// https://www.codewars.com/kata/59706036f6e5d1e22d000016/train/javascript

function wordsToMarks(string) {
  // place to store the score
  let score = 0;
  // iterate over the string
  for (let i = 0; i < string.length; i++) {
    // get the ascii code of each num - 96
    const scoreFromAscii = string.charCodeAt(i) - 96;
    // and add it to the score
    score += scoreFromAscii;
  }

  // return score
  return score;
}

function wordsToMarks(string) {
  return [...string].reduce((score, _, i) => {
    const scoreFromAscii = string.charCodeAt(i) - 96;
    return score + scoreFromAscii;
  }, 0);
}

function wordsToMarks(string) {
  return [...string].reduce((score, _, i) => {
    return score + string.charCodeAt(i) - 96;
  }, 0);
}

function wordsToMarks(string) {
  return [...string].reduce(
    (score, _, i) => score + string.charCodeAt(i) - 96,
    0
  );
}

function wordsToMarks(string) {
  return [...string].reduce(
    (score, curr) => score + curr.charCodeAt() - 96,
    0
  );
}

console.log(wordsToMarks('attitude'), 100);
console.log(wordsToMarks('friends'), 75);
console.log(wordsToMarks('family'), 66);
console.log(wordsToMarks('selfness'), 99);
console.log(wordsToMarks('knowledge'), 96);
