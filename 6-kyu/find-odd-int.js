// https://www.codewars.com/kata/find-the-odd-int/train/javascript

function findOdd(array) {
  const counts = {};

  for (let i = 0; i < array.length; i++) {
    const number = array[i];

    if (!counts[number]) {
      counts[number] = 1;
    } else {
      counts[number]++;
    }
  }

  for (const number in counts) {
    const count = counts[number];

    if (count % 2 !== 0) {
      return Number(number);
    }
  }
}

function findOdd(array) {
  const counts = array.reduce((counts, number) => {
    if (!counts[number]) {
      counts[number] = 1;
    } else {
      counts[number]++;
    }
    return counts;
  }, {});

  for (const number in counts) {
    const count = counts[number];

    if (count % 2 !== 0) {
      return Number(number);
    }
  }
}

function findOdd(array) {
  const counts = array.reduce((counts, number) => {
    counts[number] = counts[number] || 0;
    counts[number]++;
    return counts;
  }, {});

  const numbers = Object.keys(counts);
  const oddIndex = numbers.findIndex(number => {
    const count = counts[number];
    return count % 2 !== 0;
  });
  return +numbers[oddIndex];
}

console.log(
  findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5)
);
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], -1));
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], 5));
console.log(findOdd([10], 10));
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], 10));
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10], 1));
