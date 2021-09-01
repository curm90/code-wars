// https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript
function findMissingLetter(arr) {
  // iterate over arr
  for (let i = 0; i < arr.length - 1; i++) {
    // turn each letter into its ascii charcode
    const currentLetterCode = arr[i].charCodeAt();
    const nextLetterCode = arr[i + 1].charCodeAt();
    // if charcodeAt next letter is greater than charCodeAt current letter + 1
    if (nextLetterCode - currentLetterCode > 1) {
      return String.fromCharCode(currentLetterCode + 1);
    }
  }
}

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']), 'e');
console.log(findMissingLetter(['O', 'Q', 'R', 'S']), 'P');
