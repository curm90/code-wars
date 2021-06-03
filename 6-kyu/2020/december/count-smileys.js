// https://www.codewars.com/kata/count-the-smiley-faces/train/javascript

function countSmileys(arr) {
  // a place to keep track of the current count
  let count = 0;

  const eyes = {
    ':': true,
    ';': true
  };

  const noses = {
    '-': true,
    '~': true
  };

  const mouths = {
    ')': true,
    D: true
  };

  // iterate over the array
  for (let i = 0; i < arr.length; i++) {
    const face = arr[i];

    if (face.length === 2) {
      // if first character is a : ;
      if (eyes[face[0]] && mouths[face[1]]) {
        count++;
      }
    } else if (face.length === 3) {
      if (eyes[face[0]] && noses[face[1]] && mouths[face[2]]) {
        count++;
      }
    }
  }
  // return count
  return count;
}

function countSmileys(arr) {
  const eyes = {
    ':': true,
    ';': true
  };

  const noses = {
    '-': true,
    '~': true
  };

  const mouths = {
    ')': true,
    D: true
  };

  return arr.reduce((count, face) => {
    if (face.length === 2) {
      if (eyes[face[0]] && mouths[face[1]]) {
        count++;
      }
    } else if (face.length === 3) {
      if (eyes[face[0]] && noses[face[1]] && mouths[face[2]]) {
        count++;
      }
    }
    return count;
  }, 0);
}

console.log(countSmileys([]), 0);
console.log(countSmileys([':D', ':~)', ';~D', ':)']), 4);
console.log(countSmileys([':)', ':(', ':D', ':O', ':;']), 2);
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);
