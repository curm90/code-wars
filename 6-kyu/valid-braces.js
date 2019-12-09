// https://www.codewars.com/kata/valid-braces/train/javascript

// ONE FAILURE ;-(
function validBraces(braces) {
  const regex = /[(){}[\]]/g;
  const onlyBraces = braces.match(regex);

  function isOpeningBrace(brace) {
    return brace === '(' || brace === '[' || brace === '{';
  }

  const braceStack = [];

  for (let i = 0; i < onlyBraces.length; i++) {
    const brace = onlyBraces[i];

    if (isOpeningBrace(brace)) {
      braceStack.push(brace);
    } else {
      const lastBrace = braceStack.pop();
      if (!lastBrace) return false;
      if (lastBrace === '(' && brace !== ')') {
        return false;
      }
      if (lastBrace === '[' && brace !== ']') {
        return false;
      }
      if (lastBrace === '{' && brace !== '}') {
        return false;
      }
    }
  }
  return true;
}

console.log(validBraces('()'), true);
console.log(validBraces('[(])'), false);
