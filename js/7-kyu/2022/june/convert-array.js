// https://www.codewars.com/kata/5783d8f3202c0e486c001d23/train/javascript

function toNumberArray(arr) {
  let i = 0;

  const resultArr = [];

  while (i < arr.length) {
    resultArr.push(Number(arr[i]));
    i++;
  }

  return resultArr;
}

function toNumberArray(arr) {
  const resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    const currentItem = arr[i];

    resultArr.push(+currentItem);
  }

  return resultArr;
}

function toNumberArray(arr) {
  const resultArr = [];

  for (const currentItem of arr) {
    resultArr.push(+currentItem);
  }

  return resultArr;
}

function toNumberArray(arr) {
  return arr.map((item) => +item);
}

const toNumberArray = (arr) => arr.map((item) => +item);

const toNumberArray = (arr) => arr.map(Number);

console.log(toNumberArray(['1.1', '2.2', '3.3']), [1.1, 2.2, 3.3]);
