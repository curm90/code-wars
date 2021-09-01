// https://www.codewars.com/kata/55b051fac50a3292a9000025/train/javascript

function FilterStr(str) {
  const regex = /\d/g;

  return +str.match(regex).join('');
}

function FilterStr(str) {
  return +str.match(/\d/g).join('');
}

function FilterStr(str) {
  return parseInt(str.replace(/\D/g, ''));
}

function FilterStr(str) {
  return +str
    .split('')
    .filter((char) => !isNaN(char))
    .join('');
}

console.log(FilterStr('123'), 123, 'Just return the numbers');
console.log(FilterStr('a1b2c3'), 123, 'Just return the numbers');
console.log(FilterStr('aa1bb2cc3dd'), 123, 'Just return the numbers');
