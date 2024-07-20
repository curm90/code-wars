// https://www.codewars.com/kata/59f08f89a5e129c543000069/train/javascript

function dup(s) {
  // place to the result array
  const resultArr = [];
  // place to store the current modified string
  let modifiedStr = '';
  // iterate over the array
  for (const string of s) {
    // iterate over the string
    for (let i = 0; i < string.length; i++) {
      const letter = string[i];
      // if the next letter != previous letter
      if (letter !== string[i + 1]) {
        // append letter to modified string
        modifiedStr += letter;
      }
    }
    // push letter to the result array
    resultArr.push(modifiedStr);
    // reset string
    modifiedStr = '';
  }

  // return resultArr
  return resultArr;
}

console.log(dup(['ccooddddddewwwaaaaarrrrsssss', 'piccaninny', 'hubbubbubboo']), [
  'codewars',
  'picaniny',
  'hubububo',
]);
console.log(dup(['abracadabra', 'allottee', 'assessee']), ['abracadabra', 'alote', 'asese']);
console.log(dup(['kelless', 'keenness']), ['keles', 'kenes']);
console.log(dup(['Woolloomooloo', 'flooddoorroommoonlighters', 'chuchchi']), [
  'Wolomolo',
  'flodoromonlighters',
  'chuchchi',
]);
console.log(dup(['adanac', 'soonness', 'toolless', 'ppellee']), [
  'adanac',
  'sones',
  'toles',
  'pele',
]);
console.log(dup(['callalloo', 'feelless', 'heelless']), ['calalo', 'feles', 'heles']);
console.log(dup(['putteellinen', 'keenness']), ['putelinen', 'kenes']);
console.log(dup(['kelless', 'voorraaddoosspullen', 'achcha']), ['keles', 'voradospulen', 'achcha']);
