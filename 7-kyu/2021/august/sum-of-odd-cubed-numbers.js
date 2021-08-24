// https://www.codewars.com/kata/580dda86c40fa6c45f00028a/train/javascript

function cubeOdd(arr) {
  // place to store the sum
  let sum = 0;
  // iterate over the array
  for (let i = 0; i < arr.length; i += 1) {
    const item = arr[i];
    // if type of current item is not a number
    // return undefined
    if (typeof item !== 'number') return undefined;
    // if current num is odd
    if (item % 2 != 0) {
      // cube it and add it to the sum
      sum += item ** 3;
    }
  }

  // return sum
  return sum;
}

function cubeOdd(arr) {
  return arr.reduce((sum, item) => {
    if (typeof item !== 'number') return undefined;

    if (item % 2 != 0) {
      sum += item ** 3;
    }

    return sum;
  }, 0);
}

console.log(cubeOdd([1, 2, 3, 4]), 28);
console.log(cubeOdd([-3, -2, 2, 3]), 0);
console.log(cubeOdd(['a', 12, 9, 'z', 42]), undefined);
