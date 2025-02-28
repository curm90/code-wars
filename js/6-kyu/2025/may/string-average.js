// https://www.codewars.com/kata/5966847f4025872c7d00015b/train/javascript

function averageString(str) {
  const numberMap = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  if (!str) return 'n/a';

  const sumNum = Math.floor(
    str.split(' ').reduce((acc, word) => {
      if (numberMap[word] !== undefined) {
        return acc + numberMap[word];
      }
      return 'n/a';
    }, 0) / str.split(' ').length
  );

  return Object.keys(numberMap).find((key) => numberMap[key] === sumNum) || 'n/a';
}

console.log(averageString('zero nine five two'), 'four');
console.log(averageString('four six two three'), 'three');
console.log(averageString('one two three four five'), 'three');
console.log(averageString('five four'), 'four');
console.log(averageString('zero zero zero zero zero'), 'zero');
console.log(averageString('one one eight one'), 'two');
console.log(averageString(''), 'n/a');
console.log(averageString('seven yjlk33 nine nine five six eight eight'), 'n/a');
