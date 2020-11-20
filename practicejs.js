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
       

        //   Steps
        function steps(n) {

            for(let row = 0;row < n; row++){
                let stair = '';
               
                for(let column = 0; column < n; column++){
                    if(column <= row){
                        stair += "#";
                        // console.log(column, row, "if statement", stair)
                    } else {
                        stair += ' ';
                    }
                }
                console.log(stair)
            }
        
        }

        // Pyramid
        function pyramid(n) {

            const midpoint = Math.floor((2 * n - 1)/2);
        
            for(let row = 0; row < n; row++){
                let level = "";
                for(let column = 0; column < 2 * n - 1; column ++){
                    if (midpoint - row <= column && midpoint + row >= column){
                        level += '#';
                    } else {
                        level += ' ';
                    }
                }
                console.log(level)
            }
        }
        
        // Pyramid Part 2

        function pyramid(n, row=0, level = '') {
            if (row === n) {
                return;
            }
            if (level.length === 2 * n -1){
                console.log(level);
                return pyramid(n, row +1);
            }

            const midpoint = Math.floor((2 * n - 1) / 2);
            let add;
            if (midpoint - row <= level.lengt && midpoint + row >= level.length)
            {add = '#';}
            else {
                add = '';
            }
        } 
        
        // Vowels
        function vowels(str) {

            let count = 0;
            let checker = "aeiou"
         
            for(let char of str.toLowerCase()){
                if (checker.includes(char)){
                    count ++
                }
            }
         
            return count;
         }
         
        //  Vowels part 2
        function vowels(str) {
            const matches = str.match(/[aeiou]/gi);
        
            return matches ? matches.length : 0
         }


        //  maxChar Again
        function maxChar(str) {
            //    Create a character map for str
            
            const charMap = {};
            
            let max = 0;
            
            let maxChar = '';
            
                for(let char of str){
                    if(charMap[char]){
                        charMap[char] ++;
                    } else {
                        charMap[char] = 1;
                    }
                }
            
                console.log(charMap)
            
                for(let char in charMap){
                    if(charMap[char] > max){
                         max = charMap[char] 
                         maxChar = char
                    }
                }
            
                return maxChar
            
            }

            // palindrome again
            function palindrome(str) {
 
                // turn string to an array
            
                // reverse array
            
                // turn back into a string by JOINING
            
                let reversedString = str.split('').reverse().join('')
                
                //use terniary statement to compare reversed string to OG
                
                return str === reversedString ? true : false
            
            }

            // reverse int
            function reverseInt(n) {
                let reversedNumber = parseInt(n.toString().split('').reverse().join(''))
                // if (n < 0 ){
                //     return reversedNumber * -1
                // } else {
                //     return reversedNumber
                // }
                return reversedNumber * Math.sign(n);
                }


                // Matrix 
                function matrix(n) {
                    // Create empty arrays of arrays called 'results
                        
                    const results = [];
                    
                    
                    
                    for(let i = 0; i <  n; i++){
                        results.push([]);
                    }
                    
                    let counter = 1;
                    let startColumn = 0;
                    let endColumn = n - 1;
                    let startRow = 0;
                    let endRow = n - 1;
                    
                    while(startColumn <= endColumn && startRow <= endRow){
                        // Top row
                        for (let i = startColumn; i <= endColumn; i++){
                            results[startRow][i] = counter;
                            counter++;
                        }
                        startRow++;
                    
                        // Right Column
                        for (let i = startRow; i <= endRow; i++){
                            results[i][endColumn] = counter;
                            counter++;
                        }
                        endColumn--;
                    
                        // Bottom Row
                        for (let i = endColumn; i >= startColumn; i--){
                            results[endRow][i] =counter;
                            counter++;
                        }
                        endRow--;
                    
                        // start Column
                        for (let i = endRow; i >= startRow; i--) {
                            results[i][startColumn] = counter;
                            counter++;
                        }
                        startColumn++;
                    }
                    
                    return results
                    
                    }
            
                    // fib
                    // for every increae in n, we have to calculate one additional number.  LINEAR
                    function fib(n) {
                        //create array
                        const result = [0, 1];
                        
                        for(let i = 2; i <= n; i++){
                            const a = result[result.length - 1];
                            const b = result[i - 2];
                        
                            result.push(a + b);
                            }
                            return result[n];
                        }


                        // EXPONENTIAL
                        //for every increase in n were going to get an exponential amount of function calls
                        // if interviewer asks if we can improve the runtime.  

                        // memoization
                        // store the arguments of each function call along with the result.  
                        // If the function is called again with the sam arguments, return the precomputed result, 
                        // rather than running the function again.  

                        function fib(n) {
                            if (n < 2) {
                                return n;
                            }
                        
                            return fib(n - 1) + fib(n - 2);
                        
                        }


                        // fib with memoize
                        function memoize(fn) {
                            const cache = {};
                            return function(...args) {
                                if (cache[args]){
                                    return cache[args];
                                }
                        
                                const result = fn.apply(this, args); 
                                cache[args] = result;
                        
                                return result;
                            };
                        }
                        
                        function slowFib(n) {
                            if (n < 2) {
                                return n;
                            }
                        
                            return fib(n - 1) + fib(n - 2);
                        
                        }
                        
                        const fib = memoize(slowFib);

                        // data structures queue
                        class Queue {

                            constructor() {
                                this.data = [];
                            }
                        
                            add(record) {
                                this.data.unshift(record)
                            }
                        
                            remove(record) {
                                return this.data.pop();
                            }
                        }

                        // Queue with peak
                        class Queue {
                            constructor() {
                              this.data = [];
                            }
                          
                            add(record) {
                              this.data.unshift(record);
                            }
                          
                            remove() {
                              return this.data.pop();
                            }
                          
                            peek() {
                             return this.data[this.data.length -1];
                            }
                          }

                        //   weave
                        const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {

    const q = new Queue();

    while (sourceOne.peek() || sourceTwo.peek()) {
        if(sourceOne.peek()){
            q.add(sourceOne.remove());
        }

        if(sourceTwo.peek()){
            q.add(sourceTwo.remove());
        }
    }

    return q;
}

