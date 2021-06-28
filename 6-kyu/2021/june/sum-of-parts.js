// https://www.codewars.com/kata/5ce399e0047a45001c853c2b/train/javascript

function partsSums(ls) {
  const resultArr = [];
  let sum = 0;

  for (const num of ls) {
    sum += num;
  }

  resultArr.push(sum);

  for (const num of ls) {
    sum -= num;
    resultArr.push(sum);
  }

  return resultArr;
}

function partsSums(ls) {
  const resultArr = [];
  resultArr[ls.length] = 0;

  for (let i = ls.length - 1; i >= 0; i--) {
    resultArr[i] = ls[i] + resultArr[i + 1];
  }

  return resultArr;
}

console.log(partsSums([]), [0]);
console.log(partsSums([0, 1, 3, 6, 10]), [20, 20, 19, 16, 10, 0]);
console.log(partsSums([1, 2, 3, 4, 5, 6]), [21, 20, 18, 15, 11, 6, 0]);
