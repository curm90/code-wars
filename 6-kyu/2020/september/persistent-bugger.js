// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

function persistence(num) {
  // turn number into string or array
  let arrNum = num.toString().split('');
  // place to store the sum
  let sum = 1;
  // place to store the count
  let count = 0;
  // while the arrNum length is greater than one
  while (arrNum.length > 1) {
    // iterate over the arrNum multiplying the num by next num
    for (let i = 0; i < arrNum.length; i++) {
      sum *= +arrNum[i];
    }
    // increment count
    count++;
    // set new arrNum to sum
    arrNum = sum.toString().split('');
    // reset sum
    sum = 1;
  }
  // return count
  return count;
}

function persistence(num, count = 0) {
  let arrNum = num.toString().split('');

  return arrNum.length === 1
    ? count
    : persistence(
        arrNum.reduce((total, num) => total * num),
        ++count
      );
}

console.log(persistence(39), 3);
console.log(persistence(4), 0);
console.log(persistence(25), 2);
console.log(persistence(999), 4);
