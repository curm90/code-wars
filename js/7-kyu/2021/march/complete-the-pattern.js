// https://www.codewars.com/kata/5572f7c346eb58ae9c000047/train/javascript

function pattern(n) {
  // if n is one return the string 1
  if (n == 1) return n.toString();

  // place to store the output
  let output = '';
  // place to store a counter
  let counter = 1;
  // iterate while the counter is less than n
  while (counter <= n) {
    // if we are at the end
    if (counter == n) {
      // add the number the output with no new line
      output += counter.toString().repeat(counter);
      // increment counter
      counter++;
      // else
    } else {
      // add the number the output with new line
      output += counter.toString().repeat(counter) + '\n';
      // increment counter
      counter++;
    }
  }

  // return output
  return output;
}

function pattern(n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    result.push(i.toString().repeat(i));
  }

  return result.join('\n');
}

function pattern(n) {
  if (n < 1) return '';
  if (n == 1) return '1';

  return pattern(n - 1) + '\n' + `${n}`.repeat(n);
}

console.log(pattern(1), '1');
console.log(pattern(2), '1\n22');
console.log(pattern(5), '1\n22\n333\n4444\n55555');
