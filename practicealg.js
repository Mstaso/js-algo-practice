// function reverse(str) {
//    return str.split('').reverse().join('')
   
// }

// function reverse(str) {
//   let reversed = ''
//   for(let char of str){
//     reversed = char + reversed;
//   }

//   return reversed;
//  }

// function reverse(str) {
//     return str.split('').reduce((reversed, character) => {
//         return character + reversed;
//     }, '')
    
//  }

 function palindrome(str) {
    // create an empty string variable 
    let reversed = '';
      // iterate through str and add character to the variable created earlier
    for(let char of str){
        reversed = char + reversed;
    }
    //  compare
   return reversed === str ? true : false;
}

reverse("apple");

