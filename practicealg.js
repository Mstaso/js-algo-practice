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

function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';

    for(let char of str){
        if(charMap[char]){
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    for(let char in charMap){
        if(charMap[char] > max){
            max = charMap[char]
            maxChar = char;
        }
    }
    return maxChar;
}


function chunk(array, size) {
// create an array to store all chunks called chunked
const chunked = [];
// create array to store chunks
// iterate through original array 
for(let element of array){
    const last = chunked[chunked.length -1]
    if(!last || last.length === size){
        chunked.push([element]);
    } else {
        last.push(element);
    }
}

return chunked;
}


chunk([1,2,3,4], 2);

