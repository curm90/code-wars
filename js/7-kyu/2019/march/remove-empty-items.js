// https://www.codewars.com/kata/remove-empty-items-of-array/train/javascript

function clean(arr) {
  const filteredArr = arr.filter(function(item) {
    return item !== ','
  })
  return filteredArr
}

function clean(arr) {
  let result = []

  for (let i = 0; i < arr.length; i++) {
    if (i in arr) {
      result.push(arr[i])
    }
  }
  return result
}

function clean(arr) {
  return arr.filter(item => true)
}

function clean(arr) {
  const result = [];
  arr.forEach(item => result.push(item));
  return result;
}

const clean = arr => arr.filter(_ => true)

console.log(clean([]), [], 'Empty Array');
console.log(clean(Array(500000)), [], '5000000 empty items');
console.log(clean([1, 2]), [1, 2], 'No empty items here');
console.log(clean([1, 2, , , 3, 4, ]), [1, 2, 3, 4], 'Two Empty Items');
console.log(clean([1, 2, [], , 3]), [1, 2, [], 3], 'Sub-Arrays');