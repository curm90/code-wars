// https://www.codewars.com/kata/5418a1dd6d8216e18a0012b2/train/javascript

// First pass ugly solution
function validate(n) {
  // turn number into an array of digits
  const digits = [...n.toString()];
  // place to store the result array
  const resultArr = [];

  const isEven = digits.length % 2 === 0;

  // iterate over the array
  for (let i = 0; i < digits.length; i++) {
    const currentNum = digits[i];
    // if the length of the array is even
    let sum = null;
    if (isEven) {
      // double every other number starting with first index (or every even number and 0)
      if (i % 2 === 0) {
        sum = currentNum * 2;
        if (sum > 9) {
          resultArr.push(sum - 9);
          sum = null;
        } else {
          resultArr.push(sum);
          sum = null;
        }
      } else {
        resultArr.push(currentNum);
      }
    } else {
      // else is odd
      // double every other number starting with second index (or every odd number)
      if (i % 2 !== 0) {
        sum = currentNum * 2;
        // if the result of doubling any number is more than 9
        if (sum > 9) {
          // replace with that number - 9
          resultArr.push(sum - 9);
        } else {
          resultArr.push(sum);
        }
      } else {
        resultArr.push(currentNum);
      }
    }
  }

  // once this is done sum all of the digits in the result array
  // divide it by 10
  const totalSum = resultArr.reduce((tot, curr) => +tot + +curr, 0);
  // return that number modulus is 0
  return totalSum % 10 === 0;
}

// Second pass unify doubling logic
function validate(n) {
  const digits = [...n.toString()];
  const resultArr = [];

  for (let i = 0; i < digits.length; i++) {
    const currentNum = +digits[i];
    const shouldDouble = (digits.length - i) % 2 === 0;
    if (shouldDouble) {
      if (currentNum * 2 > 9) {
        resultArr.push(currentNum * 2 - 9);
      } else {
        resultArr.push(currentNum * 2);
      }
    } else {
      resultArr.push(currentNum);
    }
  }

  const totalSum = resultArr.reduce((tot, curr) => tot + curr, 0);
  return totalSum % 10 === 0;
}

// Third pass using one iteration and no extra result array
function validate(n) {
  const totalSum = [...n.toString()].map(Number).reduce((tot, curr, i, digits) => {
    const shouldDouble = (digits.length - i) % 2 === 0;
    if (shouldDouble) {
      if (curr * 2 > 9) {
        return tot + curr * 2 - 9;
      } else {
        return tot + curr * 2;
      }
    }

    return tot + curr;
  }, 0);

  return totalSum % 10 === 0;
}

// Slightly more concise final pass. Could use simple for loop for slightly better performance.
function validate(n) {
  const totalSum = [...n.toString()].map(Number).reduce((tot, digit, i, digits) => {
    const shouldDouble = (digits.length - i) % 2 === 0;
    let processedDigit = digit;
    if (shouldDouble) {
      processedDigit *= 2;
      if (processedDigit > 9) processedDigit -= 9;
    }

    return tot + processedDigit;
  }, 0);

  return totalSum % 10 === 0;
}

console.log(validate(1714), false);
console.log(validate(123), false);
console.log(validate(1), false);
console.log(validate(2121), true);
console.log(validate(1230), true);
console.log(validate(891), false);
