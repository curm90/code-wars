// https://www.codewars.com/kata/57f759bb664021a30300007d/train/javascript

function switcheroo(x) {
  let result = '';

  for (const letter of x) {
    if (letter == 'a') {
      result += 'b';
    } else if (letter == 'b') {
      result += 'a';
    } else {
      result += letter;
    }
  }

  return result;
}

function switcheroo(x) {
  return [...x]
    .map((letter) => (letter == 'a' ? 'b' : letter == 'b' ? 'a' : 'c'))
    .join('');
}

function switcheroo(x) {
  return x.replace(/[ab]/gi, (x) => (x == 'a' ? 'b' : 'a'));
}

console.log(switcheroo('abc'), 'bac');
console.log(switcheroo('aaabcccbaaa'), 'bbbacccabbb');
console.log(switcheroo('ccccc'), 'ccccc');
