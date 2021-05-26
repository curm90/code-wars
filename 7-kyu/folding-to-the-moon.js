// https://www.codewars.com/kata/58f0ba42e89aa6158400000e/train/javascript

function foldTo(distance) {
  if (distance < 0) return null;
  let foldNum = 0;
  let distanceSoFar = 0.0001;

  while (distanceSoFar < distance) {
    distanceSoFar = distanceSoFar * 2;
    foldNum++;
  }

  return foldNum;
}

console.log(foldTo(384000000), 42);
