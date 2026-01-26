// https://www.codewars.com/kata/56a4872cbb65f3a610000026/train/javascript

function maxRot(n) {
  let highest = n;
  const strArr = [...n.toString()];

  for (let i = 0; i < strArr.length; i++) {
    let digit = strArr.splice(i, 1)[0];
    strArr.push(digit);

    const currentNum = parseInt(strArr.join(''));
    if (currentNum > highest) {
      highest = currentNum;
    }
  }

  return highest;
}

console.log(maxRot(38458215), 85821534);
console.log(maxRot(195881031), 988103115);
console.log(maxRot(896219342), 962193428);
console.log(maxRot(69418307), 94183076);
