// https://www.codewars.com/kata/5500d54c2ebe0a8e8a0003fd/train/javascript

function mygcd(x, y) {
  if (y === 0) {
    return x;
  } else {
    return mygcd(y, x % y);
  }
}

function mygcd(x, y) {
  return y ? mygcd(y, x % y) : x;
}

console.log(mygcd(30, 12), 6);
console.log(mygcd(8, 9), 1);
console.log(mygcd(1, 1), 1);
