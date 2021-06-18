// https://www.codewars.com/kata/53573877d5493b4d6e00050c/train/javascript

function capital(capitals) {
  return capitals.map(({ state, country, capital }) => {
    if (state) {
      return `The capital of ${state} is ${capital}`;
    }

    return `The capital of ${country} is ${capital}`;
  });
}

function capital(capitals) {
  return capitals.map(({ state, country, capital }) => {
    return `The capital of ${state || country} is ${capital}`;
  });
}

state_capitals = [{ state: 'Maine', capital: 'Augusta' }];
console.log(capital(state_capitals)[0], 'The capital of Maine is Augusta');

country_capitals = [{ country: 'Spain', capital: 'Madrid' }];
console.log(capital(country_capitals)[0], 'The capital of Spain is Madrid');

mixed_capitals = [
  { state: 'Maine', capital: 'Augusta' },
  { country: 'Spain', capital: 'Madrid' },
];
console.log(capital(mixed_capitals)[1], 'The capital of Spain is Madrid');
