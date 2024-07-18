// https://www.codewars.com/kata/586d6cefbcc21eed7a001155/train/javascript

function longestRepetition(s) {
  if (!s) return ['', 0];
  // place to store the current length of the same letter
  let count = 0;
  // place to store a sub array of all results
  const results = [];
  // iterate over the string
  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    // check if the next letter is the same as the current letter
    if (s[i + 1] === letter) {
      // if  true, increment the count
      count++;
    } else {
      // else push the current letter and count to a subarry result
      results.push([letter, count + 1]);
      count = 0;
    }
  }

  // once we have the array of sub array results
  // a place to store the index of the highest number
  let highest = 0;
  // a place to store the current highest number
  let indexOfHighest = 0;
  // iterate over the subarray
  results.forEach((arr, i) => {
    // if the number in the subarry is > current highest
    if (arr[1] > highest) {
      // set the index to the current index
      highest = arr[1];
      indexOfHighest = i;
    }
  });

  // return an array of the letter with the longest repetition and the length of it
  return results[indexOfHighest];
}

console.log(longestRepetition('aaaabb'), ['a', 4]);
console.log(longestRepetition('bbbaaabaaaa'), ['a', 4]);
console.log(longestRepetition('bbbaaa'), ['b', 3]);
console.log(longestRepetition('cbdeuuu900'), ['u', 3]);
console.log(longestRepetition('abbbbb'), ['b', 5]);
console.log(longestRepetition('aabb'), ['a', 2]);
console.log(longestRepetition(''), ['', 0]);
console.log(longestRepetition('ba'), ['b', 1]);
