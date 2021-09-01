// https://www.codewars.com/kata/59a96d71dbe3b06c0200009c

function generateShape(int){
  let square = ''

  for (let i = 0; i < int; i++) {
    for (let j = 0; j < int; j++) {
      square += '+'
    }
    if (i < int - 1)
    square += '\n'
  }
  return square
}

function generateShape(int){
  return [...Array(int)].map(_ => '+'.repeat(int)).join('\n')
}

function generateShape(int){
  return ('+'.repeat(int) + '\n').repeat(int).trim()
}



console.log(generateShape(3))