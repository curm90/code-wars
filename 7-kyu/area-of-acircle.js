// https://www.codewars.com/kata/537baa6f8f4b300b5900106c/train/javascript

function circleArea(radius) {
  if (radius < 0) return false;
  const area = Math.PI * radius ** 2;

  return area ? +area.toFixed(2) : false;
}

function circleArea(radius) {
  return radius > 0 ? +(Math.PI * radius ** 2).toFixed(2) : false;
}

console.log(circleArea(-1485.86), false);
console.log(circleArea(0), false);
console.log(circleArea(43.2673), 5881.25);
console.log(circleArea(68), 14526.72);
console.log(circleArea('number'), false);
