// https://www.codewars.com/kata/557dd2a061f099504a000088/train/javascript

function listToArray(list) {
  const arr = [];

  let node = list;

  while (node) {
    arr.push(node.value);
    node = node.next;
  }

  return arr;
}

function listToArray(list) {
  const arr = [];

  for (let node = list; node !== null; node = node.next) {
    arr.push(node.value);
  }

  return arr;
}

function listToArray(list) {
  return !list ? [] : [list.value].concat(listToArray(list.next));
}

function listToArray(list) {
  return !list ? [] : [list.value, ...listToArray(list.next)];
}

const list1 = { value: 1, next: { value: 2, next: { value: 3, next: null } } };
const list2 = { value: 'foo', next: { value: 'bar', next: null } };

console.log(listToArray(list1), [1, 2, 3]);
console.log(listToArray(list2), ['foo', 'bar']);
