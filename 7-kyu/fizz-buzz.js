// https://www.codewars.com/kata/5300901726d12b80e8000498/train/javascript

function fizzbuzz(n) {
  // place to store the array
  const resultArr = [];
  // place to store the counter
  let counter = 1;
  // iterate while counter is less than n
  while (counter <= n) {
    // if n mod 3 and 5 add FizzBuzz to array
    if (counter % 3 === 0 && counter % 5 === 0) {
      resultArr.push('FizzBuzz');
      counter++;
      // elif n mod 5 add Buzz to array
    } else if (counter % 5 === 0) {
      resultArr.push('Buzz');
      counter++;
      // elif n mod 3 add Fizz to array
    } else if (counter % 3 === 0) {
      resultArr.push('Fizz');
      counter++;
      // else add the current n
    } else {
      resultArr.push(counter);
      counter++;
    }
  }
  // return array
  return resultArr;
}

function fizzbuzz(n) {
  const resultArr = [];

  for (let i = 1; i <= n; i++) {
    let output = '';

    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';

    resultArr.push(output || i);
  }

  return resultArr;
}

console.log(fizzbuzz(3), [1, 2, 'Fizz']);
console.log(fizzbuzz(5), [1, 2, 'Fizz', 4, 'Buzz']);
