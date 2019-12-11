// https://www.codewars.com/kata/calculating-with-functions/train/javascript

const zero = opertation => (!opertation ? 0 : opertation(0));
const one = opertation => (!opertation ? 1 : opertation(1));
const two = opertation => (!opertation ? 2 : opertation(2));
const three = opertation => (!opertation ? 3 : opertation(3));
const four = opertation => (!opertation ? 4 : opertation(4));
const five = opertation => (!opertation ? 5 : opertation(5));
const six = opertation => (!opertation ? 6 : opertation(6));
const seven = opertation => (!opertation ? 7 : opertation(7));
const eight = opertation => (!opertation ? 8 : opertation(8));
const nine = opertation => (!opertation ? 9 : opertation(9));

const plus = number => other_number => other_number + number;
const minus = number => other_number => other_number - number;
const times = number => other_number => other_number * number;
const dividedBy = number => other_number => other_number / number || 0;

console.log(seven(times(five())), 35);
console.log(four(plus(nine())), 13);
console.log(eight(minus(three())), 5);
console.log(six(dividedBy(two())), 3);
