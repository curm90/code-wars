// https://www.codewars.com/kata/jaden-casing-strings

String.prototype.toJadenCase = function() {
  // a place to store the jadenCaseStr
  let jadenCase = '';
  //  place to store whether the next letter we encounter should be capitalized
  // always capitalize first letter of the string
  let capitalize = true;

  // iterate over each letter in the string
  for (let i = 0; i < this.length; i++) {
    const letter = this[i];
    // if the current letter is a space, next letter should be capitalized
    if (letter === ' ') {
      capitalize = true;
      jadenCase += ' ';
    } else {
      // else
      // append either the letter itself, or capitalize it
      if (capitalize) {
        jadenCase += letter.toUpperCase();
        capitalize = false;
      } else {
        jadenCase += letter.toLowerCase();
      }
    }
  }
  return jadenCase;
};

String.prototype.toJadenCase = function() {
  return this.split(' ')
    .map(word => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(' ');
};

var str = "How can mirrors be real if our eyes aren't real";
var jadenStr = str.toJadenCase();
console.log(jadenStr);
