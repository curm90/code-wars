// https://www.codewars.com/kata/dont-rely-on-luck/train/javascript

Math.random = function() {
  return 1;
};

const guess = 101;

const lucky_number = Math.floor(Math.random() * 100 + 1);
console.log(guess, lucky_number);
