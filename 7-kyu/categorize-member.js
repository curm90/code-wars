// https://www.codewars.com/kata/categorize-new-member/train/javascript

function openOrSenior(data){
  // place to store ages and handicap
  const status = data.map((info) => {
    // if age >= 55 && handicap > 7
    if (info[0] >= 55 && info[1] > 7) {
      // return Senior
      return 'Senior'
      // else 
    } else {
      // return Open
      return 'Open'
    }
  })
  return status
}

function openOrSenior(data){
  return data.map((info) => {
    return info[0] >= 55 && info[1] > 7 ? 'Senior' : 'Open'
  })
}

function openOrSenior(data){
  return data.map(([age, handicap]) => age >= 55 && handicap > 7 ? 'Senior' : 'Open')
}
    


console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]),['Open', 'Senior', 'Open', 'Senior'])
console.log(openOrSenior([[3, 12],[55,1],[91, -2],[54, 23]]),['Open', 'Open', 'Open', 'Open'])
console.log(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]),['Senior', 'Open', 'Open', 'Open'])
