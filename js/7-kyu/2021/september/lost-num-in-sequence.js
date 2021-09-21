// https://www.codewars.com/kata/595aa94353e43a8746000120/train/javascript

function findDeletedNumber(arr, mixArr) {
  for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i];

    if (mixArr.indexOf(currentNum) < 0) {
      return currentNum;
    }
  }

  return 0;
}

function findDeletedNumber(arr, mixArr) {
  return arr.filter((num) => mixArr.indexOf(num) < 0).join('') || 0;
}

function findDeletedNumber(arr, mixArr) {
  return arr.filter((num) => mixArr.indexOf(num) < 0)[0] || 0;
}

function findDeletedNumber(arr, mixArr) {
  return arr.find((num) => !mixArr.includes(num)) || 0;
}

console.log(findDeletedNumber([1, 2, 3, 4, 5], [3, 4, 1, 5]), 2, 'Deletion');
console.log(
  findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 9, 7, 4, 6, 2, 3, 8]),
  5,
  'Deletion'
);
console.log(
  findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [5, 7, 6, 9, 4, 8, 1, 2, 3]),
  0,
  'No deletion'
);
