// https://www.codewars.com/kata/5827bc50f524dd029d0005f2

function getFirstPython(list) {
  const firstPythonDev = list.find((person) => person.language == 'Python');

  if (firstPythonDev) {
    return `${firstPythonDev.firstName}, ${firstPythonDev.country}`;
  }

  return 'There will be no Python developers';
}

function getFirstPython(list) {
  const firstPythonDev = list.find(({ language }) => language == 'Python');

  if (firstPythonDev) {
    return `${firstPythonDev.firstName}, ${firstPythonDev.country}`;
  }

  return 'There will be no Python developers';
}

function getFirstPython(list) {
  const firstPythonDev = list.find(({ language }) => language == 'Python');

  return firstPythonDev
    ? `${firstPythonDev.firstName}, ${firstPythonDev.country}`
    : 'There will be no Python developers';
}

var list1 = [
  {
    firstName: 'Mark',
    lastName: 'G.',
    country: 'Scotland',
    continent: 'Europe',
    age: 22,
    language: 'JavaScript',
  },
  {
    firstName: 'Victoria',
    lastName: 'T.',
    country: 'Puerto Rico',
    continent: 'Americas',
    age: 30,
    language: 'Python',
  },
  {
    firstName: 'Emma',
    lastName: 'B.',
    country: 'Norway',
    continent: 'Europe',
    age: 19,
    language: 'Clojure',
  },
];

var list2 = [
  {
    firstName: 'Kseniya',
    lastName: 'T.',
    country: 'Belarus',
    continent: 'Europe',
    age: 29,
    language: 'JavaScript',
  },
  {
    firstName: 'Amar',
    lastName: 'V.',
    country: 'Bosnia and Herzegovina',
    continent: 'Europe',
    age: 32,
    language: 'Ruby',
  },
];

console.log(getFirstPython(list1), 'Victoria, Puerto Rico');
console.log(getFirstPython(list2), 'There will be no Python developers');
