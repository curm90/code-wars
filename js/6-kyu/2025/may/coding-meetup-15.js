// https://www.codewars.com/kata/583a8bde28019d615a000035/train/javascript

function findOddNames(list) {
  const oddNames = list.filter((person) => {
    const firstName = person.firstName;

    const firstNameSum = firstName.split('').reduce((acc, char) => char.charCodeAt(0) + acc, 0);

    return firstNameSum % 2 !== 0;
  });

  return oddNames;
}

var list1 = [
  {
    firstName: 'Aba',
    lastName: 'N.',
    country: 'Ghana',
    continent: 'Africa',
    age: 21,
    language: 'Python',
  },
  {
    firstName: 'Abb',
    lastName: 'O.',
    country: 'Israel',
    continent: 'Asia',
    age: 39,
    language: 'Java',
  },
];

var answer1 = [
  {
    firstName: 'Abb',
    lastName: 'O.',
    country: 'Israel',
    continent: 'Asia',
    age: 39,
    language: 'Java',
  },
];

console.log(findOddNames(list1), answer1);

var list2 = [
  {
    firstName: 'Aba',
    lastName: 'N.',
    country: 'Ghana',
    continent: 'Africa',
    age: 21,
    language: 'Python',
  },
];

var answer2 = [];

console.log(findOddNames(list2), answer2);
