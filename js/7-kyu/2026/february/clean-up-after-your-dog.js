// https://www.codewars.com/kata/57faa6ff9610ce181b000028/train/javascript

function crap(garden, bags, cap) {
  // get the actual capacity bags * cap
  let totalCapacity = bags * cap;

  // iterate over the garden
  for (const row of garden) {
    // iterate over each row
    for (const char of row) {
      // if a char === 'D' return Dog!!
      if (char === 'D') return 'Dog!!';
      // if char === '@'
      if (char === '@') {
        // decrement totalCapacity
        totalCapacity -= 1;
      }
    }
  }

  // return Cr@p if totalCapacity is less than 0 else Clean
  return totalCapacity < 0 ? 'Cr@p' : 'Clean';
}

console.log(
  crap(
    [
      ['_', '_', '_', '_'],
      ['_', '_', '_', '@'],
      ['_', '_', '@', '_'],
    ],
    2,
    2,
  ),
  'Clean',
);
console.log(
  crap(
    [
      ['_', '_', '_', '_'],
      ['_', '_', '_', '@'],
      ['_', '_', '@', '_'],
    ],
    1,
    1,
  ),
  'Cr@p',
);
console.log(
  crap(
    [
      ['_', '_'],
      ['_', '@'],
      ['D', '_'],
    ],
    2,
    2,
  ),
  'Dog!!',
);
console.log(
  crap(
    [
      ['_', '_', '_', '_'],
      ['_', '_', '_', '@'],
      ['_', '_', '_', '_'],
    ],
    1,
    1,
  ),
  'Clean',
);
console.log(
  crap(
    [
      ['_', '_', '_', '_'],
      ['_', '_', '_', '_'],
      ['_', '_', '_', '_'],
    ],
    2,
    2,
  ),
  'Clean',
);
console.log(
  crap(
    [
      ['@', '@'],
      ['@', '@'],
      ['@', '@'],
    ],
    3,
    2,
  ),
  'Clean',
);
console.log(
  crap(
    [
      ['@', '@'],
      ['@', '@'],
      ['@', 'D'],
    ],
    2,
    2,
  ),
  'Dog!!',
);
console.log(
  crap(
    [
      ['@', '_'],
      ['_', '_'],
    ],
    2,
    0,
  ),
  'Cr@p',
);
console.log(
  crap(
    [
      ['_', '_', '_', '_'],
      ['_', '_', '_', '_'],
    ],
    0,
    1,
  ),
  'Clean',
);
console.log(
  crap(
    [
      ['@', '_'],
      ['_', 'D'],
    ],
    2,
    0,
  ),
  'Dog!!',
);
console.log(crap([['_'], ['_'], ['_']], 0, 0), 'Clean');
