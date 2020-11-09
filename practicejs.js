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