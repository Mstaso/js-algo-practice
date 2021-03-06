
// Approach to solving problems

// What is an Algorithm
// A process or set of steps to accomplish a certain task
// 

// Why Do I need to know this?
// Almost everything that you do in programming involves some kind of algorithn!
// its the foundation for being a successful problem solving developer
// interviews

// How do you improve

// Devise a plan for solving problems
// Master common problem solving patterns


// Problem Solving Approach

// Understand the Problem***
// 1. Can I resttate the problem in my own words?
// 2.  What are the inputs that go into the problem?
// 3.  What are the outputs that should come from the solution to the problem?
// 4.  Can the outputs be determined from the inputs?  In other words, do I have enough info to solve the problem? (You may not be able to answer this question until you set about solving the problem)
// 5.  How should I label the important pieces of data that are a part of the problem?

// EX:
// Write a function which takesz two numbers and returns their sum.

// 1.  Implement Addition
// 2.  If numbers are really big, should they be input as a string?  Will it always be two numbers?
// 3.  Should the output be a float, integer or string?
// 4.  what if someone puts in a 0 or one number, something to ask your interviewer
// 5.  numbers and sum


// Explore Concrete Examples***
// start with simple examples
// progress to more complex examples
// explore examples with empty inputs
// explore exampels with invalid inputs

// EX:
// Write a function which takes in a string and returns counts of each character in the string

// start with simple examples (charCount("aaaa") {a: 4})
// progress to more complex examples (should we include spaces, or uppercase/lowercase, always helpful to ask these questions)
// explore examples with empty inputs (charCount("") what do we want to return?  false, null, error?)
// explore exampels with invalid inputs



// Break it Down***
// explicitly write out the steps you need to take

// EX:
// Write a function which takes in a string and returns counts of each character in the string

function charCount(str) {
    // do something
    // return an object with keys that are lowercase alphanumeric charactesr in the string
}
function charCount(str) {
    // make object to return at end
    let result = [];
    // loop over string, for each character...
    for(let i = 0; i < str.length; i++){
        let char = stri[i].toLowerCase()
        // if the char is a number/letter AND key in object, add one to count
        if(result[char] > 0) {
            result[char] ++;
        // if the char is a number/letter and is not in object, add it and set value to 1
        } else {
            result[char] = 1;
        };
    }
        
        
        // if character is something else (space, period) don't do anything
    // return object as end
    return result;
}


// Solve/Simplify***
// Solve the problem
// If you can't, solve a simpler problem?
// Simplify
// Find the core difficulty in what you're trying to do
// temporarily ignore that difficulty
// write a simplified solution
// then incorporate that difficulty back in


// Look Back and Refactor*** 
// Can you check the result
// Can you derive the result differently
// Can you understand it at a glance
// Can you use the result or method for some other problem?
// Can you imrpove the performance of your solution?
// Can you think of other ways to refactor?
// How have other people solved this problem?



// Frequency Counter Pattern
// Write a function called same, which accepts two arrays.  The function should return true if every value in the array has it's corresponding value squared in the second array.  The frequency of values must be the same.  

function anagram(str1, str2){
    // check if their length is the same
    if(str1.length !== str2.length){
        return false;
    }
    if(charMap(str1) === charMap(str2)){
        return true;
    } else {
        return false;
    }
// create helper functions to break strings into character maps

// compare results of each character map

}

function charMap(str){
    // create object to return at the end
    let result = {};
    // loop over string
    for(let char of str){
        // see if that character already exists in the object
        if (result[char]){
            // if it does, increment by one
            result[char]++
        } else {
            // else set it equal to one
            result[char] = 1
        }
    }
        // return the object
    return result
}


function validAnagram(first, second){
    if (first.length !== second.length){
        return false;
    }

    const lookup = {};

    for(let char of first){
        let letter = first[char]
        lookup[letter] ? lookup[letter] += 1 : lookup[letter]=1
    }
    for(let char of second){
        let letter = second[char]
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }

    return true;
}


function sameFrequency(int1, int2) {
    if (int1.toString().length !== int2.toString().length){
        return false;
    }
    // create an object to store integers numbers and for comparison
    let result = {};
    // iterate through integer one and store it's numbers within result
    for(let num of int1.toString()){
        console.log(num)
        // if there's already a number at that location, increase by 1
        if(result[num]){
            result[num]++;
        } else {
            // if there number is not stored, make it equal to one
            result[num] = 1;
        }
    }

    // use for loop to iterate through second integer
    for(let num of int2.toString()){
        // compare each num of int2 with the previously stored result
        if(result[num]){
            result[num] - 1
        } else {
            return false;
        }
    }

    // return true, as their have been no falacies found.  
    return true;
}

function areThereDuplicates() {
    let collection = {}
    for(let val in arguments){
      collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection){
      if(collection[key] > 1) return true
    }
    return false;
  }






// Write a function callled sumzero which accepts a sorted aray of integers.  The function should find the first pair where the sum is 0.  

function sumZero(arr){
    let left = 0;
    let right = arr.length -1;

    while(left < right){
        let sum = arr[lef] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        } else if (sum > 0){
            right--;
        } else {
            left++;
        }
    }

}

// Implement a function called countUniqueValues, which accepts a sort array, and counts the unique values in the array.  There can be negative numbers in the array, but it will always be sorted. 




function countUniqueValues(arr){
    // create two variables to be able to compare the array at different points
    let i = 0;

    for (let j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
           
        }
    }
 
    return slow + 1;
    // iterate over the array with both counters

    // if slow is not equal too fast, replace the value of slow with the value of fast

    // return array

}


