// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

function solution(str) {
  if (!str || str.length < 1) return [];

  if (str.length === 2) {
    if (str[1] === '_') {
      return [];
    }
  }

  let result = [];

  let strArr = str.split('');
  for (let i = 0; i < strArr.length - 1; i += 2) {
    if (strArr.length % 2 === 0) {
      result.push(strArr[i] + strArr[i + 1]);
    } else {
      strArr[strArr.length] = '_';
      result.push(strArr[i] + strArr[i + 1]);
    }
  }
  return result;
}

function solution(str) {
  if (str.length === 2) {
    if (str[1] === '_') {
      return [];
    }
  }

  let result = [];
  let strArr = str.split('');

  if (strArr.length % 2 !== 0) {
    strArr[strArr.length] = '_';
  }

  for (let i = 0; i < strArr.length - 1; i += 2) {
    result.push(strArr[i] + strArr[i + 1]);
  }
  return result;
}

function solution(str) {
  if (str.length === 2) {
    if (str[1] === '_') {
      return [];
    }
  }

  let i = 0;
  const result = [];

  if (str.length % 2 !== 0) {
    str = str + '_';
  }

  while (i < str.length) {
    result.push(str[i] + str[i + 1]);
    i += 2;
  }

  return result;
}

console.log(solution('abcdef'), ['ab', 'cd', 'ef']);
console.log(solution('abcdefg'), ['ab', 'cd', 'ef', 'g_']);
console.log(solution(''), []);
console.log(solution('G_'), []);
console.log(solution('fN'), ['fN']);
