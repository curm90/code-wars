// https://www.codewars.com/kata/moving-zeros-to-the-end

var moveZeros = function (arr) {
  // place to store the movedzeros array
  const movedZeros = [];
  // place to store zero count
  let zeroCount = 0;

  // iterate over array
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    // if current value is not a 0
    if (value !== 0) {
      // push into movedzeros array
      movedZeros.push(value);
      // else
    } else {
      // increment zero count
      zeroCount++;
    }
  }
  // iterate up to zero count
  for (let i = 0; i < zeroCount; i++) {
    // push zero into array
    movedZeros.push(0);
  }
  // return the movedzeros array
  return movedZeros;
};

var moveZeros = function (arr) {
  let zeroCount = 0;
  const movedZeros = arr.reduce((movedZeros, value, index) => {
    if (value !== 0) {
      movedZeros[index - zeroCount] = value;
    } else {
      zeroCount++;
    }
    return movedZeros;
  }, new Array(arr.length).fill(0));

  return movedZeros;
};
