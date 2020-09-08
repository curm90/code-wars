// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

const number = (array) => {
  return array.map((char, i) => `${i + 1}: ${char}`);
};

console.log(number([]), []);
console.log(number(['a', 'b', 'c']), ['1: a', '2: b', '3: c']);
