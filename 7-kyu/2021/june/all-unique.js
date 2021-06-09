// https://www.codewars.com/kata/553e8b195b853c6db4000048/train/javascript

function hasUniqueChars(str) {
  // build up and object lookup with values set to number of times the element has been seen
  const lookup = {};

  for (const el of str) {
    lookup[el] = lookup[el] + 1 || 1;
  }

  const values = Object.values(lookup);
  // iterate over the values
  return values.every((num) => num == 1);
}

function hasUniqueChars(str) {
  const noDupes = new Set(str);

  return noDupes.size == str.length;
}

function hasUniqueChars(str) {
  return str.split('').every((el, i, arr) => {
    return arr.indexOf(el) == i;
  });
}

console.log(hasUniqueChars('++-'), false); // because there are two '+'
console.log(hasUniqueChars('  nAa'), false); // because there are two spaces ' '
console.log(hasUniqueChars('abcdef'), true);
console.log(hasUniqueChars('aA'), true); // case - sensitivity
