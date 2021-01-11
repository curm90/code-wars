// https://www.codewars.com/kata/515dfd2f1db09667a0000003/train/javascript

function keysAndValues(data) {
  const keys = Object.keys(data);
  const values = Object.values(data);

  return [keys, values];
}

function keysAndValues(data) {
  return [Object.keys(data), Object.values(data)];
}

function keysAndValues(data) {
  const keys = [];
  const values = [];

  for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
      keys.push(key);
      values.push(data[key]);
    }
  }

  return [keys, values];
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 }), [
  ['a', 'b', 'c'],
  [1, 2, 3],
]);
