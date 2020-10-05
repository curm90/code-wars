// https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/javascript

function toWeirdCase(str) {
  const strArr = str.split('');
  // place to store the word pointer
  let pointer = 0;
  // iterate over the strArr
  for (let i = 0; i < strArr.length; i++) {
    let letter = strArr[i];
    // if currentstrArr[i] is not a space
    if (strArr[i] !== ' ') {
      // if pointer mod 2 is 0
      if (pointer % 2 === 0) {
        // uppercase that strArr[i]
        strArr[i] = letter.toUpperCase();
        // increment pointer
        pointer++;
        // else
      } else {
        // lowercase it
        strArr[i] = letter.toLowerCase();
        // inremenet pointer
        pointer++;
      }
    } else {
      // reset pointer
      pointer = 0;
    }
  }
  // return strArr.join('')
  return strArr.join('');
}

console.log(toWeirdCase('This'), 'ThIs');
console.log(toWeirdCase('is'), 'Is');
console.log(toWeirdCase('This is a test'), 'ThIs Is A TeSt');
