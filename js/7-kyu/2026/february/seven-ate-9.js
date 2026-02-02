// https://www.codewars.com/kata/559f44187fa851efad000087/train/javascript

function sevenAte9(str) {
  const chars = str.toString().split('');
  const result = [];

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === '9' && chars[i - 1] === '7' && chars[i + 1] === '7') {
      continue;
    }
    result.push(chars[i]);
  }

  return result.join('');
}

console.log(sevenAte9(['797']), '77');
console.log(sevenAte9(['7997']), '7997');
console.log(sevenAte9(['7979797']), '7777');
console.log(sevenAte9(['165561786121789797']), '16556178612178977');
