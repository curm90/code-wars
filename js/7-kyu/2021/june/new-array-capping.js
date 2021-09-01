// https://www.codewars.com/kata/5356ad2cbb858025d800111d/train/javascript

function capMe(names) {
  // place to store the result array
  const result = [];
  // iterate over the array
  for (let i = 0; i < names.length; i++) {
    // capitalize the first letter
    let first = names[i].slice(0, 1).toUpperCase();
    // set the rest of the letters to lower case
    let rest = names[i].slice(1).toLowerCase();

    // add them to the result array
    result.push(first + rest);
  }

  // return the result array
  return result;
}

function capMe(names) {
  return names.map((name) => {
    return [name[0].toUpperCase(), name.slice(1).toLowerCase()].join('');
  });
}

function capMe(names) {
  return names.map((name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  });
}

function capMe(names) {
  return names.map((name) => {
    return name[0].toUpperCase() + name.slice(1).toLowerCase();
  });
}

console.log(capMe(['jo', 'nelson', 'jurie']), ['Jo', 'Nelson', 'Jurie']);
console.log(capMe(['KARLY', 'DANIEL', 'KELSEY']), [
  'Karly',
  'Daniel',
  'Kelsey',
]);
