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


// function steps(num) {

// // iterate through number with for loop
// for(let row = 0; row < num; row++){
//     let stair = ''
//    for(let column = 0; column < num; column++){
//        if(column <= row){
//            stair += "#"
//        } else {
//            stair += " "
//        }
//    }
//    console.log(stair)
// }
// }

function steps(num, row = 0, stair = '') {
    if (num === row){
        return;
    }

    if (num === stair.length) {
        console.log(stair)
        return steps(num, row + 1);
    }

    if (stair.length <= row) {
        stair += '#'
    } else {
        stair += ' '
    }

    steps(num, row, stair)
}

function pyramid(n) {
    for(let row = 0; row < n; row++) {
        let level = '';
    for(let column = 0; column < 2 * n - 1; column++) {

    }    
    }
}

// steps(4)




    var twoSum = function(nums, target) {

        // use nested for loop to sum all examples of numbers 
        for(let i = 0; i < nums.length - 1; i++) {
            for(let j = 0; j < nums.length -1; j++) {
                if(nums[i] + nums[j] === target){
                    return nums[i] + nums[j]
                }
            }
        }
        };    

// function vowels(str) {
//     let count = 0;

//     const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
//     for(let char of str) {
//         if (vowels.includes(char)){
//             count ++;
//         }
//     }

//     return count
// }

// function vowels(str) {
//   const matches = str.match(/[aeiou]/gi);
//   return matches ? matches.length : 0;
// }

// vowels("hello")

// function fib(n) {
//     const result = [0, 1];

//     for(let i = 2; i <= n; i++) {
//         const a = result[i - 1];
//         const b = result[i - 2];

//         result.push(a + b);
//     }

//     result[n];
// }


// function fib(n) {
//     // create result array with first two numbers of sequence
//     const result = [0, 1];
    
//     for(let i = 2; i <= n; i++) {
//         const a = result[i - 1];
//         const b = result[i - 2];
//         result.push(a, b);
//     }

//     return result[n];
// }


function memoize(fn) {
    const cache = {};
    return function(...args) {
        if(cache[args]){
            return cache[args];
        }

        const result = fn.apply(this, args)
        cache[args] = result;

        return result;
    }
}
function slowFib(n) {

    if(n < 2){
        return n;
    }

    return fib(n - 1) + fib(n - 2);

}

var detectCapitalUse = function(word) {
    let capWord = word.toUpperCase();
    let nonCapWord = word.toLowerCase();
    
    if(capWord == word || nonCapWord == word)
        return true;
    
    let capCount = 0;
    
    for(let i = 0; i < word.length ; i++){
        if(word[i] == word[i].toUpperCase())
            capCount++;
        
        if(capCount > 1)
            return false;
    }
    
    if(word[0] != word[0].toUpperCase())
        return false;
    
    return true;
};


// detectCapitalUse("JohN")

var interpret = function(command) {
    //     create new string to be able to store the correct interpretation
        let goalString = '';
        
    //     iterate through command 
        for (let i = 0; i < command.length; i++) {
            if(command[i] === "(" && command[i+1] === ")") {
                goalString += "o";
            }
            if(command[i] === "a") {
                goalString += "al"
            }
            if(command[i] === 'G')
                goalString += 'G'
        }
    //         if statement 
    //     add into string variable if it matches command
        
    //     return string variable
        return goalString;
    };

    var createTargetArray = function(nums, index) {
        //     create target array
            const target = [];
        //     iterate through index
            for (let i of nums) {
            target.splice(index[i], 0, nums[i])
                console.log(target)
                }
            
            
        // return target    
            return target;
        };
        var balancedStringSplit = function(s) {

            let counter = 0;
            let tempR = [];
            let tempL = [];
            
                for(let i = 0; i < s.length; i++) {
                    s[i] === 'R' ? tempR.push('R') : tempL.push('L')
            
                    if (tempR.length === tempL.length && i % 2 !== 0) {
                        counter ++;
                    }
            
                }
            
                return counter;
                
            };


            var rangeSumBST = function(root, low, high) {
                const stack = [root]
                let sum = 0
                
                while(stack.length) {
                    const node = stack.pop()
                    const value = node.val
                    
                    if(value >= low && value <= high) {
                        sum += value
                    }
                    if(node.left) {
                        stack.push(node.left)
                    }
                    if(node.right) {
                        stack.push(node.right)
                    }
                }
                
                return sum
            };


            var subtractProductAndSum = function(n) {

                let sum = 0;
            //     7, 7, 12
                let product = 0;
            //  7, 0
                let numString = n.toString()
                for (let i = 0; i < numString.length; i++) {
                   let int = parseInt(numString[i]);
                   sum += int;
                    if(product === 0 && i === 0){
                        product = int;
                    } else {
                        product = product * int;    
                    } 
                }
            
                return product - sum;
            };


