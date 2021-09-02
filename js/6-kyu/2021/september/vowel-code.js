// https://www.codewars.com/kata/53697be005f803751e0015aa/train/python

function encode(string) {
  const formula = { a: 1, e: 2, i: 3, o: 4, u: 5 };

  let encodedStr = '';

  for (const letter of string) {
    if (formula[letter]) {
      encodedStr += formula[letter];
    } else {
      encodedStr += letter;
    }
  }

  return encodedStr;
}

function decode(string) {
  const formula = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };

  decodedStr = '';

  for (const letter of string) {
    if (formula[letter]) {
      decodedStr += formula[letter];
    } else {
      decodedStr += letter;
    }
  }

  return decodedStr;
}

// #########################

function encode(string) {
  const formula = { a: 1, e: 2, i: 3, o: 4, u: 5 };

  return encodeOrDecode(string, formula);
}

function decode(string) {
  const formula = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };

  return encodeOrDecode(string, formula);
}

function encodeOrDecode(str, formula) {
  return [...str]
    .map((char) => {
      return formula[char] || char;
    })
    .join('');
}

// ################
const formula = ['a', 'e', 'i', 'o', 'u'];

function encode(string) {
  return [...string].map((char) => formula.indexOf(char) + 1 || char).join('');
}

function decode(string) {
  return [...string].map((char) => formula[+char - 1] || char).join('');
}

console.log(encode('hello'), 'h2ll4');
console.log(encode('How are you today?'), 'H4w 1r2 y45 t4d1y?');
console.log(encode('This is an encoding test.'), 'Th3s 3s 1n 2nc4d3ng t2st.');
console.log(decode('h2ll4'), 'hello');
