// https://www.codewars.com/kata/51b62bf6a9c58071c600001b/train/javascript

function solution(n) {
  const lookup = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    600: 'DC',
    900: 'CM',
    1000: 'M',
  };

  // place to store the roman numeral
  let roman = '';
  // place to store the keys
  const keys = Object.keys(lookup);
  // while n > 0
  while (n > 0) {
    // iterate over keys from end
    for (let i = keys.length - 1; i >= 0; i--) {
      const romanLetter = keys[i];
      // if num >= romanLetter
      if (n >= romanLetter) {
        // while n is >= roman letter
        while (n >= romanLetter) {
          // roman += roman letter
          roman += lookup[romanLetter];
          // decrement number by romaLetter value
          n -= romanLetter;
        }
        // pop off last key
        keys.pop();
        // break
        break;
      }
    }
  }
  // return roman
  return roman;
}

console.log(solution(1), 'I', '1 should, "I"');
console.log(solution(2), 'II', '2 should, "II"');
console.log(solution(3), 'III', '3 should, "III"');
console.log(solution(4), 'IV', '4 should, "IV"');
console.log(solution(5), 'V', '5 should, "V"');
console.log(solution(9), 'IX', '9 should, "IX"');
console.log(solution(10), 'X', '10 should, "X"');
console.log(solution(11), 'XI');
console.log(solution(19), 'XIX');
console.log(solution(22), 'XXII');
console.log(solution(15), 'XV');
console.log(solution(1000), 'M', '1000 should, "M"');
console.log(solution(1001), 'MI', '1001 should, "MI"');
console.log(solution(1990), 'MCMXC', '1990 should, "MCMXC"');
console.log(solution(2007), 'MMVII', '2007 should, "MMVII"');
console.log(solution(2008), 'MMVIII', '2008 should, "MMVIII"');
