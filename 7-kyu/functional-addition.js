// https://www.codewars.com/kata/538835ae443aae6e03000547/train/javascript

function add(n) {
  return function (num) {
    return n + num;
  };
}

function add(n) {
  return (num) => {
    return n + num;
  };
}

function add(n) {
  return (num) => n + num;
}

const add = (n) => (num) => n + num;

console.log(add(1)(3), 4, 'add one to three equals four');
console.log(add(1)(10), 11, 'add one to three equals four');
console.log(add(4)(4), 8, 'add one to three equals four');
