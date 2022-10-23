// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

//answers
var greet = function(name) {
    let k = []
    for( let i = 0; i < name.length; i++){
      if (i === 0){
        k.push(name[i].toUpperCase())
      }else{
        k.push(name[i].toLowerCase())
      }
    }
    return `${'Hello'} ${k.join('')}${'!'}`
  };
