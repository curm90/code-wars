// https://www.codewars.com/kata/573d498eb90ccf20a000002a/train/javascript

// 1 2 3
// 4 5 6
// 7 8 9
//   0

function decode(string) {
  const phoneNumMap = {
    1: 9,
    2: 8,
    3: 7,
    4: 6,
    5: 0,
    6: 4,
    7: 3,
    8: 2,
    9: 1,
    0: 5,
  };

  return [...string].map((num) => phoneNumMap[num]).join('');
}

function decode(string) {
  const phoneNumMap = {
    1: 9,
    2: 8,
    3: 7,
    4: 6,
    5: 0,
    6: 4,
    7: 3,
    8: 2,
    9: 1,
    0: 5,
  };

  let decodedNum = '';

  for (const num of string) {
    decodedNum += phoneNumMap[num];
  }

  return decodedNum;
}

function decode(string) {
  return [...string]
    .map((num) => (num == 5 ? 0 : num == 0 ? 5 : 10 - num))
    .join('');
}

let phoneNumbers = {
  4103432323: '6957678787',
  4103438970: '6957672135',
  4104305768: '6956750342',
  4102204351: '6958856709',
  4107056043: '6953504567',
  4105753410: '6950307695',
};

for (let code in phoneNumbers) {
  console.log(decode(code), phoneNumbers[code]);
}
