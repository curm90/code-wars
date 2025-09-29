// https://www.codewars.com/kata/5938f5b606c3033f4700015a/train/javascript

function alphabetWar(fight) {
  const left = { w: 4, p: 3, b: 2, s: 1 };
  const right = { m: 4, q: 3, d: 2, z: 1 };

  let leftScore = 0;
  let rightScore = 0;
  const arr = fight.split('');

  // Find all asterisk positions first
  const asteriskPositions = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '*') {
      asteriskPositions.push(i);
    }
  }

  // Mark positions to be destroyed
  const toDestroy = new Set();
  for (const pos of asteriskPositions) {
    toDestroy.add(pos); // Destroy the asterisk itself
    if (pos > 0) toDestroy.add(pos - 1); // Destroy left neighbor
    if (pos < arr.length - 1) toDestroy.add(pos + 1); // Destroy right neighbor
  }

  // Count scores for surviving characters
  for (let i = 0; i < arr.length; i++) {
    if (!toDestroy.has(i)) {
      const char = arr[i];
      if (left[char]) leftScore += left[char];
      if (right[char]) rightScore += right[char];
    }
  }

  if (leftScore > rightScore) return 'Left side wins!';
  if (rightScore > leftScore) return 'Right side wins!';
  return "Let's fight again!";
}

console.log(alphabetWar('z'), 'Right side wins!');
console.log(alphabetWar('****'), "Let's fight again!");
console.log(alphabetWar('z*dq*mw*pb*s'), "Let's fight again!");
console.log(alphabetWar('zdqmwpbs'), "Let's fight again!");
console.log(alphabetWar('zz*zzs'), 'Right side wins!');
console.log(alphabetWar('sz**z**zs'), 'Left side wins!');
console.log(alphabetWar('z*z*z*zs'), 'Left side wins!');
console.log(alphabetWar('*wwwwww*z*'), 'Left side wins!');
console.log(alphabetWar('qbpsssw'), 'Left side wins!');
console.log(alphabetWar('uwnfb'), 'Left side wins!');
console.log(alphabetWar('o*drdi**'), 'Right side wins!');
console.log(alphabetWar('wx**qqi'), 'Left side wins!');
