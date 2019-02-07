// https://www.codewars.com/kata/will-there-be-enough-space/train/javascript

function enough(cap, on, wait) {
  // if on plus wait is equal to cap --> return 0
  if (on + wait <= cap) {
    return 0
    // else if on plus wait is greater than cap 
  } else if (on + wait > cap) {
    // return on plus wait minus cap
    return (on + wait) - cap
  }
}
function enough(cap, on, wait) {
  return (on + wait > cap) ? on + wait - cap : 0
}


console.log(enough(10, 5, 5))
console.log(enough(100, 60, 50))
console.log(enough(100, 90, 50))