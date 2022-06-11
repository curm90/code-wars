// https://www.codewars.com/kata/5590961e6620c0825000008f/train/javascript

function swap(str) {
  return [...str]
    .map((letter) =>
      letter.toLowerCase() === letter
        ? letter.toUpperCase()
        : letter.toLowerCase()
    )
    .join('');
}

console.log(swap('HelloWorld'), 'hELLOwORLD');
console.log(swap('CodeWars'), 'cODEwARS');
console.log(swap('a B1'), 'A b1');
