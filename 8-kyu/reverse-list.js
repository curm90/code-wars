// https://www.codewars.com/kata/reverse-list-order/train/javascript

function reverseList(list) {
  return list.reverse()
}

function reverseList(list) {
  let arr = []

  for (let i = list.length - 1; i >= 0; i--) {
    arr.push(list[i])
  }
  return arr
}

function reverseList(list) {
  let arr = []

  for (let i = 0; i < list.length; i++) {
    arr.unshift(list[i])
  }
  return arr
}

function reverseList(list) {
  let arr = []

  list.map((num) => arr.unshift(num))
  return arr
}

console.log(reverseList([1,2,3,4]), [4,3,2,1]);
console.log(reverseList([3,1,5,4]), [4,5,1,3]);