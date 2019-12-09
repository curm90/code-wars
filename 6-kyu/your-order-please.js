// https://www.codewars.com/kata/your-order-please/train/javascript

function order(words) {
  if (!words) return '';

  const sortedWords = [];

  const splitWords = words.split(' ');

  for (let i = 0; i < splitWords.length; i++) {
    const word = splitWords[i];

    let digit = +word.match(/\d/)[0];

    sortedWords[digit - 1] = word;
  }
  return sortedWords.join(' ');
}

function order(words) {
  if (!words) return '';

  return (splitWords = words
    .split(' ')
    .reduce((sortedWords, word) => {
      let digit = +word.match(/\d/)[0];
      sortedWords[digit - 1] = word;
      return sortedWords;
    }, [])
    .join(' '));
}

console.log(order('is2 Thi1s T4est 3a'), 'Thi1s is2 3a T4est');
// console.log(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
// console.log(order(""), "")
