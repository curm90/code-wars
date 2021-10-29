// https://www.codewars.com/kata/52dbae61ca039685460001ae/train/javascript

function change(string) {
  const prefixed = [...'0'.repeat(26)];

  function getAlphaIndex(letter) {
    return letter.toLowerCase().charCodeAt() - 97;
  }

  for (let i = 0; i < string.length; i++) {
    const index = getAlphaIndex(string[i]);

    if (index <= 25 && index >= 0) {
      prefixed[index] = 1;
    }
  }

  return prefixed.join('');
}

console.log(change('a **&  bZ'), '11000000000000000000000001');
