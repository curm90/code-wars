// https://www.codewars.com/kata/57f604a21bd4fe771b00009c/train/javascript

function meeting(x) {
  return x.indexOf('O') > -1 ? x.indexOf('O') : 'None available!';
}

console.log(meeting(['X', 'O', 'X']), 1);
console.log(meeting(['O', 'X', 'X', 'X', 'X']), 0);
console.log(meeting(['X', 'X', 'X', 'X', 'X']), 'None available!');
