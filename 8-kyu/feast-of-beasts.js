// https://www.codewars.com/kata/the-feast-of-many-beasts/train/javascript

function feast(beast, dish) {
  
  if (beast[0] === dish[0] 
  && beast[beast.length - 1] === dish[dish.length - 1]) {
    return true
  } else {
    return false
  }
}

function feast(beast, dish) {
  return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}

console.log(feast("great blue heron", "garlic naan"), true)
console.log(feast("chickadee", "chocolate cake"), true)
console.log(feast("brown bear", "bear claw"), false)

