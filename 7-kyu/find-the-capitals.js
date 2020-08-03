// https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript

const capitals = (word) => {
  // place to store the result
  const result = [];
  // iterate over the word
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    // check if the current letters charcode is >= 65 and <= 90
    if (letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90) {
      // if so append the index to the result array
      result.push(i);
    }
  }
  // return the result
  return result;
};

const capitals = (word) => {
  // place to store the result
  const result = [];
  // iterate over the word
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    // check if the current letters charcode is >= 65 and <= 90
    if (letter.toUpperCase() === letter) {
      // if so append the index to the result array
      result.push(i);
    }
  }
  // return the result
  return result;
};

const capitals = (word) => {
  return word.split('').reduce((result, letter, i) => {
    if (letter.toUpperCase() === letter) {
      result.push(i);
    }
    return result;
  }, []);
};

console.log(capitals('CodEWaRs'), [0, 3, 4, 6]);
