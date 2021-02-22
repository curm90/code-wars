// https://www.codewars.com/kata/52b5247074ea613a09000164/train/javascript

function cookingTime(eggs) {
  let time = 0;
  while (eggs > 0) {
    time += 5;
    eggs -= 8;
  }

  return time;
}

function cookingTime(eggs) {
  return Math.ceil(eggs / 8) * 5;
}

console.log(cookingTime(0), 0, '0 eggs');
console.log(cookingTime(5), 5, '5 eggs');
console.log(cookingTime(10), 10, '10 eggs');
