// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

// MATHEMATICSFUNDAMENTALS

//answer
function squareDigits(num){
    let k = []
    let l = num.toString().split('')
    for( let i = 0; i < l.length; i++){
      k.push(l[i]**2)
    }
    return Number(k.join(''))
  }