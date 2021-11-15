// https://www.codewars.com/kata/58d76854024c72c3e20000de/train/javascript

function reverse(str) {
  const strArr = str.trim().split(' ');

  return strArr
    .map((word, i) => {
      if (i % 2) {
        return [...word].reverse().join('');
      }
      return word;
    })
    .join(' ');
}

console.log(
  reverse('Reverse this string, please!'),
  'Reverse siht string, !esaelp'
);
console.log(
  reverse("I really don't like reversing strings!"),
  "I yllaer don't ekil reversing !sgnirts"
);