class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data) {
        if (data < this.data && this.left) {
            this.left.insert(data);
        } else if (data < this.data) {
            this.left = new Node(data);
        } else if (data > this.data && this.right) {
            this.right.insert(data);
        } else if (data > this.data) {
            this.right = new Node(data);
        }
    }
}            

var kidsWithCandies = function(candies, extraCandies) {
    //     create max candies without extra variable
        let target = 0;
    //     loop thru
        for (let i = 0; i < candies.length; i++) {
    //         if candies[i] is greater than target, set target to that value
            if(candies[i] > target) {
                target = candies[i]
            }
        }
    //     create result variable 
        let result = [];
    //     loop thru candies again, and if candies[i] + extracandies is greater than target, push true into result, else push false
        for(let i = 0; i < candies.length; i++) {
            if(candies[i] + extraCandies >= target) {
                result.push(true);
            } else {
                result.push(false);
            }
        }
        
        return result;
    };


    class ParkingSystem {
        constructor(big, medium, small) {
           this.slots = {
               1: big,
               2: medium,
               3: small
           }
        } 
        
            addCar(carType) {
               if(this.slots[carType] === 0) {
                   return false;
               }
               
               this.slots[carType]--;
               return true;
           };
           
       }

       var shuffle = function(nums, n) {
        const result = [];
        
    for(let i = 0; i < n; i++) {
        result.push(nums[i], nums[n + i]);
    }
        
        return result;
    };       

    var numberOfSteps = function(num) {
        let counter = 0;
          while(num > 0) {
              num % 2 === 0 ? num /= 2 : num --;
              counter ++;
          }
          
          return counter;
      };    

      var restoreString = function(s, indices) {
        //    create an array to store result, needs to be same length as s
            const result = s.split('');
        // loop through s
            for(let i = 0; i < s.length; i++) {
        //         insert the current character at indices[i] using splice and replace the chracter in the current position
                result.splice(indices[i], 1, s[i]);
            }
            
        //     return result and use join to turn back into string
            return result.join('');
        };    

        var decompressRLElist = function(nums) {
            //     create result array to store frequency and values
                const result = [];
            //     loop through nums
                for(let i = 0; i < nums.length; i++) {
                    //     if i % 2 == 0 
                    if(i % 2 === 0) {
                        for(let j = 0; j < nums[i]; j++) {
                            result.push(nums[i+1])
                        }
                    }
                }
            
            //     push x copies of nums[i] into result, where x is equal to nums[i+1] 
            //     return result
            return result;
            };
            class OrderedStream {
                //     contructor that takes in n
                    constructor(n) {
                    this.pointer = 1
                    // this will create an array of length (n) and set all values to 'undefined'
                    this.list = Array.from({length: n}) 
                    };
                    
                    insert(idKey, Value) {
                        this.list[idKey] = Value;
                        const output = [];
                        while (true) {
                            if(this.list[this.pointer]){
                              output.push(this.list[this.pointer])
                              this.pointer++
                            } else {
                              break
                                }    
                        };
                        return output;    
                    };
                    
                }           

                var countConsistentStrings = function(allowed, words) {
                    //     create counter variable
                        let counter = 0;
                    //     forEach word in words
                        words.forEach((word) => {
                            for(let char of word) {
                              if(!allowed.includes(char)) {
                                return;   
                              };  
                                
                            };
                            
                            counter++;
                        });
                    
                        return counter;
                    };

                    var sumOddLengthSubarrays = function(arr) {
                        //     create result variable to hold sum
                            let sum = 0;
                            
                        for(let i = 0; i < arr.length; i++)  {
                            let odd = [];
                            odd.push(arr[i]);
                            sum += arr[i];
                            for (let j = i + 1; j < arr.length; j++) {
                                odd.push(arr[j]);
                                if(odd.length % 2 !== 0) {
                                    odd.forEach((num) => {
                                        sum += num;
                                    })
                                }
                            };
                             
                        };
                            
                            return sum;
                            
                        };

                        var numberOfMatches = function(n) {
                            let matches = 0;
                            let teams = n;
                                while(teams > 1) {
                            
                                    if(teams % 2 !== 0) {
                                        matches += (teams - 1) / 2;
                                        teams = (teams + 1) / 2;
                                    } else {
                                      matches += teams / 2;
                                      teams = teams / 2;  
                                    }
                                    
                                    
                                    
                                }
                                
                                return matches;
                            };                        


                            var countGoodTriplets = function(arr, a, b, c) {
                                //     create counter variable
                                    let counter = 0;
                                //     loop through array and compare
                                    
                                //     if arr at indices meets condition, increment counter by 1
                                    for(let i = 0; i < arr.length; i++) {
                                        for(let j = i + 1; j < arr.length; j++) {
                                            if(Math.abs(arr[i] - arr[j]) <= a) {
                                                 for(let k = j + 1; k < arr.length; k++) {
                                                    if(Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c){
                                                        counter ++;
                                                        }
                                                    }        
                                                }
                                            }
                                        }
                                       return counter;
                                    }
                                

                                    var minTimeToVisitAllPoints = function(arr) {
                                        let count = 0;
                                        for(let i = 0; i < arr.length-1; i++){
                                            // how many moves it takes to move x axis to the right spot 
                                            let diff1 = Math.abs(arr[i][0] - arr[i+1][0]);
                                            // how many moves it takes to move y axis to the right spot
                                            let diff2 = Math.abs(arr[i][1] - arr[i+1][1]);
                                            // add the longest between x-moves and y-moves because you know that the lesser moves one doesn't matter
                                            count+= Math.max(diff1, diff2);
                                        }
                                        return count;
                                    };

                                    var truncateSentence = function(s, k) {
                                        return s.split(' ').slice(0, k).join(' ');
                                      };            

