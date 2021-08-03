// https://www.codewars.com/kata/54592a5052756d5c5d0009c3/train/javascript

function head(arr) {
  return arr[0];
}

function tail(arr) {
  return arr.slice(1);
}

function init(arr) {
  return arr.slice(0, -1);
}

function last(arr) {
  return arr[arr.length - 1];
}

console.log(head([5, 1]), 5);
console.log(tail([1]), []);
console.log(tail([1, 2, 3, 4]), [2, 3, 4]);
console.log(tail([19, 17]), [17]);
console.log(init([1, 5, 7, 9]), [1, 5, 7]);
console.log(last([7, 2]), 2);
