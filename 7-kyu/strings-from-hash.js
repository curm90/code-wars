// https://www.codewars.com/kata/51c7d8268a35b6b8b40002f2/train/javascript

function solution(pairs) {
  const result = [];

  for (const pair in pairs) {
    result.push(`${pair} = ${pairs[pair]}`);
  }
  return result.join(',');
}

function solution(pairs) {
  return Object.keys(pairs)
    .map((pair) => {
      return `${pair} = ${pairs[pair]}`;
    })
    .join(',');
}

function solution(pairs) {
  return Object.entries(pairs)
    .map(([key, value]) => `${key} = ${value}`)
    .join(',');
}

const solution = (pairs) =>
  Object.entries(pairs)
    .map(([key, value]) => `${key} = ${value}`)
    .join(',');

console.log(solution({ a: 1, b: '2' }), 'a = 1,b = 2');
