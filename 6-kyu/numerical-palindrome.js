// https://www.codewars.com/kata/numerical-palindrome-number-3-dot-5/train/javascript

function palindrome(num, palindromes = []) {
  if (num < 0 || typeof num !== 'number') return 'Not valid';
  if (num < 10) return 'No palindromes found';

  if (isSubPalindrome(num)) {
    palindromes.push(num);
  }

  palindrome(+num.toString().slice(1), palindromes);
  palindrome(+num.toString().slice(0, -1), palindromes);

  if (!palindromes.length) return 'No palindromes found';

  return [...new Set(palindromes.sort((a, b) => a - b))];
}

function isSubPalindrome(num) {
  const strNum = num.toString();
  return (
    strNum
      .split('')
      .reverse()
      .join('') === strNum
  );
}

function createMemoizedSubPalindrome() {
  const cache = {};

  return number => {
    if (number in cache) return cache[number];
    const strNum = number.toString();
    const result =
      strNum
        .split('')
        .reverse()
        .join('') === strNum;
    cache[number] = result;
    return result;
  };
}

const isSubPalindrome = createMemoizedSubPalindrome();

function createMemoizedPalindrome() {
  const cache = {};

  return (num, palindromes = []) => {
    let result;

    if (num in cache) return cache[num];

    if (num < 0 || typeof num !== 'number') {
      result = 'Not valid';
    } else if (num < 10) {
      result = 'No palindromes found';
    }

    if (result) {
      cache[num] = result;
      return result;
    }

    if (isSubPalindrome(num)) {
      palindromes.push(num);
    }

    palindrome(+num.toString().slice(1), palindromes);
    palindrome(+num.toString().slice(0, -1), palindromes);

    if (!palindromes.length) {
      return 'No palindromes found';
    }
    return [...new Set(palindromes.sort((a, b) => a - b))];
  };
}

const palindrome = createMemoizedPalindrome();

console.log(palindrome(2), 'No palindromes found');
console.log(palindrome(1551), [55, 1551]);
console.log(palindrome(221122), [11, 22, 2112, 221122]);
console.log(palindrome(10015885), [88, 1001, 5885]);
console.log(palindrome(13598), 'No palindromes found');
console.log(palindrome('ACCDDCCA'), 'Not valid');
console.log(palindrome('1551'), 'Not valid');
console.log(palindrome(-4505), 'Not valid');
