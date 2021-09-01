// https://www.codewars.com/kata/54557d61126a00423b000a45/train/javascript

function shorter_reverse_longer(a, b) {
  let result = '';

  if (a.length >= b.length) {
    result += `${b}${a.split('').reverse().join('')}${b}`;
  } else {
    result += `${a}${b.split('').reverse().join('')}${a}`;
  }

  return result;
}

function shorter_reverse_longer(a, b) {
  const longest = a.length >= b.length ? a : b;
  const shortest = a.length >= b.length ? b : a;
  const reversed = longest.split('').reverse().join('');

  return `${shortest}${reversed}${shortest}`;
}

function shorter_reverse_longer(a, b) {
  if (a.length >= b.length) {
    [a, b] = [b, a];
  }

  return `${a}${b.split('').reverse().join('')}${a}`;
}

console.log(shorter_reverse_longer('first', 'abcde'), 'abcdetsrifabcde');
console.log(shorter_reverse_longer('hello', 'bau'), 'bauollehbau');
console.log(shorter_reverse_longer('abcde', 'fghi'), 'fghiedcbafghi');
