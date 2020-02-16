// https://www.codewars.com/kata/duplicate-encoder

function duplicateEncode(word) {
  // place to store whether or not the letter is duplicate
  const isDuplicate = {};
  // iterate over the word
  for (let i = 0; i < word.length; i++) {
    const letter = word[i].toLowerCase();
    // if we have seen this letter before set to true
    if (letter in isDuplicate) {
      isDuplicate[letter] = true;
    } else {
      // else set to false
      isDuplicate[letter] = false;
    }
  }

  // a place to store the paranthesis
  let parenthesis = '';
  // iterate over the word
  for (let i = 0; i < word.length; i++) {
    const letter = word[i].toLowerCase();
    // if this letter is a duplicate
    if (isDuplicate[letter]) {
      // append a )
      parenthesis += ')';
      // else append (
    } else {
      parenthesis += '(';
    }
  }
  // return the parenthesis
  return parenthesis;
}

function duplicateEncode(word) {
  const isDuplicate = Array.prototype.reduce.call(
    word,
    (isDuplicate, letter) => {
      letter = letter.toLowerCase();
      if (letter in isDuplicate) {
        isDuplicate[letter] = true;
      } else {
        isDuplicate[letter] = false;
      }
      return isDuplicate;
    },
    {}
  );

  return Array.prototype.reduce.call(
    word,
    (parenthesis, letter) => {
      letter = letter.toLowerCase();
      if (isDuplicate[letter]) {
        parenthesis += ')';
      } else {
        parenthesis += '(';
      }
      return parenthesis;
    },
    ''
  );
}

function duplicateEncode(word) {
  const isDuplicate = Array.prototype.reduce.call(
    word,
    (isDuplicate, letter) => {
      letter = letter.toLowerCase();
      return (
        letter in isDuplicate
          ? (isDuplicate[letter] = true)
          : (isDuplicate[letter] = false),
        isDuplicate
      );
    },
    {}
  );

  return Array.prototype.reduce.call(
    word,
    (parenthesis, letter) => {
      letter = letter.toLowerCase();
      return isDuplicate[letter] ? (parenthesis += ')') : (parenthesis += '(');
    },
    ''
  );
}

console.log(duplicateEncode('din'), '(((');
console.log(duplicateEncode('recede'), '()()()');
console.log(duplicateEncode('Success'), ')())())', 'should ignore case');
console.log(duplicateEncode('(( @'), '))((');
