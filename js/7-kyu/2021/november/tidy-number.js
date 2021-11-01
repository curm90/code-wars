// https://www.codewars.com/kata/5a87449ab1710171300000fd/train/javascript

function tidyNumber(n) {
  const arr = String(n).split('');

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] < arr[i]) {
      return false;
    }
  }

  return true;
}

function tidyNumber(n) {
  return [...String(n)].every((num, i, arr) => !i || num >= arr[i - 1]);
}

console.log(tidyNumber(12), true);
console.log(tidyNumber(102), false);
console.log(tidyNumber(9672), false);
console.log(tidyNumber(2789), true);
console.log(tidyNumber(2335), true);
