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

function reverseInt(n) {
    let reversedNumber = parseInt(n.toString().split('').reverse().join(''))
    // if (n < 0 ){
    //     return reversedNumber * -1
    // } else {
    //     return reversedNumber
    // }
    return reversedNumber * Math.sign(n);
    }

    function maxChar(str) {
        const charMap = {};
        let max = 0;
        let maxChar = '';
    
        for(let char of str){
            if(charMap[char]){
                charMap[char]++;
            } else {
                charMap[char]=1;
            }
        } 
       
        for(let char in charMap){
            if (charMap[char] > max){
                max = charMap[char]
                maxChar = char;
            }
        }
    
        return maxChar;
    }  

    function fizzBuzz(n) {

        for (let i=1; i <= n; i++){
            // check to see if number is a multiple of both 3 & 5?
            if (i % 3 === 0 && i % 5 === 0){
                console.log("fizzbuzz");
            } else if (i % 3 === 0){
                console.log("fizz");
            } else if (i % 5 === 0){
                console.log("buzz");
            } else {
                console.log(i);
            }
        }
    }    


    function chunk(array, size) {
        //create empty array to store chunks
        const chunked = []
        // for each element in the unchunked array 
        for(let element of array) {
            const last = chunked[chunked.length-1]
         // if element does not exist or if length is equal to chunk size     
            if( !last || last.length === size){
         // push a new element into chunked with the current element       
                chunked.push([element]);
            } else {
          // else add the current element into chunked       
                last.push(element);
            }
        }
        // return chunked
        return chunked
    
    
    }


    // Anagrams
    function anagrams(stringA, stringB) {
        const aCharMap=buildCharMap(stringA);
        const bCharMap=buildCharMap(stringB);
    
        if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
            return false;
        }
    
        for (let char in aCharMap){
            if(aCharMap[char] !== bCharMap[char]){
                return false;
            }
        }
    
        return true;
    
    }
    
    function buildCharMap(str) {
        const charMap = {};
        
        for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
            charMap[char] = charMap[char] + 1 || 1;
        }
    
        return charMap;
    }

    // Anagrams part 2

    function anagrams(stringA, stringB) {
   
        return cleanString(stringA) === cleanString(stringB) ?  true :  false
    
    
    }
    
    function cleanString(str) {
        return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
    }

    // capitalize p1
    function capitalize(str) {
        const words = [];
        for(let word of str.split(' ')){
            words.push(word[0].toUpperCase() + word.slice(1));
            }
            return words.join(' ')
        }

    // capitalize p2
    function capitalize(str) {
        let result = str[0].toUpperCase();
      
        for(let i = 1; i < str.length; i++) {
            if (str[i - 1] === ' ') {
                result += str[i].toUpperCase();
            } else {
                result += str[i]
            }
        }
      
        return result
          } 
       