// Write a function called maxSubarraySum which accepts an array of integers and a number called n.  The function should calculate the maximum sum of n consecutive elements in the array.

function maxSubarraySum(arr, num) {
    // set variables for window
    let maxSum = 0;

    // check edge case
    // if 9 is less 3 return null
    if (arr.length < num){
        return null;
    }

    // iterate through, while the iteration count is less than 3 keep iterating
    for(let i = 0; i < num; i++){
        maxSum += arr[i];
        // add each number to the maxSum variable
    }
    // maxsum is currently 17
    console.log(maxSum);

    // i is equal to 3, while i is less than 9, continue to iterate
    let tempSum = maxSum;
    for(let i = num; i < arr.length; i++){
        // tempsum is window and will always be sum of 3 numbers
        // tempsum equals the current tempsum minus the previous number in the array plus the next number in the array
        tempSum = tempSum - arr[i-num] + arr[i]

        // if at anypoint, tempsum becomes greater than maxsum, set maxsum equal to tempsum
        if (tempSum > maxSum) {
            maxSum = tempSum
        }
    
    }
  

    return maxSum;
}

function minSubArrayLen(num, sum){
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while(start < nums.length) {
        // if current window doesn't add up to the given sum the
        // move the window to right

        if(total < sum && end < nums.length){
            total += nums[end]; 
            end++;
        }

        else if(total >= sum){
            minLen = Math.min(minLen, end-start);
            total -= nums[start];
            start++;
        }
    }


}




// Average piar

function averagePair(arr, targetAverage) {
// create start and end points
let start = 0;
let end = arr.length - 1;
while(start < end){
   let avg = (arr[start] + arr[end])/2;
    if(avg === targetAverage){
        return true;
    } else if(avg < targetAverage){
        start ++;
    }
}
return false;

}

function isSubsequence(str1, str2) {
    // create two pointers
    let i = 0;
    let j = 0;
    while(j < str2.length){
        if (str2[j] === str1[i]) i++;
        if (i === str1.length) return true;
        j++;
    }
    
    return false;
}





function sameFrequency(int1, int2) {

    // handle edge case if the ints are not the same length

    if(int1.toString().length !== int2.toString().length){
        return false;
    }

    // create a variable to store digits
    let digits = {};

    // create for loop to store the digits of first integer, turn integer to string else its not iterable

    for(let num of int1.toString()){
        // if the num is already stored in digits, increase its count
        if(digits[num]){
            digits[num]++;
        } else {
            // if the num is NOT stored in digits, set its count to 1
            digits[num] = 1;
        }
    }

    // iterate through second in2, and if the value exists in digits variable, decrease it's count by 1

    for(let num of int2.toString()){
        if(digits[num]){
            digits[num] - 1;
        } else {
            return false;
        }
    }

    // if we make it through the second for loop, all digits have been account for and the two integers must have the same frequency


    return true;


}


function areThereDuplicates() {

// create object to store arguments
let collection = {};

for(let val of arguments){
    if (collection[val]){
        return true;
    } else {
        collection[val] = 1;
    }
}

return false;
}

// function areThereDuplicates() {
//     let collection = {}
//     for(let val in arguments){
//       collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
//     }
//     console.log(collection)
//     for(let key in collection){
//       if(collection[key] > 1) return true
//     }
//     return false;
//   }


function areThereDuplicates(...args) {

args.sort((a,b) => a > b);
let start = 0;
let next = 1;

while(next < args.length){
    if(args[start] === args[next]){
        return true;
    }
    start++
    next++
}

return false;
}
  

function averagePair(arr, num){
    let start = 0
    let end = arr.length-1;
    while(start < end){
      let avg = (arr[start]+arr[end]) / 2 
      if(avg === num) return true;
      else if(avg < num) start++
      else end--
    }
    return false;
  }

  function isSubsequence(str1, str2) {
    // create two pointers
    let i = 0;
    let j = 0;
    while(j < str2.length){
        if (str2[j] === str1[i]) i++;
        if (i === str1.length) return true;
        j++;
    }
    
    return false;
}


function sumRange(num){
    if(num ===1) return 1;
    return num + sumRange(num-1);
}

function factorial(num){
    let total = 1;
    for(let i = num; i > 1; i--){
        total *= i
    }
    return total
}

function power(base, exponent) {
    if(exponent === 0) return 1;
    return base * power(base, exponent-1)
}

function factorial(num){
    let total = 1;
    for (let i =num; i > 1; i--){
        total *= i
    }
    return total
}

function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}

function recursiveRange(x){
    if (x === 0 ) return 0;
    return x + recursiveRange(x-1);
 }

 function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}

function isPalindrome(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    console.log(str.slice(1, -1))
}

isPalindrome('check');

function someRecursive(array, callback) {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive(array.slice(1),callback);
}

function flatten(oldArr){
  const newArr = [];
  for(let i = 0; i < oldArr.length; i++){
      if (Array.isArray([oldArr[i]])){
          newArr = newArr.concat(flatten(oldArr[i]))
      } else {
          newArr.push(oldArr[i])
      }
  }
}


function capitalizeFirst() {
    if (array.length === 1) {
        return [array[0].toUpperCase()];
      }
      let res = capitalizeWords(array.slice(0, -1));
      res.push(array.slice(array.length-1)[0].toUpperCase());
      return res;

}