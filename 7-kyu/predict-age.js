// https://www.codewars.com/kata/5aff237c578a14752d0035ae/train/javascript

function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  const args = arguments;
  const argsArr = Array.from(args);

  const sum = argsArr.reduce((total, num) => {
    return (total += num * num);
  }, 0);

  return Math.floor(Math.sqrt(sum) / 2);
}

function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  const sum = [...arguments].reduce((total, num) => {
    return (total += num * num);
  }, 0);

  return Math.floor(Math.sqrt(sum) / 2);
}

function predictAge(...ages) {
  const sum = [...ages].reduce((total, num) => {
    return (total += num * num);
  }, 0);

  return Math.floor(Math.sqrt(sum) / 2);
}

function predictAge(...ages) {
  return (Math.hypot(...ages) / 2) | 0;
}

console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45), 86);
