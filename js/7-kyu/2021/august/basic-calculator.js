// https://www.codewars.com/kata/5296455e4fe0cdf2e000059f/train/javascript

function calculate(num1, operation, num2) {
  const math = {
    '+': function (x, y) {
      return x + y;
    },
    '-': function (x, y) {
      return x - y;
    },
    '*': function (x, y) {
      return x * y;
    },
    '/': function (x, y) {
      return y == 0 ? null : x / y;
    },
  };

  return math[operation] ? math[operation](num1, num2) : null;
}

console.log(calculate(3.2, '+', 8), 11.2);
console.log(calculate(3.2, '-', 8), -4.8);
console.log(calculate(3.2, '/', 8), 0.4);
console.log(calculate(3.2, '*', 8), 25.6);
console.log(calculate(-3, '+', 0), -3);
console.log(calculate(-3, '-', 0), -3);
console.log(calculate(-3, '/', 0), null);
console.log(calculate(-3, '*', 0), 0);
console.log(calculate(-3, 'w', 0), null);
