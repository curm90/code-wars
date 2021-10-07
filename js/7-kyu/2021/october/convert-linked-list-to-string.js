// https://www.codewars.com/kata/582c297e56373f0426000098/train/javascript

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function stringify(list) {
  if (!list) return 'null';

  let result = '';
  let node = list;

  while (node) {
    if (node.next == null) {
      return (result += `${node.data} -> null`);
    }

    result += `${node.data} -> `;
    node = node.next;
  }

  return result;
}

function stringify(list) {
  let result = '';

  while (list) {
    result += `${list.data} -> `;
    list = list.next;
  }

  return `${result} null`;
}

function stringify(list) {
  return !list ? 'null' : `${list.data} -> ${stringify(list.next)}`;
}

console.log(
  stringify(new Node(1, new Node(2, new Node(3)))),
  '1 -> 2 -> 3 -> null'
);
console.log(
  stringify(new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))),
  '0 -> 1 -> 4 -> 9 -> 16 -> null'
);
console.log(stringify(null), 'null');
