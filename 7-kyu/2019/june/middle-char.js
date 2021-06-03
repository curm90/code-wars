// https://www.codewars.com/kata/get-the-middle-character/train/javascript

function getMiddle(s) {
  const length = s.length
  const middle = Math.floor(length / 2)

  if (length % 2 === 0) {
    return s[middle - 1] + s[middle]
  } else {
    return s[middle]
  }  
}

function getMiddle(s) {
  return s.slice((s.length - 1) / 2, s.length / 2 + 1)
}

console.log(getMiddle("test"),"es");
console.log(getMiddle("testing"),"t");
console.log(getMiddle("middle"),"dd");
console.log(getMiddle("A"),"A");