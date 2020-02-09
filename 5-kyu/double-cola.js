// https://www.codewars.com/kata/double-cola

// This fails for really large numbers
function whoIsNext(names, r) {
  // place to store the current drink/count
  let count = 1;
  // iterate up to r
  while (count < r) {
    // take first value in array and push it twice to the back of array
    // remove first value
    const currentPerson = names.shift();
    names.push(currentPerson, currentPerson);
    // increment count
    count++;
  }
  // return first person in array
  return names[0];
}

function whoIsNext(names, n) {
  while (n > names.length) {
    n -= names.length - 1;
    n += 0.5;
    n = Math.floor(n);
  }
  return names[n - 1];
}

names = ['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard'];
r = 10;
res = 'Penny';
console.log(whoIsNext(names, r), res);
