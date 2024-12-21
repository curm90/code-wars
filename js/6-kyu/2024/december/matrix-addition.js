// https://www.codewars.com/kata/526233aefd4764272800036f/train/javascript

function matrixAddition(a, b) {
  const result = [];

  for (let i = 0; i < a.length; i++) {
    const aArr = a[i];
    const bArr = b[i];
    const sum = [];

    for (let j = 0; j < aArr.length; j++) {
      const aNum = aArr[j];
      const bNum = bArr[j];
      sum.push(aNum + bNum);
    }

    result.push(sum);
  }

  return result;
}

function matrixAddition(a, b) {
  const result = [];

  a.forEach((row, i) => {
    const sumRow = [];
    row.forEach((val, j) => {
      sumRow.push(val + b[i][j]);
    });
    result.push(sumRow);
  });

  return result;
}

function matrixAddition(a, b) {
  return a
    .flatMap((row, i) => row.map((val, j) => val + b[i][j]))
    .reduce((acc, val, idx) => {
      const rowIdx = Math.floor(idx / a[0].length);
      if (!acc[rowIdx]) acc[rowIdx] = [];
      acc[rowIdx].push(val);
      return acc;
    }, []);
}

console.log(
  matrixAddition(
    [
      [1, 2],
      [1, 2],
    ],
    //    +
    [
      [2, 3],
      [2, 3],
    ]
  ),
  //    =
  [
    [3, 5],
    [3, 5],
  ]
);

console.log(
  matrixAddition(
    [[1]],
    //   +
    [[2]]
  ),
  //   =
  [[3]]
);

console.log(
  matrixAddition(
    [
      [1, 2, 3],
      [3, 2, 1],
      [1, 1, 1],
    ],
    //      +
    [
      [2, 2, 1],
      [3, 2, 3],
      [1, 1, 3],
    ]
  ),
  //      =
  [
    [3, 4, 4],
    [6, 4, 4],
    [2, 2, 4],
  ]
);
