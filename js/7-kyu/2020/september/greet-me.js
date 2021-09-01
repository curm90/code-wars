// https://www.codewars.com/kata/535474308bb336c9980006f2/train/javascript

const greet = (name) => {
  const firstLetter = name.slice(0, 1).toUpperCase();
  const greeting = name.slice(1).toLowerCase();

  return `Hello ${firstLetter}${greeting}!`;
};

const greet = (name) => {
  return `Hello ${name.slice(0, 1).toUpperCase()}${name
    .slice(1)
    .toLowerCase()}!`;
};

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};

const greet = (name) => {
  return `Hello ${name.capitalize()}!`;
};

console.log(greet('riley'), 'Hello Riley!');
