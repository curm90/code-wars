// https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/train/javascript

function sumOfMinimums(arr) {
  let minSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let min = Math.min(...arr[i]);
    minSum += min;
  }
  return minSum;
}

function sumOfMinimums(arr) {
  let minSum = 0;
  for (let i = 0; i < arr.length; i++) {
    minSum += Math.min(...arr[i]);
  }
  return minSum;
}

function sumOfMinimums(arr) {
  return arr.reduce((acc, curr) => acc + Math.min(...curr), 0);
}

console.log(
  sumOfMinimums(
    [
      [1, 2, 3, 4, 5],
      [5, 6, 7, 8, 9],
      [20, 21, 34, 56, 100],
    ],
    26
  )
);
