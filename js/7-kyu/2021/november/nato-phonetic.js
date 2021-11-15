// https://www.codewars.com/kata/54530f75699b53e558002076/train/javascript

const nato = (function () {
  const letters = {
    A: 'Alpha',
    B: 'Bravo',
    C: 'Charlie',
    D: 'Delta',
    E: 'Echo',
    F: 'Foxtrot',
    G: 'Golf',
    H: 'Hotel',
    I: 'India',
    J: 'Juliett',
    K: 'Kilo',
    L: 'Lima',
    M: 'Mike',
    N: 'November',
    O: 'Oscar',
    P: 'Papa',
    Q: 'Quebec',
    R: 'Romeo',
    S: 'Sierra',
    T: 'Tango',
    U: 'Uniform',
    V: 'Victor',
    W: 'Whiskey',
    X: 'X-ray',
    Y: 'Yankee',
    Z: 'Zulu',
  };

  return function (word) {
    let res = [];

    const upperWord = word.toUpperCase();

    for (let i = 0; i < upperWord.length; i++) {
      const letter = upperWord[i];

      res.push(letters[letter]);
    }

    return res.join(' ');
  };
})();

const nato = (function () {
  const letters = {
    A: 'Alpha',
    B: 'Bravo',
    C: 'Charlie',
    D: 'Delta',
    E: 'Echo',
    F: 'Foxtrot',
    G: 'Golf',
    H: 'Hotel',
    I: 'India',
    J: 'Juliett',
    K: 'Kiloa',
    L: 'Lima',
    M: 'Mike',
    N: 'November',
    O: 'Oscar',
    P: 'Papa',
    Q: 'Quebec',
    R: 'Romeo',
    S: 'Sierra',
    T: 'Tango',
    U: 'Uniform',
    V: 'Victor',
    W: 'Whiskey',
    X: 'X-ray',
    Y: 'Yankee',
    Z: 'Zulu',
  };

  return function (word) {
    return word
      .toUpperCase()
      .split('')
      .map((letter) => letters[letter])
      .join(' ');
  };
})();

console.log(nato('hi'), 'Hotel India');
