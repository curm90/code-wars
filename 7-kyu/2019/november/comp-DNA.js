// https://www.codewars.com/kata/complementary-dna/train/javascript

function DNAStrand(dna) {
  let compliment = '';

  for (let i = 0; i < dna.length; i++) {
    const letter = dna[i];

    if (letter === 'A') {
      compliment += 'T';
    } else if (letter === 'T') {
      compliment += 'A';
    } else if (letter === 'G') {
      compliment += 'C';
    } else if (letter === 'C') {
      compliment += 'G';
    }
  }
  return compliment;
}

function DNAStrand(dna) {
  let compliment = '';

  const compliments = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
  };

  for (let i = 0; i < dna.length; i++) {
    const letter = dna[i];

    compliment += compliments[letter];
  }
  return compliment;
}

function DNAStrand(dna) {
  const compliments = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
  };

  return dna
    .split('')
    .map(letter => compliments[letter])
    .join('');
}

console.log(DNAStrand('AAAA'), 'TTTT', 'String AAAA is');
console.log(DNAStrand('ATTGC'), 'TAACG', 'String ATTGC is');
console.log(DNAStrand('GTAT'), 'CATA', 'String GTAT is');
