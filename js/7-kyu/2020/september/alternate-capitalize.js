// https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript

function capitalize(s) {
  // place to store both strings
  let evenStr = '';
  let oddStr = '';
  // iterate over the string
  for (let i = 0; i < s.length; i++) {
    // if index mod 2 === 0
    if (i % 2 === 0) {
      // evenStr at index = that letter to uppercase
      evenStr += s[i].toUpperCase();
      // oddStr at index = that letter
      oddStr += s[i];
      // else - the reverse
    } else {
      // oddStr at index = that letter to uppercase
      oddStr += s[i].toUpperCase();
      // evenStr at index = that letter
      evenStr += s[i];
    }
  }
  // return resultArr
  return [evenStr, oddStr];
}

console.log(capitalize('abcdef'), ['AbCdEf', 'aBcDeF']);
console.log(capitalize('codewars'), ['CoDeWaRs', 'cOdEwArS']);
console.log(capitalize('abracadabra'), [
  'AbRaCaDaBrA',
  'aBrAcAdAbRa',
]);
console.log(capitalize('codewarriors'), [
  'CoDeWaRrIoRs',
  'cOdEwArRiOrS',
]);
