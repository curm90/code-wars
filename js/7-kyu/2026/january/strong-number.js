// https://www.codewars.com/kata/5a4d303f880385399b000001/train/javascript

function strong(n) {
  function factorial(num) {
    return num <= 1 ? 1 : num * factorial(num - 1);
  }

  const sumOfFactorials = n
    .toString()
    .split('')
    .reduce((sum, digit) => {
      return sum + factorial(Number(digit));
    }, 0);

  return sumOfFactorials === n ? 'STRONG!!!!' : 'Not Strong !!';
}

console.log(strong(1), 'STRONG!!!!');
console.log(strong(2), 'STRONG!!!!');
console.log(strong(145), 'STRONG!!!!');
console.log(strong(7), 'Not Strong !!');
console.log(strong(93), 'Not Strong !!');
console.log(strong(185), 'Not Strong !!');
