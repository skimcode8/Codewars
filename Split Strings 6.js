// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

//answer

function solution(str){
    let k = []
   for (i=0; i<str.length;i+= 2){
    if (str.length % 2 === 1 && str[i + 1] === undefined ){
      k.push(`${str[i]}${'_'}`)
    }else{
      k.push(str[i] + str[i + 1])
    }
   }
   return k
}