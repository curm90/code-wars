// https://www.codewars.com/kata/5655c60db4c2ce0c2e000026/train/javascript

function compose(...fns) {
  return function (arg) {
    return fns.reduceRight((acc, fn) => {
      return fn ? fn(acc) : acc;
    }, arg);
  };
}

function compose(...fns) {
  return (arg) =>
    fns.reduceRight((acc, fn) => {
      return fn ? fn(acc) : acc;
    }, arg);
}

const compose =
  (...fns) =>
  (arg) =>
    fns.reduceRight((acc, fn) => (fn ? fn(acc) : acc), arg);

const addOne = (a) => a + 1;
const multTwo = (b) => b * 2;

console.log(compose(multTwo, addOne)(5), 12, 'compose two functions');
console.log(
  compose(addOne, multTwo, addOne, addOne)(2),
  9,
  'compose four functions'
);
console.log(compose(addOne)(3), 4, 'compose one function');
console.log(compose()(10), 10, 'compose no functions');
