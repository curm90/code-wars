// https://www.codewars.com/kata/52829c5fe08baf7edc00122b/train/javascript

Array.prototype.numberOfOccurrences = function (n) {
  // place to store a count
  let count = 0;
  // iterate over array
  for (let i = 0; i < this.length; i++) {
    const currentNum = this[i];
    // if currentNum is equal to n
    if (currentNum === n) {
      // increment count
      count++;
    }
  }
  // return count
  return count;
};

Array.prototype.numberOfOccurrences = function (n) {
  return this.filter((num) => num === n).length;
};

Array.prototype.numberOfOccurrences = function (n) {
  return this.reduce(
    (count, current) => (current === n ? count + 1 : count),
    0
  );
};

Array.prototype.numberOfOccurrences = function () {
  const num = arguments[0];
  return this.filter((currentNum) => currentNum === num).length;
};

const arr = [4, 0, 4];
console.log(arr.numberOfOccurrences(4), 2);
