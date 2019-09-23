// Smash Words
function smash (words) {
  "use strict";
  return words.join(' ')
};

console.log(smash(["hello"]), "hello");
console.log(smash(["hello", "world"]), "hello world");