// https://www.codewars.com/kata/522551eee9abb932420004a0/train/javascript

function nthFibo(n) {
  if (n <= 1) return 0;

  let a = 0,
    b = 1;

  for (let i = 2; i < n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }

  return b;
}

function nthFibo(n) {
  if (n <= 1) return 0;
  if (n === 2) return 1;

  return nthFibo(n - 1) + nthFibo(n - 2);
}

console.log(nthFibo(0), 0);
console.log(nthFibo(1), 0);
console.log(nthFibo(2), 1);
console.log(nthFibo(3), 1);
console.log(nthFibo(4), 2);
