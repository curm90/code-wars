// https://www.codewars.com/kata/binary-addition/train/javascript

function addBinary(a, b) {
  const sum = a + b;

  return toBinary(sum);

  function toBinary(sum) {
    if (sum === 0) return 0;

    let binary = '';
    while (sum > 0) {
      const remainder = sum % 2;
      binary = remainder + binary;
      sum = Math.floor(sum / 2);
    }
    return binary;
  }
}

function addBinary(a, b) {
  return (a + b).toString(2);
}

console.log(addBinary(1, 2), '11');
