// https://www.codewars.com/kata/the-coupon-code/train/javascript

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  if (enteredCode !== correctCode) return false;
  if (Date.parse(currentDate) > Date.parse(expirationDate)) return false;
  return true;
}

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  return (
    enteredCode === correctCode &&
    Date.parse(currentDate) <= Date.parse(expirationDate)
  );
}

console.log(
  checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014'),
  true
);
console.log(
  checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014'),
  false
);
