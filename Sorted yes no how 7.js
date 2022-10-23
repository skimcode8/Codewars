// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

//answers
function isSortedAndHow(array) {
    let k = array.join('')
    let p = array.sort((a,b)=> a - b)
    if (p.join('') === k){
      return "yes, ascending"
    }else if(p.reverse().join('') === k){
      return "yes, descending"
    }else{
      return "no"
    }
   
  }
