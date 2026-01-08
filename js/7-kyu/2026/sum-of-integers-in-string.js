// https://www.codewars.com/kata/598f76a44f613e0e0b000026/train/javascript

function sumOfIntegersInString(s) {
  if (s.length === 0) return 0;
  // place to store the sum
  let sum = 0;
  // place to store the current sequence of numbers
  let currentSequence = '';
  // iterate over array string
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    // if the current item is a number
    if (!isNaN(element)) {
      // add that number to the current sequence
      currentSequence += element;
      // look ahead to the next item
      const nextElement = s[i + 1];
      // if the next item is not a number
      if (isNaN(nextElement)) {
        // add the current sequence to the sum
        sum += Number(currentSequence);
        // reset the current sequence
        currentSequence = '';
      }
    }
  }

  // return the sum
  return sum;
}

console.log(sumOfIntegersInString('12.4'), 16);
console.log(sumOfIntegersInString('h3ll0w0rld'), 3);
console.log(sumOfIntegersInString('2 + 3 = '), 5);
console.log(
  sumOfIntegersInString('Our company made approximately 1 million in gross revenue last quarter.'),
  1
);
console.log(sumOfIntegersInString('The Great Depression lasted from 1929 to 1939.'), 3868);
console.log(sumOfIntegersInString('Dogs are our best friends.'), 0);
console.log(sumOfIntegersInString('C4t5 are 4m4z1ng.'), 18);
console.log(
  sumOfIntegersInString('The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog'),
  3635
);
