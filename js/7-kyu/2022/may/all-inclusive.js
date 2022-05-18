// https://www.codewars.com/kata/585b1fafe08bae9988000314/train/javascript

function explode(s) {
  // place to store the result string
  let resultStr = '';
  // iterate over the string
  for (let i = 0; i < s.length; i++) {
    const currentNum = s[i];
    // if current num is 0 increment i
    if (currentNum === 0) i++;
    let temp = currentNum;
    // while current number is greater than 0
    while (temp > 0) {
      // add that number to the result string
      resultStr += currentNum;
      // decrement number
      temp--;
    }
  }
  // return result string
  return resultStr;
}

function explode(s) {
  let resultStr = '';

  for (let i = 0; i < s.length; i++) {
    resultStr += s[i].repeat(s[i]);
  }

  return resultStr;
}

function explode(s) {
  return s
    .split('')
    .map((num) => num.repeat(num))
    .join('');
}

console.log(explode('312'), '333122');
console.log(explode('102269'), '12222666666999999999');
console.log(explode('0'), '');
console.log(explode('000'), '');
console.log(explode('123'), '122333');
