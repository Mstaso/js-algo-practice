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
    console.log('last', last)
    console.log('chunked', chunked)
    if(!last || last.length === size){
        chunked.push([element]);
        // console.log("in if statement", chunked, last)
    } else {
        last.push(element);
        // console.log(last)
    }
}

console.log(chunked);
}

function anagrams(stringA, stringB) {
// use regular expressions to remove anything thats not a real word
const newA = stringA.replace(/[^\w]/g, "").toLowerCase()
const newB = stringB.replace(/[^\w]/g, "").toLowerCase()
// compare lengths 
if (newA.length !== newB.length){
    return false;
} 
    // build character maps
    const mapA = buildCharMap(newA);
    const mapB = buildCharMap(newB);
    console.log(mapA, mapB)
    // iterate through charmaps
    for(let element in mapA){
        if(!mapB[element] || mapB[element] !== mapA[element]){
            return false;
        }
    }

    return true;
}

function buildCharMap(str) {
    const charMap = {};
    for(let char of str){
        if(!charMap[char]){
            charMap[char] = 1;
        } else {
            charMap[char] ++;
        }
    }

    return charMap;
}

function anagramsTwo(stringA, stringB) {
return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
   return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
}


// function capitalize(str) {

// const newStr = str   
// for(let i = 0; i < str.length -1; i++ ) {
//    if(str[i] === " "){
//     newStr[i+1].toUpperCase()
//    } 
   
// }
// console.log(newStr)
// }

// function capitalize(str) {
// const words = [];

// for(let word of str.split(' ')){
//     words.push(word[0].toUpperCase() + word.slice(1))
// }

// return words.join(' ')

// }

function capitalize(str) {
let result = str[0].toUpperCase();

for(let i = 1; i < str.length; i++){
    if(str[i - 1] === " "){
        // console.log(str[i+1]);
       result += (str[i].toUpperCase());
    } else {
        result += (str[i]);
    }
}

return result
// console.log(result);
}

capitalize("hello there")