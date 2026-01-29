// https://www.codewars.com/kata/5831c204a31721e2ae000294/train/javascript

function swap(string) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  return string
    .split('')
    .map((char) => (vowels.includes(char.toLowerCase()) ? char.toUpperCase() : char))
    .join('');
}

function swap(string) {
  const vowels = 'aeiou';
  let result = '';

  for (const char of string) {
    result += vowels.includes(char.toLowerCase()) ? char.toUpperCase() : char;
  }

  return result;
}

console.log(swap(''), '');
console.log(swap('   @@@'), '   @@@');
console.log(swap('HelloWorld!'), 'HEllOWOrld!');
console.log(swap('Sunday'), 'SUndAy');
console.log(swap('Codewars'), 'COdEwArs');
console.log(swap('Monday'), 'MOndAy');
console.log(swap('Friday'), 'FrIdAy');
console.log(swap('abracadabra'), 'AbrAcAdAbrA');
console.log(swap('AbrAcAdAbrA'), 'AbrAcAdAbrA');
console.log(swap('ABRACADABRA'), 'ABRACADABRA');
console.log(swap('aBRaCaDaBRa'), 'ABRACADABRA');
