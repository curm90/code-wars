// https://www.codewars.com/kata/5865cff66b5699883f0001aa/train/javascript

function toTime(seconds) {
  const hours = seconds / 3600;
  const remainderAfterHours = seconds % 3600;
  const minutes = remainderAfterHours / 60;

  return `${Math.floor(hours)} hour(s) and ${Math.floor(minutes)} minute(s)`;
}

function toTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  return `${hours} hour(s) and ${minutes} minute(s)`;
}

console.log(toTime(3600), '1 hour(s) and 0 minute(s)');
console.log(toTime(3601), '1 hour(s) and 0 minute(s)');
console.log(toTime(3500), '0 hour(s) and 58 minute(s)');
console.log(toTime(323500), '89 hour(s) and 51 minute(s)');
console.log(toTime(0), '0 hour(s) and 0 minute(s)');
