// https://www.codewars.com/kata/create-phone-number

function createPhoneNumber(numbers) {
  // place to store number
  // append a (
  let phoneNumber = '(';

  // append first 3 numbers
  phoneNumber +=
    numbers[0].toString() + numbers[1].toString() + numbers[2].toString();
  // append a )
  phoneNumber += ') ';

  // append next 3 numbers
  phoneNumber +=
    numbers[3].toString() + numbers[4].toString() + numbers[5].toString();

  // append a -
  phoneNumber += '-';

  // append last 3 numbers
  phoneNumber +=
    numbers[6].toString() +
    numbers[7].toString() +
    numbers[8].toString() +
    numbers[9].toString();

  // return phone numbers
  return phoneNumber;
}

function createPhoneNumber(numbers) {
  // place to store number
  // append a (
  let phonNumber = '(';
  // append first 3 numbers in array
  phonNumber += '' + numbers[0] + numbers[1] + numbers[2];
  // append )
  // append space
  phonNumber += ') ';
  // append next 3 numbers in array
  phonNumber += '' + numbers[3] + numbers[4] + numbers[5];
  // append -
  phonNumber += '-';
  // append last 4 numbers in array
  phonNumber += '' + numbers[6] + numbers[7] + numbers[8] + numbers[9];

  // return phone number
  return phonNumber;
}

function createPhoneNumber(numbers) {
  // place to store number
  // append a (
  let phonNumber = '(';
  // append first 3 numbers in array
  phonNumber += `${numbers[0]}${numbers[1]}${numbers[2]}`;
  // append )
  // append space
  phonNumber += ') ';
  // append next 3 numbers in array
  phonNumber += `${numbers[3]}${numbers[4]}${numbers[5]}`;
  // append -
  phonNumber += '-';
  // append last 4 numbers in array
  phonNumber += `${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
  // return phone number
  return phonNumber;
}

function createPhoneNumber(numbers) {
  numbers = numbers.join('');
  return (
    '(' +
    numbers.substring(0, 3) +
    ') ' +
    numbers.substring(3, 6) +
    '-' +
    numbers.substring(6)
  );
}

function createPhoneNumber(numbers) {
  let format = '(xxx) xxx-xxxx';

  for (let i = 0; i < numbers.length; i++) {
    format = format.replace('x', numbers[i]);
  }

  return format;
}

console.log(
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
  '(123) 456-7890'
);
console.log(
  createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]),
  '(111) 111-1111'
);
console.log(
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
  '(123) 456-7890'
);
