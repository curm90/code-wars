// https://www.codewars.com/kata/525f039017c7cd0e1a000a26/train/javascript

const palindromeChainLength = (n) => {
  // place to store the count
  let count = 1;
  // if num is already a palindrome -> return 0
  if (isPalindrome(n)) return 0;
  // place to store the sum
  let sum = getSum(n);
  // iterate while number is not a palindrome
  while (!isPalindrome(sum)) {
    // increment count
    count++;
    // get sum of num and the reverse of num
    sum = getSum(sum);
  }
  return count;
};

function isPalindrome(num) {
  return num === reverseNum(num);
}

function reverseNum(num) {
  return +num.toString().split('').reverse().join('');
}

function getSum(num) {
  return num + reverseNum(num);
}

console.log(palindromeChainLength(87), 4);
console.log(palindromeChainLength(88), 0);
