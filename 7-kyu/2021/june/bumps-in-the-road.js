// https://www.codewars.com/kata/57ed30dde7728215300005fa/train/javascript

function bump(x) {
  if (x.length <= 15) return 'Woohoo!';

  let bumps = 0;

  for (const char of x) {
    if (char == 'n') {
      bumps++;
    }

    if (bumps > 15) {
      return 'Car Dead';
    }
  }

  return 'Woohoo!';
}

function bump(x) {
  return x.split('n').length > 15 ? 'Car Dead' : 'Woohoo!';
}

console.log(bump('n'), 'Woohoo!');
console.log(bump('_nnnnnnn_n__n______nn__nn_nnn'), 'Car Dead');
console.log(bump('______n___n_'), 'Woohoo!');
