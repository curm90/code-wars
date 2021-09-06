// https://www.codewars.com/kata/5a58d889880385c2f40000aa/train/javascript

function automorphic(n) {
  const num = Math.pow(n, 2);
  const isAutomorphic = String(num).endsWith(String(n));

  return isAutomorphic ? 'Automorphic' : 'Not!!';
}

function automorphic(n) {
  return String(Math.pow(n, 2)).endsWith(String(n)) ? 'Automorphic' : 'Not!!';
}

console.log(automorphic(1), 'Automorphic');
console.log(automorphic(3), 'Not!!');
console.log(automorphic(6), 'Automorphic');
console.log(automorphic(9), 'Not!!');
console.log(automorphic(25), 'Automorphic');
console.log(automorphic(53), 'Not!!');
console.log(automorphic(76), 'Automorphic');
console.log(automorphic(95), 'Not!!');
console.log(automorphic(625), 'Automorphic');
console.log(automorphic(225), 'Not!!');
