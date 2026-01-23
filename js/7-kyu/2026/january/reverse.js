// https://www.codewars.com/kata/5413759479ba273f8100003d/train/javascript

reverse = function (array) {
  let temp = null;

  for (let i = 0; i < array.length / 2; i++) {
    temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }

  return array;
};

console.log(reverse([1, 2, 3]), [3, 2, 1]);
console.log(reverse([1, null, 14, 'two']), ['two', 14, null, 1]);
console.log(reverse([1, 2, 3, 4]), [4, 3, 2, 1]);
