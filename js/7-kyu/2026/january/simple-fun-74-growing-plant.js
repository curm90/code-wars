// https://www.codewars.com/kata/58941fec8afa3618c9000184/train/javascript

function growingPlant(upSpeed, downSpeed, desiredHeight) {
  // place to store the running height of plant
  let runningHeight = 0;
  // place to store the days it takes to reach given height
  let daysTaken = 0;
  // iterate while the running height is less than desiredHeight
  while (runningHeight < desiredHeight) {
    // runningHeight += upSpeed - downSpeed
    daysTaken += 1;
    runningHeight += upSpeed;

    if (runningHeight >= desiredHeight) {
      return daysTaken;
    }

    runningHeight -= downSpeed;
  }

  // return daysTaken
  return daysTaken;
}

console.log(growingPlant(100, 10, 910), 10);
console.log(growingPlant(10, 9, 4), 1);
