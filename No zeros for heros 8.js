// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

//answers

function noBoringZeros(n) {
    let array = n.toString().split('').reverse();
    if(array.length === 1 && array[0] === '0') {
      return 0
    }
    for(let i = 0; i < array.length ; i++) {
      while(array[0].match(/[0]/)) {
        array.shift();
      }
    }
    return +array.reverse().join('')
  }