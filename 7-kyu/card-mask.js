// https://www.codewars.com/kata/credit-card-mask/train/javascript

function maskify(cardNumber) {
  return cardNumber
    .split('')
    .map((digit, i) => {
      if (cardNumber.length - i > 4) {
        digit = '#';
      }
      return digit;
    })
    .join('');
}

function maskify(cardNumber) {
  return cardNumber.slice(0, -4).replace(/./g, '#') + cardNumber.slice(-4);
}

const maskify = cn => cn.slice(-4).padStart(cn.length, '#');

console.log(maskify('4556364607935616'), '############5616');
console.log(maskify('1'), '1');
console.log(maskify('11111'), '#1111');
