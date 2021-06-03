// https://www.codewars.com/kata/56f3a1e899b386da78000732/train/javascript

function partlist(arr) {
  // place to store the result
  const result = [];

  // iterate over the array
  for (let i = 1; i < arr.length; i++) {
    // place to store the sub arrays
    let subArr = [];
    // push both slices to sub array
    // slice one - from start of the array up to current index
    subArr.push(arr.slice(0, i).join(' '));
    // slice two - from current index to end of the array
    subArr.push(arr.slice(i).join(' '));
    // push all suba arrays to result array
    result.push(subArr);
  }

  // return result
  return result;
}

function partlist(arr) {
  return arr
    .map((_, i) => [
      arr.slice(0, i).join(' '),
      arr.slice(i).join(' '),
    ])
    .slice(1);
}

console.log(partlist(['I', 'wish', 'I', "hadn't", 'come']), [
  ['I', "wish I hadn't come"],
  ['I wish', "I hadn't come"],
  ['I wish I', "hadn't come"],
  ["I wish I hadn't", 'come'],
]);
console.log(partlist(['cdIw', 'tzIy', 'xDu', 'rThG']), [
  ['cdIw', 'tzIy xDu rThG'],
  ['cdIw tzIy', 'xDu rThG'],
  ['cdIw tzIy xDu', 'rThG'],
]);
console.log(partlist(['vJQ', 'anj', 'mQDq', 'sOZ']), [
  ['vJQ', 'anj mQDq sOZ'],
  ['vJQ anj', 'mQDq sOZ'],
  ['vJQ anj mQDq', 'sOZ'],
]);
