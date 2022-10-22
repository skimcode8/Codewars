// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

// STRINGSFUNDAMENTALS

//answers
var isAnagram = function(test, original) {
    let k = []
    let l = []
    for ( i = 0; i < test.length; i++){
      k.push(test[i].toLowerCase())
    }
    for ( i = 0; i < original.length; i++){
      l.push(original[i].toLowerCase())
    }
    let p = k.sort().join()
    let t = l.sort().join()
    return t === p
    };