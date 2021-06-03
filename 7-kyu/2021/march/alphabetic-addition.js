// https://www.codewars.com/kata/5d50e3914861a500121e1958

function addLetters(letters) {
  if (!letters.length) return 'z';
  // place to store the total sum
  let sum = 0;
  // iterate over the array
  for (let i = 0; i < letters.length; i++) {
    // get the ascii code from each char
    const asciiVal = letters[i].charCodeAt();
    // add it to the sum - 96
    sum += asciiVal - 96;

    // if current sum is greater than 26
    if (sum > 26) {
      // subtract 26 from sum
      sum -= 26;
    }
  }

  // return char code of sum + 96
  return String.fromCharCode(sum + 96);
}

function addLetters(letters) {
  return String.fromCharCode(
    96 +
      (letters.reduce(
        (acc, curr) => acc + (curr.charCodeAt(0) - 96),
        0
      ) % 26 || 26)
  );
}

console.log(addLetters(['a', 'b', 'c']), 'f');
console.log(addLetters(['z']), 'z');
console.log(addLetters(['a', 'b']), 'c');
console.log(addLetters(['z', 'a']), 'a');
console.log(addLetters(['y', 'c', 'b']), 'd');
console.log(addLetters([]), 'z');
console.log(
  addLetters(['e', 'y', 'u', 'f', 'j', 't', 'a', 'k']),
  'u'
);
