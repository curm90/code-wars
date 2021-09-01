// https://www.codewars.com/kata/students-final-grade/train/javascript

function finalGrade(grade, projects) {
  if (grade > 90 || projects > 10) {
    return 100
  } else if (grade > 75 && projects >= 5) {
    return 90
  } else if (grade > 50 && projects >= 2 ) {
    return 75
  } else {
    return 0
  }
}



console.log(finalGrade(100, 12)); 
console.log(finalGrade(99, 0));    
console.log(finalGrade(10, 15));  
console.log(finalGrade(85, 5));   
console.log(finalGrade(55, 3));    
console.log(finalGrade(55, 0));    
console.log(finalGrade(20, 2)); 