function numberCheck(array) {
// pass str 1 and str 2 into bcharmap and save them to variables
let sum = 0;
let charMap1 = bCharMap(array);
console.log(charMap1)
// iterate thru one of the charmaps, doesnt matter which one,
for(let key in charMap1) {
  if(charMap1[key] === 1) {
    sum += parseInt(key);
  }
}
// if charMap1[char] not equal to charmap2[char], return false
console.log(sum);
};                                      

function bCharMap(str) {
// create empty object to store keys and values
let charMap = {};
// for loop over str
for(let char of str) {
    if (!charMap[char]) {
        charMap[char] = 1;
    } else {
        charMap[char] ++;
    }
};
// if !charmap[char] set equal to one
// else increment by 1

return charMap
// return charMap
};

numberCheck([1, 2, 2, 3, 3, 4, 5]);

var findNumbers = function(nums) {
    //    create counter variable
        let counter = 0;
    //     loops through nums
        for (let num of nums) {
         if (num.toString().length % 2 === 0) {
             counter ++;
         }
        };
    //     turn to string and call .length, if uneven add to variable
        
    //     return counter
        return counter;
    };

var oddCells = function(m, n, indices) {
// create matrix
    let matrix = Array.from({ length: m }, () => Array.from({ length: n}, () => 0));
             
//     for loop thru indices
    for(let i = 0; i < indices.length; i++) {
//     create row variable
        let row = matrix[indices[i][0]];

//         use for loop to increment each element in row
       for(let j = 0; j < row.length; j++) {
        row[j] ++
           
        };
        
//         use for loop to to increment each element in column
         for(let k = 0; k < matrix.length; k++) {
               let findColumn = matrix[k];
               findColumn[indices[i][1]] ++;
           };

    };
    
//     create counter variable
let counter = 0;
    
//     iterate through matrix and iterate through each array in the matrix, and if any elements are odd, increment counter
    matrix.forEach((array) => {
        for(let element of array) {
            if (element % 2 !== 0) {
                counter ++;
            }
        };
    })

//     return counter
    return counter;
};
var oddCells = function(m, n, indices) {
    // create matrix
        let matrix = Array.from({ length: m }, () => Array.from({ length: n}, () => 0));
                 
    //     for loop thru indices
        for(let i = 0; i < indices.length; i++) {
    //     create row variable
            let row = matrix[indices[i][0]];
    
    //         use for loop to increment each element in row
           for(let j = 0; j < row.length; j++) {
            row[j] ++
               
            };
            
    //         use for loop to to increment each element in column
             for(let k = 0; k < matrix.length; k++) {
                   let findColumn = matrix[k];
                   findColumn[indices[i][1]] ++;
               };
    
        };
        
    //     create counter variable
    let counter = 0;
        
    //     iterate through matrix and iterate through each array in the matrix, and if any elements are odd, increment counter
        matrix.forEach((array) => {
            for(let element of array) {
                if (element % 2 !== 0) {
                    counter ++;
                }
            };
        })
    
    //     return counter
        return counter;
};

