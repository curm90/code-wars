// codewars.com/kata/5287e858c6b5a9678200083c/train/javascript

function narcissistic(value) {
  // place to store the sum
  let sum = 0;
  // turn num into string
  const numStr = value.toString();
  // iterate over numStr
  for (let i = 0; i < numStr.length; i++) {
    const currentNum = numStr[i];

    // sum += num ** num
    sum += currentNum ** numStr.length;
  }
  // return sum === value
  return sum === value;
}

console.log(narcissistic(7), true, '7 is narcissistic');
console.log(narcissistic(371), true, '371 is narcissistic');
