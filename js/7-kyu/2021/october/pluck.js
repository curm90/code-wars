// https://www.codewars.com/kata/530017aac7c0f49926000084/train/javascript

function pluck(objs, name) {
  // place to store the return arr
  const result = [];
  // iterate over the array of objs
  for (let i = 0; i < objs.length; i++) {
    const obj = objs[i];

    // push the current obj value at name param to result arr
    result.push(obj[name]);
  }

  // return result
  return result;
}

function pluck(objs, name) {
  return objs.map((obj) => obj[name]);
}

console.log(pluck([{ a: 1 }, { a: 2 }], 'a'), [1, 2]);
console.log(pluck([{ a: 1, b: 3 }, { a: 2 }], 'b'), [3, undefined]);
