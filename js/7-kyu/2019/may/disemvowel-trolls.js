// https://www.codewars.com/kata/disemvowel-trolls/train/javascript

function disemvowel(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  
  return str.split('').filter(function(el) {
    return vowels.indexOf(el.toLowerCase()) == -1;
  }).join('');
}

function disemvowel(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  
  return str.split('').filter(el => {
    return vowels.indexOf(el.toLowerCase()) == -1;
  }).join('');
}

const disemvowel = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let newStr = '';
  for (let i = 0; i <= str.length; i++) {
    let char = str.charAt(i);
    if (vowels.indexOf(char) == -1) {
      newStr += char;
    }
  }
    return newStr;
}

function disemvowel(str) {
  const vowels = 'aeiou';
  
  return str
    .split('')
    .filter(letter => !vowels.includes(letter.toLowerCase()))
    .join('');
}

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '')
}

console.log(disemvowel("This website is for losers LOL!"),
  "Ths wbst s fr lsrs LL!")