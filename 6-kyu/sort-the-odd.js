sort; // https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

function sortArray(array) {
  // place to store the odd array
  let oddArr = [];
  // place to store a pointer
  let pointer = 0;
  // iterate over the input array
  for (let i = 0; i < array.length; i++) {
    // if num is odd
    if (array[i] % 2 !== 0) {
      // add to the odd array
      oddArr.push(array[i]);
    }
  }
  // sort the odd array
  oddArr.sort((a, b) => a - b);
  // iterate over input array
  for (let i = 0; i < array.length; i++) {
    // if num is odd
    if (array[i] % 2 !== 0) {
      // replace it with the num in odd array at pointer
      array[i] = oddArr[pointer];
      // increment pointer
      pointer++;
    }
  }
  // return array
  return array;
}

function sortArray(array) {
  const odd = array.filter((num) => num % 2).sort((a, b) => a - b);
  return array.map((num) => (num % 2 ? odd.shift() : num));
}

console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
console.log(sortArray([]), []);
