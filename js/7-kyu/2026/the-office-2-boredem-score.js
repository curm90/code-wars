// https://www.codewars.com/kata/57ed4cef7b45ef8774000014/train/javascript

function boredom(staff) {
  // store the scores
  const scores = {
    accounts: 1,
    finance: 2,
    regulation: 3,
    cleaning: 4,
    canteen: 10,
    trading: 6,
    change: 6,
    IS: 8,
    'pissing about': 25,
    retail: 5,
  };

  // iterate over the object keys and values
  const totalScore = Object.values(staff).reduce((currentScoreTotal, currentScore) => {
    // figure out sum based on points and staff
    return currentScoreTotal + scores[currentScore];
  }, 0);

  // <=80: 'kill me now'
  if (totalScore <= 80) return 'kill me now';
  // < 100 & > 80: 'i can handle this'
  else if (totalScore < 100 && totalScore > 80) return 'i can handle this';
  // 100 or over: 'party time!!'
  return 'party time!!';
}

console.log(
  boredom(
    {
      tim: 'change',
      jim: 'accounts',
      randy: 'canteen',
      sandy: 'change',
      andy: 'change',
      katie: 'IS',
      laura: 'change',
      saajid: 'IS',
      alex: 'trading',
      john: 'accounts',
      mr: 'finance',
    },
    'kill me now',
  ),
);

console.log(
  boredom(
    {
      tim: 'IS',
      jim: 'finance',
      randy: 'pissing about',
      sandy: 'cleaning',
      andy: 'cleaning',
      katie: 'cleaning',
      laura: 'pissing about',
      saajid: 'regulation',
      alex: 'regulation',
      john: 'accounts',
      mr: 'canteen',
    },
    'i can handle this',
  ),
);

console.log(
  boredom(
    {
      tim: 'accounts',
      jim: 'accounts',
      randy: 'pissing about',
      sandy: 'finance',
      andy: 'change',
      katie: 'IS',
      laura: 'IS',
      saajid: 'canteen',
      alex: 'pissing about',
      john: 'retail',
      mr: 'pissing about',
    },
    'party time!!',
  ),
);
