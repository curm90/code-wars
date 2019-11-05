Array.prototype.sort = function() {
  let result = [];
  let arr = [...this];

  while (arr.length) {
    const min = Math.min(...arr);
    arr.splice(arr.indexOf(min), 1);
    result.push(min);
  }
  return result;
};

console.log(([9, 7, 2, 4, 5, 3, 6, 8, 1].sort(), [1, 2, 3, 4, 5, 6, 7, 8, 9]));
