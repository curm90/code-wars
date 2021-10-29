// https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1/train/javascript

function capitalize(s, arr) {
  const strArr = s.split('');

  for (let i = 0; i < arr.length; i++) {
    if (strArr[arr[i]]) {
      strArr[arr[i]] = strArr[arr[i]].toUpperCase();
    }
  }

  return strArr.join('');
}

function capitalize(s, arr) {
  return [...s]
    .map((letter, i) => {
      if (arr.includes(i)) {
        return letter.toUpperCase();
      }
      return letter;
    })
    .join('');
}

function capitalize(s, arr) {
  return [...s]
    .map((letter, i) => (arr.includes(i) ? letter.toUpperCase() : letter))
    .join('');
}

console.log(capitalize('abcdef', [1, 2, 5]), 'aBCdeF');
console.log(capitalize('abcdef', [1, 2, 5, 100]), 'aBCdeF');
console.log(capitalize('codewars', [1, 3, 5, 50]), 'cOdEwArs');
console.log(capitalize('abracadabra', [2, 6, 9, 10]), 'abRacaDabRA');
console.log(capitalize('codewarriors', [5]), 'codewArriors');
console.log(capitalize('indexinglessons', [0]), 'Indexinglessons');
