// https://www.codewars.com/kata/53d2697b7152a5e13d000b82/train/javascript

function copyList(l) {
  return [...l];
}

function copyList(l) {
  return l.slice();
}

function copyList(l) {
  return [].concat(l);
}

function copyList(l) {
  return Array.isArray(l) ? [...l] : 'Copy Unsuccessful';
}

t = [1, 2, 3, 4];
tCopy = copyList(t);

console.log(t, tCopy, 'Copy unsuccessful');
t[1] += 5;
console.log(t, tCopy, 'The array was not properly copied');
