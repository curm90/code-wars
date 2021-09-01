// https://www.codewars.com/kata/54fb963d3fe32351f2000102/train/javascript

function collatz(n) {
  const result = [n];

  while (n > 1) {
    if (n % 2 == 0) {
      n = n / 2;
    } else {
      n = n * 3 + 1;
    }
    result.push(n);
  }

  return result.length;
}

function collatz(n) {
  if (n == 1) return 1;

  return n % 2 == 0 ? 1 + collatz(n / 2) : 1 + collatz(n * 3 + 1);
}

console.log(collatz(20), 8);
console.log(collatz(15), 18);
