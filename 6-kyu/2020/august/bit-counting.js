// https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript

const countBits = (n) => {
  if (n === 0) return 0;

  let count = 0;

  for (const number of toBinary(n)) {
    if (number === '1') {
      count++;
    }
  }

  return count;
};

function toBinary(num) {
  let binary = '';
  let temp = num;

  while (temp > 0) {
    if (temp % 2 === 0) {
      binary = '0' + binary;
    } else {
      binary = '1' + binary;
    }

    temp = Math.floor(temp / 2);
  }

  return binary;
}

const countBits = (n) => {
  if (n === 0) return 0;

  let count = 0;

  for (const number of n.toString(2)) {
    if (number === '1') {
      count++;
    }
  }

  return count;
};

const countBits = (n) => {
  return n.toString(2).split('0').join('').length;
};

const countBits = (n) => n.toString(2).split('0').join('').length;

console.log(countBits(0), 0);
console.log(countBits(4), 1);
console.log(countBits(7), 3);
console.log(countBits(9), 2);
console.log(countBits(10), 2);
