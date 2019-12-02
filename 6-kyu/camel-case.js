// https://www.codewars.com/kata/convert-string-to-camel-case/train/javascript

function toCamelCase(str) {
  // split string by dash or underscore
  const words = str.split(/-|_/g);

  // place to store camel case string
  // skip capitlalizing first word
  let camelCase = words[0];

  // iterate over split string
  for (let i = 1; i < words.length; i++) {
    const word = words[i];

    // append current word capitalized to camelcase string
    camelCase += word[0].toUpperCase() + word.slice(1);
  }
  // return camel case string
  return camelCase;
}

function toCamelCase(str) {
  return str.split(/-|_/g).reduce((camelCase, word, index) => {
    if (index === 0) {
      return word;
    }
    return camelCase + word[0].toUpperCase() + word.slice(1);
  }, '');
}

const capiltalize = word => word[0].toUpperCase() + word.slice(1);

function toCamelCase(str) {
  return str.split(/-|_/g).reduce((camelCase, word, index) => {
    return index === 0 ? word : camelCase + capiltalize(word);
  }, '');
}

function toCamelCase(str) {
  return str
    .split(/-|_/g)
    .reduce(
      (camelCase, word, index) =>
        index === 0 ? word : camelCase + capiltalize(word),
      ''
    );
}

console.log(
  toCamelCase(''),
  '',
  'An empty string was provided but not returned'
);

console.log(
  toCamelCase('the_stealth_warrior'),
  'theStealthWarrior',
  "toCamelCase('the_stealth_warrior') did not return correct value"
);

console.log(
  toCamelCase('The-Stealth-Warrior'),
  'TheStealthWarrior',
  "toCamelCase('The-Stealth-Warrior') did not return correct value"
);

console.log(
  toCamelCase('A-B-C'),
  'ABC',
  "toCamelCase('A-B-C') did not return correct value"
);
