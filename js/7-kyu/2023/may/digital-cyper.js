// https://www.codewars.com/kata/592e830e043b99888600002d/train/javascript

function encode(str, n) {
  const charNums = str.split('').map((char) => {
    return char.charCodeAt() - 96;
  });

  let extendedNumber = n.toString();

  for (let i = 0; i < Math.ceil(str.length / n.toString().length) - 1; i++) {
    extendedNumber += n.toString();
  }

  const remainder = str.length % n.toString().length;
  if (remainder > 0) {
    extendedNumber += n.toString().substring(0, remainder);
  }

  const extendedNumberArr = extendedNumber.split('');

  return charNums.map((num, i) => num + +extendedNumberArr[i]);
}

function encode(str, n) {
  const extendedNumber = n.toString();

  return [...str].map((letter, i) => {
    return (
      letter.charCodeAt() - 96 + +extendedNumber[i % extendedNumber.length]
    );
  });
}

console.log(encode('scout', 1939), [20, 12, 18, 30, 21]);
console.log(
  encode('masterpiece', 1939),
  [14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8]
);
