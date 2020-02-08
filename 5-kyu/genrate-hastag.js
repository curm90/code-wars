// https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

function generateHashtag(str) {
  if (!str.trim()) return false;
  // splt word on spaces
  // return with a # in front
  const result = str
    .split(' ')
    .filter(word => word)
    .map(word => {
      // map over words -> return word uppercase
      return word[0].toUpperCase() + word.slice(1);
      // join together on empty string
    })
    .join('');
  if (result.length >= 140) return false;
  return '#' + result;
}

console.log(
  generateHashtag(''),
  false,
  'Expected an empty string to return false'
);
console.log(generateHashtag(' '.repeat(200)), false, 'Still an empty string');
console.log(
  generateHashtag('Do We have A Hashtag'),
  '#DoWeHaveAHashtag',
  'Expected a Hashtag (#) at the beginning.'
);
console.log(
  generateHashtag('Codewars'),
  '#Codewars',
  'Should handle a single word.'
);
console.log(
  generateHashtag('Codewars Is Nice'),
  '#CodewarsIsNice',
  'Should remove spaces.'
);
console.log(
  generateHashtag('Codewars is nice'),
  '#CodewarsIsNice',
  'Should capitalize first letters of words.'
);
console.log(generateHashtag('code' + ' '.repeat(140) + 'wars'), '#CodeWars');
console.log(
  generateHashtag(
    'Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat'
  ),
  false,
  'Should return false if the final word is longer than 140 chars.'
);
console.log(
  generateHashtag('a'.repeat(139)),
  '#A' + 'a'.repeat(138),
  'Should work'
);
console.log(generateHashtag('a'.repeat(140)), false, 'Too long');
