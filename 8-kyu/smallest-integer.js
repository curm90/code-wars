// https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let smallestNum = args[0]
    for (let i = 1; i < args.length; i++) {
      const currentNum = args[i];
      if (currentNum < smallestNum) {
        smallestNum = currentNum
      }
    }
    return smallestNum
  }
}

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

class SmallestIntegerFinder {
  findSmallestInt(args) {
    args.sort(function(a, b) {
      return a - b
    })
    return args[0]
  }
}

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a, b) => a - b)[0]
  }
}

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.reduce((prev, current) => prev < current ? prev : current)
  }
}

var sif = new SmallestIntegerFinder();
console.log(sif.findSmallestInt([78, 56, 232, 12, 8]), 8, 'Should return the smallest int 8');
console.log(sif.findSmallestInt([78, 56, 232, 12, 18]), 12, 'Should return the smallest int 12');
console.log(sif.findSmallestInt([78, 56, 232, 412, 228]), 56, 'Should return the smallest int 56');
console.log(sif.findSmallestInt([78, 56, 232, 12, 0]), 0, 'Should return the smallest int 0');
console.log(sif.findSmallestInt([1, 56, 232, 12, 8]), 1, 'Should return the smallest int 1');