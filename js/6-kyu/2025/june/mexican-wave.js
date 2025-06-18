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

console.log(wave('hello'), ['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO']);
