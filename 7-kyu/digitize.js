// https://www.codewars.com/kata/5417423f9e2e6c2f040002ae/train/javascript

function digitize(n) {
  // place to store the array
  const resultArr = [];
  // turn number into a string
  const nStr = n.toString();
  // iterate over the string
  for (const num of nStr) {
    // push each num into the array
    resultArr.push(+num);
  }
  // return array
  return resultArr;
}

function digitize(n) {
  return Array.from(String(n), (val) => +val);
}

function digitize(n) {
  return String(n).split('').map(Number);
}

console.log(digitize(123), [1, 2, 3]);
console.log(digitize(1), [1]);
console.log(digitize(0), [0]);
console.log(digitize(1230), [1, 2, 3, 0]);
console.log(digitize(8675309), [8, 6, 7, 5, 3, 0, 9]);
