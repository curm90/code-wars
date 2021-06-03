// https://www.codewars.com/kata/5436f26c4e3d6c40e5000282/train/javascript

// A little Spaghetti-ish lol!
function sumOfN(n) {
  // place to store the current total
  let total = 0;
  // place to store the result array
  const resultArr = [];

  if (n < 0) {
    for (let i = 0; i <= Math.abs(n); i++) {
      if (i === 0) {
        total += i;
        resultArr.push(total);
      } else {
        // add current index to total
        total += i;
        // push total to result array
        resultArr.push(-total);
      }
    }
  } else {
    // iterate up to n
    for (let i = 0; i <= n; i++) {
      // add current index to total
      total += i;
      // push total to result array
      resultArr.push(total);
    }
  }
  // return result array
  return resultArr;
}

function sumOfN(n) {
  const resultArr = [];
  let total = 0;
  resultArr[0] = 0;

  for (let i = 1; i <= Math.abs(n); i++) {
    if (n < 0) {
      total += i;
      resultArr.push(-total);
    } else {
      total += i;
      resultArr.push(total);
    }
  }

  return resultArr;
}

function sumOfN(n) {
  const resultArr = [];

  for (let i = 0; i <= Math.abs(n); i++) {
    if (i === 0) {
      resultArr[i] = 0;
    } else if (n < 0) {
      resultArr.push(resultArr[i - 1] - i);
    } else {
      resultArr.push(resultArr[i - 1] + i);
    }
  }

  return resultArr;
}

function sumOfN(n) {
  const resultArr = [];
  resultArr[0] = 0;

  for (let i = 1; i <= Math.abs(n); i++) {
    if (n < 0) {
      resultArr.push(resultArr[i - 1] + i);
    } else {
      resultArr.push(resultArr[i - 1] - i);
    }
  }

  return resultArr;
}

console.log(sumOfN(3), [0, 1, 3, 6]);
console.log(sumOfN(-4), [0, -1, -3, -6, -10]);
console.log(sumOfN(1), [0, 1]);
console.log(sumOfN(-6), [0, -1, -3, -6, -10, -15, -21]);
