// https://www.codewars.com/kata/52e9aa89b5acdd26d3000127/train/javascript

function spam(number) {
  return 'hue'.repeat(number);
}

function spam(number) {
  let result = '';

  while (number > 0) {
    result += 'hue';
    number--;
  }

  return result;
}

function spam(number) {
  let result = '';

  while (number--) {
    result += 'hue';
  }

  return result;
}

function spam(number) {
  return Array(++number).join('hue');
}

function spam(number) {
  if (number != 0) {
    return 'hue' + spam(number - 1);
  }

  return '';
}

function spam(number) {
  return number != 0 ? 'hue' + spam(number - 1) : '';
}

console.log(spam(1), 'hue');
console.log(spam(6), 'huehuehuehuehuehue');
console.log(spam(14), 'huehuehuehuehuehuehuehuehuehuehuehuehuehue');
