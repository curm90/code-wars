// https://www.codewars.com/kata/5800580f8f7ddaea13000025/train/javascript

// recursive
function sumTheTreeValues(root) {
  if (root == null) {
    return 0;
  }

  return root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right);
}

// iterative
function sumTheTreeValues(root) {
  if (root === null) return 0;

  let sum = 0;
  let stack = [root];

  while (stack.length > 0) {
    let node = stack.pop();

    sum += node.value;

    if (node.left !== null) {
      stack.push(node.left);
    }

    if (node.right !== null) {
      stack.push(node.right);
    }
  }

  return sum;
}

var simpleNode = {
  value: 10,
  left: { value: 1, left: null, right: null },
  right: { value: 2, left: null, right: null },
};
console.log(sumTheTreeValues(simpleNode), 13);

var unbalancedNode = {
  value: 11,
  left: { value: 0, left: null, right: null },
  right: { value: 0, left: null, right: { value: 1, left: null, right: null } },
};
console.log(sumTheTreeValues(unbalancedNode), 12);
