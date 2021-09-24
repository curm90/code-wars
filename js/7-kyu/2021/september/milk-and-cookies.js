// https://www.codewars.com/kata/52af7bf41f5a1291a6000025/train/javascript

function timeForMilkAndCookies(date) {
  const month = date.getMonth();
  const day = date.getDate();

  return month == 11 && day == 24;
}

function timeForMilkAndCookies(date) {
  return date.getMonth() == 11 && date.getDate() == 24;
}

function timeForMilkAndCookies(date) {
  return String(date).indexOf('Dec 24') > -1;
}

let year = 2013;
let month = 11; // Date class is 0 based, so 11 = December
let day = 24;
console.log(timeForMilkAndCookies(new Date(year, month, day)), true);

year = 2013;
month = 10;
day = 24;
console.log(timeForMilkAndCookies(new Date(year, month, day)), false);
