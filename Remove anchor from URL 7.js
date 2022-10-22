// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

//answers
function removeUrlAnchor(url){
    let p = url.split('')
    let k = url.split('').indexOf('#')
    let t = p.slice(0, k)
    if (url.includes('#')){
    return t.join('')
    }else{
      return url
    }
  }