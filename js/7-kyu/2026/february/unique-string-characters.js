// https://www.codewars.com/kata/5a262cfb8f27f217f700000b/train/javascript/

function solve(a, b) {
  let result = '';

  for (const letter of a) {
    if (!b.includes(letter)) {
      result += letter;
    }
  }

  for (const letter of b) {
    if (!a.includes(letter)) {
      result += letter;
    }
  }

  return result;
}

console.log(solve('xyab', 'xzca'), 'ybzc');
console.log(solve('xyabb', 'xzca'), 'ybbzc');
console.log(solve('abcd', 'xyz'), 'abcdxyz');
console.log(solve('xxx', 'xzca'), 'zca');
