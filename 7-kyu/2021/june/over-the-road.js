// https://www.codewars.com/kata/5f0ed36164f2bc00283aed07/train/javascript

function overTheRoad(address, n) {
  return n * 2 - (address - 1);
}

function overTheRoad(address, n) {
  return n * 2 + 1 - address;
}

console.log(overTheRoad(1, 3), 6);
console.log(overTheRoad(3, 3), 4);
console.log(overTheRoad(2, 3), 5);
console.log(overTheRoad(3, 5), 8);
