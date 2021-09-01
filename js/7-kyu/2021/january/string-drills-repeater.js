// https://www.codewars.com/kata/585a1a227cb58d8d740001c3/train/javascript

function repeater(string, n) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(string);
  }

  return arr.join('');
}

function repeater(string, n) {
  return string.repeat(n);
}

console.log(repeater('a', 5), 'aaaaa');
console.log(repeater('Na', 16), 'NaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNa');
console.log(repeater('Wub ', 6), 'Wub Wub Wub Wub Wub Wub ');
