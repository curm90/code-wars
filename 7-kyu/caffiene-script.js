// https://www.codewars.com/kata/5434283682b0fdb0420000e6/train/javascript

function caffeineBuzz(n) {
  let output = '';

  if (n % 3 == 0) {
    if (n % 4 == 0) {
      output += 'Coffee';
    } else {
      output += 'Java';
    }
    if (n % 2 == 0) {
      output += 'Script';
    }
  } else {
    output += 'mocha_missing!';
  }

  return output;
}

function caffeineBuzz(n) {
  if (n % 12 == 0) return 'CoffeeScript';
  if (n % 6 == 0) return 'JavaScript';
  if (n % 3 == 0) return 'Java';
  return 'mocha_missing!';
}

console.log(caffeineBuzz(6), 'JavaScript');
console.log(caffeineBuzz(1), 'mocha_missing!');
console.log(caffeineBuzz(3), 'Java');
console.log(caffeineBuzz(12), 'CoffeeScript');
