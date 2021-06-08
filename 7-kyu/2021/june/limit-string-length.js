// https://www.codewars.com/kata/5208fc3cb613bc725f000142

function solution(string, limit) {
  if (string.length < limit) return string;
  // place to store the result
  let result = '';
  // iterate over the string while limit > 0
  for (let i = 0; i < limit; i++) {
    // add current letter the result
    result += string[i];
  }
  // if result.length < string.length
  if (result.length < string.length) {
    result += '...';
  }

  // return result
  return result;
}

function solution(string, limit) {
  if (string.length > limit) {
    return string.slice(0, limit) + '...';
  }
  return string;
}

function solution(string, limit) {
  return string.length > limit ? string.slice(0, limit) + '...' : string;
}

function solution(string, limit) {
  return string.length > limit ? string.substr(0, limit) + '...' : string;
}

console.log(solution('Testing String', 3), 'Tes...');
console.log(solution('Testing String', 8), 'Testing...');
console.log(solution('Test', 8), 'Test');
