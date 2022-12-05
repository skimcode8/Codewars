// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

//answer

function sortArray(array) {
    let k = []
    for(i = 0; i < array.length; i++){
      if (array[i] % 2 !== 0){
        k.push(array[i])
      }
    }
    k.sort((a,b)=>{
     return a - b
    });
    for(p = 0; p < array.length; p++){
      if (array[p] % 2 !== 0){
        array[p] = k.shift()
      }
    }
    return array
  }