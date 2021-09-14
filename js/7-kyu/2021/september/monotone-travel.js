// https://www.codewars.com/kata/54466996990c921f90000d61/train/javascript

function isMonotone(arr) {
  // iterate over the array
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    // if current num is greater than next num
    if (num > arr[i + 1]) {
      // return false
      return false;
    }
  }
  // else return true
  return true;
}

function isMonotone(arr) {
  return arr.every((num, i, arr) => {
    return i == 0 || num >= arr[i - 1];
  });
}

function isMonotone(arr) {
  return arr.every((num, i, arr) => i == 0 || num >= arr[i - 1]);
}

console.log(isMonotone([5, 5, 5, 5, 5]), true);
console.log(isMonotone([3, 2, 1]), false);
console.log(isMonotone([1, 2, 3, 3, 4, 5]), true);
console.log(isMonotone([1]), true);
console.log(isMonotone([3, 2, 2]), false);
