// https://www.codewars.com/kata/which-section-did-you-scroll-to/train/javascript

// return an index of section or -1 if past last section
// scrollY is a positive integer and sizes is an array of positive integers
function getSectionIdFromScroll(scrollY, sizes) {
  for (let i = 0; i < sizes.length; i++) {
    const currentNum = sizes[i];

    if (currentNum > scrollY) {
      return i;
    } else {
      scrollY -= currentNum;
    }
  }
  return -1;
}

console.log(getSectionIdFromScroll(299, [300, 200, 400, 600, 100]), 0);
console.log(getSectionIdFromScroll(599, [300, 200, 400, 600, 100]), 2);

// console.log(getSectionIdFromScroll(300,[300,200,400,600,100]), 1);
console.log(getSectionIdFromScroll(1600, [300, 200, 400, 600, 100]), -1);
