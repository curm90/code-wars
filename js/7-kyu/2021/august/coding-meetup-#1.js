// https://www.codewars.com/kata/582746fa14b3892727000c4f/train/javascript

function countDevelopers(list) {
  // place to store a count
  let count = 0;
  // iterate over the objects
  for (const person of list) {
    // if the language is JavaScript and the continent is Europe
    if (person.language == 'JavaScript' && person.continent == 'Europe') {
      // increment count
      count++;
    }
  }
  // return count
  return count;
}

function countDevelopers(list) {
  return list.reduce((total, curr) => {
    if (curr.continent == 'Europe' && curr.language == 'JavaScript') {
      total += 1;
    }

    return total;
  }, 0);
}

function countDevelopers(list) {
  return list.filter(
    (person) => person.continent == 'Europe' && person.language == 'JavaScript'
  ).length;
}

function countDevelopers(list) {
  return list.filter(
    ({ continent, language }) =>
      continent == 'Europe' && language == 'JavaScript'
  ).length;
}

const list1 = [
  {
    firstName: 'Noah',
    lastName: 'M.',
    country: 'Switzerland',
    continent: 'Europe',
    age: 19,
    language: 'JavaScript',
  },
  {
    firstName: 'Maia',
    lastName: 'S.',
    country: 'Tahiti',
    continent: 'Oceania',
    age: 28,
    language: 'JavaScript',
  },
  {
    firstName: 'Shufen',
    lastName: 'L.',
    country: 'Taiwan',
    continent: 'Asia',
    age: 35,
    language: 'HTML',
  },
  {
    firstName: 'Sumayah',
    lastName: 'M.',
    country: 'Tajikistan',
    continent: 'Asia',
    age: 30,
    language: 'CSS',
  },
];

var list2 = [
  {
    firstName: 'Oliver',
    lastName: 'Q.',
    country: 'Australia',
    continent: 'Oceania',
    age: 19,
    language: 'HTML',
  },
  {
    firstName: 'Lukas',
    lastName: 'R.',
    country: 'Austria',
    continent: 'Europe',
    age: 89,
    language: 'HTML',
  },
];

console.log(countDevelopers(list1), 1);
console.log(countDevelopers(list2), 0);
