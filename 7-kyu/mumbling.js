// https://www.codewars.com/kata/mumbling/train/javascript

// function accum(input) {
//   let result = ''
//   for (let index = 0; index < input.length; index++) {
//     const currentLetter = input[index];
//     const totalCount = index + 1
//     for (let counter = 0; counter < totalCount; counter++) {
//       if (counter === 0) {
//         result += currentLetter.toUpperCase()
//       } else {
//         result += currentLetter.toLowerCase()
//       }
//     }
//     if (index !== input.length - 1) {
//       result += '-'
//     }
//   }
//   return result
// }

function accum(input) {
  return input.split('').reduce((result, currentLetter, index) => {
    const totalCount = index + 1
    for (let counter = 0; counter < totalCount; counter++) {
      if (counter === 0) {
        result += currentLetter.toUpperCase()
      } else {
        result += currentLetter.toLowerCase()
      }
    }
    if (index !== input.length - 1) {
      result += '-'
    }
    return result
  }, '')
}
      

console.log(accum("ZpglnRxqenU"), 
"Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
// console.log(accum("NyffsGeyylB"), "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
// console.log(accum("MjtkuBovqrU"), "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
// console.log(accum("EvidjUnokmM"), "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
// console.log(accum("HbideVbxncC"), "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");