// https://www.codewars.com/kata/first-non-repeating-character

function firstNonRepeatingLetter(s) {
  if (!s) return '';
  // place the store the count of each letter
  const counts = Array.prototype.reduce.call(
    s,
    (counts, letter) => {
      letter = letter.toLowerCase();
      // iterate over the string
      counts[letter] = counts[letter] || 0;
      // increment count of current letter
      counts[letter]++;
      return counts;
    },
    {}
  );
  // iterate over the string
  return (
    Array.prototype.find.call(s, (letter) => {
      // if the count of the current letter is 1 - return that letter
      return counts[letter.toLowerCase()] === 1;
    }) || ''
  );
}

console.log(firstNonRepeatingLetter('a'), 'a');
console.log(firstNonRepeatingLetter('stress'), 't');
console.log(firstNonRepeatingLetter('moonmen'), 'e');
