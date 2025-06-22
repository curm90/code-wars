// https://www.codewars.com/kata/55e2adece53b4cdcb900006c

function race(v1, v2, g) {
  if (v1 >= v2) return null;
  const time = g / (v2 - v1);

  const totalSeconds = Math.floor(time * 3600);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return [hours, minutes, seconds];
}

console.log(race(720, 850, 70), [0, 32, 18]);
console.log(race(80, 91, 37), [3, 21, 49]);
console.log(race(80, 100, 40), [2, 0, 0]);
console.log(race(720, 850, 37), [0, 17, 4]);
