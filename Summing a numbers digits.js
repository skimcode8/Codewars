// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

// FUNDAMENTALS

//answers
function sumDigits(number) {
    let j = []
  let k = Math.abs(number).toString().split('')
  for ( let i = 0; i < k.length; i++){
    j.push(Number.parseInt(k[i]))
  }
  return j.reduce((a,b)=> a + b)
}