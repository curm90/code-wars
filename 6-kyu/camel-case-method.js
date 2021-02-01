// https://www.codewars.com/kata/587731fda577b3d1b0001196/train/javascript

String.prototype.camelCase = function () {
  return this.split(' ')
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join('');
};

console.log('test case'.camelCase(), 'TestCase');
console.log('camel case method'.camelCase(), 'CamelCaseMethod');
console.log('say hello '.camelCase(), 'SayHello');
console.log(' camel case word'.camelCase(), 'CamelCaseWord');
console.log(''.camelCase(), '');
