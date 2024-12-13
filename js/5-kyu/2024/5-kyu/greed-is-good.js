// https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript

function score(dice) {
  // place to store the scores
  const scores = {
    1: [100, 1000],
    2: [0, 200],
    3: [0, 300],
    4: [0, 400],
    5: [50, 500],
    6: [0, 600],
  };
  // place to store the points total
  let pointsTotal = 0;
  const lookup = {};
  // iterate over the array
  // store the counts of each number to all dice roll numbers
  for (const roll of dice) {
    lookup[roll] = lookup[roll] + 1 || 1;
  }

  const lookupEntries = Object.entries(lookup);
  // iterate over the entries of the object
  for (let [key, value] of lookupEntries) {
    // while the current roll is not 0
    while (value > 0) {
      // if  the current roll is >= 3
      if (value >= 3) {
        // get the points value of 3 rolls of current dice number
        const pointsValue = scores[key][1];
        // add this number (points value) to the points total
        pointsTotal += pointsValue;
        // decrement the current roll number by 3
        value -= 3;
        // else if the current roll is less than 3
      } else if (value < 3) {
        // get the points value of 1 roll of current dice number
        const pointsValue = scores[key][0];
        // add point value to points total
        pointsTotal += pointsValue;
        // decrement the current roll number by 1
        value -= 1;
      }
    }
  }

  // return points total
  return pointsTotal;
}

function score(dice) {
  const scores = {
    1: [100, 1000],
    2: [0, 200],
    3: [0, 300],
    4: [0, 400],
    5: [50, 500],
    6: [0, 600],
  };

  const lookup = {};
  let pointsTotal = 0;

  for (const roll of dice) {
    lookup[roll] = lookup[roll] + 1 || 1;
  }

  for (const [roll, count] of Object.entries(lookup)) {
    if (count >= 3) {
      pointsTotal += scores[roll][1];
      pointsTotal += scores[roll][0] * (count - 3);
    } else {
      pointsTotal += scores[roll][0] * count;
    }
  }

  return pointsTotal;
}

console.log(score([2, 3, 4, 6, 2]), 0, 'Incorrect answer for dice = [2, 3, 4, 6, 2]');
console.log(score([4, 4, 4, 3, 3]), 400, 'Incorrect answer for dice = [4, 4, 4, 3, 3]');
console.log(score([2, 4, 4, 5, 4]), 450, 'Incorrect answer for dice = [2, 4, 4, 5, 4]');
console.log(score([1, 1, 1, 3, 3]), 1000);
console.log(score([1, 1, 1, 1, 3]), 1100);
