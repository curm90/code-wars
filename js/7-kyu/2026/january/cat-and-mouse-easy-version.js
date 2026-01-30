// https://www.codewars.com/kata/57ee24e17b45eff6d6000164/train/javascript

function catMouse(x) {
  for (let i = 1; i < x.length; i++) {
    if (i <= 4 && x[i] === 'm') return 'Caught!';
  }

  return 'Escaped!';
}

function catMouse(x) {
  return x.length <= 5 ? 'Caught!' : 'Escaped!';
}

console.log(catMouse('C....m'), 'Escaped!');
console.log(catMouse('C..m'), 'Caught!');
console.log(catMouse('C.....m'), 'Escaped!');
console.log(catMouse('C...m'), 'Caught!');
