// https://www.codewars.com/kata/most-consecutive-0-s-in-a-row-code-golf/train/javascript

function f(n) {
  const zeros = n.toString().match(/0+/g);
  const lengths = zeros.map(zero => zero.length);
  const longest = Math.max(...lengths);

  return longest;
}

const f = n =>
  Math.max(
    ...n
      .toString()
      .match(/0+/g)
      .map(z => z.length)
  );

f = n => Math.max(...('' + n).match(/0+/g).map(z => z.length));

const f = n =>
  ('' + n)
    .match(/0+/g)
    .sort()
    .pop().length;

console.log(f(1002000), 3);
console.log(f(10002030000), 4);
console.log(f(10), 1);
