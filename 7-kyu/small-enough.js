// https://www.codewars.com/kata/57cc981a58da9e302a000214/train/javascript

function smallEnough(a, limit) {
  // iterate over the array
  for (let i = 0; i < a.length; i++) {
    // if current number is greater than limit
    if (a[i] > limit) {
      // return false
      return false;
    }
  }
  // else return true
  return true;
}

function smallEnough(a, limit) {
  for (const num of a) {
    if (num > limit) {
      return false;
    }
  }
  return true;
}

function smallEnough(a, limit) {
  return a.every((num) => num <= limit);
}

function smallEnough(a, limit) {
  return Math.max(...a) <= limit;
}

console.log(smallEnough([66, 101], 200), true);
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false);
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107), true);
console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120), true);
