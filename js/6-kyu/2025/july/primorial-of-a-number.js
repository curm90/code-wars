// https://www.codewars.com/kata/5a99a03e4a6b34bb3c000124/train/javascript

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function numPrimorial(n) {
  let count = 0;
  let num = 1;
  let primorial = 1;

  while (count < n) {
    num++;
    if (isPrime(num)) {
      primorial *= num;
      count++;
    }
  }
  return primorial;
}

console.log(numPrimorial(3), 30);
console.log(numPrimorial(4), 210);
console.log(numPrimorial(5), 2310);
console.log(numPrimorial(8), 9699690);
console.log(numPrimorial(9), 223092870);
