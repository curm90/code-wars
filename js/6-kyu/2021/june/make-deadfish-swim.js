// https://www.codewars.com/kata/51e0007c1f9378fa810002a9/train/javascript

function parse(data) {
  // place to store the array
  const resultArr = [];
  // place to store the current num initialized to 0
  let num = 0;
  // iterate over the data
  for (const cmd of data) {
    // if data[i] == i
    if (cmd == 'i') {
      // increment num
      num++;
      // else if d
    } else if (cmd == 'd') {
      // decerement num
      num--;
      // elif s
    } else if (cmd == 's') {
      // square num
      num *= num;
      // else if o
    } else if (cmd == 'o') {
      // push num to result array
      resultArr.push(num);
    }
  }

  // return result array
  return resultArr;
}

function parse(data) {
  const resultArr = [];
  let num = 0;

  for (const cmd of data) {
    switch (cmd) {
      case 'i':
        num++;
        break;
      case 'd':
        num--;
        break;
      case 's':
        num *= num;
        break;
      case 'o':
        resultArr.push(num);
      default:
        break;
    }
  }

  return resultArr;
}
function parse(data) {
  let resultArr = [];

  data.split('').reduce((acc, curr) => {
    if (curr == 'i') acc++;
    if (curr == 'd') acc--;
    if (curr == 's') acc *= acc;
    if (curr == 'o') resultArr.push(acc);

    return acc;
  }, 0);

  return resultArr;
}

console.log(parse('iiisdoso'), [8, 64]);
console.log(parse('iiisxxxdoso'), [8, 64]);
