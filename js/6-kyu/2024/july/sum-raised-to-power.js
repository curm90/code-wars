// https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript

function sumDigPow(a, b) {
  // place to store the result array
  const resultArr = [];

  // iterate whil a <= b
  for (let num = a; num <= b; num++) {
    // place to store the digits of the number in case num > 9 (multiple digits in the number)
    const digits = num.toString().split('').map(Number);
    // get the sum of the digits raised to the power of the index
    // for num 10 -> 1 ^ 1 + 0 ^ 2 = 1
    let sum = digits.reduce((total, current, i) => total + Math.pow(current, i + 1), 0);

    // if the sum === num
    if (sum === num) {
      // add it to the result array
      resultArr.push(num);
    }
  }

  // return result array
  return resultArr;
}

console.log(sumDigPow(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(sumDigPow(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]);
console.log(sumDigPow(10, 100), [89]);
console.log(sumDigPow(90, 100), []);
console.log(sumDigPow(90, 150), [135]);
console.log(sumDigPow(50, 150), [89, 135]);
console.log(sumDigPow(10, 150), [89, 135]);
