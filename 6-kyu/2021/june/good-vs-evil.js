// https://www.codewars.com/kata/52761ee4cffbc69732000738/train/javascript

function goodVsEvil(good, evil) {
  const goodArr = good.split(' ');
  const evilArr = evil.split(' ');
  let goodScore = 0;
  let evilScore = 0;
  const goodLookup = { 0: 1, 1: 2, 2: 3, 3: 3, 4: 4, 5: 10 };
  const evilLookup = { 0: 1, 1: 2, 2: 2, 3: 2, 4: 3, 5: 5, 6: 10 };

  for (let i = 0; i < goodArr.length; i++) {
    goodScore += goodLookup[i] * goodArr[i];
  }

  for (let i = 0; i < evilArr.length; i++) {
    evilScore += evilLookup[i] * evilArr[i];
  }

  const goodWin = goodScore > evilScore;
  const evilWin = evilScore > goodScore;

  const goodString = 'Good triumphs over Evil';
  const evilString = 'Evil eradicates all trace of Good';
  const noVictor = 'No victor on this battle field';

  return `Battle Result: ${
    goodWin ? `${goodString}` : evilWin ? `${evilString}` : `${noVictor}`
  }`;
}

console.log(
  goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1') ===
    'Battle Result: Evil eradicates all trace of Good',
  'Evil should win'
);
console.log(
  goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0') ===
    'Battle Result: Good triumphs over Evil',
  'Good should win'
);
console.log(
  goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0') ===
    'Battle Result: No victor on this battle field'
);
