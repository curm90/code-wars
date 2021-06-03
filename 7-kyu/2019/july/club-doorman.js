// https://www.codewars.com/kata/club-doorman/train/javascript

function passTheDoorMan (word){
  let letters = word.split('')

  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    
    if (letter === letters[i+1]) {
      return (letter.charCodeAt() - 96) * 3
    }
  }
}

console.log( passTheDoorMan("lettuce") , 60);
console.log( passTheDoorMan("hill"), 36);
console.log( passTheDoorMan("apple"), 48);