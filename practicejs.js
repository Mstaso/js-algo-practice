function reverse(str) {
    // Step 1.  Use split method to return a new array
   let splitString = str.split("")
   let reverseArray = splitString.reverse();
   let joinArray = reverseArray.join("")
   return joinArray
    // let newstr = []
    // let counter = str.length
    
    // for (i=counter; i > 0; i - 1){
    //     newstr.push(str[i])
    // }
    // return String(newstr)
}


function palindrome(str) {
    // turn str into an array
    let toArray = str.split('')
    // call reverse method
    let reversedArray = toArray.reverse()
    // call join method to turn back into string
    let reversedString = reversedArray.join("")
    // see if reversed string is equal to originial string
    reversedString === str ? isPalindrome = true : isPalindrome = false
    return isPalindrome 
    // Or return reversedString === str ?
}
