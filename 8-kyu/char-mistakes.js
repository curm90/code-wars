// https://www.codewars.com/kata/correct-the-mistakes-of-the-character-recognition-software/train/javascript

function correct(string) {
  const corrections = {
    '5': 'S',
    '1': 'I',
    '0': 'O'
  }
  return string.replace(/[501]/g, char => corrections[char])
}

console.log(correct("L0ND0N"),"LONDON");
console.log(correct("DUBL1N"),"DUBLIN");
console.log(correct("51NGAP0RE"),"SINGAPORE");
console.log(correct("BUDAPE5T"),"BUDAPEST");
console.log(correct("PAR15"));