// https://www.codewars.com/kata/super-duper-easy/train/javascript

function problem(x){
  if (typeof x === 'string') {
    return 'Error'
  } else {
    return (x * 50) + 6
  }
}

function problem(x){
  return typeof x === 'string' ? 'Error' : (x * 50) + 6
}

const problem = x => typeof x === 'string' ? 'Error' : (x * 50) + 6

console.log(problem("hello"), "Error");
console.log(problem(1), 56);
console.log(problem(5), 256);
console.log(problem(0), 6);
console.log(problem(1.2), 66);
console.log(problem(3), 156);
console.log(problem("RyanIsCool"), "Error");
console.log(problem(-3), -144);
console.log(problem(""), "Error");
console.log(problem(0.03), 7.5);