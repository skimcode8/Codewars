// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// FUNDAMENTALSSTRINGSPUZZLES

//answer
function accum(s) {
    let k = []
    for ( let i = 0; i < s.length; i++){
    
      k.push(s[i].repeat(i + 1).toLowerCase())
      
  
    }
    let l = []
    for(let i = 0; i < k.length; i++ ){
      l.push(k[i].replace(k[i][0], k[i][0].toUpperCase()))
    }
    return l.join('-')
  }