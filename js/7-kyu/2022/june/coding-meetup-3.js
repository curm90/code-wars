// https://www.codewars.com/kata/5827acd5f524dd029d0005a4/train/javascript

function isRubyComing(list) {
  let result;

  for (let i = 0; i < list.length; i++) {
    const person = list[i];

    if (person.language === 'Ruby') {
      return true;
    }

    result = false;
  }

  return result;
}

function isRubyComing(list) {
  return !!list.filter((person) => person.language === 'Ruby').length;
}

function isRubyComing(list) {
  return list.some((person) => person.language === 'Ruby');
}

function isRubyComing(list) {
  return !!list.find((person) => person.language === 'Ruby');
}

function isRubyComing(list) {
  return list.findIndex((person) => person.language === 'Ruby') > 0;
}

function isRubyComing(list) {
  return list.some(({ language }) => language === 'Ruby');
}

var list1 = [
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

var list2 = [
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
];

console.log(isRubyComing(list1), true);
console.log(isRubyComing(list2), false);
