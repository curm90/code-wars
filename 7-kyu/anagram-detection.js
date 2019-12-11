// https://www.codewars.com/kata/anagram-detection/train/javascript

// write the function isAnagram
const isAnagram = function(first, second) {
  // if both input lengths do not equal return false
  if (first.length !== second.length) return false;
  // if both input equal each other return true
  if (first === second) return true;

  // store first letter counts
  const firstCounts = countLetters(first);
  // store second letter counts
  const secondCounts = countLetters(second);

  // store first counts keys
  const firstsCountKeys = Object.keys(firstCounts);

  // if first count keys length !== second counts keys length return false
  if (firstsCountKeys.length !== Object.keys(secondCounts).length) return false;

  // iterate over first counts keys
  for (let i = 0; i < firstsCountKeys.length; i++) {
    const letter = firstsCountKeys[i];

    // if first counts at letter !== second counts at letter return false
    if (firstCounts[letter] !== secondCounts[letter]) return false;
  }
  // return true
  return true;
};

function countLetters(input) {
  // to lower case input
  input = input.toLowerCase();

  // a place to store the counts
  const counts = {};

  // iterate over input
  for (let i = 0; i < input.length; i++) {
    const letter = input[i];

    // if no counts at letter set count at that letter to 0
    if (!counts[letter]) {
      counts[letter] = 0;
    }
    // increment count at letter
    counts[letter]++;
  }
  // return letter
  return counts;
}

// --------------------------------------------------

const isAnagram = function(first, second) {
  if (first.length !== second.length) return false;
  if (first === second) return true;

  const firstCounts = countLetters(first);
  const secondCounts = countLetters(second);

  const firstCountsKeys = Object.keys(firstCounts);

  if (firstCountsKeys.length !== Object.keys(secondCounts).length) return false;

  return firstCountsKeys.every(letter => {
    return firstCounts[letter] === secondCounts[letter];
  });
};

function countLetters(input) {
  return [...input.toLowerCase()].reduce((counts, letter) => {
    counts[letter] = counts[letter] || 0;
    counts[letter]++;
    return counts;
  }, {});
}

function countLetters(input) {
  return [...input.toLowerCase()].reduce((counts, letter) => {
    return (counts[letter] = counts[letter] || 0), counts[letter]++, counts;
  }, {});
}

function countLetters(input) {
  return [...input.toLowerCase()].reduce((counts, letter) => {
    return {
      ...counts,
      [letter]: (counts[letter] || 0) + 1
    };
  }, {});
}

console.log(
  isAnagram('foefet', 'toffee'),
  true,
  'The word foefet is an anagram of toffee'
);
console.log(
  isAnagram('Buckethead', 'DeathCubeK'),
  true,
  'The word Buckethead is an anagram of DeathCubeK'
);
console.log(
  isAnagram('Twoo', 'WooT'),
  true,
  'The word Twoo is an anagram of WooT'
);

console.log(
  isAnagram('dumble', 'bumble'),
  false,
  'Characters do not match for test case dumble, bumble'
);
console.log(
  isAnagram('ound', 'round'),
  false,
  'Missing characters for test case ound, round'
);
console.log(
  isAnagram('apple', 'pale'),
  false,
  'Same letters, but different count'
);
