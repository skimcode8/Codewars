// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
// FUNDAMENTALS

//answers

function longest(s1, s2) {
    let k = []
    let p = s1.concat(s2)
    for(let i = 0; i < p.length; i++){
      if (!k.includes(p[i])){
        k.push(p[i])
      }
    }
    return k.sort().join('')
  }