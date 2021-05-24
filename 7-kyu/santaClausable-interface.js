// https://www.codewars.com/kata/52b50a20fa0e77b304000103/train/javascript

function isSantaClausable(obj) {
  return (
    typeof (obj.sayHoHoHo && obj.distributeGifts && obj.goDownTheChimney) ==
    'function'
  );
}

function isSantaClausable(obj) {
  return ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'].every(
    (fn) => typeof obj[fn] == 'function'
  );
}

const santa = {
  sayHoHoHo: function () {
    console.log('Ho Ho Ho!');
  },
  distributeGifts: function () {
    console.log('Gifts for all!');
  },
  goDownTheChimney: function () {
    console.log('*whoosh*');
  },
};

const notSanta = {
  sayHoHoHo: function () {
    console.log('Oink Oink!');
  },
};

console.log(isSantaClausable(santa), true);
console.log(isSantaClausable(notSanta), false);
