// https://www.codewars.com/kata/57d2807295497e652b000139/train/javascript

function averages(numbers) {
  // if numbers doesnt exist or has less than 2 elements return an empty array
  if (!numbers || numbers.length < 2) return [];
  // place to store the result array
  const resultArr = [];
  // iterate over the array
  for (let i = 0; i < numbers.length - 1; i++) {
    // place to store a current sum
    let sum = 0;
    // add current num and next num - store in sum
    sum += numbers[i] + numbers[i + 1];
    // push sum / 2 to result arr
    resultArr.push(sum / 2);
  }
  // return result arr
  return resultArr;
}

function averages(numbers) {
  return numbers
    ? numbers
        .map((num, i, arr) => (num + arr[i + 1]) / 2)
        .slice(0, -1)
    : [];
}

console.log(averages([2, 2, 2, 2, 2]), [2, 2, 2, 2]);
console.log(averages([2, -2, 2, -2, 2]), [0, 0, 0, 0]);
console.log(averages([1, 3, 5, 1, -10]), [2, 4, 3, -4.5]);
console.log(averages([1, 3]), [2]);
console.log(averages([1]), []);
console.log(averages([]), []);
console.log(averages(), []);
