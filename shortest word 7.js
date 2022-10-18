// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// FUNDAMENTALS

//answer
function findShort(s){
    let k = s.split(' ').sort((a,b)=> a.length - b.length)
    return k[0].length
    
    }