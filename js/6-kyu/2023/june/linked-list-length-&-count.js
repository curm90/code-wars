// https://www.codewars.com/kata/55beec7dd347078289000021/train/javascript

function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  let length = 0;
  let node = head;

  while (node) {
    length += 1;
    node = node.next;
  }

  return length;
}

function count(head, data) {
  let count = 0;
  let node = head;

  while (node) {
    if (data === node.data) {
      count += 1;
    }
    node = node.next;
  }

  return count;
}

function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  return head ? 1 + length(head.next) : 0;
}

function count(head, data) {
  if (!head) return 0;
  return (head.data === data ? 1 : 0) + count(head.next, data);
}
