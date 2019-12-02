// https://www.codewars.com/kata/exponential-comparison/train/javascript

function compare(number1, number2) {
  let [base1, exp1] = number1;
  let [base2, exp2] = number2;

  const numberOneLincolnLog = exp1 * Math.log10(base1);
  const numberTwoLincolnLog = exp2 * Math.log10(base2);

  return numberOneLincolnLog < numberTwoLincolnLog ? number2 : number1;
}

console.log(compare([2, 11], [3, 7]), [3, 7]);
console.log(compare([1, 10], [2, 3]), [2, 3]);
console.log(compare([3, 5], [5, 3]), [3, 5]);
console.log(compare([4, 7], [3, 8]), [4, 7]);
console.log(compare([5, 1000], [6, 900]), [6, 900]);
console.log(compare([15991, 714883], [960290, 502358]), [960290, 502358]);
