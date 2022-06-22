// https://www.codewars.com/kata/5828713ed04efde70e000346/train/javascript

function countLanguages(list) {
  const lookup = {};

  for (const { language } of list) {
    lookup[language] = lookup[language] + 1 || 1;
  }

  return lookup;
}

var list1 = [
  {
    firstName: 'Noah',
    lastName: 'M.',
    country: 'Switzerland',
    continent: 'Europe',
    age: 19,
    language: 'C',
  },
  {
    firstName: 'Anna',
    lastName: 'R.',
    country: 'Liechtenstein',
    continent: 'Europe',
    age: 52,
    language: 'JavaScript',
  },
  {
    firstName: 'Ramon',
    lastName: 'R.',
    country: 'Paraguay',
    continent: 'Americas',
    age: 29,
    language: 'Ruby',
  },
  {
    firstName: 'George',
    lastName: 'B.',
    country: 'England',
    continent: 'Europe',
    age: 81,
    language: 'C',
  },
];

var answer = { C: 2, JavaScript: 1, Ruby: 1 };

console.log(countLanguages(list1), answer);
