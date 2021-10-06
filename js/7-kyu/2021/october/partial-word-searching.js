// https://www.codewars.com/kata/54b81566cd7f51408300022d/train/javascript

function wordSearch(query, seq) {
  const result = seq.filter((str) => {
    return str.toLowerCase().includes(query.toLowerCase());
  });

  if (result.length == 0) {
    return ['Empty'];
  }

  return result;
}

function wordSearch(query, seq) {
  const result = seq.filter((str) => {
    return str.toLowerCase().includes(query.toLowerCase());
  });

  return result.length == 0 ? ['Empty'] : result;
}

function wordSearch(query, seq) {
  const caseSensQuery = query.toLowerCase();

  const result = seq.filter((str) => {
    return str.toLowerCase().includes(caseSensQuery);
  });

  return result.length == 0 ? ['Empty'] : result;
}

console.log(wordSearch('ab', ['za', 'ab', 'abc', 'zab', 'zbc']), [
  'ab',
  'abc',
  'zab',
]);
console.log(wordSearch('aB', ['za', 'ab', 'abc', 'zab', 'zbc']), [
  'ab',
  'abc',
  'zab',
]);
console.log(wordSearch('ab', ['za', 'aB', 'Abc', 'zAB', 'zbc']), [
  'aB',
  'Abc',
  'zAB',
]);
console.log(wordSearch('abcd', ['za', 'aB', 'Abc', 'zAB', 'zbc']), ['Empty']);
