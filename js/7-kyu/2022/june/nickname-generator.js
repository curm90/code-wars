// https://www.codewars.com/kata/593b1909e68ff627c9000186/train/javascript

function nicknameGenerator(name) {
  if (name.length < 4) return 'Error: Name too short';

  const vowels = ['a', 'e', 'i', 'o', 'u'];

  if (vowels.includes(name[2])) {
    return name.slice(0, 4);
  }

  return name.slice(0, 3);
}

console.log(nicknameGenerator('Jimmy'), 'Jim');
console.log(nicknameGenerator('Samantha'), 'Sam');
console.log(nicknameGenerator('Sam'), 'Error: Name too short');
console.log(nicknameGenerator('Kayne'), 'Kay', "'y' is not a vowel");
console.log(nicknameGenerator('Melissa'), 'Mel');
console.log(nicknameGenerator('James'), 'Jam');
console.log(nicknameGenerator('Jeannie'), 'Jean');
