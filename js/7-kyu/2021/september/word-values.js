// https://www.codewars.com/kata/598d91785d4ce3ec4f000018/train/javascript

function wordValue(a) {
  // place to store the sum
  let sum = 0;
  // place to store the array of sums
  const result = [];
  // iterate over the input array
  for (let i = 0; i < a.length; i++) {
    // iterate over each string
    const currentStr = a[i];
    for (let j = 0; j < a[i].length; j++) {
      const currentLetter = currentStr[j];
      // get the alphabetical value of the current letter;
      const letterVal = currentLetter.charCodeAt() - 96;
      // add each index + 1 to the sum
      if (letterVal > 0) {
        sum += letterVal;
      }
    }
    // multiply sum by index + 1 and push it to the array of sums
    result.push(sum * (i + 1));
    sum = 0;
    // set sum to 0
  }

  // return array of sums
  return result;
}

console.log(wordValue(['abc', 'xyz']), [6, 150]);
console.log(wordValue(['codewars', 'abc', 'xyz']), [88, 12, 225]);
console.log(wordValue(['abc abc', 'abc abc', 'abc', 'abc']), [12, 24, 18, 24]);
