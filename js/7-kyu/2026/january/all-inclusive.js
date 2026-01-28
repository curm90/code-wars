// https://www.codewars.com/kata/5700c9acc1555755be00027e/train/javascript

function containAllRots(str, arr) {
  // if no str input return true
  if (!str) return true;

  // place to store a counter
  let i = 0;
  const strArr = str.split('');

  // iterate while i is less than str.length
  while (i < str.length) {
    // if current rotation of str is not in the arr
    if (!arr.includes(strArr.join(''))) {
      // return false
      return false;
    }

    // else we need to rotate the string
    const firstLetter = strArr.splice(0, 1)[0];
    strArr.push(firstLetter);
    // increment i
    i += 1;
  }

  // after all iterations if we didnt return it means all rotations were in the array and we can return true
  return true;
}

function containAllRots(str, arr) {
  if (!str) return true;

  const arrSet = new Set(arr);

  for (let i = 0; i < str.length; i++) {
    const rotation = str.slice(i) + str.slice(0, i);
    if (!arrSet.has(rotation)) {
      return false;
    }
  }

  return true;
}

console.log(containAllRots('', []), true);
console.log(containAllRots('', ['bsjq', 'qbsj']), true);
console.log(containAllRots('bsjq', ['bsjq', 'qbsj', 'sjqb', 'twZNsslC', 'jqbs']), true);
console.log(
  containAllRots('XjYABhR', [
    'TzYxlgfnhf',
    'yqVAuoLjMLy',
    'BhRXjYA',
    'YABhRXj',
    'hRXjYAB',
    'jYABhRX',
    'XjYABhR',
    'ABhRXjY',
  ]),
  false,
);
