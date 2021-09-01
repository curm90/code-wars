// https://www.codewars.com/kata/56b7f2f3f18876033f000307/train/javascript

function inAscOrder(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }

  return true;
}

console.log(
  inAscOrder([1, 2, 4, 7, 19]),
  'The list of numbers "1, 2, 4, 7, 19" is in ascending order'
);
console.log(
  inAscOrder([1, 2, 3, 4, 5]),
  'The list of numbers "1, 2, 3, 4, 5" is in ascending order'
);
console.log(
  !inAscOrder([1, 6, 10, 18, 2, 4, 20]),
  'The list of numbers "1, 6, 10, 18, 2, 4, 20" is not in ascending order'
);
console.log(
  !inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1]),
  'The list of numbers "9, 8, 7, 6, 5, 4, 3, 2, 1" is in DESCENDING order not ascending order'
);
