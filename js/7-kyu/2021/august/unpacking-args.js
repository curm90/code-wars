// https://www.codewars.com/kata/540de1f0716ab384b4000828/train/javascript

function spread(func, args) {
  return func.apply(this, args);
}

function spread(func, args) {
  return func(...args);
}

console.log(spread(foo, [1, 2]));

function foo(x, y) {
  return x + y;
}
