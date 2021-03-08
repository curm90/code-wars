// https://www.codewars.com/kata/56dbe0e313c2f63be4000b25/train/javascript

function vertMirror(string) {
  const parts = string.split('\n');

  const reversed = parts.map((part) => {
    return [...part].reverse().join('');
  });

  return reversed.join('\n');
}

function horMirror(string) {
  const parts = string.split('\n');
  let end = parts.length - 1;

  for (let i = 0; i < parts.length / 2; i++) {
    let temp = parts[i];
    parts[i] = parts[end];
    parts[end] = temp;
    end--;
  }

  return parts.join('\n');
}

function oper(fct, s) {
  return fct(s);
}

// ****************

function vertMirror(string) {
  return string
    .split('\n')
    .map((part) => {
      return [...part].reverse().join('');
    })
    .join('\n');
}

function horMirror(string) {
  return string.split('\n').reverse().join('\n');
}

function oper(fct, s) {
  return fct(s);
}

console.log(
  oper(vertMirror, 'hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu'),
  'QHdgSh\noaMDnH\nXxNNlC\nHxxvRi\nAvVTqb\nuRySvw'
);
console.log(
  oper(vertMirror, 'IzOTWE\nkkbeCM\nWuzZxM\nvDddJw\njiJyHF\nPVHfSx'),
  'EWTOzI\nMCebkk\nMxZzuW\nwJddDv\nFHyJij\nxSfHVP'
);
console.log(
  oper(horMirror, 'lVHt\nJVhv\nCSbg\nyeCt'),
  'yeCt\nCSbg\nJVhv\nlVHt'
);
console.log(
  oper(horMirror, 'njMK\ndbrZ\nLPKo\ncEYz'),
  'cEYz\nLPKo\ndbrZ\nnjMK'
);
