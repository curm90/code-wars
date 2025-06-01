// https://www.codewars.com/kata/528d9adf0e03778b9e00067e/train/javascript

function mineLocation(field) {
  for (let i = 0; i < field.length; i++) {
    const subArr = field[i];

    for (let j = 0; j < subArr.length; j++) {
      const element = subArr[j];

      if (element === 1) {
        return [i, j];
      }
    }
  }
}

function mineLocation(field) {
  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[i].length; j++) {
      if (field[i][j] === 1) {
        return [i, j];
      }
    }
  }
}

console.log(
  mineLocation(
    [
      [1, 0],
      [0, 0],
    ],
    [0, 0]
  )
);
console.log(
  mineLocation(
    [
      [1, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ],
    [0, 0]
  )
);
console.log(
  mineLocation(
    [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
    ],
    [2, 2]
  )
);
