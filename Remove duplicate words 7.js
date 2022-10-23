// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'

//answers
function removeDuplicateWords (s) {
    let k = s.split(' ')
    let p = []
    for (let i = 0; i < k.length; i++){
      if (!p.includes(k[i])){
        p.push(k[i])
      }
    }
    return p.join(' ')
  }