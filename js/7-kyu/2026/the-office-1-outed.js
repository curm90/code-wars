// https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1/train/javascript

function outed(meet, boss) {
  const totalHappinessRating = Object.entries(meet).reduce(
    (currentTotalRating, [teamMember, rating]) => {
      if (teamMember === boss) {
        return currentTotalRating + rating * 2;
      }

      return currentTotalRating + rating;
    },
    0
  );

  return totalHappinessRating / Object.values(meet).length <= 5
    ? 'Get Out Now!'
    : 'Nice Work Champ!';
}

console.log(
  outed(
    {
      tim: 5,
      jim: 9,
      randy: 0,
      sandy: 4,
      andy: 5,
      katie: 5,
      laura: 7,
      saajid: 4,
      alex: 1,
      john: 5,
      mr: 8,
    },
    'alex'
  )
);

// console.log(
//   outed(
//     {
//       tim: 0,
//       jim: 2,
//       randy: 0,
//       sandy: 7,
//       andy: 0,
//       katie: 5,
//       laura: 1,
//       saajid: 2,
//       alex: 3,
//       john: 2,
//       mr: 0,
//     },
//     'laura'
//   ),
//   'Get Out Now!'
// );
// console.log(
//   outed(
//     {
//       tim: 1,
//       jim: 3,
//       randy: 9,
//       sandy: 6,
//       andy: 7,
//       katie: 6,
//       laura: 9,
//       saajid: 9,
//       alex: 9,
//       john: 9,
//       mr: 8,
//     },
//     'katie'
//   ),
//   'Nice Work Champ!'
// );
// console.log(
//   outed(
//     {
//       tim: 2,
//       jim: 4,
//       randy: 0,
//       sandy: 5,
//       andy: 8,
//       katie: 6,
//       laura: 2,
//       saajid: 2,
//       alex: 3,
//       john: 2,
//       mr: 8,
//     },
//     'john'
//   ),
//   'Get Out Now!'
// );