var flipAndInvertImage = function(image) {
    
    for(let row of image) {
       row.reverse();
        for(let i = 0; i < row.length; i++) {
        row[i] === 1 ? row[i] = 0 : row[i] = 1
        }
    }

    return image;
}; 
var countGoodRectangles = function(rectangles) {
    let max = 0;
    let count = 0;
    
    for(let i = 0; i < rectangles.length; i++) {
        let minSide = Math.min(rectangles[i][0], rectangles[i][1])
        
        if(minSide > max) {
            count = 0
            max = minSide
        } 
        
        if(minSide === max) count++
    }
    
    return count
};   
var maximum69Number  = function(num) {
    // create maxVariable 
        let maxNum = 0;
    //     turn num to a string so we can iterate
            let newNum = num.toString().split('');
        
            
    //     iterate thru num and turn it into a string
        for(let i = 0; i <= newNum.length; i++) {
            if (newNum[i] == 6) {
                newNum[i] = 9;
                break;
            };
        
        };
        
        return newNum.join('')
    };
    var freqAlphabets = function(s) {
        const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        
        let string = '';
        for(let i = 0; i < s.length; i++) {
            if(s[i + 2] === '#') {
                let index = parseInt(s[i] += s[i+1]);
                string += alphabet[index - 1];
            };
            
           if(s[i] !== '#' &&  s[i + 1] !== '#' && s[i + 2] !== '#') {
               let index = parseInt(s[i]);
               string += alphabet[index - 1];
           }
            
        };
        
        return string;
    };    
    var diagonalSum = function(mat) {
        //     create sum variable
            let sum = 0;
            let counter = mat.length - 1;
            
        //     create counter variable equal to mat.length - 1
            
            for(let i = 0; i < mat.length; i++) {
              if (i === counter)  {
                  sum += mat[i][i];
              }  else {
                  sum += mat[i][i];
                  sum += mat[i][counter]
              }
                
                counter --;
            };
        //     for loop over matrix
        //     if( i == j )
        //         add matrix[i][i] to sum else
        //     else
        //     add maxtrix[i][i] and matrix[i][j]
        //          decrement i
                
        //         return sum
            return sum;
        };    
                                    