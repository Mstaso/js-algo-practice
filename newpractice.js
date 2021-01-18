
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