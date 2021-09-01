// https://www.codewars.com/kata/directions-reduction/train/javascript

const opposites = {
  NORTH: 'SOUTH',
  SOUTH: 'NORTH',
  WEST: 'EAST',
  EAST: 'WEST'
};

function dirReduc(arr) {
  const stack = [];

  arr.forEach(dir => {
    if (stack.length) {
      const prevDir = stack.pop();
      if (prevDir !== opposites[dir]) {
        stack.push(prevDir);
        stack.push(dir);
      }
    } else {
      stack.push(dir);
    }
  });

  return stack;
}

console.log(
  dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']),
  ['WEST']
);
console.log(dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST']), [
  'NORTH',
  'WEST',
  'SOUTH',
  'EAST'
]);
console.log(dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST']), []);
