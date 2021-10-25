// https://www.codewars.com/kata/5a3dd29055519e23ec000074/train/javascript

function checkExam(array1, array2) {
  // place to store the result
  let result = 0;
  // iterate over the first array
  for (let i = 0; i < array1.length; i++) {
    // if the current item is the same as the current item in array2
    if (array1[i] == array2[i]) {
      // add 4 to the result
      result += 4;
      // else if the answer is blank just continue
    } else if (array2[i] == '') {
      continue;
    } else {
      // else deduct 1 from the result
      result -= 1;
    }
  }

  // return result
  return result < 0 ? 0 : result;
}

function checkExam(array1, array2) {
  const score = array2.reduce((acc, curr, i) => {
    if (curr == array1[i]) {
      return acc + 4;
    } else if (curr == '') {
      return acc;
    } else {
      return acc - 1;
    }
  }, 0);

  return score < 0 ? 0 : score;
}

console.log(checkExam(['a', 'a', 'b', 'b'], ['a', 'c', 'b', 'd']), 6);
console.log(checkExam(['a', 'a', 'c', 'b'], ['a', 'a', 'b', '']), 7);
console.log(checkExam(['a', 'a', 'b', 'c'], ['a', 'a', 'b', 'c']), 16);
console.log(checkExam(['b', 'c', 'b', 'a'], ['', 'a', 'a', 'c']), 0);
