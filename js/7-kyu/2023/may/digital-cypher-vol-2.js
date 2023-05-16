// https://www.codewars.com/kata/592edfda5be407b9640000b2/train/javascript

function decode(code, n) {
  const key = n.toString();
  return code
    .map((num, i) => String.fromCharCode(num + 96 - +key[i % key.length]))
    .join('');
}

console.log(decode([20, 12, 18, 30, 21], 1939), 'scout');
console.log(
  decode([14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8], 1939),
  'masterpiece'
);
