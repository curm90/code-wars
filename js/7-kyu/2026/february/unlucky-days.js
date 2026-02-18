// https://www.codewars.com/kata/56eb0be52caf798c630013c0/train/javascript

function unluckyDays(year) {
  let unluckyDays = 0;

  for (let month = 0; month < 12; month++) {
    const date = new Date(year, month, 13);

    if (date.getDay() === 5) {
      unluckyDays += 1;
    }
  }

  return unluckyDays;
}

function unluckyDays(year) {
  return Array.from({ length: 12 }).filter(
    (_, monthIndex) => new Date(year, monthIndex, 13).getDay() === 5,
  ).length;
}

console.log(unluckyDays(2819), 2);
console.log(unluckyDays(2792), 2);
console.log(unluckyDays(2723), 2);
console.log(unluckyDays(1812), 2);
console.log(unluckyDays(1618), 2);
console.log(unluckyDays(2132), 1);
console.log(unluckyDays(2065), 3);
console.log(unluckyDays(2017), 2);
