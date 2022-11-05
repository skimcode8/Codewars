// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

//answers

function spinWords(string){
    let k = string.split(' ')
    let p = []
    for ( let i = 0; i < k.length; i++){
      if (k[i].length > 4){
        p.push(Array.from((k[i])).reverse().join(''))
      }else{
        p.push(k[i])
      }
    }
    return p.join(' ')
  
  }