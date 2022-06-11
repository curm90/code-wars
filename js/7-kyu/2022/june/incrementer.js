// https://www.codewars.com/kata/590e03aef55cab099a0002e8/train/javascript

function incrementer(nums) {
  // place to store the index - initialised to 1
  let index = 0;
  // place to store new array
  const newArr = [];
  // itertate over the nums array
  while (index < nums.length) {
    // increment num by index
    const newNum = nums[index] + index + 1;
    // if num + index > 9
    if (newNum > 9) {
      // turn num into a string
      const strNum = String(newNum);
      // pop off last digit
      const lastDigit = [...strNum].pop();
      // turn back into num
      const modifiedNum = +lastDigit;
      // push to new arr
      newArr.push(modifiedNum);
      index++;
    } else {
      // push num to new arr
      newArr.push(newNum);
      index++;
    }
  }

  // return new arr
  return newArr;
}

function incrementer(nums) {
  function getLastDigit(num) {
    return Number([...String(num)].pop());
  }

  return nums.map((num, i) => {
    if (num + i + 1 > 9) {
      return getLastDigit(num + i + 1);
    }

    return num + i + 1;
  });
}

function incrementer(nums) {
  return nums.map((num, i) => (num + i + 1) % 10);
}

console.log(incrementer([]), []);
console.log(incrementer([1, 2, 3]), [2, 4, 6]);
console.log(incrementer([4, 6, 7, 1, 3]), [5, 8, 0, 5, 8]);
console.log(incrementer([3, 6, 9, 8, 9]), [4, 8, 2, 2, 4]);
console.log(
  incrementer([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 8]),
  [2, 4, 6, 8, 0, 2, 4, 6, 8, 9, 0, 1, 2, 2]
);
