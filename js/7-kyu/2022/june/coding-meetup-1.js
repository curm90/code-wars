// https://www.codewars.com/kata/582746fa14b3892727000c4f/train/javascript

function countDevelopers(list) {
  let devFromEurope = 0;

  for (let i = 0; i < list.length; i++) {
    const dev = list[i];

    if (dev.continent === 'Europe' && dev.language === 'JavaScript') {
      devFromEurope++;
    }
  }

  return devFromEurope;
}

function countDevelopers(list) {
  return list.reduce((acc, curr) => {
    if (curr.continent === 'Europe' && curr.language === 'JavaScript') {
      return acc + 1;
    }
    return acc;
  }, 0);
}

function countDevelopers(list) {
  return list.filter(
    (dev) => dev.continent === 'Europe' && dev.language === 'JavaScript'
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

console.log(countDevelopers(list1), 1);

const list2 = [
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

console.log(countDevelopers(list2), 0);
