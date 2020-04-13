// https://www.codewars.com/kata/multiples-of-3-or-5

function solution(number) {
  // place to store sum
  let sum = 0;
  // iterate down from the number - 1
  for (let i = number - 1; i > 0; i--) {
    // if the number is divisible by 5
    if (i % 5 === 0) {
      // add to sum
      sum += i;
      // else if the number is divisible by 3
    } else if (i % 3 === 0) {
      // add to sum
      sum += i;
    }
  }
  // return sum
  return sum;
}

function solution(number) {
  // place to store sum
  let sum = 0;
  // iterate down from the number - 1
  for (let i = number - 1; i > 0; i--) {
    // if the number is divisible by 5
    if (i % 5 === 0 || i % 3 === 0) {
      // add to sum
      sum += i;
    }
  }
  // return sum
  return sum;
}

function solution(number) {
  return new Array(number - 1).fill(0).reduce((sum, z, i) => {
    const num = i + 1;
    if (num % 5 === 0 || num % 3 === 0) {
      return sum + num;
    }
    return sum;
  }, 0);
}

function solution(number) {
  return Array.from({ length: number }, (_, i) => i).reduce((sum, i) => {
    if (i % 5 === 0 || i % 3 === 0) {
      return sum + i;
    }
    return sum;
  }, 0);
}

function solution(number) {
  return Array.from({ length: number }, (_, i) => i).reduce(
    (sum, i) => (i % 5 === 0 || i % 3 === 0 ? sum + i : sum),
    0
  );
}

function solution(number) {
  let sum = 0;
  Array.from({ length: number }, (_, i) => {
    if (i % 5 === 0 || i % 3 === 0) {
      sum += i;
    }
  });
  return sum;
}
