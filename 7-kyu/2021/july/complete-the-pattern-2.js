// https://www.codewars.com/kata/55733d3ef7c43f8b0700007c/train/javascript

function pattern(n) {
  let counter = 0;
  let output = '';

  while (counter < n) {
    for (let i = n; i > counter; i--) {
      output += i;
    }

    if (counter != n - 1) {
      output += '\n';
    }

    counter++;
  }

  return output;
}

console.log(pattern(1), '1');
console.log(pattern(2), '21\n2');
console.log(pattern(5), '54321\n5432\n543\n54\n5');
