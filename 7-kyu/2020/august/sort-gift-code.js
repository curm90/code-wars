// https://www.codewars.com/kata/52aeb2f3ad0e952f560005d3/train/javascript

function sortGiftCode(code) {
  return code.split('').sort().join('');
}

console.log(sortGiftCode('abcdef'), 'abcdef');
console.log(sortGiftCode('pqksuvy'), 'kpqsuvy');
console.log(
  sortGiftCode('zyxwvutsrqponmlkjihgfedcba'),
  'abcdefghijklmnopqrstuvwxyz'
);
