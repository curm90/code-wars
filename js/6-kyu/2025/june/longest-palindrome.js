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

// Had to add this for reference from chatgpt called Manacher’s Algorithm runs in 0n but no idea whats going on
function longestPalindrome(s) {
  if (!s) return 0;
  // Transform s to add boundaries (#) to handle even/odd palindromes uniformly
  let t = '^#' + s.split('').join('#') + '#$';
  let n = t.length;
  let p = new Array(n).fill(0);
  let center = 0,
    right = 0,
    maxLen = 0;

  for (let i = 1; i < n - 1; i++) {
    let mirror = 2 * center - i;
    if (i < right) p[i] = Math.min(right - i, p[mirror]);
    // Expand around center i
    while (t[i + (1 + p[i])] === t[i - (1 + p[i])]) p[i]++;
    // Update center and right boundary
    if (i + p[i] > right) {
      center = i;
      right = i + p[i];
    }
    maxLen = Math.max(maxLen, p[i]);
  }
  return maxLen;
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
