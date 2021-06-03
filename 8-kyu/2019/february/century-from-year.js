// https://www.codewars.com/kata/century-from-year

// The first century spans from the year 1 up to and including the year 100, The second - 
// from the year 101 up to and including the year 200, etc.

// Task :
// Given a year, return the century it is in.

function century(year) {
  const century = Math.floor(year / 100)
  const decade = year % 100

  if (decade > 0) {
      return century + 1
  }
  return century
}

function century(year) {
  const century = Math.floor(year / 100)
  const decade = year % 100

  return decade > 0 ? century + 1 : century
}