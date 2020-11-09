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