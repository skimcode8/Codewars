// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

//answers
var countBits = function(n) {
    let k = Array.from(n.toString(2))
    count = 0
    for (let i =0; i<k.length; i++){
     if (k[i] === '1'){
       count +=1
     }
    }
    return count
   };
   countBits = n => n.toString(2).split('0').join('').length;
   var countBits = function(n) {
    let k = n.toString(2).split('')
    count = 0
    for (let i =0; i<k.length; i++){
     if (k[i] === '1'){
       count +=1
     }
    }
    return count
   };