// https://www.codewars.com/kata/51edd51599a189fe7f000015/train/javascript

function solution(firstArray, secondArray) {
  let sum = 0;

  for (let i = 0; i < firstArray.length; i++) {
    sum += Math.pow(firstArray[i] - secondArray[i], 2);
  }

  return sum / firstArray.length;
}

function solution(firstArray, secondArray) {
  let sum = 0;

  firstArray.forEach((num, i) => {
    sum += Math.pow(firstArray[i] - secondArray[i], 2);
  });

  return sum / firstArray.length;
}

function solution(firstArray, secondArray) {
  return (
    firstArray.reduce((sum, num, i) => {
      return sum + Math.pow(num - secondArray[i], 2);
    }, 0) / firstArray.length
  );
}

console.log(solution([1, 2, 3], [4, 5, 6]), 9);
console.log(solution([10, 20, 10, 2], [10, 25, 5, -2]), 16.5);
console.log(solution([0, -1], [-1, 0]), 1);
