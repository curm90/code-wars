// https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript

function deleteNth(arr, n) {
  // place to store the new array
  const newArr = [];
  // place to store count of numbers
  const counts = {};
  // iterate over input arr
  for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i];
    // if num is in object
    if (counts[currentNum]) {
      // increment its count
      counts[currentNum]++;
      // else
    } else {
      // set that num to be 1
      counts[currentNum] = 1;
    }
    // if count at current num in object is <= n
    if (counts[currentNum] <= n) {
      // add it to the array
      newArr.push(currentNum);
    }
  }
  // return newArr
  return newArr;
}

function deleteNth(arr, n) {
  const newArr = [];
  const counts = {};

  for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i];
    counts[currentNum] = counts[currentNum] + 1 || 1;

    if (counts[currentNum] <= n) {
      newArr.push(currentNum);
    }
  }
  return newArr;
}

function deleteNth(arr, n) {
  const newArr = [];
  const counts = {};

  arr.forEach((num) => {
    counts[num] = counts[num] + 1 || 1;

    if (counts[num] <= n) {
      newArr.push(num);
    }
  });
  return newArr;
}

function deleteNth(arr, n) {
  const counts = {};

  return arr.filter((num) => {
    counts[num] = counts[num] + 1 || 1;

    if (counts[num] <= n) {
      return counts[num];
    }
  });
}

function deleteNth(arr, n) {
  const counts = {};

  return arr.filter((num) => {
    counts[num] = counts[num] + 1 || 1;

    return counts[num] <= n;
  });
}

console.log(deleteNth([20, 37, 20, 21], 1), [20, 37, 21]);
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3), [
  1,
  1,
  3,
  3,
  7,
  2,
  2,
  2,
]);
