// https://www.codewars.com/kata/59377c53e66267c8f6000027/train/javascript

function alphabetWar(fight) {
  const leftLetters = {
    w: 4,
    p: 3,
    b: 2,
    s: 1,
  };

  const rightLetters = {
    m: 4,
    q: 3,
    d: 2,
    z: 1,
  };

  let leftTotal = 0;
  let rightTotal = 0;

  for (const letter of fight) {
    if (leftLetters.hasOwnProperty(letter)) {
      leftTotal += leftLetters[letter];
    } else if (rightLetters.hasOwnProperty(letter)) {
      rightTotal += rightLetters[letter];
    } else {
      continue;
    }
  }

  if (rightTotal > leftTotal) {
    return 'Right side wins!';
  } else if (leftTotal > rightTotal) {
    return 'Left side wins!';
  } else {
    return "Let's fight again";
  }
}

function alphabetWar(fight) {
  const letters = {
    w: 4,
    p: 3,
    b: 2,
    s: 1,
    m: -4,
    q: -3,
    d: -2,
    z: -1,
  };

  const result = [...fight].reduce(
    (tot, curr) => tot + (letters[curr] || 0),
    0
  );

  return result
    ? (result < 0 ? 'Right' : 'Left') + ' side wins!'
    : 'Lets fight again!';
}

console.log(alphabetWar('z'), 'Right side wins!');
console.log(alphabetWar('zdqmwpbs'), "Let's fight again!");
console.log(alphabetWar('zzzzs'), 'Right side wins!');
console.log(alphabetWar('wwwwww'), 'Left side wins!');
