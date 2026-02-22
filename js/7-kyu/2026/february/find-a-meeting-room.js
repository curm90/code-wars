// https://www.codewars.com/kata/57f604a21bd4fe771b00009c/train/javascript

function meeting(x) {
  return x.indexOf('O') > -1 ? x.indexOf('O') : 'None available!';
}

function meeting(x) {
  const index = x.indexOf('O');
  return index > -1 ? index : 'None Available!';
}

function meeting(x) {
  const index = x.findIndex((room) => room === 'O');
  return index !== -1 ? index : 'None available!';
}

function meeting(x) {
  for (let i = 0; i < x.length; i++) {
    if (x[i] === 'O') return i;
  }

  return 'None available!';
}

console.log(meeting(['X', 'O', 'X']), 1);
console.log(meeting(['O', 'X', 'X', 'X', 'X']), 0);
console.log(meeting(['X', 'X', 'X', 'X', 'X']), 'None available!');
