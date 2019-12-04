// https://www.codewars.com/kata/counting-duplicates/train/javascript

function duplicateCount(text) {
  // a place to store the count of each letter in the word
  const counts = {};

  // iterate over each letter in the text
  for (let i = 0; i < text.length; i++) {
    //  to lowercase the letter
    const letter = text[i].toLowerCase();
    // if the count has not seen this letter
    if (!counts[letter]) {
      // set the count for that letter to zero
      counts[letter] = 0;
    }
    // increment the count by one for this letter
    counts[letter]++;
  }

  // a place to store the number of duplicates, initialized to zero
  let duplicateCount = 0;

  // iterate over each property in the counts
  for (letter in counts) {
    const count = counts[letter];
    // if the value of this property is greater than one
    if (count > 1) {
      // increment duplicates
      duplicateCount++;
    }
  }
  // return duplicates
  return duplicateCount;
}

function duplicateCount(text) {
  const counts = {};
  const duplicates = {};
  let duplicateCount = 0;

  for (let i = 0; i < text.length; i++) {
    const letter = text[i].toLowerCase();
    counts[letter] = counts[letter] || 0;
    counts[letter]++;

    if (counts[letter] > 1 && !duplicates[letter]) {
      duplicateCount++;
      duplicates[letter] = true;
    }
  }
  return duplicateCount;
}

function duplicateCount(text) {
  const counts = {};
  const duplicates = {};

  return Array.prototype.reduce.call(
    text,
    (numDuplicates, letter) => {
      letter = letter.toLowerCase();
      counts[letter] = counts[letter] || 0;
      counts[letter]++;

      if (counts[letter] > 1 && !duplicates[letter]) {
        numDuplicates++;

        duplicates[letter] = true;
      }
      return numDuplicates;
    },
    0
  );
}

function duplicateCount(text) {
  return Array.prototype.reduce.call(
    text,
    ({ counts, duplicates, numDuplicates }, letter) => {
      letter = letter.toLowerCase();
      counts[letter] = counts[letter] || 0;
      counts[letter]++;

      if (counts[letter] > 1 && !duplicates[letter]) {
        numDuplicates++;
        duplicates[letter] = true;
      }
      return { counts, duplicates, numDuplicates };
    },
    {
      counts: {},
      duplicates: {},
      numDuplicates: 0
    }
  ).numDuplicates;
}

function duplicateCount(text) {
  let result = {
    total: 0
  };

  const arr = text.toLowerCase().split('');
  return arr.reduce((numDuplicates, letter) => {
    if (!result[letter]) {
      result[letter] = 1;
      return numDuplicates;
    } else if (result[letter] === 1) {
      result[letter]++;
      return numDuplicates + 1;
    }
    return numDuplicates;
  }, 0);
}

console.log(duplicateCount(''), 0);
console.log(duplicateCount('abcde'), 0);
console.log(duplicateCount('aabbcde'), 2);
console.log(duplicateCount('aabBcde'), 2, 'should ignore case');
console.log(duplicateCount('Indivisibility'), 1);
console.log(
  duplicateCount('Indivisibilities'),
  2,
  'characters may not be adjacent'
);
