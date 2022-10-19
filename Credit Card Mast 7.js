// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"

// "Skippy" --> "##ippy"

// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"
// STRINGSALGORITHMS

//answers
function maskify(cc) {
    let last4 = `${cc[cc.split('').length -4]}${cc[cc.split('').length -3]}${cc[cc.split('').length -2]}${cc[cc.split('').length -1]}`
    
    let k = [last4]
    let p = cc.replace(last4, '')
    let m = []
    
    if (cc.length < 4){
      return cc
    }
    
    for (let i = 0; i < p.length; i++){
    m.push('#')
    }
     return m.concat(k).join('') 
    
    }