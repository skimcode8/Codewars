// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).

//answers

function insertDash(num) {
    let p = String(num)
    let k = []
    for ( let i = 0; i < p.length; i++){
      if ((p[i] % 2 === 1) && ((p[i+1]) % 2 === 1)){
         k.push(`${p[i]}${'-'}`)
      }else{
        k.push(p[i])
      }
    }
    return k.join('')
  }

