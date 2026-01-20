// https://www.codewars.com/kata/557af4c6169ac832300000ba/train/javascript

function removeRotten(bagOfFruits) {
  if (!bagOfFruits) return [];
  return bagOfFruits.map((fruit) => fruit.replace('rotten', '').toLowerCase());
}

console.log(removeRotten(['apple', 'banana', 'kiwi', 'melone', 'orange']), [
  'apple',
  'banana',
  'kiwi',
  'melone',
  'orange',
]);
console.log(removeRotten(['apple', 'rottenBanana', 'kiwi', 'melone', 'orange']), [
  'apple',
  'banana',
  'kiwi',
  'melone',
  'orange',
]);
console.log(removeRotten([]), []);
