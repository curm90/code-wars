// https://www.codewars.com/kata/57f625992f4d53c24200070e/train/javascript

function bingo(ticket, win) {
  // place to store the mini wins
  let miniWins = 0;
  // iterate over every sub array
  for (let i = 0; i < ticket.length; i++) {
    const subArray = ticket[i];
    for (let j = 0; j < subArray.length; j += 2) {
      // place to store the string in the sub array
      const string = subArray[j];
      // place to store the number in the sub array
      const number = subArray[j + 1];
      // iterate over each letter in the string
      for (let k = 0; k < string.length; k++) {
        const charCode = string.charCodeAt(k);
        // check if the current letters char code is equal to the number
        if (charCode == number) {
          // if yes add 1 to the mini win break out of loop
          miniWins++;
          break;
        }
      }
    }
  }

  // return Winner! if the mini wins is >= win else Loser!
  return miniWins >= win ? 'Winner!' : 'Loser!';
}

console.log(
  bingo(
    [
      ['ABC', 65],
      ['HGR', 74],
      ['BYHT', 74],
    ],
    2
  ),
  'Loser!'
);
console.log(
  bingo(
    [
      ['ABC', 65],
      ['HGR', 74],
      ['BYHT', 74],
    ],
    1
  ),
  'Winner!'
);
console.log(
  bingo(
    [
      ['HGTYRE', 74],
      ['BE', 66],
      ['JKTY', 74],
    ],
    3
  ),
  'Loser!'
);
