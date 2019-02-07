// https://www.codewars.com/kata/return-the-day/train/javascript

function whatday(num) { 
  if (num === 2) {
    return 'Monday'
  } else if (num === 3) {
    return 'Tuesday'
  } else if (num === 4) {
    return 'Wednesday'
  } else if (num === 5) {
    return 'Thursday'
  } else if (num === 6) {
    return 'Friday'
  } else if (num === 7) {
    return 'Saturday'
  } else if (num === 1) {
    return 'Sunday'
  } else {
    return 'Wrong, please enter a number between 1 and 7'
  }
}

function whatday(num) { 
  switch (num) {
    case 1: return 'Sunday'
    case 2: return 'Monday'
    case 3: return 'Tuesday'
    case 4: return 'Wednesday'
    case 5: return 'Thursday'
    case 6: return 'Friday'
    case 7: return 'Saturday'
    default: return 'Wrong, please enter a number between 1 and 7'
  }
}

function whatday(num) { 
  const days = {
     1: 'Sunday',
     2: 'Monday',
     3: 'Tuesday',
     4: 'Wednesday',
     5: 'Thursday',
     6: 'Friday',
     7: 'Saturday'
  }
  return days[ num ] || 'Wrong, please enter a number between 1 and 7'
}

function whatday(num) { 
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  return days[num - 1] || 'Wrong, please enter a number between 1 and 7'
}




    console.log(whatday(1),'Sunday')
    console.log(whatday(2), 'Monday')
    console.log(whatday(3),'Tuesday')
    console.log(whatday(8),  'Wrong, please enter a number between 1 and 7')
    console.log(whatday(20),  'Wrong, please enter a number between 1 and 7')

