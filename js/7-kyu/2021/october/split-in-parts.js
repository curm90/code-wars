// https://www.codewars.com/kata/5650ab06d11d675371000003/train/javascript

function splitInParts(s, partLength) {
  let result = '';

  for (let i = 0; i < s.length; i += partLength) {
    const subStr = s.slice(i, i + partLength);

    result += subStr + ' ';
  }

  return result.trim();
}

function splitInParts(s, partLength) {
  return [...s].reduce((acc, curr, i) => {
    return i % partLength == 0 ? acc + ' ' + curr : acc + curr;
  });
}

console.log(
  splitInParts('supercalifragilisticexpialidocious', 3),
  'sup erc ali fra gil ist ice xpi ali doc iou s'
);
console.log(splitInParts('HelloKata', 1), 'H e l l o K a t a');
console.log(splitInParts('HelloKata', 9), 'HelloKata');
