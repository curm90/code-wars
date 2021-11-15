// https://www.codewars.com/kata/55b75fcf67e558d3750000a3/train/javascript

class Block {
  constructor(data) {
    this.data = data;
  }

  getWidth() {
    return this.data[0];
  }

  getLength() {
    return this.data[1];
  }

  getHeight() {
    return this.data[2];
  }

  getVolume() {
    const [width, length, height] = this.data;

    return width * height * length;
  }

  getSurfaceArea() {
    const [width, length, height] = this.data;

    return 2 * (length * width + length * height + width * height);
  }
}

// #######################

class Block {
  constructor(data) {
    this.data = data;
  }

  getWidth() {
    return this.data[0];
  }

  getLength() {
    return this.data[1];
  }

  getHeight() {
    return this.data[2];
  }

  getVolume() {
    const width = this.getWidth();
    const height = this.getHeight();
    const length = this.getLength();

    return width * height * length;
  }

  getSurfaceArea() {
    const width = this.getWidth();
    const height = this.getHeight();
    const length = this.getLength();

    return 2 * (length * width + length * height + width * height);
  }
}

// ###########################

class Block {
  constructor(data) {
    [this.width, this.length, this.height] = data;
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getHeight() {
    return this.height;
  }

  getVolume() {
    const { width, length, height } = this;

    return width * height * length;
  }

  getSurfaceArea() {
    const { width, length, height } = this;

    return 2 * (length * width + length * height + width * height);
  }
}

let block = new Block([2, 4, 6]);

console.log(block.getWidth(), 2);
console.log(block.getLength(), 4);
console.log(block.getHeight(), 6);
console.log(block.getVolume(), 48);
console.log(block.getSurfaceArea(), 88);
