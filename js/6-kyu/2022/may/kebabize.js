// https://www.codewars.com/kata/57f8ff867a28db569e000c4a/train/javascript

function kebabize(str) {
  let resultStr = '';
  const strippedStr = str.replace(/[^a-zA-Z]/g, '');

  for (let i = 0; i < strippedStr.length; i++) {
    const letter = strippedStr[i];
    const letterCode = strippedStr.charCodeAt(i);
    const isAlphaChar = letterCode >= 65 && letterCode <= 90;

    if (isAlphaChar && i == 0) {
      resultStr += letter.toLowerCase();
    } else if (isAlphaChar) {
      resultStr += '-' + letter.toLowerCase();
    } else {
      resultStr += letter;
    }
  }

  return resultStr;
}

console.log(kebabize('myCamelCasedString'), 'my-camel-cased-string');
console.log(kebabize('myCamelHas3Humps'), 'my-camel-has-humps');
console.log(kebabize('MyCamelHas3Humps'), 'my-camel-has-humps');
