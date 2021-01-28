// https://www.codewars.com/kata/56484848ba95170a8000004d/train/javascript

function gps(s, x) {
  // if length of x is less than or equal to 1 return 0
  if (x.length <= 1) return 0;
  // place to store the current max speed
  let maxSpeed = 0;
  // iterate over the array
  for (let i = 0; i < x.length - 1; i++) {
    // if arr[i + 1] - arr[i] > current max
    if (((x[i + 1] - x[i]) * 3600) / s > maxSpeed) {
      // current max is equal to that sum
      maxSpeed = ((x[i + 1] - x[i]) * 3600) / s;
    }
  }
  // return Math.floor(current Max)
  return Math.floor(maxSpeed);
}

function gps(s, x) {
  if (x.length <= 1) return 0;
  const maxSpeeds = [];

  for (let i = 0; i < x.length - 1; i++) {
    maxSpeeds.push(Math.floor(((x[i + 1] - x[i]) * 3600) / s));
  }

  return Math.max(...maxSpeeds);
}

var x = [0.0, 0.23, 0.46, 0.69, 0.92, 1.15, 1.38, 1.61];
var s = 20;
var u = 41;
console.log(gps(s, x), u);
x = [0.0, 0.02, 0.36, 0.54, 0.72, 0.9, 1.08, 1.26, 1.44, 1.62, 1.8];
s = 17;
u = 72;
console.log(gps(s, x), u);
x = [0.0, 0.24, 0.48, 0.72, 0.96, 1.2, 1.44, 1.68, 1.92, 2.16, 2.4];
s = 12;
u = 72;
console.log(gps(s, x), u);
x = [];
s = 19;
u = 0;
console.log(gps(s, x), u);
x = [0.0];
s = 19;
u = 0;
console.log(gps(s, x), u);
