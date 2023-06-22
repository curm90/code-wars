// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

function moveZeros(arr) {
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    const item = arr[i];

    if (item === 0) {
      arr.splice(i, 1);
      arr.push(0);
    }
  }

  return arr;
}

function moveZeros(arr) {
  const result = [];

  for (let i = arr.length - 1; i >= 0; i -= 1) {
    const item = arr[i];

    if (item === 0) {
      result.push(0);
    } else {
      result.unshift(item);
    }
  }

  return result;
}

function moveZeros(arr) {
  return [...arr].sort((a, b) => (b === 0 ? -1 : 1));
}
