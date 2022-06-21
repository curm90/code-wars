// https://www.codewars.com/kata/58279e13c983ca4a2a00002a/train/javascript

function greetDevelopers(list) {
  let resultArr = [];

  for (let i = 0; i < list.length; i++) {
    const dev = list[i];
    const greeting = `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`;

    resultArr.push({ ...dev, greeting });
  }

  resultArr;

  return resultArr;
}

function greetDevelopers(list) {
  list.forEach(function (dev) {
    dev.greeting = `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`;
  });

  return list;
}

function greetDevelopers(list) {
  return list.map((dev) => {
    const greeting = `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`;
    return { ...dev, greeting };
  });
}

const list1 = [
  {
    firstName: 'Sofia',
    lastName: 'I.',
    country: 'Argentina',
    continent: 'Americas',
    age: 35,
    language: 'Java',
  },
  {
    firstName: 'Lukas',
    lastName: 'X.',
    country: 'Croatia',
    continent: 'Europe',
    age: 35,
    language: 'Python',
  },
  {
    firstName: 'Madison',
    lastName: 'U.',
    country: 'United States',
    continent: 'Americas',
    age: 32,
    language: 'Ruby',
  },
];

const answer = [
  {
    firstName: 'Sofia',
    lastName: 'I.',
    country: 'Argentina',
    continent: 'Americas',
    age: 35,
    language: 'Java',
    greeting: 'Hi Sofia, what do you like the most about Java?',
  },
  {
    firstName: 'Lukas',
    lastName: 'X.',
    country: 'Croatia',
    continent: 'Europe',
    age: 35,
    language: 'Python',
    greeting: 'Hi Lukas, what do you like the most about Python?',
  },
  {
    firstName: 'Madison',
    lastName: 'U.',
    country: 'United States',
    continent: 'Americas',
    age: 32,
    language: 'Ruby',
    greeting: 'Hi Madison, what do you like the most about Ruby?',
  },
];

console.log(greetDevelopers(list1), answer);
