// https://www.codewars.com/kata/54bb6f887e5a80180900046b/train/javascript

function longestPalindrome(s) {
  if (s.length === 0) return 0;

  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    let left = i,
      right = i;

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      maxLength = Math.max(maxLength, right - left + 1);
      left -= 1;
      right += 1;
    }

    left = i;
    right = i + 1;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      maxLength = Math.max(maxLength, right - left + 1);
      left -= 1;
      right += 1;
    }
  }

  return maxLength;
}

console.log(longestPalindrome('a'), 1);
console.log(longestPalindrome('aa'), 2);
console.log(longestPalindrome('baa'), 2);
console.log(longestPalindrome('aab'), 2);
console.log(longestPalindrome('zyabyz'), 1);
console.log(longestPalindrome('BaaBcd'), 4);
console.log(longestPalindrome('baablkj12345432133d'), 9);
console.log(longestPalindrome(''), 0);
console.log(longestPalindrome('Aa'), 1);
