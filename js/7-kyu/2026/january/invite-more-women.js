// https://www.codewars.com/kata/58acfe4ae0201e1708000075/train/javascript

function inviteMoreWomen(L) {
  return L.reduce((acc, curr) => acc + curr) > 0;
}

console.log(inviteMoreWomen([1, -1, 1]), true);
console.log(inviteMoreWomen([1, 1, 1]), true);
console.log(inviteMoreWomen([-1, -1, -1]), false);
console.log(inviteMoreWomen([1, -1]), false);
