// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

function findOutlier(integers) {
  // place to store the even arr
  const even = [];
  // place to store the odd arr
  const odd = [];
  // iterate over arr
  integers.forEach((number) => {
    // if num is even
    if (number % 2 === 0) {
      // push to even arr
      even.push(number);
      // else
    } else {
      // push to odd
      odd.push(number);
    }
  });
  // check which arr length is 1
  if (even.length > 1) {
    // return that arr at zeroth index
    return odd[0];
  } else {
    return even[0];
  }
}

const findOutlier = (integers) => {
  const odd = integers.filter((int) => int % 2 !== 0);
  const even = integers.filter((int) => int % 2 === 0);

  return even.length === 1 ? even[0] : odd[0];
};

console.log(findOutlier([0, 1, 2]), 1);
console.log(findOutlier([1, 2, 3]), 2);
console.log(findOutlier([2, 6, 8, 10, 3]), 3);
console.log(findOutlier([0, 0, 3, 0, 0]), 3);
console.log(findOutlier([1, 1, 0, 1, 1]), 0);
