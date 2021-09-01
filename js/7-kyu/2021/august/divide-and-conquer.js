// https://www.codewars.com/kata/57eaec5608fed543d6000021/train/javascript

function divCon(x) {
  let stringTotal = 0;
  let intTotal = 0;

  for (let i = 0; i < x.length; i++) {
    const item = x[i];

    if (typeof item == 'string') {
      stringTotal += +item;
    } else {
      intTotal += item;
    }
  }

  return intTotal - stringTotal;
}

function divCon(x) {
  let stringTotal = 0;
  let intTotal = 0;

  x.forEach((item) => {
    if (typeof item == 'string') {
      stringTotal += +item;
    } else {
      intTotal += item;
    }
  });

  return intTotal - stringTotal;
}

function divCon(x) {
  return x.reduce((tot, item) => {
    return typeof item == 'string' ? tot - +item : tot + item;
  }, 0);
}

console.log(divCon([9, 3, '7', '3']), 2);
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14);
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']), 13);