// stack
class Stack {

    constructor() {
        this.data = [];
    }

// push
    push(record) {
        this.data.push(record);
    }


// pop
    pop() {
        return this.data.pop();
    }

// peek

    peek() {
        return this.data[this.data.length - 1]
    }


}

// queue from stack

class Queue {
    constructor() {
        this.first = new Stack();
        this.second = new Stack();
    }

    add(record) {
        this.first.push(record)
    }

    remove() {
        while (this.first.peek()) {
            this.second.push(this.first.pop());
        }

        const record = this.second.pop();

        while (this.second.peek()){
            this.first.push(this.second.pop())
        }

        return record
    }

    peek() {
        while (this.first.peek()) {
            this.second.push(this.first.pop());
        }

        const record = this.second.peek();

        while (this.second.peek()) {
            this.first.push(this.second.pop())
        }

        return record
    }
}

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next
    }

}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(data){
        this.head = new Node(data, this.head);

    }

    size() {
        let counter = 0
        let node = this.head
        while(node) {
            counter++;
            node = node.next;
        }

        return counter;
    }

}

class LinkedList {
    constructor() {
        this.head = null
    }

    insertFirst(data){
        this.head = new Node(data, this.head);

    }

    size() {
        let counter = 0
        let node = this.head
        while(node) {
            counter++;
            node = node.next;
        }

        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {

        if(!this.head) {
            return null;
        }
        let node = this.head
        while(node) {
            if(!node.next){
               return node;
            } 
            node = node.next
            
        }
    }

    clear() {
        this.head = null
    }

    removeFirst() {
        this.head = this.head.next
    }
    getAt(index){

        let counter = 0;
        let node = this.head;

        while(node){
            if (counter === index){
                return node;
            }
                counter ++;
                node = node.next;
            
        }
        return null;

    }

    removeAt(index){
        if(!this.head){
            return null;
        }

        if(index === 0){
            this.head = this.head.next;
            return;
        }

        const previous = this.getAt(index - 1);

        if(!previous || !previous.next){
            return;
        }

        previous.next = previous.next.next




        // let size = this.size()
        // console.log(size)
        // if(size < index){
        //     return null;
        // }
        // let nodeToRemove = getAt(index)
        // nodeToRemove = null;
        // return ;
    }

    insertAt(data, index){
        if(!this.head) {
            this.head = new Node(data);
            return;
        }

        if(index === 0){
            this.head = new Node(data, this.head);
            return;
        }

        const previous = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, previous.next);
        previous.next = node;

    }

    forEach(fn) {

        let node = this.head;

        while(node){
            fn(node);
            node = node.next
        }
    }


    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }

    


}
function midpoint(list) {
    let slow = list.head;
    let fast = list.head;

    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

function circular(list) {
    let slow = list.head;
    let fast = list.head;

    while(fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){
            return true;
        }
    }
    return false;

}

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];    
    }

    add(data) {
        this.children.push(new Node(data));
    }

    remove(data) {
        this.children = this.children.filter(node => {
            return node.data !== data;
        })
    }

    traverseBF(fn) {
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift();
             arr.push(...node.children);
             fn(node);
        }
     }
     traverseDF(fn) {
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift();

            arr.unshift(...node.children);
            fn(node);
        }
    }

}