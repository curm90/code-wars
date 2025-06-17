// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript

function wave(str) {
  const result = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      let waveStr = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
      result.push(waveStr);
    }
  }

  return result;
}

let result = ['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO'];
console.log(wave('hello'), result, "Should return: '" + result + "'");

// result = [
//   'Codewars',
//   'cOdewars',
//   'coDewars',
//   'codEwars',
//   'codeWars',
//   'codewArs',
//   'codewaRs',
//   'codewarS',
// ];
// // console.log(wave('codewars'), result, "Should return: '" + result + "'");

// // result = [];
// // console.log(wave(''), result, "Should return: '" + result + "'");

// // result = [
// //   'Two words',
// //   'tWo words',
// //   'twO words',
// //   'two Words',
// //   'two wOrds',
// //   'two woRds',
// //   'two worDs',
// //   'two wordS',
// // ];
// // console.log(wave('two words'), result, "Should return: '" + result + "'");

// // result = [' Gap ', ' gAp ', ' gaP '];
// // console.log(wave(' gap '), result, "Should return: '" + result + "'");
