// https://www.codewars.com/kata/dubstep/train/javascript

function songDecoder(song) {
  // split the string on WUB
  const split = song.split('WUB');

  // filter out empty strings
  const words = split.filter(word => word.trim());

  // join on a space
  const result = words.join(' ');

  // return result
  return result;
}

function songDecoder(song) {
  return song
    .split('WUB')
    .filter(word => word.trim())
    .join(' ');
}

function songDecoder(song) {
  return song.replace(/(WUB)+/g, ' ').trim();
}

// -------------------------------------------------------

console.log(
  songDecoder('AWUBBWUBC'),
  'A B C',
  'WUB should be replaced by 1 space'
);

console.log(
  songDecoder('AWUBWUBWUBBWUBWUBWUBC'),
  'A B C',
  'multiples WUB should be replaced by only 1 space'
);

console.log(
  songDecoder('WUBAWUBBWUBCWUB'),
  'A B C',
  'heading or trailing spaces should be removed'
);
