// https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/train/javascript

function rowWeights(arr) {
  // place to store both return values
  let first = 0,
    second = 0;
  // iterate over the array
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      // set first to old val + val at i
      first += arr[i];
    } else {
      // set second to old val + val at i
      second += arr[i];
    }
  }

  // return result arr -> [first, second]
  return [first, second];
}

function rowWeights(arr) {
  const result = [0, 0];

  for (let i = 0; i < arr.length; i++) {
    i % 2 == 0 ? (result[0] += arr[i]) : (result[1] += arr[i]);
  }

  return result;
}

function rowWeights(arr) {
  return arr.reduce(
    (prev, curr, i) => {
      prev[i % 2] += curr;
      return prev;
    },
    [0, 0]
  );
}

function rowWeights(arr) {
  return arr.reduce(
    (prev, curr, i) => {
      return (prev[i % 2] += curr), prev;
    },
    [0, 0]
  );
}

console.log(rowWeights([80]), [80, 0]);
console.log(rowWeights([100, 50]), [100, 50]);
// console.log(rowWeights([50, 60, 70, 80]), [120, 140]);
// console.log(rowWeights([13, 27, 49]), [62, 27]);
// console.log(rowWeights([70, 58, 75, 34, 91]), [236, 92]);
// console.log(rowWeights([29, 83, 67, 53, 19, 28, 96]), [211, 164]);
// console.log(rowWeights([0]), [0, 0]);
// console.log(rowWeights([100, 51, 50, 100]), [150, 151]);
// console.log(rowWeights([39, 84, 74, 18, 59, 72, 35, 61]), [207, 235]);
// console.log(rowWeights([0, 1, 0]), [0, 1]);
