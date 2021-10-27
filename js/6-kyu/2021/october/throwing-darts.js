// https://www.codewars.com/kata/525dfedb5b62f6954d000006/train/javascript

// 0 points - radius above 10
// 5 points - radius between 5 and 10 inclusive
// 10 points - radius less than 5

function scoreThrows(radii) {
  if (radii.length == 0) return 0;

  let score = 0;
  let bonus = true;

  for (const num of radii) {
    if (num >= 5 && num <= 10) {
      bonus = false;
      score += 5;
    } else if (num < 5) {
      score += 10;
    } else {
      bonus = false;
    }
  }

  return bonus ? score + 100 : score;
}

console.log(scoreThrows([1, 5, 11]), 15);
console.log(scoreThrows([15, 20, 30, 31, 32, 44, 100]), 0);
console.log(scoreThrows([1, 2, 3, 4]), 140);
console.log(scoreThrows([]), 0);
console.log(scoreThrows([1, 2, 3, 4, 5, 6, 7, 8, 9]), 65);
console.log(scoreThrows([0, 5, 10, 10.5, 4.5]), 30);
