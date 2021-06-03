// https://www.codewars.com/kata/decode-the-morse-code

MORSE_CODE['.--'];

function decodeMorse(morseCode) {
  return morseCode
    .split('   ')
    .reduce((sentence, codedWord, index, codeWordArray) => {
      return (
        sentence +
        codedWord.split(' ').reduce((word, code) => {
          return word + (MORSE_CODE[code] || '');
        }, '') +
        (index < codeWordArray.length - 1 ? ' ' : '')
      );
    }, '')
    .trim();
}
