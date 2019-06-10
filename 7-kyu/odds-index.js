function oddBall(arr){
  const index = arr.indexOf('odd')
  return arr.includes(index)
}


console.log(oddBall(["even",4,"even",7,"even",55,"even",6,"even",10,"odd",3,"even"]), true)
console.log(oddBall(["even",4,"even",7,"even",55,"even",6,"even",9,"odd",3,"even"]), false)
console.log(oddBall(["even",10,"odd",2,"even"]), true)