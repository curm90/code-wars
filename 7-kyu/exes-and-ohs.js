// https://www.codewars.com/kata/exes-and-ohs/train/javascript

function XO(str) {
  let xCount = 0;
  let oCount = 0;

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];

    if (letter === 'x' || letter === 'X') {
      xCount++;
    } else if (letter === 'o' || letter === 'O') {
      oCount++;
    }
  }
  return xCount === oCount;
}

function XO(str) {
  let xCount = 0;
  let oCount = 0;

  const xRegexp = new RegExp('x', 'i');
  const oRegexp = new RegExp('o', 'i');

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];

    if (letter.match(xRegexp)) {
      xCount++;
    } else if (letter.match(oRegexp)) {
      oCount++;
    }
  }
  return xCount === oCount;
}

function XO(str) {
  const a = str.replace(/x/gi, '');
  const b = str.replace(/o/gi, '');
  return a.length === b.length;
}

console.log(XO('xo'), true);
console.log(XO('xxOo'), true);
console.log(XO('xxxm'), false);
console.log(XO('Oo'), false);
console.log(XO('ooom'), false);
