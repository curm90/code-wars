// https://www.codewars.com/kata/5ac6932b2f317b96980000ca

function minValue(values) {
  let result = '';
  // sort values
  const sorted = values.sort((a, b) => a - b);
  // remove duplicates - turn into set
  const valuesSet = new Set(sorted);
  // iterate over set
  valuesSet.forEach((val) => {
    // add each num to result
    result += val;
  });
  // return num to Number
  return +result;
}

function minValue(values) {
  const noDupes = values.filter(
    (num, i, arr) => arr.indexOf(num) === i
  );

  return +noDupes.sort().join('');
}

console.log(minValue([1, 3, 1]), 13);
console.log(minValue([4, 7, 5, 7]), 457);
console.log(minValue([4, 8, 1, 4]), 148);
console.log(minValue([5, 7, 9, 5, 7]), 579);
console.log(minValue([6, 7, 8, 7, 6, 6]), 678);
console.log(minValue([5, 6, 9, 9, 7, 6, 4]), 45679);
console.log(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7]), 134679);
console.log(minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9]), 356789);
console.log(minValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1);
