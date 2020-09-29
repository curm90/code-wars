// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript

function comp(arr1, arr2) {
  if (!arr1 || !arr2) return false;
  // sort both arrays
  const sortedArr1 = arr1.sort((a, b) => a - b);
  const sortedArr2 = arr2.sort((a, b) => a - b);
  // iterate over arr2
  for (let i = 0; i < sortedArr2.length; i++) {
    const currentnNum = sortedArr2[i];
    // if the sqrt of current num in arr1 is not equal to current num in arr2
    if (Math.sqrt(currentnNum) !== sortedArr1[i]) {
      // return false
      return false;
    }
    // else
    // continue
    continue;
  }
  // return true
  return true;
}

function comp(arr1, arr2) {
  if (!arr1 || !arr2) return false;
  const sortedArr1 = arr1.sort((a, b) => a - b);
  const sortedArr2 = arr2.sort((a, b) => a - b);

  return sortedArr1
    .map((num) => num * num)
    .every((val, i) => val === sortedArr2[i]);
}

a1 = [66, 40, 5, 83, 56, 8, 97, 47];
a2 = [4356, 1600, 25, 6889, 3136, 64, 9409, 2210];
console.log(comp(a1, a2), false);
