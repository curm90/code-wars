// https://www.codewars.com/kata/splicing/train/javascript

Array.prototype.removeValue = function(thing) {
  if (this.indexOf(thing) === -1) return false

  let i 
  while((i = this.indexOf(thing)) > -1) this.splice(i, 1)
  return this
}

var arr = [1, 2, 3, 1];
console.log(arr.removeValue(2), [1, 3, 1]);